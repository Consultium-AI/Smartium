import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <div className="p-5 bg-emerald-50/90 dark:bg-emerald-500/10 rounded-xl border-l-4 border-emerald-400 space-y-4">
        <p className="leading-relaxed text-emerald-900 dark:text-emerald-100 m-0">
          <Inline>{`De kern van deze casusbijeenkomst is dat auto-immuniteit ontstaat wanneer tolerantiemechanismen falen. T-cellen worden normaal in de thymus geselecteerd en autoreactieve cellen worden in de periferie geremd door anergie, suppressie en immune privileged sites. Als die bescherming wordt doorbroken, kunnen auto-immuunziekten ontstaan.`}</Inline>
        </p>
        <p className="leading-relaxed text-emerald-900 dark:text-emerald-100 m-0">
          <Inline>{`Binnen de reumatologie is **Sjögren** een belangrijk voorbeeld van een auto-immuunziekte met zowel lokale klierklachten als systemische variatie. De diagnose steunt op klachten, objectieve testen en serologie. De behandeling hangt af van de categorie: van lokale maatregelen bij droge ogen en droge mond tot immunosuppressieve behandeling bij systemische ziekteactiviteit.`}</Inline>
        </p>
      </div>
    </div>
  )
}
