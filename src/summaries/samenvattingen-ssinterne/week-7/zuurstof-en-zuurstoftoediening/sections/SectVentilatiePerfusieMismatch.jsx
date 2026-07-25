import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Ventilatie-perfusie mismatch`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een ventilatie-perfusie mismatch is er een verstoring van de verhouding tussen ventilatie en perfusie. Dit is een frequente oorzaak van hypoxemie. Voorbeelden zijn obstructieve longziekten, emfyseem, longembolie en interstitiële longziekten.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De behandeling is zuurstoftoediening.`}</Inline></p>
    </div>
  )
}
