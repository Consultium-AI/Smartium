import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Epidemiologie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Spontane pneumothorax komt vaker voor bij mannen dan bij vrouwen. Er is een biphasische verdeling:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een eerste piek bij mannen van 15 tot 30 jaar, meestal een primaire spontane pneumothorax`}</Inline></li>
        <li><Inline>{`een tweede piek boven de 65 jaar, meestal een secundaire spontane pneumothorax`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De incidentie varieert sterk in de literatuur, maar het is een aandoening die regelmatig op de spoedeisende hulp wordt gezien.`}</Inline></p>
    </div>
  )
}
