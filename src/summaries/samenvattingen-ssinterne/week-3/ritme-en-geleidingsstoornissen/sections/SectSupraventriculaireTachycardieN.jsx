import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Supraventriculaire tachycardieën`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Supraventriculaire tachycardieën ontstaan boven de ventrikels, dus in de atria of AV-knoop. De meest voorkomende vormen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`atriumfibrilleren;`}</Inline></li>
        <li><Inline>{`atriumflutter;`}</Inline></li>
        <li><Inline>{`atriale tachycardie;`}</Inline></li>
        <li><Inline>{`AV-nodale re-entry tachycardie (AVNRT);`}</Inline></li>
        <li><Inline>{`atrioventriculaire re-entry tachycardie (AVRT), vaak in het kader van het WPW-syndroom.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`AVNRT en AVRT`}</Inline></SubHeading>
      <PBody text={`Bij **AVRT** is er een extra verbinding tussen atria en ventrikels, een accessoire bundel of bypass. Daardoor ontstaat een re-entry circuit, ook wel een cirkeltachycardie genoemd. Bij het Wolff-Parkinson-White-syndroom kan deze bundel op het ECG zichtbaar worden als een deltagolf.`} />
      <PBody text={`Bij **AVNRT** speelt de re-entry zich volledig af binnen de AV-knoop. Ongeveer 30% van de mensen heeft daar twee geleidingswegen, die samen een re-entry circuit kunnen vormen.`} />
      <SubHeading><Inline>{`Atriumfibrilleren`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Atriumfibrilleren is de meest voorkomende ritmestoornis. Het komt vaker voor op hogere leeftijd, maar kan ook bij jongere mensen optreden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De oorzaak ligt in atriale fibrose. Daardoor wordt de normale depolarisatiegolf verstoord en gefragmenteerd, totdat er chaos ontstaat. In plaats van een gecoördineerde atriale contractie is er geen effectieve boezemcontractie meer.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** wat zie je bij atriumfibrilleren op het ECG?
**Mini-antwoord:** geen normale P-toppen, maar fibrillatiegolven en een onregelmatig ritme.`} />
      <p className="leading-relaxed"><Inline>{`Atriumfibrilleren begint vaak paroxysmaal, dus in aanvallen. Vaak is een korte atriale tachycardie of burst uit een ectopisch focus de trigger. Bij 80-90% van de mensen met atriumfibrilleren ligt dat focus in een van de longvenen.`}</Inline></p>
      <PBody text={`De belangrijkste complicatie is een **CVA of TIA**. Door het stilstaande bloed in het linkerhartoortje kunnen stolsels ontstaan die emboliseren naar de hersenen.`} />
      <PBody text={`Het risico hierop wordt beoordeeld met de **CHA₂DS₂-VASc-score**. Bij een score van 1 of hoger is orale antistolling aangewezen, waarbij het bloedingsrisico wordt meegewogen met de **HAS-BLED-score**.`} />
      <SubHeading><Inline>{`Tabel 3. Stroke-risico bij atriumfibrilleren`}</Inline></SubHeading>
      <DataTable rows={[["CHA₂DS₂-VASc-score", "Jaarlijks risico zonder OAC", "Geschat risico met NOAC", "Risicocategorie"], ["0", "0,5%", "~0,2%", "Zeer laag"], ["1", "1,5%", "~0,5%", "Laag"], ["2", "2,9%", "~1,0%", "Matig"], ["3", "5,1%", "~1,8%", "Matig"], ["4", "7,3%", "~2,6%", "Hoog"], ["5", "11,2%", "~3,9%", "Hoog"], ["6", "15,5%", "~5,4%", "Zeer hoog"], ["7", "14,7%", "~5,1%", "Zeer hoog"], ["8", "19,5%", "~6,8%", "Zeer hoog"]]} />
      <SubHeading><Inline>{`Atriumflutter`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Atriumflutter is ook een supraventriculaire tachycardie. Hierbij is er een specifiek re-entry circuit in het rechteratrium. Voor het risico op een herseninfarct en de bijbehorende scores worden dezelfde criteria gebruikt als bij atriumfibrilleren.`}</Inline></p>
      <SubHeading><Inline>{`Multifocale atriale tachycardie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Multifocale atriale tachycardie, afgekort MAT, komt in de algemene populatie weinig voor, maar in het ziekenhuis juist relatief vaak. Dat komt doordat veel aandoeningen de automaticiteit van de hartspiercellen verhogen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`MAT moet je niet verwarren met atriumfibrilleren. Bij MAT zijn er nog wel gecoördineerde atriale contracties en zie je P-toppen van verschillende vorm. Bij atriumfibrilleren zijn er geen normale P-toppen meer zichtbaar, maar fibrillatiegolven.`}</Inline></p>
    </div>
  )
}
