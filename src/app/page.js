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
        <div id='top'>
          <p className='text-center pt-[150px] w-full'>This page is Shohei&#39;s Portfolio Site</p>
          <About />
          <Works />
          <Skills />
          <Resume />
        </div>
      <Footer />
    </>
  )
}
