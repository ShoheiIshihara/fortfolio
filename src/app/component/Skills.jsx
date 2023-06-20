
import Image from 'next/image';

import html_logo from '../../../public/images/logo/html-5.svg'
import css_logo from '../../../public/images/logo/css-3.svg'
import jQuery_logo from '../../../public/images/logo/jquery.svg'
import php_logo from '../../../public/images/logo/php.svg'
import laravel_logo from '../../../public/images/logo/laravel.svg'
import mysql_logo from '../../../public/images/logo/mysql.svg'
import javascript_logo from '../../../public/images/logo/javascript.svg'
import react_logo from '../../../public/images/logo/react.svg'
import redux_logo from '../../../public/images/logo/redux.svg'
import nextjs_logo from '../../../public/images/logo/nextjs-icon.svg'
import tailwindcss_logo from '../../../public/images/logo/tailwindcss-icon.svg'
import python_logo from '../../../public/images/logo/python.svg'
import git_logo from '../../../public/images/logo/git.svg'
import photoshop_logo from '../../../public/images/logo/adobe-photoshop.svg'
import xd_logo from '../../../public/images/logo/adobe-xd.svg'

export default function Skills() {
    const contents = [ {content:"home", link:"/"},{content:"about", link:"/#about"}, {content:"works", link:"/#works"}, {content:"skills", link:"/#skills"},{content:"contact", link:"/#contact"},]
    const webprogramingSkills = [ 
        {id:'html', name:'html', logo:'html_logo' ,rate:'4', text:''},
        {id:'css', name:'css', logo:'css_logo' ,rate:3, text:''},
        {id:'jQuery', name:'jQuery', logo:'jQuery_logo' ,rate:4, text:''},
        {id:'php', name:'php', logo:'php_logo' ,rate:4},
        {id:'laravel', name:'laravel', logo:'laravel_logo' ,rate:4, text:''},
        {id:'mysql', name:'mysql', logo:'mysql_logo' ,rate:4, text:''},
        {id:'javascript', name:'javascript', logo:'javascript_logo' ,rate:4, text:''},
        {id:'react', name:'react', logo:'react_logo' ,rate:4, text:''},
        {id:'redux', name:'redux', logo:'redux_logo' ,rate:4, text:''},
        {id:'nextjs', name:'nextjs', logo:'nextjs_logo' ,rate:4, text:''},
        {id:'tailwindcss', name:'tailwindcss', logo:'tailwindcss_logo' ,rate:4, text:''},

    ]
    const elseProgramingSkills = [
        {id:'python', name:'python', logo:'python_logo' ,rate:4, text:''},
        {id:'git', name:'git', logo:'git_logo' ,rate:4, text:''},
        {id:'photoshop', name:'photoshop', logo:'photoshop_logo' ,rate:4, text:''},
        {id:'xd', name:'xd', logo:'xd_logo' ,rate:4},
    ];

    const portableSkills = [
        { id:'infomation', name:'情報収集力', id:'infomation',rate:"4", text:'' },
        { id:'issue', name:'課題設定力',rate:4,text:'' },
        { id:'plan', name:'計画力',rate:4, text:'' },
        { id:'execution', name:'遂行力',rate:4, text:'' },
        { id:'response', name:'対応力',rate:4, text:'' },
        { id:'communication', name:'コミュニケーション能力',rate:4, text:'' },
        { id:'management', name:'マネジメント能力',rate:4, text:'' },
    ]

    const list =[1,2,3,4,5];
  return (
    <>
        <div className='skills w-full' id='skills'>
            <h1>
                SKILLS
            </h1>
            <div>
                <h3>WEBプログラミング</h3>
                <div className='w-full'>
                    <div className="carousel  max-w-full p-4  rounded-box">
                        <div className='carousel-item w-[300px]'>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <div className="card-body items-center text-center">
                                <Image src={html_logo} alt='html_logo' width={70}  className='mx-auto'/>
                                    <div>
                                        <div className="rating">
                                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" disabled/>
                                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" disabled/>
                                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" disabled/>
                                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" disabled checked/>
                                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" disabled/>
                                        </div>
                                        <p className='text-sm'>一通り理解しており、作成することができる</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h3>ポータブルスキル</h3>
                <div className='w-full'>
                    <div className="carousel  max-w-full p-4  rounded-box">
                    {portableSkills.map((skill, key)=>{
                        const rating = skill.rate == (key+1) ? '':"checked";
                        return(<>
                            <div className='carousel-item w-[300px]' key={key} >
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    {skill.name}
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title"></h2>
                                        <div>
                                            <div className="rating">
                                            {
                                            
                                            Array(5).fill().map((i,key)=>{
                                                // let i= index; 
                                                return (
                                                    <>
                                                        {console.log('i:'+key)}
                                                        {console.log('index:')}
                                                        {/* {(console.log(1==1))} */}
                                                        {console.log('skillrate:'+skill.rate)}
                                                        {console.log(key==skill.rate)}
                                                        { key+1==(skill.rate)
                                                            ? <> <input type="radio" name={skill.id} className="mask mask-star bg-orange-400"  disabled checked/></> 
                                                            : <> <input type="radio" name={skill.id} className="mask mask-star bg-orange-400"  disabled /></>}
                                                    </>
                                                )
                                            })}
                                                {/* <input type="radio" name={skill.name} className="mask mask-star bg-orange-400" disabled checked />
                                                <input type="radio" name={skill.name} className="mask mask-star bg-orange-400" disabled checked='false'/>
                                                <input type="radio" name={skill.name} className="mask mask-star bg-orange-400" disabled checked='false'/>
                                                <input type="radio" name={skill.name} className="mask mask-star bg-orange-400" disabled checked='true'/>
                                                <input type="radio" name={skill.name} className="mask mask-star bg-orange-400" disabled checked='false'/> */}
                                            </div>
                                            <p className='text-sm'>一通り理解しており、作成することができる</p>
                                        </div>
                                        <p>{skill.text}</p>
                                    </div>
                                </div>
                            </div>
                            </>
                        )
                        })}
                       
                    </div>
                </div>
            </div>
        </div>
        ☆１　触ったことがあり概要を理解している
        ☆２　参考書を見ながら作業を完遂できる
        ☆３　自身で考え作業を完遂できる
        ☆４　他人に指導できる
        ☆５　マスター
    </>
  )
}


// {Array(5).fill('rating').map((setRate, index)=>{
//     let i = index + 1; 
//     return (
//         <>
//             {/* {console.log('i:'+i)} */}
//             {(console.log(1==1))}
//             {/* {console.log('skillrate:'+skill.rate)} */}
//             {console.log(i==skill.rating)}
//             { i==(skill.rating)
//                 ? <> <input type="radio" name={skill.id} className="mask mask-star bg-orange-400"  disabled checked/>true</> 
//                 : <> <input type="radio" name={skill.id} className="mask mask-star bg-orange-400"  disabled />false</>}
//         </>
//     )
// })}