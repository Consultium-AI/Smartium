import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <ul className="list-disc pl-6 space-y-2.5">
        <li>
          <Inline>{`**Breslow-dikte**: de dikte van het melanoom; dit is een belangrijke prognostische factor.`}</Inline>
        </li>
        <li>
          <Inline>{`**Ulceratie**: verlies van de bovenste huidlaag boven de tumor; maakt het stadium ongunstiger.`}</Inline>
        </li>
        <li>
          <Inline>{`**Sentinel node (schildwachtklier)**: de eerste lymfeklier waar tumorcellen terecht kunnen komen.`}</Inline>
        </li>
        <li>
          <Inline>{`**Satellietlaesies**: kleine uitzaaiingen van het melanoom binnen 2 cm van het litteken van het primaire melanoom.`}</Inline>
        </li>
        <li>
          <Inline>{`**Dermatoscopie**: vergrote inspectie van een huidlaesie om kenmerken van maligniteit beter te beoordelen.`}</Inline>
        </li>
      </ul>
    </div>
  )
}
