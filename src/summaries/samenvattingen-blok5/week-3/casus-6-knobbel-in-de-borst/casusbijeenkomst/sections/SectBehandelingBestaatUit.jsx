import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Behandeling bestaat uit:`}</Inline></SubHeading>
      <PBody text={`**therapeutische elastische kousen**`} />
      <p className="leading-relaxed"><Inline>{`eventueel behandeling van de varices, zoals **sclerotherapie**, **flebectomie** of **endoveneuze ablatie**`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`bij ernstige veneuze problematiek ook **compressietherapie**`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`2. Hartfalen`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een oudere vrouw met dikke enkels, **dyspneu d’effort** en **orthopneu** past **decompensatio cordis** het best. Orthopneu betekent dat iemand slechter ademt in liggende houding en liever zittend slaapt.`}</Inline></p>
    </div>
  )
}
