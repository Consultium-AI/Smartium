import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Neuropsychologisch onderzoek`}</Inline></SubHeading>
      <PBody text={`Omdat de klachten blijven bestaan en het dagelijks functioneren beïnvloeden, wordt een **neuropsychologisch onderzoek (NPO)** aangevraagd. Dit onderzoek bestaat uit een uitgebreide anamnese, heteroanamnese en testen van verschillende cognitieve domeinen.`} />
    </div>
  )
}
