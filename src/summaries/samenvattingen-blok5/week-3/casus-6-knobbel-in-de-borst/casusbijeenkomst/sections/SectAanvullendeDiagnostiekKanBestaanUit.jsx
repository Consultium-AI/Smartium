import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Aanvullende diagnostiek kan bestaan uit:`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`anamnese naar eerdere DVT, orthopneu en dyspneu`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`lichamelijk onderzoek naar veneuze insufficiëntie, overvulling en teken van Stemmer`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`labonderzoek om hart- of leverafwijkingen uit te sluiten`}</Inline></p>
    </div>
  )
}
