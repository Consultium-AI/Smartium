import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Inleiding: wat zijn beroepsgebonden interstitiële longaandoeningen?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Beroepsgebonden interstitiële longaandoeningen, vaak afgekort als occupational ILD, zijn aandoeningen van de longen die ontstaan door langdurige blootstelling aan gevaarlijke stoffen op het werk. Het gaat hierbij om stoffen die worden ingeademd, zoals stof, rook, dampen, gassen en biologische agentia zoals schimmels.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De kern van deze aandoeningen is dat het longweefsel zelf wordt aangetast. Er ontstaat in meer of mindere mate ontsteking en uiteindelijk littekenvorming, ook wel fibrose genoemd. Dat kan de longfunctie beperken en op de lange termijn leiden tot chronische klachten.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een belangrijk uitgangspunt is dat deze aandoeningen vaak voorkomen in een beroepscontext, maar klinisch soms lastig te onderscheiden zijn van niet-beroepsgebonden ILD. Daarom moet je bij elke patiënt met ILD altijd nadenken over een mogelijke werkgerelateerde oorzaak.`}</Inline></p>
    </div>
  )
}
