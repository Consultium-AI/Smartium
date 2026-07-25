import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`ANA-diagnostiek bij systeemziekten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Immuungemedieerde systeemaandoeningen zijn zeldzame aandoeningen waarbij één of meerdere orgaansystemen betrokken kunnen zijn. Ze kunnen een ernstig beloop hebben en leiden tot blijvende orgaanschade. Daarom is het belangrijk om deze ziekten vroeg te herkennen en gericht te diagnosticeren.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een belangrijk onderdeel van die diagnostiek is het bepalen van antinucleaire antistoffen, kortweg ANA. Dit zijn autoantistoffen tegen nucleaire antigenen. ANA spelen een rol in de classificatie van verschillende systeemziekten en kunnen ook helpen bij prognose en monitoring.`}</Inline></p>
    </div>
  )
}
