import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Content } from '../components/Content'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Iron</title>
        <link rel="icon" href="/images/logo.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <Header />
        <Content />
      </main>

      <Footer />
    </div>
  )
}
