import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Geneesmiddelen verdelen zich over verschillende lichaamscompartimenten, en die verdeling hangt sterk af van water- en vetverdeling in het lichaam. Hydrofiele middelen blijven vaker in de bloedbaan of in waterige compartimenten, terwijl lipofiele middelen makkelijker in weefsels en vetweefsel terechtkomen. Daardoor verschilt ook het distributievolume: heparine heeft een klein Vd, terwijl diazepam en digoxine een groot Vd hebben.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De plasmaconcentratiecurve laat zien hoe een geneesmiddel zich gedraagt na toediening. Bij intraveneuze toediening is er geen absorptiefase en is de concentratie meteen hoog. Bij orale toediening stijgt de concentratie eerst door absorptie en daalt daarna door klaring. Sommige middelen, zoals fenytoïne, verdelen zich over meerdere compartimenten, wat je terugziet aan een snelle eerste daling gevolgd door een latere eliminatiefase.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Lichaamsgewicht, obesitas en leeftijd beïnvloeden deze processen. Obesitas vergroot het Vd en verlengt daardoor vaak de halfwaardetijd. Hoge leeftijd verlaagt vooral de klaring door verminderde nierfunctie. Geneesmiddeleninteracties beïnvloeden vooral het metabolisme en kunnen Cmax en T1/2 in beide richtingen veranderen, terwijl Vd gelijk blijft.`}</Inline></p>
    </div>
  )
}
