import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Geneesmiddelen en lichaamscompartimenten`}</Inline></SubHeading>
      <PBody text={`Wanneer een geneesmiddel het lichaam binnenkomt, blijft het niet op één plek. Het verdeelt zich over verschillende **compartimenten**. Met compartimenten bedoelen we hier delen van het lichaam waarin een geneesmiddel zich kan bevinden, zoals de bloedbaan, de weefsels en vetweefsel. Hoe een middel zich verdeelt, hangt sterk af van de eigenschappen van dat middel en van de samenstelling van het lichaam.`} />
      <PBody text={`Een belangrijk begrip hierbij is de **farmacokinetiek**: dat is alles wat het lichaam met een geneesmiddel doet. Denk aan opname, verdeling, metabolisme en eliminatie. De verdeling over compartimenten is dus een kernonderdeel van de farmacokinetiek.`} />
    </div>
  )
}
