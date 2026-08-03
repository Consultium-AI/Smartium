import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Oorzaken van een pneumothorax`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een pneumothorax kan op verschillende manieren ontstaan. De belangrijkste oorzaken zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Trauma aan de borstkas**: bijvoorbeeld door een val, een klap, een auto-ongeluk of een penetrerend letsel.`}</Inline></li>
        <li><Inline>{`**Iatrogene oorzaak**: door een medische handeling, zoals een longbiopsie, het inbrengen van een centraal veneuze lijn of een thoracale ingreep.`}</Inline></li>
        <li><Inline>{`**Onderliggende longziekte**: bijvoorbeeld COPD, astma, cystische fibrose, cystische longziekten of longfibrose.`}</Inline></li>
        <li><Inline>{`**Beademing met hoge drukken**: vooral als er al kwetsbare longen zijn, zoals bij emfyseem.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Hier zie je dat de oorzaak belangrijk is, omdat de behandeling daarop wordt afgestemd.`}</Inline></p>
    </div>
  )
}
