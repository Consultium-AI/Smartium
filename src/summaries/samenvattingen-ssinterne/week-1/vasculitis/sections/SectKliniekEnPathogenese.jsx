import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Kliniek en pathogenese`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij EGPA kunnen intrapulmonale laesies, paranasale afwijkingen en vasculitis optreden. De pathogenese is complex. Er wordt gedacht aan een combinatie van genetische aanleg en uitlokkende factoren zoals allergenen, infecties, vaccinaties, geneesmiddelen en silica-expositie. Eosinofielen en T-cellen spelen een centrale rol in het ontstekingsproces.`}</Inline></p>
    </div>
  )
}
