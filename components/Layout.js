/* global APP */

import Head from 'next/head'

export default ({
  children,
  title = APP.meta.title,
  description = APP.meta.description,
  image = APP.meta.image,
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
      <meta itemProp='image' content={image} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:site' content={twitter} />
      <meta name='twitter:image' content={image} />

      <meta name='og:title' content={title} />
      <meta name='og:description' content={description} />
      <meta name='og:image' content={image} />
      <meta name='og:url' content={url} />
      <meta name='og:site_name' content={title} />
      <meta name='og:type' content='website' />

      <link rel='canonical' href={url} />
    </Head>

    {children}
  </div>
