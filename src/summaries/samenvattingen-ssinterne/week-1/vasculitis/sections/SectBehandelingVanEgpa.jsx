import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling van EGPA`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De behandeling lijkt op die van GPA, maar omdat eosinofielen een belangrijke rol spelen, kan anti-IL5-behandeling worden overwogen. Mepolizumab is daarvan een voorbeeld. Dit kan ziekteactiviteit onderdrukken en de prednisonbehoefte verlagen.`}</Inline></p>
    </div>
  )
}
