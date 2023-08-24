import React from 'react'
import Link from 'next/link'
import Script from 'next/script'

export default function MoreAbout() {
  return (
    <>
    {/* <!-- Google tag (gtag.js) --> */}
    <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11239400043"></Script>
          <Script id="google-tag-manager"> {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-11239400043');`}
          </Script>

         {/* <!-- Google tag (gtag.js) --> */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-VTLH3RL910"></Script>
        <Script id="google-analitycs">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VTLH3RL910');`}
        </Script>
    <div className='w-screen h-screen bg-[url("/photo.jpeg")] bg-cover '>
      <div className='md:w-[1000px] mx-auto'>
      <div className='text-white w-full px-[10px] mb-[20px] text-[30px] flex justify-start'>
        <div className='bg-green-700 px-[15px] h-[90px] text-[15px] flex pt-[40px]'><p>Jesteś w: <br></br><b>Jakie problemy rozwiążemy</b></p></div>
      </div>
      <div className='bg-white/[0.9] text-[20px] pl-[10px] pr-[10px] mt-[140px]'>Portal ma służyć grafikom oraz pracodawcom, którzy szukają grafików do zatrudnienia do swoich firm. Rozwiązuje problem trudności w ocenieniu kwalifikacji podczas czystej rozmowy rekrutacyjnej. Rekruterzy często nie są specjalistami w obszarach grafiki a zarządzają zespołami, dzięki temu rozwiązaniu będziesz można zapoznać się z prawdziwymi umiejętnościami grafików ustaleniem czy podczas rozmowy z kandydatem używając danych terminów mówicie o tym samym oraz czy prace danej osoby spełniają założenia wydajności i tempa ich wykonania.<br></br>
      Zapraszamy do pozostawienia adresu email aby otrzymać informację o aktualizacji prac oraz nowych funkcjonalnościach uzupełniając formularz.</div>
    <Link href="/"><div className='bg-green-700 px-[15px] py-[10px] pb-[10px] text-[15px] md:text-[22px] my-[20px] w-[300px] rounded text-white mx-auto text-center'>Wróć do formularza</div></Link>
    </div>
  </div>
  </>
  )
}
