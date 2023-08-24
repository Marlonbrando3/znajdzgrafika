import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
         {/* <!-- Google tag (gtag.js) --> */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-VTLH3RL910"></Script>
        <Script id="google-analitycs">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-VTLH3RL910');`}
        </Script>
    <Head>
      <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1"></meta>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap" rel="stylesheet"></link>
    </Head>
    <div className='w-screen bg-[url("/photo.jpeg")] bg-cover'>
   <div className='md:w-[1000px] mx-auto md:h-screen h-[940px] flex flex-col lg:flex-row'>
    <div className='w-full md:w-1/2 h-screen text-center flex justify-center items-center ml-[10px]'>
      <div className='w-[600px] leading-9 text-left '>
      <span className='bg-white w-[600px] text-[30px] px-[10px]'>Zatrudnienie<br></br></span>
      <span className='bg-white w-[600px] text-[40px] pr-[10px] text-green-600 font-bold'>doświadczonego grafika jest... </span><br></br>
      <span className='bg-white w-[600px] text-[60px] px-[10px] text-red-600 font-bold leading-[60px]'>trudne?<br></br></span>
      <span className='bg-white w-[600px] text-[30px] px-[10px] leading-[60px]'>Tworzymy dla Ciebie<br></br> </span>
      <span className='bg-white w-[600px] text-[40px] pr-[10px] text-green-600 font-bold leading-9 md:leading-9'>bazę idealnych kandydatów!</span><br></br>
      <span className='block md:h-[50px] h-[15px]'></span>
      <span className='bg-white w-[600px] md:text-[40px] text-[28px] pr-[10px] text-red-600 font-bold sm:leading-[1px] md:leading-[40px]'>zostaw maila i</span>
      <span className='bg-white w-[600px] md:text-[40px] text-[28px] pr-[10px] text-red-600 font-bold sm:leading-[0px] md:leading-[40px]'>bądź na bieżąco z projektem</span>
    </div>
    </div>
    <div className='md:w-1/2 h-screen flex items-center justify-center relative'>
      <div className='bg-red-700 w-[1200px] h-[500px] rounded-[10px] -right-[200px] md:-mr-[900px] flex items-center'>
      <form className='b p-[20px] flex flex-col rounded-md w-[400px] text-[18px] z-10'>
        <label data-for="name" className='text-white '>Imię i nazwisko reprezentanta</label>
        <input className='border mb-[18px] h-[50px] rounded-[10px]'></input>
        <label data-for="comapany" className='text-white'>Nazwa firmy</label>
        <input className='border mb-[18px] h-[50px] rounded-[10px]'></input>
        <label data-for="name" className='text-white'>Adres email</label>
        <input className='border mb-[28px] h-[50px] rounded-[10px]'></input>
        <button className='bg-white text-green-600 w-[130px] h-[50px] rounded-[5px]'>Wyślij</button>
      </form>
      </div>
    </div>
   </div>
   </div>
   </>
  )
}


