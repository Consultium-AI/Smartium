import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <div className="p-5 bg-emerald-50/90 dark:bg-emerald-500/10 rounded-xl border-l-4 border-emerald-400 space-y-4">
        <p className="leading-relaxed text-emerald-900 dark:text-emerald-100 m-0">
          <Inline>{`Bij een kind met **algehele malaise, koorts en een buikzwelling** moet je breed denken, maar een **buikmassa** maakt een **tumor** een belangrijke mogelijkheid. De klinische redenering draait om het onderscheid tussen een massa uit de **nier**, de **bijnier/sympathische keten** of een ander buikorgaan. De twee klassieke kindertumoren in deze context zijn de **Wilms-tumor** en het **neuroblastoom**.`}</Inline>
        </p>
        <p className="leading-relaxed text-emerald-900 dark:text-emerald-100 m-0">
          <Inline>{`De eerste diagnostische stap is meestal **echografie**, gevolgd door verdere beeldvorming en aanvullend onderzoek om de oorsprong en uitgebreidheid vast te stellen. Vroege herkenning en snelle verwijzing zijn belangrijk, omdat de behandeling specialistisch is en afhangt van de uiteindelijke diagnose.`}</Inline>
        </p>
      </div>
    </div>
  )
}
