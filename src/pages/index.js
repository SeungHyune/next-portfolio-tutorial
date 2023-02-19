import Head from 'next/head'
import Image from 'next/image'
import Layout from './component/layout'
import Hero from './component/home/hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>조코딩 포트폴리오</title>
        <meta name="description" content="조코딩 포트폴리오입니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
              <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <Hero/>
              </div>
          </section>
        </main>
      </Layout>
    </>
  )
}
