import { Bug } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image04OorzakenSummary = ({ standalone = true }) => {
  const tableOfContents = [
    { id: 'oorzaken', title: 'Oorzaken virale gastro-enteritis', icon: Bug },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title="Oorzaken van virale gastro-enteritis"
      description="Frequente virale verwekkers en risicogroepen voor complicaties."
      caseLabel="Week 5 Casus 9 LME 2: Afbeelding 4"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme2-virale-verwekkers-gastro-enteritis-image04"
    >
      <section id="oorzaken" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Bug className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Oorzaken virale gastro-enteritis
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Naast rotavirus en norovirus behoren ook <strong>astrovirus</strong>, <strong>adenovirus</strong> (type 40 en 41) en <strong>sapovirus</strong> tot de relatief frequent voorkomende gastro-enteritis virussen.
          </p>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Immuungecompromitteerde patienten</h4>
            <p className="text-teal-700 text-sm m-0">
              Bij ernstig immuungecompromitteerde patienten kan <strong>cytomegalovirus</strong> buikpijn en diarree veroorzaken (CMV colitis). Ook bij systeemziekten zoals influenza of SARS-CoV-2 kunnen diarreeklachten optreden.
            </p>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Nederland – kinderen onder 5</h4>
            <p className="text-amber-700 text-sm m-0">
              Bij patienten die zich bij de huisarts presenteren met braken en/of diarree is de oorzaak bij kinderen veelal viraal. <strong>Rotavirus</strong> en <strong>norovirus</strong> zijn de meest voorkomende verwekkers bij kinderen onder de 5 jaar.
            </p>
          </div>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2">Risicogroepen voor complicaties</h4>
            <p className="text-rose-700 text-sm m-0">
              Neonaten, ouderen en personen met verminderde afweer hebben een verhoogde kans op complicaties.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image04OorzakenSummary
