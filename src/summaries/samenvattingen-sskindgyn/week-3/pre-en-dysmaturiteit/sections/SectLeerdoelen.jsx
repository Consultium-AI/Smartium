import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`prematuriteit en dysmaturiteit definiëren en groeigegevens interpreteren met behulp van groeicurves;`}</Inline></li>
        <li><Inline>{`de wettelijke en ethische kaders rond het starten van behandeling bij extreem prematuur geboren kinderen beschrijven;`}</Inline></li>
        <li><Inline>{`de meest voorkomende aandoeningen bij premature en/of dysmature pasgeborenen herkennen;`}</Inline></li>
        <li><Inline>{`van de belangrijkste aandoeningen de risicofactoren, symptomen en prognose beschrijven:`}</Inline></li>
        <li><Inline>{`Respiratoir Distress Syndroom (RDS)`}</Inline></li>
        <li><Inline>{`Persisterende Ductus Arteriosus (PDA)`}</Inline></li>
        <li><Inline>{`Intraventriculaire hemorrhagie (IVH)`}</Inline></li>
        <li><Inline>{`Necrotiserende enterocolitis (NEC)`}</Inline></li>
        <li><Inline>{`Bronchopulmonale dysplasie (BPD)`}</Inline></li>
        <li><Inline>{`Retinopathie van de prematuur (ROP)`}</Inline></li>
      </ul>
    </div>
  )
}
