import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Conclusie trekken`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het systematisch beoordelen van ritme, frequentie, geleidingstijden, hartas, P-top, QRS-complex en ST-T-afwijkingen, koppel je de bevindingen aan elkaar. Daarna formuleer je een conclusie, bijvoorbeeld:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`normaal sinusritme`}</Inline></li>
        <li><Inline>{`aanwijzingen voor een doorgemaakt infarct`}</Inline></li>
        <li><Inline>{`acuut infarct van een bepaald gebied`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarbij is de klinische context belangrijk. Een ECG staat nooit los van de klachten, anamnese en het lichamelijk onderzoek.`}</Inline></p>
    </div>
  )
}
