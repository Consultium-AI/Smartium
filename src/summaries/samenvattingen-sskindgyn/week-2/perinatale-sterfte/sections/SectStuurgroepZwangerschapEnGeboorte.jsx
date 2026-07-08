import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Stuurgroep Zwangerschap en Geboorte`}</Inline></SubHeading>
      <PBody text={`Omdat de perinatale sterfte in Nederland hoger bleef dan gewenst, werd in 2008 de **Stuurgroep Zwangerschap en Geboorte** ingesteld. Deze kreeg de opdracht om voorstellen te doen om de zorg rondom zwangerschap en geboorte te verbeteren en de perinatale sterfte terug te dringen.`} />
      <PBody text={`In 2009 verscheen het rapport **Een goed begin**, met als doel de perinatale sterfte door vermijdbare schade met 50% te verminderen. Belangrijke aanbevelingen waren:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`meer zorg op maat, vooral voor risicogroepen;`}</Inline></li>
        <li><Inline>{`preconceptiezorg;`}</Inline></li>
        <li><Inline>{`intensievere zorg tijdens zwangerschap, baring en kraamperiode;`}</Inline></li>
        <li><Inline>{`betere samenwerking tussen de verschillende zorgniveaus;`}</Inline></li>
        <li><Inline>{`kwaliteitsverbetering en gezamenlijke richtlijnen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Concreet ging het onder meer om:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`voorlichtingsprogramma’s ter voorbereiding op het moederschap;`}</Inline></li>
        <li><Inline>{`dag en nacht gelijke zorg;`}</Inline></li>
        <li><Inline>{`geboortecentra voor verplaatste thuisbevalling;`}</Inline></li>
        <li><Inline>{`modernisering van de Verloskundige IndicatieLijst;`}</Inline></li>
        <li><Inline>{`concentratie van zorg;`}</Inline></li>
        <li><Inline>{`een gezamenlijk cliëntvolgend dossier;`}</Inline></li>
        <li><Inline>{`verplichte deelname aan PRN, Perinatale Audit Nederland en VSV’s.`}</Inline></li>
      </ul>
    </div>
  )
}
