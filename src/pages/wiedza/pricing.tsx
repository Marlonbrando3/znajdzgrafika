import React from 'react'
import Link from 'next/link'

export default function MoreAbout() {
  return (
    <div className='w-screen h-screen bg-[url("/photo.jpeg")] bg-cover'>
      <div className='md:w-[1000px] mx-auto'>
      <div className='text-white w-full px-[10px] mb-[20px] text-[30px] flex justify-start'>
        <div className='bg-green-700 px-[15px] h-[90px] text-[15px] flex pt-[40px] fixed'><p>Jesteś w: <br></br><b>Ile to będzie kosztować?</b></p></div>
      </div>
      <div className='bg-white/[0.9] text-[20px] pl-[10px] pr-[10px] mt-[140px]'>Portal przez pierwszy długi okres (jeszcze nie wiemy jak długi)  będzie bezpłatny, więc jest to darmowe narzędzie do szukania grafików, które ułatwi weryfikację kandydatów. W przyszłości planujemy wdrożyć płatności co też pozwoli aby swoje kandydatury zgłaszały osoby, które są gotowe pokazać się w wierzymy skutecznym i wysoce efektywnym narzędziu.<br></br>
      Zapraszamy do pozostawienia adresu email aby otrzymać informację o aktualizacji prac oraz nowych funkcjonalnościach uzupełniając formularz.</div>
    <Link href="/"><div className='bg-green-700 px-[15px] py-[10px] pb-[10px] text-[15px] md:text-[22px] my-[20px] w-[300px] rounded text-white mx-auto text-center'>Wróć do formularza</div></Link>
    </div>
  </div>
  )
}
