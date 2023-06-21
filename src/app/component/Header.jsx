'use client';
import Image from 'next/image';
import Link from "next/link"
import { useState } from 'react';

export default function Header() {
    const contents = [ {content:"home", link:"/#top"},{content:"about", link:"/#about"}, {content:"works", link:"/#works"}, {content:"skills", link:"/#skills"},{content:"resume", link:"/#resume"},]
    // console.log(contents)
    const [navIsOpen, setNavIsOpen ] = useState(false)
    return(
        <>
        <header className="header-wrapper h-[70px] px-4 flex shadow fixed w-full top-0 z-10 backdrop-blur-sm bg-white/30">
                <div className='h-full flex items-center'>
                    <Image 
                        src='/images/header_logo.png'
                        alt='HeaderLogo'
                        width={130}
                        height={65}
                        className=''
                    />
                </div>
            <nav className="h-full  w-full hidden md:block ">
                <ul className="h-full flex justify-end items-center text-shadow">
                    {contents.map((value,key)=>{
                        return (
                            <Link href={value.link}  key={key} >
                                <li className="mx-4 tracking-widest font-semibold hover:text-gray-300 hover:border-b hover:border-gray-400 duration-500 drop-shadow-md">
                                    {value.content}
                                </li>
                            </Link>
                        );
                    })}
                </ul>
            </nav>
           
        </header>
        <div className='absolute h-full fixed w-10 right-4 top-4 md:hidden z-50 '>
                <label className="  swap swap-rotate fixed">
                    <input type="checkbox" onChange={()=>{setNavIsOpen(!navIsOpen)}} checked={navIsOpen}/>
                    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                    <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                </label>
            </div>
        
            <div className={`absolute  w-2/5 h-full  top-0 right-0 z-20 opacity-80 transition-opacity  ${navIsOpen ? '':'hidden'}`}>
                <nav className="h-full w-full flex items-center fixed  bg-gray-100">
                    <ul className="h-full text-shadow mt-[200px]">
                        {contents.map((value,key)=>{
                            return (
                                <Link href={value.link}  key={key}  onClick={()=>{setNavIsOpen(!navIsOpen)}}>
                                    <li className="mx-4 my-5 text-lg tracking-widest font-semibold hover:text-gray-300 hover:border-b hover:border-gray-400 duration-500 drop-shadow-md">
                                        {value.content}
                                    </li>
                                </Link>
                            );
                        })}
                    </ul>
                </nav>
            </div>

        </>
    )
}

