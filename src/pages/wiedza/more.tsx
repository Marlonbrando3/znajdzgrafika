import React from 'react'
import Link from 'next/link'

export default function MoreAbout() {
  return (
    <div className='w-screen h-auto bg-[url("/photo.jpeg")] bg-cover '>
      <div className='md:w-[1000px] mx-auto'>
      <div className='text-white w-full px-[10px] mb-[20px] text-[30px] flex justify-start'>
        <div className='bg-green-700 px-[15px] h-[90px] text-[15px] flex pt-[40px]'><p>Jesteś w: <br></br><b>Więcej o projekcie</b></p></div>
      </div>
      <div className='bg-white/[0.9] text-[20px] pl-[10px] pr-[10px] mt-[140px]'>Projekt jest odpowiedzią na rosnące problemy w rekrutacji na stanowiska specjalistyczne i skierowanych do wszystkich firm szukający grafika do swojej firmy oraz dla grafików, którzy szukają zatrudnienia.<br></br>
      Po naszych obserwacjach firm, które są często w ciągłej rekrutacji odpowiedniej osoby na stanowisko grafika komputerowego czy to 3D czy rendery lub nawet ulotki stawiamy tezę, że z racji tego iż specjalizacja ta jest bardzo miękka, wiele zależy od gustu i obu stronom (rekruterom jak i kandydatom) towarzyszy błąd poznawczy.
      Owe niedomówienia podczas rekrutacji lub po po prostu poszukiwań grafika sprawiają, że niby rozmawiamy o tym samym ale np. definicja „biegłości” w pracy z danym programem lub środowisku to kwestia bardzo umowa.<br></br>
      Struktura portalu ma pozwolić na weryfikację kandydatów nawet dla osób, które nie zajmują się na codzień grafiką a np. piastują stanowiska często zarządcze i chcą zminimalizować błąd poznawczy by finalnie podjąć dobrą decyzję o zatrudnienia danego grafika wraz ze świadomości Jego zalet ale również obszarów do rozwoju.<br></br>
      Ponadto portal będzie aktualnym agregatem kandydatur i każdy będzie mógł zobaczyć dobrowolnie wskazane przez grafika umiejętności<br></br>
      Zapraszamy do pozostawienia adresu email aby otrzymać informację o aktualizacji prac oraz nowych funkcjonalnościach uzupełniając formularz.</div>
    <Link href="/"><div className='bg-green-700 px-[15px] py-[10px] pb-[10px] text-[15px] md:text-[22px] my-[20px] w-[300px] rounded text-white mx-auto text-center'>Wróć do formularza</div></Link>
    </div>
  </div>
  )
}
