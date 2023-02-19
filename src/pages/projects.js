import Layout from './component/layout'
import Head from 'next/head'

export default function Projects(){
    return (
        <Layout>
            <Head>
                <title>조코딩 포트폴리오</title>
                <meta name="description" content="조코딩 포트폴리오입니다." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h3>프로젝트</h3>
        </Layout>
    )
}