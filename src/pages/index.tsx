import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import {useRef} from 'react'
import Head from 'next/head'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const name:any = useRef();
  const company:any = useRef();
  const mail:any = useRef();
  const aprovalwindow:any = useRef();

  const handleSendForm = (e:any) => {
    e.preventDefault();

    fetch('/api/sendform', {
        method: "POST",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name.current.value,
            company: company.current.value,
            mail: mail.current.value,
        })
    })
        .then(res => res.json())
        .then(data => {
            if (data.info === "sendet") {
                console.log("wysłano maila")
                aprovalwindow.current.style.visibility = "visible"

                setTimeout(() => {
                    aprovalwindow.current.style.visibility = "hidden"

                }, 5000)
            } else {
                console.log("niewysłano ")
            }
        })
}


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
      <div className='bg-red-700 w-[1200px] h-[500px] rounded-[10px] -right-[200px] md:-mr-[900px] flex items-start flex-col'>
      <div className='flex justify-center pt-[5px] w-[200px] mx-auto md:mx-[140px]'>
          <Link href="/wiedza/szukam-grafika-projekt"><div className='md:w-[150px] w-[120px] h-[50px] bg-white mx-[4px] rounded shadow-md px-[10px] flex items-center justify-center border border-white font-bold leading-5 text-center hover:text-white hover:bg-green-700 duration-150 cursor-pointer'><p>Więcej o projekcie</p></div></Link>
          <Link href="/wiedza/szukam-grafika-rozwiazania"><div className='md:w-[150px] w-[120px] h-[50px] text-[14px] md:text-auto bg-white mx-[4px] rounded shadow-md flex items-center justify-center border border-white font-bold leading-5 text-center hover:text-white hover:bg-green-700 duration-150 cursor-pointer'>Jakie problemy rozwiążemy</div></Link>
          <Link href="/wiedza/szukam-grafika-ceny"><div className='md:w-[150px] w-[120px] h-[50px] bg-white mx-[4px] rounded shadow-md px-[10px] flex items-center justify-center border border-white font-bold leading-5 text-center hover:text-white hover:bg-green-700 duration-150 cursor-pointer'>Ile to będzie kosztować?</div></Link>
        </div>
      <form onSubmit={handleSendForm} className='b md:p-[20px] flex flex-col rounded-md md:w-[400px] w-[320px] text-[18px] z-10 relative mx-auto md:mx-0'>
          <div ref={aprovalwindow} className='absolute invisible bg-red-700 w-full h-full right-0 left-0 mx-auto z-20 flex items-center justify-center flex-col rounded-md  border-green-700'>
          <div className='text-[24px] flex items-center justify-center flex-col'>
            <p className='bg-green-800 text-white px-[10px]'>Dziekujęmy!</p>
            <p className='bg-green-800 text-white px-[10px]'>Wiadomość wysłana</p>
          </div>
        </div>
        <label data-for="name" className='text-white'>Imię i nazwisko reprezentanta</label>
        <input ref={name} className='border mb-[18px] h-[50px] rounded-[10px]' data-type="text" required ></input>
        <label data-for="comapany" className='text-white'>Nazwa firmy</label>
        <input ref={company} className='border mb-[18px] h-[50px] rounded-[10px]' data-type="text" required></input>
        <label data-for="name" className='text-white'>Adres email</label>
        <input ref={mail} className='border mb-[28px] h-[50px] rounded-[10px]' data-type="email" required></input>
        <button className='bg-white text-green-600 w-[130px] h-[50px] rounded-[5px]'>Wyślij</button>
      </form>
      </div>
    </div>
   </div>
   </div>
   </>
  )
}


