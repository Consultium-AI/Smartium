import { Target } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image24TestJeKennisSpectrumSummary = ({ standalone = true }) => {
  const toc = [
    { id: 'flucloxacilline', title: 'Flucloxacilline', icon: Target },
    { id: 'metronidazol', title: 'Metronidazol', icon: Target },
    { id: 'clindamycine', title: 'Clindamycine', icon: Target },
  ]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Test je kennis – Spectrum"
      description="Het spectrum van flucloxacilline, metronidazol en clindamycine."
      caseLabel="Week 7 Casus 13 LME 1: Afbeelding 24"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme1-antibiotica-introductie-image24"
    >
      <section id="flucloxacilline" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Spectrum</h2>
        <p className="text-slate-700 mb-6 leading-relaxed">
          Elk antibioticum heeft een specifiek spectrum. Het is belangrijk om dit goed te kennen. Hieronder het spectrum van enkele antibiotica:
        </p>
        <div className="space-y-4">
          <div className="p-4 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Flucloxacilline</h4>
            <p className="text-primary-700 text-sm m-0">Wordt gebruikt bij de behandeling van infecties met aerobe bacteriën en Grampositieve bacteriën.</p>
          </div>
          <div className="p-4 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Metronidazol</h4>
            <p className="text-teal-700 text-sm m-0">Kan <strong>alleen</strong> gebruikt worden bij de behandeling van infecties met anaerobe bacteriën.</p>
          </div>
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Clindamycine</h4>
            <p className="text-amber-700 text-sm m-0">Kan <strong>nooit</strong> gebruikt worden bij de behandeling van infecties door Gramnegatieve bacteriën.</p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image24TestJeKennisSpectrumSummary
