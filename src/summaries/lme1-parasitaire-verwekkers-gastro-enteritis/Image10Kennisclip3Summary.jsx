import { Video } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image10Kennisclip3Summary = () => {
  const tableOfContents = [
    { id: 'inleiding', title: 'Inleiding diagnostiek', icon: Video },
    { id: 'kennisclip', title: 'Kennisclip 3', icon: Video },
  ]

  return (
    <SummaryLayout
      title="Kennisclip 3 – Aantonen darmparasieten"
      description="Aanvullende diagnostiek voor parasitaire infecties en verschillen met virale en bacteriële verwekkers."
      caseLabel="Week 5 Casus 9 LME 1: Afbeelding 10"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme1-parasitaire-verwekkers-gastro-enteritis-image10"
    >
      <section id="inleiding" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Video className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Inleiding diagnostiek
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Aangezien parasieten serieuze maag- en darmklachten kunnen veroorzaken, is het belangrijk dat er goede aanvullende diagnostiek bestaat om deze parasitaire infecties aan te tonen.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      <section id="kennisclip" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Video className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Kennisclip 3
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>In deze kennisclip wordt uitgelegd:</p>
          <ul className="list-disc pl-6 space-y-1 text-slate-600 text-sm">
            <li>Hoe darmparasieten met behulp van aanvullende diagnostiek aangetoond kunnen worden</li>
            <li>Wat de belangrijkste verschillen zijn ten opzichte van virale en bacteriële verwekkers van diarree</li>
          </ul>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image10Kennisclip3Summary
