import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Arteriën: van elastisch naar musculair`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De arteriën zijn de vaten die bloed van het hart wegvoeren. Ze verschillen onderling vooral in de hoeveelheid elastisch weefsel en gladde spiercellen.`}</Inline></p>
      <SubHeading><Inline>{`Elastische arteriën`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Dit zijn de grote vaten dicht bij het hart, zoals de aorta. Hun media bevat veel elastische lamellen, afgewisseld met gladde spiercellen. Daardoor kunnen ze de drukgolven van de hartslag opvangen. Tijdens de systole zetten ze uit, en tijdens de diastole veren ze terug. Zo helpen ze het bloed onder een vrij constante druk verder te stuwen.`}</Inline></p>
      <SubHeading><Inline>{`Musculaire arteriën`}</Inline></SubHeading>
      <PBody text={`Deze arteriën verdelen het bloed over de organen. Hun media bestaat vooral uit gladde spiercellen. De **lamina elastica interna** is vaak goed zichtbaar en vormt een duidelijke grens tussen intima en media. Door samentrekken of ontspannen van de gladde spiercellen kunnen deze vaten de bloedtoevoer naar een orgaan aanpassen.`} />
      <PBody text={`**Aandachtspunt:**
Waarom heten musculaire arteriën zo?
**Antwoord:** omdat hun media rijk is aan gladde spiercellen.`} />
      <PBody text={`En hebben elastische arteriën dan ook gladde spiercellen?
**Ja**, ook daar zitten gladde spiercellen in de media, maar de elastische component is daar veel sterker aanwezig.`} />
    </div>
  )
}
