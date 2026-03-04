import { Microscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image05RotavirusSummary = () => {
  const tableOfContents = [
    { id: 'verwekker', title: 'Verwekker', icon: Microscope },
    { id: 'kliniek', title: 'Kliniek', icon: Microscope },
  ]

  return (
    <SummaryLayout
      title="Rotavirus"
      description="Kenmerken, kliniek en morfologie van rotavirusinfectie."
      caseLabel="Week 5 Casus 9 LME 2: Afbeelding 5"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme2-virale-verwekkers-gastro-enteritis-image05"
    >
      <section id="verwekker" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Microscope className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Verwekker
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <ul className="list-disc pl-6 space-y-1 text-slate-600 text-sm">
            <li><strong>Familie:</strong> Reoviridae</li>
            <li><strong>Virale kenmerken:</strong> Dubbelstrengs gesegmenteerd RNA-genoom, eiwitmantel zonder lipide-envelop</li>
            <li>Wijdverbreid bij dieren en mensen; grotendeels soortspecifiek</li>
            <li>Virusdeeltjes zijn robuust en resistent tegen omgevingsfactoren</li>
          </ul>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      <section id="kliniek" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Microscope className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Kliniek
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Een rotavirusinfectie kan asymptomatisch zijn, maar kan soms ernstige symptomen veroorzaken, vooral bij jonge kinderen. Symptomatische infecties kenmerken zich door diarree en braken, al dan niet met koorts.
          </p>
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <p className="text-rose-700 text-sm m-0">
              Een ernstige rotavirusinfectie bij jonge kinderen kan leiden tot snelle en ernstige uitdroging, mede door het versterkende effect van het virale toxine.
            </p>
          </div>
          <p className="text-slate-600 text-sm">
            Rota (Latijn voor wiel) lijkt onder de elektronenmicroscoop op een cirkelvormige opstelling met spaken.
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image05RotavirusSummary
