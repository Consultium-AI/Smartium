import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`uitleggen wat een **bijwerking** van een geneesmiddel is;`}</Inline></li>
        <li><Inline>{`het verschil beschrijven tussen een **voorspelbare** en een **onvoorspelbare** geneesmiddelreactie;`}</Inline></li>
        <li><Inline>{`de belangrijkste vormen van **overgevoeligheidsreacties op geneesmiddelen** herkennen;`}</Inline></li>
        <li><Inline>{`uitleggen wat het verschil is tussen een **allergische** en een **pseudo-allergische** reactie;`}</Inline></li>
        <li><Inline>{`de kenmerken van reacties op **NSAID’s**, inclusief **aspirine**, beschrijven;`}</Inline></li>
        <li><Inline>{`begrijpen waarom reacties op geneesmiddelen klinisch belangrijk zijn en hoe ze in de praktijk worden benaderd.`}</Inline></li>
      </ul>
    </div>
  )
}
