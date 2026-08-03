import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de compartimenten van geneesmiddelen in het lichaam beschrijven;`}</Inline></li>
        <li><Inline>{`uitleggen wat het effect is van lichaamsgewicht en lichaamssamenstelling, vooral water versus vetweefsel, op de farmacokinetiek;`}</Inline></li>
        <li><Inline>{`uitleggen hoe een geneesmiddel zich verdeelt over compartimenten en hoe dit samenhangt met het distributievolume en met lipofiliteit en hydrofiliteit;`}</Inline></li>
        <li><Inline>{`het verloop van een plasmaconcentratiecurve bij eenmalige toediening beschrijven, zowel intraveneus als oraal;`}</Inline></li>
        <li><Inline>{`het verschil uitleggen tussen eenmalige en herhaalde orale toediening;`}</Inline></li>
        <li><Inline>{`uitleggen wat een interactie tussen geneesmiddelen doet met de plasmaconcentratiecurve.`}</Inline></li>
      </ul>
    </div>
  )
}
