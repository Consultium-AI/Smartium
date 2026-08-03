import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`2. Functionele anatomie van het hart`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Je kunt de bouw van het hart en de grote vaten beschrijven en de route van het bloed door de kleine en grote bloedsomloop volgen.`}</Inline></p>
    </div>
  )
}
