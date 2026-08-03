import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Detectie van atriumfibrilleren met wearables`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een belangrijk klinisch voorbeeld is het detecteren van atriumfibrilleren (AF) met een smartwatch of fitness tracker. AF is een hartritmestoornis die je met PPG mogelijk kunt opsporen. De vraag is dan: hoe goed werkt dat in de praktijk?`}</Inline></p>
      <SubHeading><Inline>{`Opzet van het onderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Om te bepalen of de wearable meet wat hij moet meten, werd een grote groep mensen met Fitbit uitgenodigd. Daarbij werden personen zonder AF, zonder pacemaker, zonder defibrillator en zonder orale anticoagulantia geselecteerd. Als de Fitbit een onregelmatig hartritme vond, kregen deze personen een ECG-patch toegestuurd.`}</Inline></p>
      <PBody text={`Het ECG-signaal gold hier als de **ground truth**: de referentie waarmee je kunt bepalen of de wearable en het algoritme juist hebben gemeten. Zo kun je de accuratesse van de Fitbit-sensor en het algoritme valideren.`} />
      <p className="leading-relaxed"><Inline>{`Er meldden zich in vijf maanden tijd een half miljoen vrijwilligers. Dat laat zien hoe groot de belangstelling voor dit soort technologie is.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Logica van de studieopzet`}</Inline></SubHeading>
      <DataTable rows={[["Stap", "Doel"], ["Selectie van deelnemers zonder bekende AF", "Een grote populatie zonder vooraf bekende ritmestoornis onderzoeken"], ["Detectie van onregelmatig ritme door Fitbit", "Nagaan of de wearable afwijkingen oppikt"], ["Toesturen van ECG-patch", "Een betrouwbare referentiemeting verkrijgen"], ["Vergelijken met ECG", "De accuratesse van de wearable en het algoritme beoordelen"]]} />
    </div>
  )
}
