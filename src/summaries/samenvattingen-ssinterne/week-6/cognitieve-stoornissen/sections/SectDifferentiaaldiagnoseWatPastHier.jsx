import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Differentiaaldiagnose: wat past hier?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij de eerste beoordeling denk je aan:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`delier of metabole encefalopathie, bijvoorbeeld door infectie of metabole ontregeling;`}</Inline></li>
        <li><Inline>{`alcoholintoxicatie of Wernicke encefalopathie;`}</Inline></li>
        <li><Inline>{`progressie van dementie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Het is belangrijk om dementie te onderscheiden van een delier. Dat lukt vaak al met anamnese, heteroanamnese en observatie.`}</Inline></p>
    </div>
  )
}
