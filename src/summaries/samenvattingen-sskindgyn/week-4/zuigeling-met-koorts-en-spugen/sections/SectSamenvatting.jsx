import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Koorts en spugen bij een jonge zuigeling zijn aspecifieke klachten, maar kunnen passen bij een ernstige infectie. Een urineweginfectie is een belangrijke diagnose om aan te denken, zeker bij een kind jonger dan 3 maanden met koorts zonder focus of bij een kind jonger dan 6 maanden met braken en verdenking op UWI.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De diagnose wordt ondersteund door urineonderzoek met leukocyten en nitriet en bevestigd met een betrouwbare urinekweek. Bij een hogere UWI zie je vaak ook verhoogd CRP, leukocytose en soms nierfunctiestoornissen. Bij onvoldoende herstel binnen 48 uur, verhoogd creatinine of andere alarmsignalen denk je aan een atypische UWI en zoek je naar onderliggende urinewegafwijkingen met echo en zo nodig aanvullend onderzoek.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een gecompliceerde UWI is follow-up belangrijk, onder andere voor nierfunctie, littekenvorming, blaasfunctie en eventuele profylaxe.`}</Inline></p>
    </div>
  )
}
