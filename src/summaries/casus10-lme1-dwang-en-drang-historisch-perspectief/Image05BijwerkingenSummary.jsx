import { AlertTriangle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image05BijwerkingenSummary = ({ standalone = true }) => {
  const toc = [{ id: 'bijwerkingen', title: 'Bijwerkingen', icon: AlertTriangle }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Bijwerkingen"
      description="Leerplicht, Bond tegen Verplichte Vaccinatie en postvaccinale encephalitis."
      caseLabel="Week 5 Casus 10 LME 1: Afbeelding 5"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme1-dwang-en-drang-historisch-perspectief-image05"
    >
      <section id="bijwerkingen" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Bijwerkingen</h2>
        <p className="text-slate-700 mb-4">In 1901 ontstond door de leerplicht een indirecte vaccinatieplicht: kinderen moesten naar school, dus moesten ze gevaccineerd zijn. Dit bestond formeel tot 1940. Er kwam verzet: de Bond tegen de Verplichte Vaccinatie. Bezwaren: gewetensbezwaren (Gods voorzienigheid) en medische bezwaren. In de jaren 1920 kreeg postvaccinale encephalitis veel aandacht en beinvloedde het debat over de indirecte vaccinatieplicht.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image05BijwerkingenSummary
