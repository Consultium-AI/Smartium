import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li>
          <Inline>{`Herkennen hoe je bij een kind met algehele malaise, koorts en een zwelling in de buik klinisch redeneert.`}</Inline>
        </li>
        <li>
          <Inline>{`Begrijpen welke differentiaaldiagnose past bij een buikmassa bij een kind.`}</Inline>
        </li>
        <li>
          <Inline>{`Weten welke diagnostiek nodig is om de oorzaak van de buikzwelling te onderzoeken.`}</Inline>
        </li>
        <li>
          <Inline>{`Inzien waarom een maligniteit, en met name een niertumor, in deze casus een belangrijke overweging is.`}</Inline>
        </li>
        <li>
          <Inline>{`De belangrijkste kenmerken van een Wilms-tumor, neuroblastoom en andere oorzaken van een buikmassa kunnen onderscheiden.`}</Inline>
        </li>
        <li>
          <Inline>{`Begrijpen welke behandeling en vervolgstappen logisch zijn bij verdenking op een kindertumor.`}</Inline>
        </li>
      </ul>
    </div>
  )
}
