import NextDocument, { Head, Main, NextScript } from 'next/document'
import { loadGetInitialProps } from 'next/dist/lib/utils'
import { ServerStyleSheet } from 'styled-components'
import stylesheet from 'styles/index.scss'

export default class Document extends NextDocument {
  static async getInitialProps (ctx) {
    return {
      ...(await loadGetInitialProps(NextDocument, ctx))
    }
  }

  render () {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()

    return (
      <html lang='en'>
        <Head>
          <meta charSet='utf-8' />

          {/* WebApp */}
          <meta name='apple-mobile-web-app-status-bar-style' content='black' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
            shrink-to-fit='no'
          />

          {/* Favicon */}
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/static/favicon/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/static/favicon/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/static/favicon/favicon-16x16.png'
          />
          <link rel='manifest' href='/static/favicon/manifest.json' />
          <link
            rel='mask-icon'
            href='/static/favicon/safari-pinned-tab.svg'
            color='#000000'
          />
          <link rel='shortcut icon' href='/static/favicon/favicon.ico' />
          <meta
            name='msapplication-config'
            content='/static/favicon/browserconfig.xml'
          />
          <meta name='theme-color' content='#ffffff' />
          <link href='https://rsms.me/inter/inter-ui.css' rel='stylesheet' />
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          {styleTags}
        </Head>
        <body>
          {main}
          <NextScript />
        </body>
      </html>
    )
  }
}
