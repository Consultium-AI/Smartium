import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hematurie: wat betekent het en waarom is het belangrijk?`}</Inline></SubHeading>
      <PBody text={`Hematurie betekent dat er bloed in de urine zit. Dat kan op twee manieren worden ontdekt. Soms is de urine met het blote oog rood gekleurd; dan spreek je van **macroscopische hematurie**. Soms ziet de urine er normaal uit, maar worden er bij onderzoek met een dipstick of microscoop toch erytrocyten gevonden; dat heet **microscopische hematurie**.`} />
      <PBody text={`Het verschil is klinisch belangrijk. Microscopische hematurie wordt vaak toevallig gevonden. Macroscopische hematurie is juist een alarmsymptoom, vooral als het **pijnloos** is. Dat past namelijk bij een tumor van de urinewegen, en blaaskanker is daarvan de meest voorkomende vorm.`} />
      <PBody text={`**Aandacht-vraagje:** waarom is pijnloze macroscopische hematurie zo belangrijk?
**Mini-antwoord:** omdat dit een klassiek alarmsymptoom is voor blaaskanker en altijd verder onderzocht moet worden.`} />
      <PBody text={`Bij microscopische hematurie is de kans op blaaskanker kleiner dan bij macroscopische hematurie. In deze stof worden de kansen genoemd als ongeveer **3% bij microscopische hematurie** en **20% bij macroscopische hematurie**. Daarom moet een patiënt met macroscopische hematurie altijd worden verwezen voor nader onderzoek, meestal met cystoscopie.`} />
    </div>
  )
}
