import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

import PageWrapper from '@/components/PageWrapper/PageWrapper';
import PostPage from '@/components/Post/Post';
import metadata from '@/lib/metadata';
import { generateRssFeed } from '@/lib/rss';
import { getDocumentData } from '@/lib/sanity.fetch';
import { CMSDocument, SPECIAL_SELECT, sanityQuery } from '@/lib/sanity.queries';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const { settings, page } = await getDocumentData(CMSDocument.Post, slug);
  return metadata(page, settings);
}

export async function generateStaticParams() {
  const allPosts = await sanityQuery.from(CMSDocument.Post).select().execute();

  generateRssFeed(allPosts).catch((err) => {
    throw new Error(err);
  });

  return allPosts.map(({ slug }) => ({ slug: slug.current }));
}

export default async function UpdatesPage({ params }: Props) {
  const { slug } = await params;
  const post = await sanityQuery
    .from(CMSDocument.Post)
    .select([SPECIAL_SELECT[CMSDocument.Post]])
    .eq('slug.current', slug)
    .executeSingle();

  const isDraft = (await draftMode()).isEnabled;

  if (!post && !isDraft) {
    notFound();
  }

  return (
    <PageWrapper>
      <PostPage post={post} />
    </PageWrapper>
  );
}
