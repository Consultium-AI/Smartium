import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`FIGO-classificatie van het CTG`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De CTG-beoordeling kan worden ingedeeld volgens de gemodificeerde FIGO-richtlijn.`}</Inline></p>
      <DataTable rows={[["Tabel 4. FIGO-classificatie en kenmerken"], ["Normaal CTG", "BHF 110-150 bpm, acceleraties, variabiliteit 5-25 bpm, vroege deceleraties, ongecompliceerde variabele deceleraties <60 sec en slagverlies <60 slagen"], ["Suboptimaal CTG", "BHF 100-110 of 150-170 bpm, korte bradycardie <100 bpm ≤3 min, variabiliteit >25 bpm, variabiliteit <5 bpm >40 min zonder acceleraties, ongecompliceerde variabele deceleraties <60 sec en slagverlies >60 slagen"], ["Abnormaal CTG", "BHF 150-170 bpm met verminderde variabiliteit, >170 bpm, persisterende bradycardie <100 bpm >3 min, variabiliteit <5 bpm >60 min, sinusoïdaal patroon, gecompliceerde variabele deceleraties >60 sec, herhaalde late deceleraties"], ["Preterminaal CTG", "Totaal verlies van variabiliteit (<2 bpm) en reactiviteit, met of zonder deceleraties of bradycardie"]]} />
      <p className="leading-relaxed"><Inline>{`Als meerdere suboptimale kenmerken samen voorkomen, wordt het CTG abnormaal.`}</Inline></p>
    </div>
  )
}
