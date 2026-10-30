import { previewSecretId } from '@/lib/sanity.api';
import { sanityClient } from '@/lib/sanity.client';
import { token } from '@/lib/sanity.fetch';
import { resolveHref } from '@/lib/sanity.links';
import { draftMode } from 'next/headers';
import type { NextRequest } from 'next/server';
import { isValidSecret } from 'sanity-plugin-iframe-pane/is-valid-secret';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  const documentType = searchParams.get('type');
  const secret = searchParams.get('secret');

  if (!token) {
    throw new Error('The `SANITY_API_READ_TOKEN` environment variable is required.');
  }

  // Draft mode serves unpublished content and hands the read token to the browser, so only the Studio's
  // preview links may enable it: they carry the secret the Studio keeps in the private `preview.secret` document.
  if (
    !secret ||
    !(await isValidSecret(sanityClient.withConfig({ token }), previewSecretId, secret))
  ) {
    return new Response('Invalid secret', { status: 401 });
  }

  const href = resolveHref(documentType, slug);
  if (!href) {
    return new Response(
      'Unable to resolve preview URL based on the current document type and slug',
      { status: 400 }
    );
  }

  (await draftMode()).enable();

  return new Response(null, {
    status: 307,
    headers: {
      Location: href,
    },
  });
}
