
import Image from 'next/image';

export default function Skills() {
    const contents = [ {content:"home", link:"/"},{content:"about", link:"/#about"}, {content:"works", link:"/#works"}, {content:"skills", link:"/#skills"},{content:"contact", link:"/#contact"},]
    const webProgramingBasicSkills = [ 
        {id:'html', name:'html', logo:'/images/logo/html-5.svg' ,rate:4, text:'web作成ができる'},
        {id:'css', name:'css', logo:'/images/logo/css-3.svg' ,rate:4, text:'デザインに合わせた設定やアニメーションの設定ができる'},
        {id:'php', name:'php', logo:'images/logo/php.svg' ,rate:3 ,text:'バックエンド処理やSESSION管理、DB操作などができる'},
        {id:'mysql', name:'mysql', logo:'/images/logo/mysql.svg' ,rate:3, text:'クエリを作成し、必要な情報の取得や追加などCURD処理ができる'},
        {id:'javascript', name:'javascript', logo:'/images/logo/javascript.svg' ,rate:3, text:'ES6までの基本構文を理解しており、'},
        {id:'python', name:'python', logo:'/images/logo/python.svg' ,rate:2, text:'クラスの概念など基本構文の理解。SeleniumやPyAutoGUIpyGuiなどのライブラリを使用した自動化ができる'},

    ]
    const webProgramingAdvanceSkills = [ 
        {id:'jQuery', name:'jQuery', logo:'/images/logo/jquery.svg' ,rate:3, text:'jQueryの実装ができる'},
        {id:'laravel', name:'laravel', logo:'/images/logo/laravel.svg' ,rate:3, text:'簡単なWEBアプリケーションの作成ができる'},
        {id:'react', name:'react', logo:'/images/logo/react.svg' ,rate:3, text:'React Hookを使用でき、WEBアプリケーションが作成できる'},
        {id:'redux', name:'redux', logo:'/images/logo/redux.svg' ,rate:2, text:'Reduxを使用し、REACTプロジェクト全体の状態管理を行える'},
        {id:'nextjs', name:'nextjs', logo:'/images/logo/nextjs-icon.svg' ,rate:3, text:'NEXT.js 13を用いてWEBページの作成ができる'},
        {id:'tailwindcss', name:'tailwindcss', logo:'/images/logo/tailwindcss-icon.svg' ,rate:3, text:'tailwindcssを用いたデザインの作成ができる'},
    ]

    const elseProgramingSkills = [
        {id:'git', name:'git', logo:'/images/logo/git.svg' ,rate:2, text:'gitを用いての基本的なバージョン管理ができる'},
        {id:'photoshop', name:'photoshop', logo:'/images/logo/adobe-photoshop.svg' ,rate:2, text:'簡単な画像の修正や加工ができる'},
        {id:'xd', name:'xd', logo:'/images/logo/adobe-xd.svg' ,rate:2, text:'XDを用いたデザインの作成及びプロトタイプの作成ができる'},
    ];

    const portableSkills = [
        { id:'infomation', name:'情報収集力', id:'infomation',rate:4, text:'自身が所属している部署だけでなく、他部署や顧客等の情報を収集し、自社に与える影響を多角的に分析できる' },
        { id:'issue', name:'課題設定力',rate:4,text:'収集した情報を基に、自らTo-Beを考えAs-Isとの差分（課題）を把握し、必要な改善策や解決策を設定できる' },
        { id:'plan', name:'計画力',rate:4, text:'他部署にも影響を与えるような計画・戦略を立案できる' },
        { id:'execution', name:'遂行力',rate:4, text:'既存の方法だけに囚われず、計画を達成するために必要に応じて新しい方法を考案して進めることができる' },
        { id:'response', name:'対応力',rate:4, text:'トラブルが発生した場合においても目標の完遂に向けて、どうすればできるかを考え実行することができる' },
        { id:'communication', name:'コミュニケーション能力',rate:4, text:'誰とでも分け隔てなくコミュニケーションを取ることができ、相手の意見をしっかり聞き、合意形成のためだけでなく新たな価値を生み出すためのコミュニケーションを行うことができる' },
        { id:'management', name:'マネジメント能力',rate:4, text:'キャリアプランをふまえた指導・育成を行うことができる' },
    ]

  return (
    <>
        <div className='skills w-full px-4 mt-[150px] md:mt-[300px]' id='skills'>
            <h1 className='text-center justify-center items-center text-4xl font-bold text-shadow-md'>
                <p className='text-[100px] md:text-[200px] font-bold text-gray-200 text-shadow-none text-center'>SKILLS</p>
                <span className='z-10 text-4xl tracking-widest'>スキル</span>
            </h1>
            <div className='md:mt-[150px] mt-[50px]  text-center md:text-left'>
                <div>
                    <h3 className='text-2xl text-center mb-4'>WEBプログラミングスキル</h3>
                    <div className='w-full '>
                        <div className="carousel max-w-full mx-auto p-4 rounded-box ">
                        {webProgramingBasicSkills.map((skill, key)=>{
                        return(
                            <>
                            <div className='carousel-item w-[200px] mx-1' key={key} >
                                <div className="card w-96  shadow-xl  border hover:scale-110 transition duration-200 hover:shadow-2xl">
                                    <label htmlFor={skill.id}  className="card-body items-center text-center h-full">
                                        <h2 className="card-title">{skill.name}</h2>
                                            <Image src={skill.logo} alt={skill.name}  height={80} width={80} className='mx-auto h-full'/>
                                            <span className="star5_rating text-2xl" data-rate={skill.rate}></span>
                                    </label>
                                </div>
                                <input type="checkbox" id={skill.id} className="modal-toggle" />
                                <div className="modal">
                                    <div className="modal-box">
                                        <h3 className="text-lg font-bold text-center">{skill.name}</h3>
                                        <p className="py-4">{skill.text}</p>
                                        <label htmlFor={skill.id} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                                    </div>
                                    <label className="modal-backdrop" htmlFor={skill.id}>Close</label>
                                </div>      
                            </div>
                            </>
                        )
                        })}
                        </div>
                        <div className="carousel  max-w-full p-4  rounded-box">
                        {webProgramingAdvanceSkills.map((skill, key)=>{
                        return(
                            <>
                            <div className='carousel-item w-[200px] mx-1' key={key} >
                                <div className="card w-96  shadow-xl  border hover:scale-110 transition duration-200 hover:shadow-2xl">
                                    <label htmlFor={skill.id}  className="card-body items-center text-center h-full">
                                        <h2 className="card-title">{skill.name}</h2>
                                            <Image src={skill.logo} alt={skill.name}  height={80} width={80} className='mx-auto h-full'/>
                                            <span className="star5_rating text-2xl" data-rate={skill.rate}></span>
                                    </label>
                                </div>
                                <input type="checkbox" id={skill.id} className="modal-toggle" />
                                <div className="modal">
                                    <div className="modal-box">
                                        <h3 className="text-lg font-bold text-center">{skill.name}</h3>
                                        <p className="py-4 text-left">{skill.text}</p>
                                        <label htmlFor={skill.id} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                                    </div>
                                    <label className="modal-backdrop" htmlFor={skill.id}>Close</label>
                                </div>      
                            </div>
                            </>
                        )
                        })}
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='text-2xl text-center mt-10 mb-4'>その他関連スキル</h3>
                    <div className='w-full'>
                        <div className="carousel  max-w-full p-4  rounded-box">
                        {elseProgramingSkills.map((skill, key)=>{
                            const rating = skill.rate == (key+1) ? '':"checked";
                            return(
                                <>
                                 <div className='carousel-item w-[200px] mx-1' key={key} >
                                    <div className="card w-96  shadow-xl  border hover:scale-110 transition duration-200 hover:shadow-2xl">
                                        <label htmlFor={skill.id}  className="card-body items-center text-center h-full">
                                            <h2 className="card-title">{skill.name}</h2>
                                                <Image src={skill.logo} alt={skill.name}  height={80} width={80} className='mx-auto h-full'/>
                                                <span className="star5_rating text-2xl" data-rate={skill.rate}></span>
                                        </label>
                                    </div>
                                    <input type="checkbox" id={skill.id} className="modal-toggle" />
                                    <div className="modal">
                                        <div className="modal-box">
                                            <h3 className="text-lg font-bold text-center">{skill.name}</h3>
                                            <p className="py-4">{skill.text}</p>
                                            <label htmlFor={skill.id} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                                        </div>
                                        <label className="modal-backdrop" htmlFor={skill.id}>Close</label>
                                    </div>      
                                </div>
                                </>
                            )
                            })}
                        
                        </div>
                    </div>
                    <div className='flex justify-center md:justify-end  text-sm mt-4'>
                        <div className='text-left'>
                            <p>凡例</p>
                            <p>☆１　触ったことがあり概要を理解している</p>
                            <p>☆２　参考書を見ながら作業を完遂できる</p>
                            <p>☆３　自身で考え作業を完遂できる</p>
                            <p>☆４　他人に指導できる</p>
                            <p>☆５　マスター</p>
                        </div>
                    </div>
                </div>
                <h3 className='text-2xl text-center mt-10 mb-4'>ポータブルスキル</h3>
                <div className='w-full'>
                    <div className="carousel  max-w-full p-4  rounded-box">
                    {portableSkills.map((skill, key)=>{
                        const rating = skill.rate == (key+1) ? '':"checked";
                        return(<>
                              <div className='carousel-item w-[200px] mx-1' key={key} >
                                <div className="card w-96  shadow-xl  border hover:scale-110 transition duration-200 hover:shadow-2xl">
                                    <label htmlFor={skill.id}  className="card-body items-center text-center h-full">
                                        <h2 className="card-title h-full">{skill.name}</h2>
                                            <span className="star5_rating text-2xl" data-rate={skill.rate}></span>
                                    </label>
                                </div>
                                <input type="checkbox" id={skill.id} className="modal-toggle" />
                                <div className="modal">
                                    <div className="modal-box">
                                        <h3 className="text-lg font-bold text-center">{skill.name}</h3>
                                        <p className="py-4">{skill.text}</p>
                                        <label htmlFor={skill.id} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                                    </div>
                                    <label className="modal-backdrop" htmlFor={skill.id}>Close</label>
                                </div>      
                            </div>
                            </>
                        )
                        })}
                    </div>
                </div>
            </div>

        </div>

    </>
  )
}