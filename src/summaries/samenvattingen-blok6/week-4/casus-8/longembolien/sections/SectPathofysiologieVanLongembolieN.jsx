import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Pathofysiologie van longembolieën`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een longembolie is een ernstige aandoening waarbij een bloedvat in de longen verstopt raakt door een bloedstolsel. Meestal is dat stolsel ontstaan in een diepe vene in de benen of elders in het lichaam en daarna losgeraakt. Zo’n stolsel heet een embolus wanneer het zich verplaatst en elders vastloopt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De meest voorkomende bron is een diepe veneuze trombose, oftewel DVT. Daarbij zit er een trombus in de diepe aderen, die kan losschieten en via het veneuze systeem uiteindelijk in de longarteriën terechtkomt.`}</Inline></p>
      <SubHeading><Inline>{`Virchow’s triade`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij het ontstaan van een trombus spelen drie factoren een rol. Samen worden die Virchow’s triade genoemd:`}</Inline></p>
      <DataTable rows={[["Tabel 1. Virchow’s triade"], ["Hypercoagulabiliteit", "Het bloed stolt sneller dan normaal"], ["Stase van bloed", "Het bloed stroomt traag, bijvoorbeeld door immobilisatie"], ["Endotheelbeschadiging", "Schade aan de vaatwand bevordert stolselvorming"]]} />
      <p className="leading-relaxed"><Inline>{`Deze drie factoren kunnen alle drie bijdragen aan het ontstaan van een longembolie. Bij de ene patiënt weegt de ene factor zwaarder dan de andere. Bij een actieve maligniteit speelt hypercoagulabiliteit bijvoorbeeld vaak een grote rol, terwijl bij langdurig stilzitten juist stase belangrijk is.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** waarom is langdurig stilzitten een risico?
**Mini-antwoord:** omdat het bloed dan trager stroomt en makkelijker kan stollen.`} />
      <SubHeading><Inline>{`Gevolgen in de longcirculatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Wanneer de embolus in de longarteriën vastloopt, wordt de bloeddoorstroming belemmerd. Dat heeft drie belangrijke gevolgen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Toename van de pulmonale vaatweerstand**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De rechterkamer van het hart moet harder pompen om bloed door de longen te krijgen.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Belasting van de rechterkamer**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij een grote embolie kan de rechterkamer overbelast raken. Dat kan leiden tot hemodynamische instabiliteit en uiteindelijk rechterkamerfalen.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Hypoxemie**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Door de verstoring van de doorbloeding komt er minder zuurstof in het bloed, waardoor het zuurstofgehalte daalt.`}</Inline></p>
    </div>
  )
}
