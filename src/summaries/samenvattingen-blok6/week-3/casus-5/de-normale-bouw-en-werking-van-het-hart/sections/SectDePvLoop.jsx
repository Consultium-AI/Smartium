import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De PV-loop`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De druk-volume-loop laat de relatie zien tussen druk en volume in de linkerventrikel tijdens één hartcyclus.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De lus loopt met de klok mee en heeft vier belangrijke fasen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Diastolische vulling**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Mitralisklep open, volume neemt toe`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Isovolumetrische contractie**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Alle kleppen dicht, druk stijgt snel`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Ejectiefase**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Aortaklep open, volume daalt`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Isovolumetrische relaxatie**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Alle kleppen dicht, druk daalt snel`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijke punten:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**EDV**: eind-diastolisch volume`}</Inline></li>
        <li><Inline>{`**ESV**: eind-systolisch volume`}</Inline></li>
        <li><Inline>{`**SV**: EDV − ESV`}</Inline></li>
        <li><Inline>{`**EF**: SV / EDV × 100%`}</Inline></li>
        <li><Inline>{`**Stroke work**: de oppervlakte binnen de lus`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 5. PV-loop parameters`}</Inline></SubHeading>
      <DataTable rows={[["Parameter", "Betekenis"], ["EDV", "Volume aan het einde van de diastole"], ["ESV", "Volume aan het einde van de systole"], ["SV", "Hoeveelheid bloed per slag"], ["EF", "Percentage van EDV dat wordt uitgepompt"], ["Stroke work", "Externe arbeid per slag"]]} />
    </div>
  )
}
