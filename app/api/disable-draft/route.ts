import { draftMode } from 'next/headers';

export async function GET() {
  (await draftMode()).disable();
  // request.url has next start's own origin (localhost:<port>) behind the reverse proxy, so keep the redirect relative.
  return new Response(null, { status: 307, headers: { Location: '/' } });
}
