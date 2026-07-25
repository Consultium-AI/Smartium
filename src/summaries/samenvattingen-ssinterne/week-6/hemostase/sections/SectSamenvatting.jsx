import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hemostase is het proces dat een bloeding stopt na vaatbeschadiging. Eerst treedt vasoconstrictie op, daarna volgt de primaire hemostase met vorming van een trombocytenplug, en vervolgens de secundaire hemostase met vorming van fibrine. De balans tussen stolling, remming en fibrinolyse bepaalt of iemand bloedt of juist trombose krijgt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Voor de primaire hemostase zijn trombocyten en von Willebrand factor essentieel. Voor de secundaire hemostase zijn stollingsfactoren, calcium, fosfolipiden, de lever en vitamine K belangrijk. Laboratoriumonderzoek richt zich op trombocytenaantal en -functie, von Willebrand factor, PT, aPTT en zo nodig aanvullende testen zoals de mengproef of D-dimeren.`}</Inline></p>
    </div>
  )
}
