import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waarom deze regulatie belangrijk is`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De regulatie van de GFR is niet alleen een theoretisch onderwerp. In de kliniek helpt kennis hiervan om verder te kijken dan alleen laboratoriumwaarden. Als je begrijpt hoe de nier de doorbloeding en filtratie regelt, kun je beter herkennen wanneer er sprake is van nierschade of een probleem met de perfusie. Ook kun je elektrolytstoornissen en de effecten van medicatie beter plaatsen.`}</Inline></p>
    </div>
  )
}
