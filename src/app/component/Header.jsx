import Image from 'next/image';

import Link from "next/link"

import HeaderLogo from '../../../public/images/header_logo.png';

export default function Header() {
    const contents = [ {content:"home", link:"/"},{content:"about", link:"/#about"}, {content:"works", link:"/#works"}, {content:"skills", link:"/#skills"},{content:"contact", link:"/#contact"},]
    // console.log(contents)
    return(
        <>
        <header className="header-wrapper h-[100px]  px-4 flex shadow">
                <div className='h-full flex items-center'>
                    <Image 
                        src={HeaderLogo}
                        alt='HeaderLogo'
                        width={165}
                        height={65}
                        className=''
                    />
                </div>
            <nav className="h-full  w-full hidden md:block ">
                <ul className="h-full flex justify-end items-center text-shadow">
                    {contents.map((value,key)=>{
                        return (
                            <Link href={value.link}  key={key} scroll={true}>
                                <li className="mx-4 tracking-widest font-semibold hover:text-gray-300 hover:border-b hover:border-gray-400 duration-500 drop-shadow-md">
                                    {value.content}
                                </li>
                            </Link>
                        );
                    })}
                </ul>
            </nav>
            <div className='absolute right-4 top-4 md:hidden  '>
                <label className="btn btn-circle swap swap-rotate ">
                    
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox"/>
                    
                    {/* hamburger icon */}
                    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                    
                    {/* close icon */}
                    <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                </label>
            </div>
        </header>
        </>
    )
}