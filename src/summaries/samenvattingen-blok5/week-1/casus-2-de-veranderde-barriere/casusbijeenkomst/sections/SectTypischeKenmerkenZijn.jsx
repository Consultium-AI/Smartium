import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Typische kenmerken zijn:`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`palpabele purpura of petechiën`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`vaak op de onderbenen`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`buikklachten`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`gewrichtsklachten`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`soms nierschade`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De diagnose kan klinisch worden gesteld, maar een biopt kan bevestiging geven. Op histologie zie je een kleine-vatenvasculitis met:`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`leukocytoclasie`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`fibrinoïde necrose van de vaatwand`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`extravasatie van erytrocyten`}</Inline></p>
    </div>
  )
}
