import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Controles en bewaking tijdens de zwangerschap`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een normale, ongecompliceerde zwangerschap wordt de zwangere gecontroleerd door de verloskundige. De frequentie van de controles hangt af van factoren zoals bestaande ziekten, obstetrische voorgeschiedenis, afwijkingen in de huidige zwangerschap, meerlingzwangerschap en andere klachten of psychologische problemen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In het begin van de zwangerschap zijn controles meestal ongeveer elke 4 weken. Later worden ze frequenter, omdat in het derde trimester extra aandacht nodig is voor foetale groei. Veel groeirestricties komen dan pas aan het licht.`}</Inline></p>
      <SubHeading><Inline>{`Veelvoorkomende klachten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Tijdens de zwangerschap komen veel fysiologische klachten voor, zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`misselijkheid en braken, vooral in het eerste trimester`}</Inline></li>
        <li><Inline>{`zuurbranden, vooral in de tweede helft`}</Inline></li>
        <li><Inline>{`duizeligheid, moeheid en flauwvallen door orthostase`}</Inline></li>
        <li><Inline>{`abnormaal ervaren vaginale afscheiding`}</Inline></li>
        <li><Inline>{`buikpijn, rugpijn en bekkenklachten`}</Inline></li>
        <li><Inline>{`obstipatie`}</Inline></li>
        <li><Inline>{`harde buiken, vooral in het laatste trimester`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Belangrijk is steeds onderscheid te maken tussen normale fysiologische verschijnselen en pathologische klachten.`}</Inline></p>
      <SubHeading><Inline>{`Pathologische verschijnselen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De meest voorkomende pathologische problemen in de zwangerschap zijn urineweginfecties en anemie.`}</Inline></p>
      <SubHeading><Inline>{`Urineweginfectie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Zwangeren hebben een verhoogde kans op een urineweginfectie door fysiologische verwijding van de ureteren en stase. De klachten kunnen atypisch zijn, bijvoorbeeld onderbuikspijn en harde buiken. Een urineweginfectie verloopt bij zwangeren vaker gecompliceerd, dus je moet alert zijn op pyelonefritis. Ook asymptomatische bacteriurie moet behandeld worden met antibiotica.`}</Inline></p>
      <SubHeading><Inline>{`Anemie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In de zwangerschap spreek je van anemie bij een Hb lager dan 6,8 mmol/L. Dit is meestal ijzergebreksanemie, omdat de ijzervoorraad aan het begin van de zwangerschap vaak niet voldoende is voor de toenemende behoefte. Behandeling gebeurt met ijzersuppletie. Andere oorzaken van anemie zijn dezelfde als buiten de zwangerschap.`}</Inline></p>
    </div>
  )
}
