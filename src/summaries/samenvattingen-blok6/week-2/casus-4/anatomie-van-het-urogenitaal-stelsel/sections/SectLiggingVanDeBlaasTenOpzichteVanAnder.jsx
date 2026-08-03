import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Ligging van de blaas ten opzichte van andere organen`}</Inline></SubHeading>
      <PBody text={`De vesica urinaria ligt meestal **ventrocaudaal ten opzichte van de uterus**. Dat betekent dat de blaas voor en onder de baarmoeder ligt.`} />
      <PBody text={`Ten opzichte van de **prostaat** ligt de vesica urinaria **craniaal**. De blaas ligt dus boven de prostaat.`} />
      <p className="leading-relaxed"><Inline>{`Deze onderlinge ligging is belangrijk om de anatomie van het kleine bekken goed te begrijpen.`}</Inline></p>
    </div>
  )
}
