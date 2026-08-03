import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe wordt een CT-thorax gemaakt?`}</Inline></SubHeading>
      <PBody text={`Een CT-scan kan op verschillende manieren worden uitgevoerd. Je kunt een **blanco CT** maken, dus zonder contrastmiddel. Je kunt ook **contrastmiddel intraveneus** toedienen en daarna scannen. Afhankelijk van het moment waarop je scant na de toediening, krijg je een ander soort contrastonderzoek.`} />
      <PBody text={`Als je **snel na toediening** scant, zit het contrast vooral nog in de **arteriën**. Dan spreek je van een **CTA** of **CT-angiogram**. Wacht je iets langer, dan heeft het contrast zich verder verspreid en zit het ook in de weefsels en organen. Dan spreek je van een **CT in de veneuze fase**. In die veneuze fase zijn organen beter van elkaar te onderscheiden en zijn afwijkingen in organen vaak beter zichtbaar.`} />
      <SubHeading><Inline>{`Tabel 2. Verschillende CT-protocollen`}</Inline></SubHeading>
      <DataTable rows={[["Onderzoek", "Moment van scannen", "Kenmerk"], ["Blanco CT", "Zonder contrast", "Geen contrastmiddel toegediend"], ["CTA / arteriële fase", "Kort na contrasttoediening", "Contrast vooral in de arteriën"], ["Veneuze fase", "Later na contrasttoediening", "Contrast verspreid in weefsels en organen"]]} />
      <SubHeading><Inline>{`Longembolie-protocol`}</Inline></SubHeading>
      <PBody text={`Een belangrijke vraag binnen de thoraxradiologie is of er sprake is van een **longembolie**. Daarvoor bestaat een speciaal protocol. Daarbij wordt het tijdstip van scannen zo gekozen dat het contrastmiddel vooral in de **pulmonale arteriën** aanwezig is. Daardoor worden embolieën zichtbaar, omdat op de plek van een thrombus geen bloed en dus ook geen contrastmiddel zit.`} />
      <PBody text={`**Aandachtsvraag:** waarom helpt contrast hier zo goed?
**Kort antwoord:** omdat contrast de bloedvaten aankleurt; waar een stolsel zit, komt geen contrast en zie je dus een vullingstekort.`} />
    </div>
  )
}
