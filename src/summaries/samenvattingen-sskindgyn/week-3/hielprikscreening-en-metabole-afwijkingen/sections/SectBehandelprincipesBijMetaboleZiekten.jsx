import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandelprincipes bij metabole ziekten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Behandeling kan verschillende vormen hebben:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`substraatreductie in de voeding;`}</Inline></li>
        <li><Inline>{`aanvullen van tekorten;`}</Inline></li>
        <li><Inline>{`geven van cofactoren, vaak vitamines;`}</Inline></li>
        <li><Inline>{`stimuleren van omzetting in een andere stap;`}</Inline></li>
        <li><Inline>{`enzymtherapie;`}</Inline></li>
        <li><Inline>{`gentherapie.`}</Inline></li>
      </ul>
    </div>
  )
}
