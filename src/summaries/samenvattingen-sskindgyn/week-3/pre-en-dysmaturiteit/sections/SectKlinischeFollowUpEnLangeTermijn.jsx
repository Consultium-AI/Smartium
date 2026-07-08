import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische follow-up en lange termijn`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Premature en dysmature kinderen hebben vaak langdurige follow-up nodig door verschillende specialisten. Dat kan gaan om:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`neonatologie voor neurocognitieve ontwikkeling`}</Inline></li>
        <li><Inline>{`kindergeneeskunde voor groei`}</Inline></li>
        <li><Inline>{`longarts voor BPD`}</Inline></li>
        <li><Inline>{`kindercardiologie voor pulmonale hypertensie`}</Inline></li>
        <li><Inline>{`oogarts voor ROP en visusproblemen`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarnaast kunnen later ook andere problemen zichtbaar worden, zoals gedragsproblemen, angstklachten, een laag zelfbeeld, ADHD of blijvende voedingsafhankelijkheid. De gevolgen van prematuriteit kunnen dus lang doorwerken in het leven van het kind en het gezin.`}</Inline></p>
    </div>
  )
}
