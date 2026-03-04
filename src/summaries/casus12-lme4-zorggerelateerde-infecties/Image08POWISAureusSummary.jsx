import { User } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image08POWISAureusSummary = () => {
  const toc = [{ id: 'dragerschap', title: 'S. aureus en dragerschap', icon: User }]
  return (
    <SummaryLayout
      title="S. aureus – Waarom belangrijkste verwekker bij schone ingrepen?"
      description="Dragerschap op de huid als verklaring voor S. aureus bij postoperatieve wondinfecties."
      caseLabel="Week 6 Casus 12 LME 4: Afbeelding 8"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme4-zorggerelateerde-infecties-image08"
    >
      <section id="dragerschap" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Waarom S. aureus bij schone ingrepen?</h2>
        <p className="text-slate-700 mb-4">Ongeveer 30% van de bevolking is drager van S. aureus, met name in de neus, maar ook in de keel, perineum en op de huid.</p>
        <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
          <p className="text-primary-700 text-sm m-0">Bij schone ingrepen is de verwachting dat vooral eigen huidflora een potentiële bron zou kunnen zijn voor een postoperatieve wondinfectie. Daarom is <strong>dragerschap op de huid</strong> de belangrijkste verklaring voor het feit dat S. aureus de belangrijkste veroorzaker is van POWI bij schone ingrepen.</p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image08POWISAureusSummary
