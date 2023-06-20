
import Image from 'next/image';

import PortfolioImage1 from '../../../public/images/protfolio001.png'
import PortfolioImage2 from '../../../public/images/protfolio002.png'


export default function Works() {
  return (
    <>

        <div id='works' className='w-full h-auto mt-40 whitespace-normal z-10'>

           <h1 className='text-center justify-center items-center text-4xl font-bold text-shadow-md'>
                <p className='text-[200px] font-bold text-gray-200 text-shadow-none text-left'>WORKS</p>
                <span className='z-10 text-4xl tracking-widest'>制作物</span>

            </h1>

            <div className='grid grid-cols-2 gap-10 mx-10 my-10'>
                {/* 一つ目 */}
                <div className=' p-10 rounded'>
                    <label htmlFor="works001" className="">
                        <div className="card shadow-lg hover:scale-105 transition duration-500 hover:shadow-2xl hover:blur-sm">
                            <Image 
                                src={PortfolioImage1}
                                alt='PortfolioImage1'
                                className=' '
                            />  
                            <div className="card-body">
                                <h2 className="card-title">占い鑑定支援WEBツール</h2>
                            </div>
                        </div>
                    </label>
                    <input type="checkbox" id="works001" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <h3 className="text-lg font-bold">Hello!</h3>
                            <p className="py-4">This modal works with a hidden checkbox!</p>
                            <label htmlFor="works001" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>

                        </div>
                        <label className="modal-backdrop" htmlFor="works001">Close</label>
                    </div>
                </div>
                  {/* 二つ目 */}
                  <div className=' p-10 rounded'>
                    <label htmlFor="works002" className="">
                        <div className="card shadow-lg hover:scale-105 transition duration-500 hover:shadow-2xl hover:blur-sm">
                            <Image 
                                src={PortfolioImage2}
                                alt='PortfolioImage2'
                                className=' '
                            />  
                            <div className="card-body">
                                <h2 className="card-title">飲食店　WEBページ制作</h2>
                            </div>
                        </div>
                    </label>
                    <input type="checkbox" id="works002" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <h3 className="text-lg font-bold">Hello!</h3>
                            <p className="py-4">This modal works with a hidden checkbox!</p>
                            <label htmlFor="works002" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>

                        </div>
                        <label className="modal-backdrop" htmlFor="works002">Close</label>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}


