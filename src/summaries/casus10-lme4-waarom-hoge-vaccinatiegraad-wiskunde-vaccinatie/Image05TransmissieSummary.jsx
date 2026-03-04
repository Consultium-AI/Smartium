import { ArrowRightLeft } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image05TransmissieSummary = () => {
  const toc = [{ id: 'transmissie', title: 'Directe en indirecte transmissie', icon: ArrowRightLeft }]
  return (
    <SummaryLayout
      title="Transmissie – Direct en indirect"
      description="Waarom een hoge vaccinatiegraad essentieel is en hoe transmissie plaatsvindt."
      caseLabel="Week 5 Casus 10 LME 4: Afbeelding 5"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image05"
    >
      <section id="transmissie" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Een hoge vaccinatiegraad is essentieel</h2>
        <p className="text-slate-700 mb-4">Uit wiskundige modellering volgt dat een vaccinatiegraad van 90–95% nodig is. Wiskundige modellering is een van de belangrijkste methoden in de infectieziekte-epidemiologie.</p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-2">Directe transmissie</h4>
            <p className="text-blue-700 text-sm mb-2">Voorbeelden: fysiek contact (handen schudden), druppeltransmissie (hoesten/niezen), intiem seksueel contact.</p>
          </div>
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Indirecte transmissie</h4>
            <p className="text-amber-700 text-sm m-0">Vereist een tussengastheer (bijv. mug, vlieg of slak).</p>
          </div>
        </div>
        <p className="text-slate-700 text-sm">Het voorkomen van infectie bij één persoon vermindert het risico voor anderen. Bij veel geïnfecteerden in de buurt stijgt het risico. Daarom kijken we naar populaties en gebruiken we wiskundige modellen.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image05TransmissieSummary
