
import Image from 'next/image';
import Link from 'next/link'

export default function Works() {
    const portfolios = [
        {id:'portfolio001', productName:'占い鑑定支援WEBツール', image:'/images/protfolio001.png', gitHub:'https://github.com/ShoheiIshihara/sanmei_aplication', url:'https://sanmei-application.com/', period:"2 months", tech:'REACT(front) Laravel(back) Tailwindcss MySQL', note:'デザイン作成、要件定義、コーディング、デプロイまで実施。被鑑定者の生年月日をDBに登録後、リストから選択することで占い結果を算出でき、結果を画像出力できる仕様。xserverにデプロイし運用。'},
        {id:'portfolio002', productName:'飲食店WEBページ', image:'/images/protfolio002.png', gitHub:'https://github.com/ShoheiIshihara/usagi', url:'https://usagi-shoheiishihara.vercel.app/', period:"1 months", tech:'NEXTjs Tailwindcss MySQL', note:'レイアウトや掲載内容などデザインから素材撮影、コーディングまで実施。イベント情報をDBから取得し表示'},
        {id:'portfolio003', productName:'ポートフォリオサイト', image:'/images/protfolio003.png', gitHub:'https://github.com/ShoheiIshihara/fortfolio', url:'', period:"1 weeks", tech:'NEXTjs Tailwindcss', note:''},
    ]
  return (
    <>

        <div id='works' className='w-full pt-[150px] pd:mt-[300px] whitespace-normal  '>

           <h1 className='text-center justify-center items-center text-4xl font-bold text-shadow-md'>
                <p className='text-[100px] md:text-[200px]  font-bold text-gray-200 text-shadow-none md:text-left'>WORKS</p>
                <span className='z-10 text-4xl tracking-widest'>制作物</span>
            </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 mt-[50px] md:mt-[100px]'>
                {portfolios.map((portfolio, key)=>{
                    return(
                        <>
                        <div className=' md:p-10 py-4 rounded w-[300px] md:w-96 mx-auto' key={key}>
                            <label htmlFor={portfolio.id} className="">
                                <div className="card border shadow-lg hover:scale-105 transition duration-500 hover:shadow-2xl hover:blur-sm">
                                    <Image 
                                        src={portfolio.image}
                                        alt={portfolio.id}
                                        width={400}
                                        height={300}
                                        className='rounded-t-lg border-b '
                                    />  
                                    <div className="my-2">
                                        <h2 className="text-center">{portfolio.productName}</h2>
                                    </div>
                                </div>
                            </label>
                            <input type="checkbox" id={portfolio.id} className="modal-toggle" />
                            <div className="modal ">
                                <div className="modal-box text-center mx-2">
                                    <h3 className="text-lg font-bold my-4">{portfolio.productName}</h3>
                                    <p className="py-4">仕様言語<br/>{portfolio.tech}</p>
                                    <p className="pb-4">制作期間：{portfolio.period}</p>
                                    <p className="pb-4 text-left indent-4 ">{portfolio.note}</p>
                                    <div>
                                        <a className="link link-primary " href={portfolio.url} target="_blank" rel="noopener noreferrer">サイト</a>
                                    </div>
                                    <div>
                                        <a className="link link-primary " href={portfolio.gitHub} target="_blank" rel="noopener noreferrer">Git hub</a>
                                    </div>

                                    <label htmlFor={portfolio.id} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>

                                </div>
                                <label className="modal-backdrop" htmlFor={portfolio.id}>Close</label>
                            </div>
                        </div>
                        </>
                    )
                })}
               
            </div>
        </div>
    </>
  )
}


