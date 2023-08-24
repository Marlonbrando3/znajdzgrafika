import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1"></meta>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap" rel="stylesheet"></link>
    </Head>
   <div className=' w-screen md:h-screen h-[940px] bg-[url("/photo.jpeg")] bg-cover flex flex-col md:flex-row'>
    <div className='w-full md:w-1/2 h-screen text-center flex justify-center items-center ml-[10px]'>
      <div className='w-[600px] leading-9 text-left '>
      <span className='bg-white w-[600px] text-[30px] px-[10px]'>Zatrudnienie<br></br></span>
      <span className='bg-white w-[600px] text-[40px] pr-[10px] text-green-600 font-bold'>doświadczonego grafika jest... </span>
      <span className='bg-white w-[600px] text-[60px] px-[10px] text-red-600 font-bold leading-[60px]'>trudne?<br></br> </span>
      <span className='bg-white w-[600px] text-[30px] px-[10px] leading-[60px]'>Tworzymy dla Ciebie<br></br> </span>
      <span className='bg-white w-[600px] text-[40px] pr-[10px] text-green-600 font-bold leading-9 md:leading-6'>bazę idealnych kandydatów!</span><br></br>
      <span className='block md:h-[50px] h-[15px]'></span>
      <span className='bg-white w-[600px] md:text-[40px] text-[28px] pr-[10px] text-red-600 font-bold leading-[1px] md:leading-[40px]'>zostaw maila i</span>
      <span className='bg-white w-[600px] md:text-[40px] text-[28px] pr-[10px] text-red-600 font-bold leading-[0px] md:leading-[40px]'>bądź na bieżąco z projektem</span>
    </div>
    </div>
    <div className='md:w-1/2 h-screen flex items-center justify-center relative'>
      <div className='absolute bg-red-600/[0.9] w-[900px] h-[500px] rounded-[10px] -right-[200px] rotate-6'></div>
      <form className='b p-[20px] flex flex-col rounded-md w-[600px] text-[18px] z-10'>
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
   </>
  )
}


