import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Thorax`}</Inline></SubHeading>
      <PBody text={`Bij de thorax let je op de vorm en de adembewegingen. Een pasgeborene ademt overwegend met de **buikademhaling**. Dat betekent dat de buik zichtbaar meebeweegt met de ademhaling.`} />
      <PBody text={`Bij auscultatie zijn normale en pathologische ademgeruisen vaak **scherper** dan bij volwassenen. Harttonen en souffles zijn door de relatief hoge frequentie vaak moeilijk te duiden. Dat vraagt dus om aandacht en ervaring.`} />
      <PBody text={`Ook de tepels bekijk je. **Wijd uiteenstaande tepels** kunnen voorkomen bij sommige syndromen, bijvoorbeeld **Turner**.`} />
    </div>
  )
}
