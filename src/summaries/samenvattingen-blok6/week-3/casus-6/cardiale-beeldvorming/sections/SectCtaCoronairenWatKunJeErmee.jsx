import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`CTA coronairen: wat kun je ermee?`}</Inline></SubHeading>
      <PBody text={`CTA coronairen is vooral een uitstekende **rule-out test**. De techniek heeft een hoge sensitiviteit, hoge specificiteit en vooral een zeer hoge negatieve voorspellende waarde van meer dan 95%. Als de CTA normaal is, is de kans op significante stenosen dus heel klein.`} />
      <PBody text={`De techniek is vooral goed voor de **proximale segmenten** van de coronairen. Dat is klinisch belangrijk, omdat daar vaak relevante stenosen zitten.`} />
      <SubHeading><Inline>{`Beperkingen van CTA`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Er zijn ook beperkingen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**calcificaties** kunnen stenosen maskeren door blooming;`}</Inline></li>
        <li><Inline>{`**kleine, distale vaten** zijn moeilijker te beoordelen;`}</Inline></li>
        <li><Inline>{`**bewegingsartefacten**, ademhaling en metaal kunnen de kwaliteit verminderen;`}</Inline></li>
        <li><Inline>{`de **stralingsdosis** is hoger dan bij een kalkscore-CT;`}</Inline></li>
        <li><Inline>{`de techniek geeft beperkte **functionele informatie**.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Waarom krijgt de patiënt nitroglycerine?`}</Inline></SubHeading>
      <PBody text={`Voor CTA coronairen wordt vaak **nitroglycerinespray** gegeven. Dat zorgt voor **vasodilatatie**, dus verwijding van de coronairen. Daardoor worden de vaten beter zichtbaar en beter beoordeelbaar.`} />
      <SubHeading><Inline>{`Aandacht-vraagje`}</Inline></SubHeading>
      <PBody text={`**Waarom is een normale CTA zo waardevol?**
Omdat de negatieve voorspellende waarde heel hoog is: een normale CTA maakt significante stenosen zeer onwaarschijnlijk.`} />
    </div>
  )
}
