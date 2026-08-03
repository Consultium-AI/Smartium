import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Verwijzen, screenen en op de wachtlijst komen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het proces verloopt in stappen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`eerst is er een sluitende diagnose,`}</Inline></li>
        <li><Inline>{`daarna maximale behandeling,`}</Inline></li>
        <li><Inline>{`vervolgens verwijzing naar een transplantatiecentrum,`}</Inline></li>
        <li><Inline>{`daarna screening,`}</Inline></li>
        <li><Inline>{`en pas daarna eventueel plaatsing op de wachtlijst.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij sommige longziekten is de diagnose op zichzelf al reden om te verwijzen, omdat bekend is dat de ziekte vaak snel verder achteruitgaat of slecht op behandeling reageert.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Globale volgorde van ziekte naar transplantatie`}</Inline></SubHeading>
      <DataTable rows={[["Stap", "Wat gebeurt er?"], ["1", "Sluitende diagnose van het longlijden"], ["2", "Maximale behandeling"], ["3", "Achteruitgang ondanks behandeling"], ["4", "Verwijzing naar transplantatiecentrum"], ["5", "Screening longtransplantatie"], ["6", "Wachtlijstplaatsing"], ["7", "Transplantatie"]]} />
    </div>
  )
}
