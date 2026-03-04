import { Microscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image07AdenovirusSummary = ({ standalone = true }) => {
  const tableOfContents = [
    { id: 'verwekker', title: 'Verwekker', icon: Microscope },
    { id: 'kliniek', title: 'Kliniek', icon: Microscope },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title="Adenovirus"
      description="Kenmerken en kliniek van adenovirus gastro-enteritis."
      caseLabel="Week 5 Casus 9 LME 2: Afbeelding 7"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme2-virale-verwekkers-gastro-enteritis-image07"
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
            <li><strong>Familie:</strong> Adenoviridae</li>
            <li><strong>Virale kenmerken:</strong> Dubbelstrengs DNA-virus, eiwitmantel zonder lipide-envelop</li>
            <li>Er zijn meer dan 100 serotypes; serotype 40 en 41 veroorzaken gastro-enteritis</li>
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
            Adenovirus gastro-enteritis veroorzaakt waterige diarree, braken en koorts. De incubatietijd is 3-10 dagen. Infecties zijn vaak mild en zelfbeperkend.
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image07AdenovirusSummary
