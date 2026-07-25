import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`TRALI`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`TRALI staat voor transfusion-related acute lung injury. Dit is het optreden van dyspnoe, koorts en bilateraal longoedeem zonder overvulling binnen 6 uur na toediening van een plasmahoudend bloedproduct.`}</Inline></p>
    </div>
  )
}
