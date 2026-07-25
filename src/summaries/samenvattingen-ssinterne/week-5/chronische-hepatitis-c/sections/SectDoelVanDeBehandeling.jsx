import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Doel van de behandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het belangrijkste doel van de behandeling van hepatitis C is breed: verbetering van de kwaliteit van leven, reductie van sterfte en vermindering van overdracht in de populatie. Genezing van hepatitis C zorgt dus niet alleen voor minder klachten bij de individuele patiënt, maar ook voor minder ziekte en verspreiding in de samenleving.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Doelen van behandeling`}</Inline></SubHeading>
      <DataTable rows={[["Doel", "Uitleg"], ["Kwaliteit van leven verbeteren", "Klachten verdwijnen of nemen af"], ["Sterfte verminderen", "Minder overlijden door lever- en andere complicaties"], ["Overdracht verminderen", "Minder viruscirculatie in de populatie"]]} />
    </div>
  )
}
