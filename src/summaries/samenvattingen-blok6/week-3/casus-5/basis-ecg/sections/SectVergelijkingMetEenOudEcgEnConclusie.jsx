import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Vergelijking met een oud ECG en conclusie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als er een oud ECG beschikbaar is, moet je dat altijd vergelijken. Dan kun je zien of afwijkingen oud of nieuw zijn. Nieuwe afwijkingen zijn vaak relevant voor de huidige klachten, maar oude afwijkingen kunnen ook belangrijke informatie geven, bijvoorbeeld over een eerder doorgemaakt infarct.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarna formuleer je een conclusie. Voorbeelden zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`normaal sinusritme`}</Inline></li>
        <li><Inline>{`aanwijzingen voor een doorgemaakt voorwandinfarct`}</Inline></li>
        <li><Inline>{`acuut onderwandinfarct`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij de conclusie moet je altijd ook de anamnese en het lichamelijk onderzoek meewegen.`}</Inline></p>
    </div>
  )
}
