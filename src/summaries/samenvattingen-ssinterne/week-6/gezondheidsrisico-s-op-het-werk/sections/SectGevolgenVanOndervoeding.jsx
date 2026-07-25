import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Gevolgen van ondervoeding`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Ondervoeding heeft veel negatieve gevolgen. Het leidt tot slechter herstel en meer complicaties. Ook neemt de kans op infecties, wondproblemen, immobiliteit en vallen toe. De kwaliteit van leven daalt en de mortaliteit stijgt.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Gevolgen van ondervoeding`}</Inline></SubHeading>
      <DataTable rows={[["Verminderd door ondervoeding", "Verhoogd door ondervoeding"], ["GI-, long- en nierfunctie", "Complicaties"], ["Herstel van ziekte", "Infecties: ernst, duur en frequentie"], ["Cognitie", "Slecht genezende wonden en decubitus"], ["Afweer", "Immobiliteit en valrisico"], ["Herstel van letsel", "Hulpbehoefte en zorgafhankelijkheid"], ["Kwaliteit van leven", "Mortaliteitsrisico"]]} />
    </div>
  )
}
