import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Verdeling over compartimenten en distributievolume`}</Inline></SubHeading>
      <PBody text={`Het **distributievolume (Vd)** is een maat voor hoe sterk een geneesmiddel zich over het lichaam verdeelt. Een klein Vd betekent dat het middel vooral in het bloed blijft. Een groot Vd betekent dat het middel veel uit de bloedbaan verdwijnt en zich in weefsels ophoopt.`} />
    </div>
  )
}
