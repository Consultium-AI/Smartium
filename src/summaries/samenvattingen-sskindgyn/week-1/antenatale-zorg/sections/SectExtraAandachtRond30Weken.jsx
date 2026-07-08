import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Extra aandacht rond 30 weken`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Rond 30 weken zijn er extra aandachtspunten:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`echoscopie om de groei te beoordelen`}</Inline></li>
        <li><Inline>{`bepalen van irregulaire antistoffen bij een rhesus-D-negatieve of rhesus-c-negatieve moeder`}</Inline></li>
        <li><Inline>{`foetale D-typering bij rhesus-negatieve zwangeren`}</Inline></li>
        <li><Inline>{`zo nodig toediening van anti-D als de foetus D-positief is`}</Inline></li>
      </ul>
    </div>
  )
}
