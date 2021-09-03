export default {
  github: 'https://github.com/acall-inc/acall-react',
  docsRepositoryBase: 'https://github.com/acall-inc/acall-react',
  titleSuffix: ' – ACALL React',
  logo: (
    <>
      <span className="font-extrabold">Nextra</span>
      <span className="mr-2 ml-2 text-gray-500 font-normal hidden md:inline">
        The Next Site Builder
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Nextra: the next site builder" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@shuding_" />
      <meta property="og:title" content="Nextra: the next site builder" />
      <meta property="og:description" content="Nextra: the next site builder" />
      <meta name="apple-mobile-web-app-title" content="Nextra" />
    </>
  ),
  search: true,
  unstable_stork: false,
  unstable_faviconGlyph: '🅰️',
  prevLinks: true,
  nextLinks: true,
  floatTOC: true,
  footer: true,
  footerEditLink: ({ locale }) =>
    locale === 'ja' ? 'GitHubで編集' : 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © Shu Ding.</>,
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'ja', text: '日本語' }
  ]
}
