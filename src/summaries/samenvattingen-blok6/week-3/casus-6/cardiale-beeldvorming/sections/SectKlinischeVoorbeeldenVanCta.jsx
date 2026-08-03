import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische voorbeelden van CTA`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`CTA kan in de praktijk gebruikt worden om stenosen aan te tonen of uit te sluiten. Soms wordt een verdenking op een proximale stenose in de LAD op CTA bevestigd op invasieve coronairangiografie. Ook een bijna afgesloten proximale LAD kan op CTA zichtbaar zijn en daarna bevestigd worden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Er zijn echter ook fout-positieve uitslagen mogelijk, vooral bij coronairen met veel kalk. Dan lijkt er op CTA een significante stenose te zijn, terwijl dat op invasieve coronairangiografie niet bevestigd wordt. Dat laat zien dat calcificatie de beoordeling kan bemoeilijken.`}</Inline></p>
    </div>
  )
}
