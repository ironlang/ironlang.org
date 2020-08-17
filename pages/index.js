import fs from 'fs'
import Head from 'next/head'
import matter from 'gray-matter'
import guide from '../data/guide.json'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Content } from '../components/Content'

export async function getStaticProps(context) {
  const files = guide.map((path) => {
    const file = fs.readFileSync(`content/${path}.md`, {
      encoding: 'utf-8',
    })
    const fileData = matter(file)
    return fileData
  })

  const data = JSON.stringify(files)

  return {
    props: {
      data,
    },
  }
}

export default function Home({ data }) {
  const sections = JSON.parse(data)

  return (
    <div>
      <Head>
        <title>Iron</title>
        <link rel="icon" href="/images/logo.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Overpass+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main>
        <Header />
        <Content sections={sections} />
      </main>

      <Footer />
    </div>
  )
}
