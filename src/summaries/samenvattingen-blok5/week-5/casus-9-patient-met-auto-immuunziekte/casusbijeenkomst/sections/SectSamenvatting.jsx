import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <div className="p-5 bg-emerald-50/90 dark:bg-emerald-500/10 rounded-xl border-l-4 border-emerald-400 space-y-4">
        <p className="leading-relaxed text-emerald-900 dark:text-emerald-100 m-0">
          <Inline>{`Bij een kind met een buikzwelling denk je breed: nier-, neurale, lever-, darm- en hematologische oorzaken horen allemaal in de differentiaaldiagnose. In deze casus wijzen de jonge leeftijd, malaise, bolle buik, hypertensie en raccoon eyes sterk richting neuroblastoom. De diagnose wordt ondersteund door echo, MRI, urinecatecholamines en MIBG-scan, en bij Tom blijken er ook beenmerg- en botuitzaaiingen te zijn. Dat maakt het een hoog-risico neuroblastoom.`}</Inline>
        </p>
        <p className="leading-relaxed text-emerald-900 dark:text-emerald-100 m-0">
          <Inline>{`De behandeling bestaat uit chemotherapie, operatie, bestraling en immunotherapie, met belangrijke acute bijwerkingen en lange-termijneffecten zoals nierproblemen, neuropathie, gehoorverlies, cardiomyopathie en infertiliteit.`}</Inline>
        </p>
      </div>
    </div>
  )
}
