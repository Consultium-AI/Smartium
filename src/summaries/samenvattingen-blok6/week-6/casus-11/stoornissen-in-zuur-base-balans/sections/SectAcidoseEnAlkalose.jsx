import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Acidose en alkalose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Wanneer productie en verwijdering van zuur niet in balans zijn, ontstaat een zuur-base stoornis.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Acidose**: te veel zuur of te weinig bicarbonaat.`}</Inline></li>
        <li><Inline>{`**Alkalose**: te weinig zuur of te veel bicarbonaat.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De klachten kunnen onder andere zijn: vermoeidheid, duizeligheid, misselijkheid, verwarring en spierzwakte.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Oorzaken en voorbeelden van zuur-base stoornissen`}</Inline></SubHeading>
      <DataTable rows={[["Stoornis", "Typische verandering", "Voorbeelden"], ["Metabole acidose", "bicarbonaat daalt", "diarree, renale tubulaire acidose, diabetes type 1, ischemie, methanol, ethyleenglycol, aspirine-overdosering"], ["Metabole alkalose", "bicarbonaat stijgt", "langdurig overgeven"], ["Respiratoire acidose", "pCO₂ stijgt", "COPD, emfyseem, astma"], ["Respiratoire alkalose", "pCO₂ daalt", "hyperventilatie, hoogtestage"]]} />
    </div>
  )
}
