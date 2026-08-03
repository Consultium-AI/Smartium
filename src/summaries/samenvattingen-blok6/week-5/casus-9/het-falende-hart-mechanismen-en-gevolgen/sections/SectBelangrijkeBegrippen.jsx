import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Belangrijke begrippen`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**EDV**: eind-diastolisch volume, de hoeveelheid bloed in het ventrikel aan het einde van de vulling.`}</Inline></li>
        <li><Inline>{`**ESV**: eind-systolisch volume, de hoeveelheid bloed die na contractie achterblijft.`}</Inline></li>
        <li><Inline>{`**SV**: slagvolume, het verschil tussen EDV en ESV.`}</Inline></li>
        <li><Inline>{`**EF**: ejectiefractie, het percentage van het EDV dat per slag wordt uitgepompt.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De formule voor de ejectiefractie is:`}</Inline></p>
      <PBody text={`**EF = (SV / EDV) × 100%**`} />
      <p className="leading-relaxed"><Inline>{`Een normale EF ligt ongeveer tussen 50 en 70%. De EF is een nuttige maat, maar niet het hele verhaal. Een normale EF betekent niet automatisch dat de hartfunctie normaal is, omdat ook de vulling en de vullingsdrukken verstoord kunnen zijn.`}</Inline></p>
      <PBody text={`**Tabel 1. Belangrijke parameters van de hartfunctie**`} />
      <DataTable rows={[["Parameter", "Betekenis"], ["EDV", "Volume aan het einde van de diastole"], ["ESV", "Volume dat achterblijft na systole"], ["SV", "Hoeveelheid bloed per slag uitgepompt"], ["EF", "Percentage van EDV dat wordt uitgepompt"]]} />
    </div>
  )
}
