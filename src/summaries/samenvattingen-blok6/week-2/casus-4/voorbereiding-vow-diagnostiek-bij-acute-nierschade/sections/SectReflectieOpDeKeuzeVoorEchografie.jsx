import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Reflectie op de keuze voor echografie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij het kiezen voor echografie stel je jezelf eigenlijk steeds dezelfde vraag: helpt dit onderzoek mij om snel een belangrijke oorzaak van de klachten uit te sluiten of aan te tonen?`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Echografie is vooral geschikt als je zoekt naar:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`obstructie van de urinewegen;`}</Inline></li>
        <li><Inline>{`veranderingen in niergrootte of -structuur;`}</Inline></li>
        <li><Inline>{`afwijkingen van de blaas;`}</Inline></li>
        <li><Inline>{`een eerste indruk bij acute nierschade.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Minder geschikt is het onderzoek wanneer je juist microscopische schade wilt aantonen, zoals glomerulaire schade. Dan heb je andere diagnostiek nodig.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Wanneer is een echo niet genoeg?
**Mini-antwoord:** Als je glomerulaire schade wilt aantonen of als de klinische verdenking op obstructie blijft bestaan ondanks een negatieve echo.`} />
    </div>
  )
}
