import { Droplets } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image16CasusVraag2Summary = ({ standalone = true }) => {
  const toc = [{ id: 'bloedkweken', title: 'Casus – Vraag 2: Bloedkweken', icon: Droplets }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Casus: 78-jarige man – Vraag 2"
      description="Bloedkweken bij sepsis."
      caseLabel="Week 6 Casus 12 LME 2: Afbeelding 16"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme2-sepsis-image16"
    >
      <section id="bloedkweken" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Casus – Vraag 2: Bloedkweken</h2>
        <p className="text-slate-700 mb-4">Moet je bloedkweken afnemen bij deze patiënt met sepsis?</p>
        <p className="text-slate-700 mb-4"><strong>Ja.</strong> Bij sepsis moeten altijd bloedkweken worden afgenomen vóór start van antibiotica (indien mogelijk). Dit verhoogt de kans op het identificeren van de verwekker en maakt gerichte therapie mogelijk.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image16CasusVraag2Summary
