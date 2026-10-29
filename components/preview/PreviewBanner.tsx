export function PreviewBanner() {
  return (
    <div className="fixed top-0 z-20 w-screen bg-gray-lightest px-4 text-sm text-black">
      {'Previewing drafts. '}
      {/* A route handler needs a full page load: <Link> would only fetch an RSC payload. */}
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a className={'underline'} href="/api/disable-draft">
        Back to published ↗
      </a>
    </div>
  );
}
