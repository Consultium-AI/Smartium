import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="rounded-xl border border-emerald-200 bg-emerald-50/80 dark:border-emerald-800 dark:bg-emerald-950/40 p-5 space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`Multipel myeloom is een plasmacelziekte met M-proteïne, anemie, botafwijkingen en soms nierfunctiestoornis. In deze casus werd de diagnose ondersteund door normocytaire anemie, laag-normale reticulocyten, verhoogd creatinine en een monoclonaal IgG-kappa M-proteïne. Na behandeling was er een **VGPR**, maar later ontstond progressie tijdens lenalidomide-onderhoud, waardoor de patiënt **lenalidomide-refractair** werd. Voor 2e lijns behandeling zijn vooral **isatuximab-carfilzomib-dexamethason** of **daratumumab-carfilzomib-dexamethason** belangrijke opties, afhankelijk van eerdere blootstelling en tolerantie. In een latere fase is shared decision making essentieel: dan moet duidelijk worden besproken wat behandeling nog kan opleveren, welke bijwerkingen te verwachten zijn en wanneer palliatief-supportieve zorg een passend alternatief is.`}</Inline>
      </p>
    </div>
  )
}
