import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Neurologische oorzaken`}</Inline></SubHeading>
      <PBody text={`Bij een lokaal intracranieel proces kan de herseninhoud verschuiven binnen de schedel. Omdat de schedel niet kan uitzetten, kan een ruimte-innemend proces leiden tot **inklemming**. Een laesie in één hersenhelft, bijvoorbeeld door infarct, hematoom of tumor, kan een **midline shift** veroorzaken. In ernstiger gevallen verschuift de hersenstam caudaal. Massaal hersenoedeem kan de intracraniële druk sterk verhogen en zo diffuse ischemie veroorzaken.`} />
      <PBody text={`De behandeling van inklemming bestaat, als dat mogelijk is, uit het verwijderen van het lokale proces. Als dat niet kan, kunnen **steroïden** worden gegeven om oedeem te verminderen. Een alternatief is **mannitol**, dat de serumosmolaliteit verhoogt waardoor vocht aan het hersenweefsel wordt onttrokken.`} />
      <PBody text={`Traumatisch hersenletsel kan bestaan uit een **commotio cerebri** of **contusio cerebri**. Een contusie ontstaat meestal door lineair inwerkende krachten. Diffuus hersenletsel kan optreden door rotatiekrachten, met dysfunctie van axonen in de witte stof. De ernst van het letsel kan worden afgeleid uit de duur van de **posttraumatische amnesie**; daarmee wordt de periode van bewusteloosheid én amnesie bedoeld.`} />
      <p className="leading-relaxed"><Inline>{`De meest voorkomende primair neurologische oorzaken van coma zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`status epilepticus of post-ictale fase;`}</Inline></li>
        <li><Inline>{`intracraniële bloeding;`}</Inline></li>
        <li><Inline>{`ischemisch CVA;`}</Inline></li>
        <li><Inline>{`massawerking door tumor, abces of hydrocefalus;`}</Inline></li>
        <li><Inline>{`hypertensieve encefalopathie;`}</Inline></li>
        <li><Inline>{`traumatisch hersenletsel.`}</Inline></li>
      </ul>
    </div>
  )
}
