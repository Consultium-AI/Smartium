import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wanneer begin je over preconceptiezorg?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een regulier consult, bijvoorbeeld voor buikpijn of obstipatie, kun je niet altijd meteen over kinderwens beginnen. De timing hangt af van de context. In de module wordt duidelijk gemaakt dat je later moet beoordelen wanneer preconceptiezorg passend is. Het idee is dat je preconceptiezorg bespreekt wanneer dat relevant en zinvol is voor de situatie van de patiënt.`}</Inline></p>
    </div>
  )
}
