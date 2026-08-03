import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Prognose en maatschappelijke impact`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hartfalen heeft een ernstige prognose. Na een eerste ziekenhuisopname is de sterfte hoog: binnen 30 dagen overlijdt al een aanzienlijk deel van de patiënten, en na 1 en 5 jaar lopen de sterftecijfers verder op. Hartfalen heeft daarmee een slechtere prognose dan veel vormen van kanker. Ook in Nederland is de sterfte aan hartfalen hoog, met duizenden overlijdens per jaar.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarnaast is hartfalen een belangrijke reden voor ziekenhuisopname. De gemiddelde leeftijd bij opname ligt hoog, en de gemiddelde ligduur is tegenwoordig korter dan vroeger, maar het aantal opnames blijft groot. Dat laat zien dat hartfalen niet alleen een fysiologisch probleem is, maar ook een belangrijke klinische en maatschappelijke belasting.`}</Inline></p>
    </div>
  )
}
