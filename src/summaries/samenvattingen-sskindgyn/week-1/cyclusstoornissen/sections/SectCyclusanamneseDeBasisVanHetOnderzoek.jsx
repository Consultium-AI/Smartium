import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Cyclusanamnese: de basis van het onderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een goede cyclusanamnese is essentieel. Je vraagt niet alleen naar het interval tussen de menstruaties, maar ook naar klachten die samenhangen met de cyclus of juist met het uitblijven ervan.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijke vragen zijn onder andere:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Wanneer begon de puberteit? Denk aan pubarche en thelarche.`}</Inline></li>
        <li><Inline>{`Op welke leeftijd was de menarche?`}</Inline></li>
        <li><Inline>{`Hoe waren de cycli vroeger: regelmatig of onregelmatig?`}</Inline></li>
        <li><Inline>{`Hoe is de cyclus nu?`}</Inline></li>
        <li><Inline>{`Gebruikt patiënte medicatie?`}</Inline></li>
        <li><Inline>{`Gebruikt patiënte hormonale anticonceptie?`}</Inline></li>
        <li><Inline>{`Is er familieanamnese voor cyclusstoornissen, premature ovariële insufficiëntie of subfertiliteit?`}</Inline></li>
        <li><Inline>{`Zijn er premenstruele klachten, zoals mastalgie of stemmingsklachten?`}</Inline></li>
        <li><Inline>{`Zijn er vasovegetatieve klachten, zoals opvliegers en nachtzweten?`}</Inline></li>
        <li><Inline>{`Is er vaginale droogheid?`}</Inline></li>
        <li><Inline>{`Hoe is de afscheiding gedurende de cyclus?`}</Inline></li>
        <li><Inline>{`Zijn er huidveranderingen, zoals droogheid, acne of hirsutisme?`}</Inline></li>
        <li><Inline>{`Is er galactorroe?`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij het uitvragen van de cyclus is het belangrijk om te letten op het interval tussen de eerste dagen van de menstruaties. Dat is voor patiënten soms lastig, dus dit moet je duidelijk uitleggen. Ook is het belangrijk om te beseffen dat je tijdens gebruik van hormonale anticonceptie geen uitspraak kunt doen over de eigen natuurlijke cyclus. De “cyclus” die iemand dan ervaart is medicamenteus bepaald. Over die periode ontbreekt dus echte cyclusinformatie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De post-pil amenorroe bestaat niet.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Waarom is het gebruik van hormonale anticonceptie belangrijk in de anamnese?
**Mini-antwoord:** Omdat de bloedingen dan niet de eigen natuurlijke cyclus weerspiegelen.`} />
    </div>
  )
}
