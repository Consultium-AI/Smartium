import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Secundaire hemostase: vorming van fibrine`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Secundaire hemostase zorgt voor verstijving van de trombocytenplug. Het doel is de vorming van fibrinedraden. Daardoor wordt het stolsel steviger en stabieler.`}</Inline></p>
      <PBody text={`De belangrijkste initiator van de secundaire hemostase is **tissue factor**. Dit start een cascade van enzymactivatie, waarbij calcium en fosfolipiden nodig zijn. De laatste stap is de omzetting van fibrinogeen in fibrine.`} />
      <p className="leading-relaxed"><Inline>{`De stollingsfactoren worden gemaakt in de lever. De aanmaak van factor II, VII, IX en X is afhankelijk van vitamine K.`}</Inline></p>
      <SubHeading><Inline>{`De stollingscascade in grote lijnen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Tissue factor vormt samen met geactiveerd factor VII een complex. Dat complex activeert onder andere factor X en factor V. Daarna ontstaat trombine. Trombine zet fibrinogeen om in fibrine. Zo ontstaat een stevig netwerk dat de bloedplaatjesplug versterkt.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Kern van de secundaire hemostase`}</Inline></SubHeading>
      <DataTable rows={[["Stap", "Belangrijk punt"], ["Start", "Tissue factor"], ["Activatie", "Cascade van stollingsfactoren"], ["Nodig", "Calcium en fosfolipiden"], ["Eindproduct", "Fibrine"], ["Plaats van aanmaak factoren", "Lever"], ["Vitamine K-afhankelijk", "Factor II, VII, IX en X"]]} />
    </div>
  )
}
