import { TestTube } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image07GevoeligheidSummary = () => {
  const toc = [{ id: 'gevoeligheid', title: 'Gevoeligheid MIC MBC', icon: TestTube }]
  return (
    <SummaryLayout
      title="Gevoeligheid – MIC en MBC"
      description="Microdilutie, MIC en MBC bepaling."
      caseLabel="Week 5 Casus 9 LME 3: Afbeelding 7"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=lme3-welk-antibioticum-kies-ik-image07"
    >
      <section id="gevoeligheid" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Gevoeligheid</h2>
        <p className="text-slate-700 mb-4">Gouden standaard: microdilutie. Buizen met oplopende antibioticumconcentraties, incubatie, beoordeling groei.</p>
        <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
          <h4 className="font-bold text-teal-800 mb-2">MIC</h4>
          <p className="text-teal-700 text-sm m-0">Minimale remmende concentratie: laagste concentratie zonder zichtbare groei.</p>
        </div>
        <div className="p-5 bg-amber-50 rounded-xl border border-amber-200 mt-4">
          <h4 className="font-bold text-amber-800 mb-2">MBC</h4>
          <p className="text-amber-700 text-sm m-0">Minimale bactericide concentratie: laagste concentratie waarbij geen groei meer op platen na subcultuur.</p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image07GevoeligheidSummary
