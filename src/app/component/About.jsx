import Image from 'next/image';

export default function About() {
  return (
    <>
        <div id='about' className='w-full pt-[100px] md:pt-[150px]  whitespace-normal'>
            <h1 className='w-full text-center justify-center items-center text-4xl font-bold text-shadow-md'>
                <p className='text-[100px] md:text-[200px]  font-bold text-gray-200 text-shadow-none text-center'>ABOUT</p>
                <span className='z-10 text-4xl tracking-widest'>ABOUT</span>
            </h1>
           
           <div className='mt-20 px-8 md:mt-[100px] w-full'>
                <div className='md:flex grid-cols-3'>
                    <div className='w-full flex items-center justify-center'>
                        <div>
                            <h2 className='tracking-[.25em] text-4xl text-center '>石原翔平</h2>
                            <p className=' tracking-[.25em] text-center text-lg  text-gray-400 '>ISHIHARA SHOHEI</p>
                        </div>
                    </div>
                        <div className='leading-8 text-sm text-center col-span-2 md:text-left w-full'>
                            <p className='mt-[40px] '>
                                1987年5月28日生まれ。<br className='md:hidden' />宮崎県小林市出身。<br />
                            </p>
                            <div className='mt-[24px]'>
                                <p> - 嗜好性 - </p>
                                <div className='md:ml-4'>
                                    <p className='mt-[4px]'>
                                        趣味はキャンプ、テニス。
                                    </p>
                                    <p className='mt-[4px]'>
                                        自称ガジェットおたく。<br/>常にIT新技術に興味津々（現在はジェネレーティブAIなど）
                                    </p>
                                </div>
                            </div>
                            <div className='mt-[24px]'>
                                <p>- 思考性 -</p>
                                <div className='md:ml-4'>
                                    <p className='mt-[4px]'>出来ないから諦めるではなく、<br className='md:hidden'/>どうすればできるかを考える。</p>
                                    <p className='mt-[8px]'>現状に満足することなく、<br className='md:hidden'/>より良い方法を考える。</p>
                                </div>
                            </div>

                            <p className='mt-[32px]'>
                                ITを用いて便利な世の中にすることで人々の役に立ちたいという思いが強くなり<br />IT業界の道を志す。
                                将来ITコンサルを目指し、絶賛勉強中
                            </p>
                        </div>
                        
                    
            </div>
                   
            </div>
        </div>
    </>
  )
}


