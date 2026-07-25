import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat is een advanced adenoom?`}</Inline></SubHeading>
      <PBody text={`Een **advanced adenoom** is een adenomateuze poliep met één of meer van de volgende kenmerken:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**≥ 10 mm** groot;`}</Inline></li>
        <li><Inline>{`**hooggradige dysplasie**;`}</Inline></li>
        <li><Inline>{`**meer dan 25% villeuze component**.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De grootte wordt bepaald door de endoscopist, de andere kenmerken door de patholoog.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Definitie van advanced adenoom`}</Inline></SubHeading>
      <DataTable rows={[["Kenmerk", "Betekenis"], ["≥ 10 mm", "Ja"], ["Hooggradige dysplasie", "Ja"], ["> 25% villeuze component", "Ja"]]} />
      <p className="leading-relaxed"><Inline>{`Als een adenoom aan één van deze kenmerken voldoet, heet het een advanced adenoom.`}</Inline></p>
    </div>
  )
}
