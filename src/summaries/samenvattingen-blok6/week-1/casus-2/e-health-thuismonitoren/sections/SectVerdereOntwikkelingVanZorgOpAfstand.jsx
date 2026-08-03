import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Verdere ontwikkeling van zorg op afstand`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als een programma eenmaal bestaat, is de volgende vraag: hoe ontwikkel je het verder? De gedachte is dat zorg op afstand steeds completer kan worden gemaakt.`}</Inline></p>
    </div>
  )
}
