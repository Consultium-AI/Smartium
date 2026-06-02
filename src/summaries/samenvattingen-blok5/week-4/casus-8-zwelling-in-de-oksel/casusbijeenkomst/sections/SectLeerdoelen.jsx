import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li>
          <Inline>{`Begrijpen hoe het immuunsysteem normaal voorkomt dat autoreactieve lymfocyten schade veroorzaken.`}</Inline>
        </li>
        <li>
          <Inline>{`Kunnen uitleggen wat het verschil is tussen immuundeficiëntie, auto-inflammatie en auto-immuniteit.`}</Inline>
        </li>
        <li>
          <Inline>{`Weten hoe T-lymfocyten in de thymus worden geselecteerd.`}</Inline>
        </li>
        <li>
          <Inline>{`De belangrijkste mechanismen van perifere tolerantie kunnen noemen.`}</Inline>
        </li>
        <li>
          <Inline>{`Herkennen hoe auto-immuniteit kan ontstaan door doorbreking van tolerantiemechanismen.`}</Inline>
        </li>
        <li>
          <Inline>{`De ziekte van Sjögren kunnen koppelen aan klachten, diagnostiek, subgroepen en behandeling.`}</Inline>
        </li>
        <li>
          <Inline>{`Verschillende reumatische aandoeningen kunnen onderscheiden op basis van typische klachten en orgaanbetrokkenheid.`}</Inline>
        </li>
        <li>
          <Inline>{`Begrijpen waarom sommige patiënten vooral lokale sicca-klachten hebben en andere juist systemische ziekteactiviteit.`}</Inline>
        </li>
        <li>
          <Inline>{`De rol van aanvullende auto-immuunziekten en orgaanbetrokkenheid bij Sjögren kunnen plaatsen.`}</Inline>
        </li>
      </ul>
    </div>
  )
}
