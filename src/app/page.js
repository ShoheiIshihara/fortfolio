import Image from 'next/image';
import About from './component/About';
import Works from './component/Works';
import Skills from './component/Skills';
import Resume from './component/Resume';
import Header from './component/Header'
import Footer from './component/Footer'
export default function Home() {
  return (
    <>
      <Header />
        <p className='text-center mt-[150px]'>This page is Shohei&#39;s Portfolio Site</p>
        <About />
        <Works />
        <Skills />
        <Resume />
      <Footer />
    </>
  )
}
