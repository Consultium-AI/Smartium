import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De GFR wordt bepaald door drukverschillen in de glomerulus en wordt vooral gereguleerd via de glomerulaire capillaire druk. De nier houdt de GFR stabiel met autoregulatie, vooral via het myogene mechanisme en tubuloglomerulaire feedback. Daarnaast beïnvloeden hormonen zoals angiotensine II, ANP, ADH en adrenaline/noradrenaline de filtratie. Klinisch is dit belangrijk bij onder andere hypertensie, chronische nierschade, diabetes mellitus en het gebruik van RAAS-remmers, NSAID’s en SGLT2-remmers.`}</Inline></p>
    </div>
  )
}
