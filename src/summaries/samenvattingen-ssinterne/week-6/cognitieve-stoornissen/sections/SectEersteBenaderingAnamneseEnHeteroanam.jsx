import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Eerste benadering: anamnese en heteroanamnese`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij iemand met cognitieve klachten begin je met een zorgvuldige anamnese en een heteroanamnese. De patiënt zelf kan vaak niet alles goed vertellen, zeker niet als er sprake is van verwardheid of geheugenproblemen. Daarom is informatie van een naaste vaak onmisbaar.`}</Inline></p>
    </div>
  )
}
