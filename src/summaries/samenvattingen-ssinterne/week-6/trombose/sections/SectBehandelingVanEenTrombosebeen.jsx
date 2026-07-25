import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling van een trombosebeen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als de diagnose objectief is vastgesteld, start je behandeling. De behandeling heeft drie doelen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de groei van de trombus beperken;`}</Inline></li>
        <li><Inline>{`longembolie voorkomen;`}</Inline></li>
        <li><Inline>{`langetermijncomplicaties voorkomen, zoals een tweede trombose, posttrombotisch syndroom en chronische trombo-embolische pulmonale hypertensie.`}</Inline></li>
      </ul>
    </div>
  )
}
