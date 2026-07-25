import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Casus: de oudere patiënt met passageklachten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een patiënt zoals dhr. De Groot, met passageklachten, pijn bij het slikken en een matige cardiopulmonale conditie, moet je niet alleen naar de tumor kijken, maar ook naar de belastbaarheid van de patiënt. Je wilt dan vragen stellen over:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de ernst van de cardiopulmonale klachten;`}</Inline></li>
        <li><Inline>{`de inspanning die de patiënt aankan;`}</Inline></li>
        <li><Inline>{`de wens van de patiënt: maximale behandeling of vooral symptoomverlichting.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Als de patiënt voor maximale behandeling kiest, zijn aanvullende onderzoeken nodig:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`endoscopie;`}</Inline></li>
        <li><Inline>{`echografie;`}</Inline></li>
        <li><Inline>{`biopten;`}</Inline></li>
        <li><Inline>{`PET-CT;`}</Inline></li>
        <li><Inline>{`longfunctieonderzoek;`}</Inline></li>
        <li><Inline>{`cardiologische beoordeling, zeker als recente gegevens ontbreken.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Als maximale behandeling niet gewenst of niet haalbaar is, zijn palliatieve opties mogelijk. Bij vooral lokale klachten kan bestraling worden overwogen, inwendig, uitwendig of gecombineerd. Ook een stent kan worden geplaatst. Chemotherapie kan soms helpen bij passageproblemen, maar is als behandeling voor alleen gelokaliseerde ziekte niet optimaal. Bij uitgezaaide ziekte kan systemische behandeling worden overwogen, eventueel gecombineerd met lokale palliatieve behandeling. De keuze hangt altijd af van de conditie en de wens van de patiënt.`}</Inline></p>
    </div>
  )
}
