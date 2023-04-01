import { getSortedPostsData } from '@/utils/posts'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(props: any) {
  console.log(props)
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}