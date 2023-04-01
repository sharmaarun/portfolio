import { getSortedPostsData } from '@/utils/posts'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(props: any) {
  return (
    <Html lang="en">
      <Head >
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Explore a showcase of full stack development projects and expertise on my portfolio website. From web applications to mobile apps, my experience in front-end and back-end technologies will help bring your ideas to life. Let's collaborate and create something great together." />
        <meta name="keywords" content="portfolio, web development, web design, web developer, web designer, full stack developer, full stack development, full stack web developer, full stack web development, full stack web designer, full stack web design, full stack engineer, full stack engineer, full stack" />
        <meta name="author" content="Arun Sharma" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="google" content="notranslate" />
        <meta name="google" content="nocrtrans" />
        <meta name="google" content="notranslate" />
        <title>Spirex - Full Stack Dev Services</title>

        <script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}