import Image from "next/image"

export default function ProjectItem({data}){

    //const tag = projects.projects.results[0].properties.Tags.multi_select[0].name
    console.log(data)
    const title = data.properties.Name.title[0].plain_text
    const tag = data.properties.Tags.multi_select
    const github = ""
    const description = data.properties.Description.rich_text[0].plain_text
    const imgSrc = data.cover.file?.url || data.cover.external.url
    console.log(imgSrc)

    const start = data.properties.Date.date.start
    const end = data.properties.Date.date.end

    const calculatedPeriod = (start, end) => {
        const startDateStringArray = start.split('-');
        const endDateStringArray = end.split('-');

        var startDate = new Date(startDateStringArray[0], startDateStringArray[1], startDateStringArray[2]);
        var endDate = new Date(endDateStringArray[0], endDateStringArray[1], endDateStringArray[2]);

        console.log(`startDate: ${startDate}`)
        console.log(`endDate: ${endDate}`)

        const diffInMs = Math.abs(endDate - startDate);
        const result = diffInMs / (1000 * 60 * 60 * 24);

        console.log(`기간 : ${result}`)
        return result;
    }

    return (
        <div className="project-card m-3 rounded-xl flex flex-col w-full">
            
            <Image
                className="rounded-t-xl"
                src={imgSrc}
                alt="cover image"
                width="500"
                height="60"
                layout="responsive"
                objectFit="none"
                quality={100}
                style={{width:'100%',height:'60%'}}
            />
            <div className="p-4 flex flex-col">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-4 text-xl">{description}</p>
                <p>{start} ~ {end} ({calculatedPeriod(start, end)}일)</p>
                <div className="flex items-start mt-2">{tag.map((tag)=>{
                    return <span className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={tag.id}>{tag.name}</span>
                })}</div>
            </div>
        </div>
    )
}