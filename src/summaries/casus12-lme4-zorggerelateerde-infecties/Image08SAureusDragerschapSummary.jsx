import { User } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image08SAureusDragerschapSummary = ({ standalone = true }) => {
  const toc = [{ id: 'dragerschap', title: 'S. aureus en dragerschap', icon: User }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="S. aureus bij schone ingrepen – Dragerschap"
      description="Waarom S. aureus de belangrijkste veroorzaker is van POWI bij schone ingrepen."
      caseLabel="Week 6 Casus 12 LME 4: Afbeelding 8"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme4-zorggerelateerde-infecties-image08"
    >
      <section id="dragerschap" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Dragerschap op de huid</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Ongeveer 30% van de bevolking is drager van S. aureus, met name in de neus, maar ook in de keel, het perineum en op de huid.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Bij schone ingrepen is de verwachting dat vooral eigen huidflora een potentiële bron zou kunnen zijn voor een postoperatieve wondinfectie. Daarom is dragerschap op de huid de belangrijkste verklaring voor het feit dat S. aureus de belangrijkste veroorzaker is van POWI bij schone ingrepen – niet een besmette omgeving of het ontbreken van werkzame antibiotische profylaxe.
        </p>
      </section>
    </SummaryLayout>
  )
}

export default Image08SAureusDragerschapSummary
