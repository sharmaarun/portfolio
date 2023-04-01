import { AboutMe } from '@/components/about'
import { BioSection } from '@/components/bio'
import { Hero } from '@/components/hero'
import { Mainlayout } from '@/components/layouts/main'
import { Services } from '@/components/services'
import { WorkSection } from '@/components/work'
import { getSortedPostsData } from '@/utils/posts'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props: any) {
  console.log(props)
  return (
    <>
      <Mainlayout posts={props?.allPosts}>
        <Hero />
        <AboutMe />
        <BioSection />
        <WorkSection id="work" />
        <Services />
      </Mainlayout>
    </>
  )
}



export async function getStaticProps() {
  const allPosts = getSortedPostsData({ skipRoot: true })
  return {
    props: {
      allPosts: allPosts?.slice(0, 3)
    }
  }
}