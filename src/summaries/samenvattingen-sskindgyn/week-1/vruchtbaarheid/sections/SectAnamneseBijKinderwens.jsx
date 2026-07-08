import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Anamnese bij kinderwens`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een paar met kinderwens begin je met een gerichte anamnese. Daarbij vraag je altijd naar:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de duur van de zwangerschapswens;`}</Inline></li>
        <li><Inline>{`het aantal maanden onbeschermde coïtus;`}</Inline></li>
        <li><Inline>{`de coïtusfrequentie in de vruchtbare periode;`}</Inline></li>
        <li><Inline>{`de duur en regelmaat van de cyclus;`}</Inline></li>
        <li><Inline>{`het type anticonceptie dat eerder gebruikt is.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Als de kinderwens al langer dan 1 jaar bestaat, vraag je daarnaast naar:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`eerdere zwangerschappen, het beloop en eventuele kinderen, ook uit eerdere relaties;`}</Inline></li>
        <li><Inline>{`familieanamnese met erfelijke ziekten, chromosoomafwijkingen of andere familiale aandoeningen;`}</Inline></li>
        <li><Inline>{`kennis van de vruchtbare periode;`}</Inline></li>
        <li><Inline>{`doorgemaakte soa’s, vooral chlamydia;`}</Inline></li>
        <li><Inline>{`pelvic inflammatory disease (PID), andere onderbuikontstekingen en operaties in de onderbuik;`}</Inline></li>
        <li><Inline>{`pijn in de onderbuik, passend bij endometriose;`}</Inline></li>
        <li><Inline>{`medicatiegebruik, cytostatica, radiotherapie en blootstelling aan schadelijke stoffen;`}</Inline></li>
        <li><Inline>{`anabole steroïden en leefstijlfactoren zoals roken en overgewicht;`}</Inline></li>
        <li><Inline>{`problemen in woon- of werksituatie;`}</Inline></li>
        <li><Inline>{`seksuele problemen zoals erectiestoornissen, ejaculatiestoornissen, libidoverlies en dyspareunie.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Casus: Suzanne en Jaap`}</Inline></SubHeading>
      <PBody text={`Suzanne is 31 jaar, heeft een regelmatige cyclus van 27-30 dagen en heeft 24 maanden een kinderwens. Jaap is 34 jaar en heeft uit een eerdere relatie al een zoon. Samen hebben zij nog nooit een zwangerschap gehad. Daarom zijn zij als paar **primair subfertiel**.`} />
      <p className="leading-relaxed"><Inline>{`Suzanne heeft verder geen bijzonderheden in de voorgeschiedenis. Jaap heeft ook geen duidelijke medische voorgeschiedenis, maar rookt wel 10 sigaretten per dag. Bij beiden zijn geen aanwijzingen voor een duidelijke oorzaak uit de anamnese.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Omdat de kinderwens al langer dan 1 jaar bestaat, is er indicatie voor het oriënterend fertiliteitsonderzoek.`}</Inline></p>
    </div>
  )
}
