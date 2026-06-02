import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`Deze casusbijeenkomst draait om **zwelling in de oksel** binnen een bredere context van **auto-immuniteit en reumatische aandoeningen**, met als belangrijkste ziektebeeld **Sjögren**. Daarbij wordt niet alleen gekeken naar droge ogen en droge mond, maar ook naar systemische klachten, overlap met andere auto-immuunziekten en de manier waarop je patiënten in verschillende klinische categorieën kunt indelen.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`Een belangrijk uitgangspunt is dat bindweefsel overal in het lichaam voorkomt. Als het immuunsysteem zich richt tegen onderdelen van dat bindweefsel, kunnen klachten in meerdere organen ontstaan. Daarom geven reumatische aandoeningen vaak een combinatie van gewrichtsklachten, huidafwijkingen, longproblemen, nierbetrokkenheid, neurologische klachten of klierproblemen.`}</Inline>
      </p>
    </div>
  )
}
