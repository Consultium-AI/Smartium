import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Bij deze patiënt wordt ook gedacht aan:`}</Inline></SubHeading>
      <PBody text={`**type IV contactallergie**: bijvoorbeeld voor haarverf, parfum of acrylnagels`} />
      <PBody text={`**type I voedselallergie**: bijvoorbeeld pinda of garnaal`} />
      <p className="leading-relaxed"><Inline>{`De huidbarrière is verstoord, waardoor allergenen makkelijker binnendringen en allergieën kunnen ontstaan of verergeren.`}</Inline></p>
    </div>
  )
}
