import { Microscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image21SpectrumEiwitsyntheseremmersSummary = ({ standalone = true }) => {
  const toc = [{ id: 'spectrum', title: 'Spectrum eiwitsyntheseremmers', icon: Microscope }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Spectrum eiwitsyntheseremmers"
      description="Spectrum van macroliden en clindamycine."
      caseLabel="Week 7 Casus 13 LME 1: Afbeelding 21"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme1-antibiotica-introductie-image21"
    >
      <section id="spectrum" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Spectrum</h2>
        <div className="space-y-4 mb-4">
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-2">Macroliden</h4>
            <p className="text-slate-700 text-sm">Grampositieve kokken, atypische bacteriën (zoals <em>Legionella</em>, <em>Mycoplasma</em>, <em>Chlamydia</em>) en sommige gramnegatieve bacteriën.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-2">Clindamycine</h4>
            <p className="text-slate-700 text-sm">Grampositieve kokken en anaerobe bacteriën. Geen gramnegatieve bacteriën.</p>
          </div>
        </div>
        <p className="text-slate-700 leading-relaxed">
          Stellingen: Macroliden hebben een breder spectrum dan penicillines. Clindamycine dekt anaerobe bacteriën, macroliden niet.
        </p>
      </section>
    </SummaryLayout>
  )
}

export default Image21SpectrumEiwitsyntheseremmersSummary
