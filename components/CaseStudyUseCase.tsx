import React from 'react'

type Props = {}

function CaseStudyUseCase({}: Props) {

  const data=[{
    head :"Description",
    point :'Annovative searching for major news publication'
  }]  


  return (
    <div  className=' w-full max-w-7xl grid grid-cols-3 h-[40rem] overflow-hidden'>
        <div className='relative  '>
        <div className=' absolute z-10 w-full flex flex-col bg-black/50 h-full p-10 text-white '>
                <p className=' text-3xl bg'>Heading preroll</p>
                <div className=' flex-grow'>
                {
                    data?.map(({head ,point}:{ head:string ,point:string} , index:number ) =><div className='py-4' key={index}>
                        <p className='text-sm font-medium'>{head}</p>
                        <p className=' text-sm text-white/80 py-1'>{point}</p>

                    </div>)
                }
                </div>
                <button className=" border-blue-500 px-7 hover:bg-gradient-to-b from-blue-400  to-blue-600 rounded-full py-3 text-white border-2">Explore Products</button>
                <button className="  px-7 rounded-full py-3 text-white  underline">Book Free Demo</button>
            </div>
            <img className=' h-full object-cover  w-full blur-3xl ' src='https://uploads-ssl.webflow.com/647fd2b99d58c2753483fdd0/647fd2b99d58c2753483ff7b_633b5f2a210f586ac7c2bdd4_1.png' />
            
        </div>
        <div className=' col-span-2 relative  '>
            <img className=' blur-none  bg-green-500 absolute z-10 h-3/6 object-cover w-full top-1/2 -translate-y-1/2' src='https://uploads-ssl.webflow.com/647fd2b99d58c2753483fdd0/647fd2b99d58c2753483ff7b_633b5f2a210f586ac7c2bdd4_1.png' />
            <img className=' h-full object-cover  w-full blur-xl mt-5' src='https://uploads-ssl.webflow.com/647fd2b99d58c2753483fdd0/647fd2b99d58c2753483ff7b_633b5f2a210f586ac7c2bdd4_1.png' />
        </div>

    </div>
  )
}

export default CaseStudyUseCase