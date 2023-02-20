import Layout from './component/layout'
import Head from 'next/head'
import { TOKEN, DATABASE_ID } from '../../config/index'
import ProjectItem from './component/projects/project-item';

export default function Projects(projects){

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen px-5 py-24 mb-10 px-6">
                <Head>
                    <title>조코딩 포트폴리오</title>
                    <meta name="description" content="조코딩 포트폴리오입니다." />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <h3 className="text-4xl font-bold sm:text-6xl">총 프로젝트 : <span className="pl-4 text-blue-500">{projects.projectNames.length}</span></h3>
                
                <div className="grid-wrap grid grid-cols-1 md:grid-cols-2 gap-8 xs:w-full m-6 py-10">
                    {projects.projects.results.map((aProject)=>{
                        return <ProjectItem key={aProject.id} data={aProject}/>
                    })}
                </div>
            </div>
        </Layout>
    )
}


export async function getServerSideProps() {

    const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Notion-Version': '2022-06-28',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            sorts: [
                {
                    "property": "Name",
                    "direction": "ascending"
                }
            ],
            page_size: 100
        })
      };

    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)

    const projects = await res.json()

    const projectNames = projects.results.map((aProject) =>(
        aProject.properties.Name.title[0].plain_text
    ))

    console.log(`projectNames : ${projectNames}`);

    return {
      props: {projects, projectNames}, // will be passed to the page component as props
      // getStaticProps() 메소드를 사용한다면 revalidate 로 데이터 변경시 갱신가능!
      // revalidate: 1 // 데이터 변경이 있으면 갱신 1초 마다
    }
}