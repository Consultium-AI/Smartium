import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Oriënterend neurologisch onderzoek`}</Inline></SubHeading>
      <PBody text={`Bij het neurologisch onderzoek let je eerst op de **spiertonus**. Een normale pasgeborene ligt vooral in **flexiehouding**. De armen en benen zijn dus meestal wat gebogen.`} />
      <SubHeading><Inline>{`Afwijkingen van tonus en bewustzijn`}</Inline></SubHeading>
      <PBody text={`**Hypotonie** en/of **convulsies** kunnen voorkomen bij:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`asfyxie;`}</Inline></li>
        <li><Inline>{`intracraniële afwijkingen;`}</Inline></li>
        <li><Inline>{`ernstige infecties;`}</Inline></li>
        <li><Inline>{`metabole stoornissen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dat zijn dus belangrijke alarmsignalen.`}</Inline></p>
      <SubHeading><Inline>{`Neonatale reflexen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij de pasgeborene onderzoek je verschillende reflexen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`zoekreflex;`}</Inline></li>
        <li><Inline>{`zuigreflex;`}</Inline></li>
        <li><Inline>{`grijpreflex aan handen en voeten;`}</Inline></li>
        <li><Inline>{`opstap- en loopreflex;`}</Inline></li>
        <li><Inline>{`Mororeflex;`}</Inline></li>
        <li><Inline>{`asymmetrische tonische nekreflex;`}</Inline></li>
        <li><Inline>{`tractierespons;`}</Inline></li>
        <li><Inline>{`verticale suspensie;`}</Inline></li>
        <li><Inline>{`horizontale suspensie;`}</Inline></li>
        <li><Inline>{`parachutereflex.`}</Inline></li>
      </ul>
      <PBody text={`Daarnaast zijn de **spierrekreflexen** bij de pasgeborene aanwezig. De **armreflexen** zijn echter vaak moeizaam opwekbaar.`} />
      <PBody text={`**Aandacht-vraagje:** Waarom is het neurologisch onderzoek bij een slaperige baby minder goed te beoordelen?
**Mini-antwoord:** Omdat spontane bewegingen, tonus en reflexen dan minder duidelijk zichtbaar zijn.`} />
    </div>
  )
}
