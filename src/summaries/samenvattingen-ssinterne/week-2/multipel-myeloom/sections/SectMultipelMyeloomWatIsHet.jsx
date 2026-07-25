import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Multipel myeloom: wat is het?`}</Inline></SubHeading>
      <PBody text={`Multipel myeloom is een **plasmacelaandoening**. Dat betekent dat er sprake is van een kwaadaardige woekering van **plasmacellen** in het beenmerg. Plasmacellen zijn afweercellen die normaal antistoffen maken. Bij multipel myeloom gebeurt dat ongecontroleerd en door één kwaadaardige celgroep.`} />
      <PBody text={`Het is een belangrijke hematologische maligniteit: het maakt ongeveer **10% van de bloedkankers** uit. De ziekte wordt jaarlijks bij ongeveer **700 nieuwe patiënten** vastgesteld. De gemiddelde leeftijd bij diagnose is **69 jaar**; ongeveer **30%** van de patiënten is ouder dan 75 jaar.`} />
      <SubHeading><Inline>{`Klinische betekenis`}</Inline></SubHeading>
      <PBody text={`Multipel myeloom komt dus vooral voor op oudere leeftijd, maar kan ook bij jongere patiënten voorkomen. In de kliniek moet je eraan denken bij klachten zoals **vermoeidheid, botpijn, anemie, nierfunctiestoornissen en afwijkingen in het eiwitonderzoek**.`} />
    </div>
  )
}
