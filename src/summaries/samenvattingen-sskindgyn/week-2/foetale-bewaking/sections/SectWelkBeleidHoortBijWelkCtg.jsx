import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Welk beleid hoort bij welk CTG?`}</Inline></SubHeading>
      <DataTable rows={[["Tabel 5. CTG-classificatie en beleid"], ["Normaal CTG", "Expectatief; goede foetale conditie waarschijnlijk"], ["Suboptimaal CTG", "Mogelijke oorzaak opheffen; aanvullende diagnostiek overwegen"], ["Abnormaal CTG", "Mogelijke oorzaak opheffen; aanvullende diagnostiek of beëindiging van de baring overwegen; overleg met gynaecoloog"], ["Preterminaal CTG", "Baring termineren; onmiddellijk medebeoordeling door gynaecoloog"]]} />
    </div>
  )
}
