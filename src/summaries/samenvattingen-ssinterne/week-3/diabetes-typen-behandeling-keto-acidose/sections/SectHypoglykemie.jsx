import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hypoglykemie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hypoglykemie is een verlaagd glucosegehalte in het bloed. Bij diabetes ontstaat dit alleen als gevolg van de behandeling.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Klachten kunnen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`wisselend humeur`}</Inline></li>
        <li><Inline>{`hoofdpijn`}</Inline></li>
        <li><Inline>{`bleekheid`}</Inline></li>
        <li><Inline>{`zweten`}</Inline></li>
        <li><Inline>{`honger`}</Inline></li>
        <li><Inline>{`duizeligheid`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij diabetesmedicatie kan metformine in monotherapie geen hypoglykemie veroorzaken. Gliclazide, insuline en ook andere middelen kunnen dat wel.`}</Inline></p>
    </div>
  )
}
