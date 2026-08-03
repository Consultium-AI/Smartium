import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waar zit het geneesmiddel dan vooral?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Geneesmiddelen kunnen in deze drie compartimenten teruggevonden worden:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de **bloedbaan**;`}</Inline></li>
        <li><Inline>{`de **vloeistof in weefsels**;`}</Inline></li>
        <li><Inline>{`**gebonden aan cellen in organen en/of vetweefsel**.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Heparine zit vooral in de bloedbaan. Fenobarbital en fenytoïne zitten vooral in de vloeistof in weefsels. Diazepam en digoxine zitten vooral gebonden aan cellen in organen en/of vetweefsel.`}</Inline></p>
    </div>
  )
}
