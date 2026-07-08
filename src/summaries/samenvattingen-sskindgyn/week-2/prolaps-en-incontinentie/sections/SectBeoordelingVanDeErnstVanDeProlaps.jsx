import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Beoordeling van de ernst van de prolaps`}</Inline></SubHeading>
      <PBody text={`De mate van prolaps wordt beoordeeld met het **POP-Q-systeem**. Daarbij is de **hymenaalring** een belangrijk anatomisch referentiepunt. Dit systeem wordt gebruikt om de verzakking op een vaste manier te beschrijven.`} />
      <PBody text={`Bij de beoordeling van de prolaps kan ook **3D-echo** worden gebruikt. Daarmee krijg je een goed beeld van de prolaps en van een belangrijk steunmechanisme: de **musculus levator ani**.`} />
    </div>
  )
}
