import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Onderzoek bij prolaps`}</Inline></SubHeading>
      <PBody text={`De mate van prolaps beoordeel je bij gynaecologisch onderzoek met een **éénbladig speculum**. Het onderzoek doe je in **Valsalva**. Dat betekent dat patiënte perst, zodat de verzakking beter zichtbaar wordt.`} />
      <p className="leading-relaxed"><Inline>{`Bij de beoordeling let je op drie compartimenten:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Voorste compartiment**`}</Inline></li>
        <li><Inline>{`hierbij hoort de **blaas**`}</Inline></li>
        <li><Inline>{`**Middelste compartiment**`}</Inline></li>
        <li><Inline>{`hierbij horen de **top van de vagina** en de **uterus**`}</Inline></li>
        <li><Inline>{`**Achterste compartiment**`}</Inline></li>
        <li><Inline>{`hierbij hoort het **rectum**`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 2. Compartimenten bij prolaps`}</Inline></SubHeading>
      <DataTable rows={[["Compartiment", "Betrokken orgaan"], ["Voorste compartiment", "Blaas"], ["Middelste compartiment", "Top van de vagina, uterus"], ["Achterste compartiment", "Rectum"]]} />
    </div>
  )
}
