import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`Na deze casusbijeenkomst moet je begrijpen:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`wat het verschil is tussen immuundeficiënties, auto-inflammatoire ziekten en auto-immuunziekten`}</Inline></li>
        <li><Inline>{`hoe positieve en negatieve selectie van T-lymfocyten in de thymus verlopen`}</Inline></li>
        <li><Inline>{`hoe perifere tolerantie voorkomt dat autoreactieve lymfocyten meteen ziekte veroorzaken`}</Inline></li>
        <li><Inline>{`waardoor tolerantiemechanismen kunnen worden doorbroken`}</Inline></li>
        <li><Inline>{`wat het verschil is tussen natuurlijke en pathogene autoantistoffen`}</Inline></li>
        <li><Inline>{`waarom de ziekte van Graves, SLE en Sjögren onder verschillende vormen van auto-immuniteit vallen`}</Inline></li>
        <li><Inline>{`hoe je de belangrijkste reumatische auto-immuunziekten klinisch van elkaar onderscheidt`}</Inline></li>
        <li><Inline>{`hoe de ziekte van Sjögren wordt geclassificeerd`}</Inline></li>
        <li><Inline>{`hoe Sjögren kan worden ingedeeld in verschillende patiëntcategorieën op basis van klachten, activiteit en B-celactivatie`}</Inline></li>
        <li><Inline>{`welke behandeling past bij de verschillende Sjögren-categorieën`}</Inline></li>
        <li><Inline>{`hoe je een patiënt met Sjögren klinisch redeneert van klachten naar diagnose en beleid`}</Inline></li>
      </ul>
    </div>
  )
}
