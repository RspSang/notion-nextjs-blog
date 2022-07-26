import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '36243b321d4e4ffe858764169d112f81',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: "Hyeonjun's Blog",
  domain: 'hyeonjun.com',
  author: 'Park Hyeonjun',

  // open graph metadata (optional)
  description: '테스트 설명',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'RspSang',
  // linkedin: 'fisch2',
  // newsletter: '#', // optional newsletter URL
  youtube: 'channel/UCUwHQZ8maprZMMlMvPQMKzw', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: false,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/dev': '2af9201764334fe3be15cc9b6d03de00',
    '/life': '24269821b727424fa671c4a54809869d',
    '/about': '8ea1f994a6a54a33b83be22a4027888b'
  },
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Dev',
      pageId: '2af9201764334fe3be15cc9b6d03de00'
    },
    {
      title: 'Life',
      pageId: '24269821b727424fa671c4a54809869d'
    },
    {
      title: 'About',
      pageId: '8ea1f994a6a54a33b83be22a4027888b'
    }
  ]
})
