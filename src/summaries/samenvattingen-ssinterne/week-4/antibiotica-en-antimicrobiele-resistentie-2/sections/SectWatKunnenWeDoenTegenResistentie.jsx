import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat kunnen we doen tegen resistentie?`}</Inline></SubHeading>
      <PBody text={`De kern is: **minder en slimmer antibiotica gebruiken**. Antibiotica moeten alleen worden ingezet bij **bacteriële infecties**, niet bij virale infecties. Daarnaast moet je kiezen voor een **zo smal mogelijk spectrum** en een behandeling geven die **niet langer duurt dan nodig**.`} />
      <p className="leading-relaxed"><Inline>{`Ook in de veehouderij moet het gebruik van antibiotica verminderen. Binnen de gezondheidszorg zijn antibioticateams belangrijk. Die bewaken het antibioticabeleid in ziekenhuizen, letten op reserve-antibiotica, volgen lokale resistentiepatronen en stimuleren goed gebruik, zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`stroomlijnen van empirische therapie`}</Inline></li>
        <li><Inline>{`i.v.-orale switch`}</Inline></li>
        <li><Inline>{`tijdig stoppen van antibiotica`}</Inline></li>
        <li><Inline>{`educatie en training`}</Inline></li>
        <li><Inline>{`overleg bij complexe infecties zoals *S. aureus* sepsis, endocarditis, meningitis of een geïnfecteerde prothese`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 5. Wat doen antibioticateams?`}</Inline></SubHeading>
      <DataTable rows={[["Taak", "Uitleg"], ["Bewaken van reserve-antibiotica", "Toezicht op gebruik en indicatie"], ["Naleving van richtlijnen", "Controleren of lokaal beleid wordt gevolgd"], ["Verbeteren van antibioticagebruik", "Bijvoorbeeld i.v.-orale switch en tijdig stoppen"], ["Educatie", "Scholing van zorgverleners"], ["Signaleren van resistentieproblemen", "Lokale trends volgen en melden"]]} />
    </div>
  )
}
