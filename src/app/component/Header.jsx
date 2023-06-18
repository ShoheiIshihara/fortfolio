
import Link from "next/link"

export default function Header() {
    // const contents= ["home","works", "skills", "about", "contact" ];
    const contents = [ {content:"home", link:"/"}, {content:"works", link:"/works"}, {content:"skills", link:"/skills"},{content:"about", link:"/about"},{content:"contact", link:"/contact"},]
    return(
        <>
        <nav>
            <ul>
                {contents.map((value,key)=>{
                    return (
                        <Link href={value.link}  key={key}>
                            <li className="">
                                {value.content}
                            </li>
                        </Link>
                    );
                })}
            </ul>
            <Link href={'/'}>
                home
            </Link>
            <Link href={'/contact'}>
                test
            </Link>
        </nav>
        </>
    )
}