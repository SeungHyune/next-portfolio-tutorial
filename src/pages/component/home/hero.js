import Animation from './animation'
import Link from 'next/link'

export default function Hero(){
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  안녕하세요 조코딩입니다 !
                  <br className="hidden lg:inline-block" />오늘도 화이팅
                </h1>
                <p className="mb-8 leading-relaxed">보배를 뜨고, 풍부하게 없으면 간에 있는 설레는 힘차게 철환하였는가? 있는 보는 그들은 트고, 피에 튼튼하며, 칼이다. 이상이 인도하겠다는 이성은 풍부하게 목숨을 아름답고 인간에 스며들어 것이다. 간에 청춘에서만 생생하며, 되는 그들의 우리의 그들의 것은 불러 것이다. 소담스러운 이상 바이며, 길지 평화스러운 현저하게 싶이 이것이다. 않는 찾아다녀도, 곳이 거선의 생생하며, 것이다. 용감하고 같이, 무한한 끓는 지혜는 이 자신과 것이다. 천지는 사랑의 붙잡아 것이다.보라, 같이, 뜨고, 웅대한 소리다.이것은 있는 것이다. 사랑의 설레는 모래뿐일 그들은 때까지 귀는 못할 있으랴?</p>
                <div className="flex justify-center">
                  <Link href="/projects" className="btn-project inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    프로젝트 보러가기
                  </Link>
                </div>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation/>
              </div>
        </>
    );
}