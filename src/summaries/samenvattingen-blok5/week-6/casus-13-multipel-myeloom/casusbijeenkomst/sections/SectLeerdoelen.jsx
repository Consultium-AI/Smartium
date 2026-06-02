import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li>
          <Inline>{`Uitleggen hoe je de respons op inductie- en consolidatiebehandeling bij multipel myeloom beoordeelt.`}</Inline>
        </li>
        <li>
          <Inline>{`Herkennen dat progressie onder lenalidomide-onderhoud betekent dat de patiënt lenalidomide-refractair is.`}</Inline>
        </li>
        <li>
          <Inline>{`Bepalen welke 2e-lijns behandeling passend is bij een patiënt met terugkerend multipel myeloom.`}</Inline>
        </li>
        <li>
          <Inline>{`De belangrijkste werkingsmechanismen van daratumumab, isatuximab, bortezomib, carfilzomib, dexamethason en pomalidomide uitleggen.`}</Inline>
        </li>
        <li>
          <Inline>{`Klinisch redeneren bij multipel myeloom: van klachten en labafwijkingen naar diagnose, vervolgonderzoek en beleid.`}</Inline>
        </li>
        <li>
          <Inline>{`Het gesprek over shared decision making en informed consent bij gevorderd multipel myeloom kunnen begrijpen.`}</Inline>
        </li>
      </ul>
    </div>
  )
}
