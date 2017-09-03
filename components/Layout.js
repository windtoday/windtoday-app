/* global APP */

import Head from 'next/head'

export default ({
  children,
  title = APP.meta.title,
  description = APP.meta.description,
  ogImage = APP.meta.ogImage,
  logoImage = APP.meta.logoImage,
  twitter = APP.meta.twitter,
  url = APP.meta.url
}) =>
  <div>
    <Head>
      <title>
        {title}
      </title>

      <meta itemProp='name' content={title} />
      <meta itemProp='description' content={description} />
      <meta itemProp='image' content={ogImage} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:site' content={twitter} />
      <meta name='twitter:image' content={ogImage} />
      <meta name='twitter:creator' content={twitter} />

      <meta name='og:title' content={title} />
      <meta name='og:description' content={description} />
      <meta name='og:image' content={ogImage} />
      <meta name='og:url' content={url} />
      <meta name='og:site_name' content={title} />
      <meta name='og:type' content='website' />

      <link rel='canonical' href={url} />
    </Head>

    {children}
  </div>
