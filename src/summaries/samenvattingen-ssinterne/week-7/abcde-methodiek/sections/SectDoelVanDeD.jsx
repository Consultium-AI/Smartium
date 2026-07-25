import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Doel van de D`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij de D kijk je kort neurologisch naar:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bewustzijn`}</Inline></li>
        <li><Inline>{`pupillen`}</Inline></li>
        <li><Inline>{`lateralisatie`}</Inline></li>
        <li><Inline>{`glucose`}</Inline></li>
        <li><Inline>{`tekenen van meningeale prikkeling`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Het doel is het herkennen van levensbedreigende neurologische problemen en het voorkomen van secundaire hersenschade, bijvoorbeeld door hypoxie of slechte perfusie.`}</Inline></p>
    </div>
  )
}
