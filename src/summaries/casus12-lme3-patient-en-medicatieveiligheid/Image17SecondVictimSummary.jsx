import { Users } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image17SecondVictimSummary = () => {
  const toc = [{ id: 'second', title: 'Second victim', icon: Users }]
  return (
    <SummaryLayout
      title="Second victim"
      description="First victim (patiënt) en second victim (zorgverlener) – beide hebben ondersteuning nodig."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 17"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image17"
    >
      <section id="second" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">First victim en second victim</h2>
        <p className="text-slate-700 mb-4"><strong>First victim:</strong> De patiënt is de first victim – direct getroffen door de medicatiefout.</p>
        <p className="text-slate-700 mb-4"><strong>Second victim:</strong> Vergeet de zorgverleners niet. Zij kunnen ook de &apos;second victim&apos; zijn en hebben eveneens ondersteuning nodig.</p>
        <p className="text-slate-700 text-sm">PRISMA kijk je terug om te onderzoeken wat er misging. PRI kijk je vooruit: hoe zorg je ervoor dat een soortgelijke fout zich niet opnieuw voordoet?</p>
      </section>
    </SummaryLayout>
  )
}

export default Image17SecondVictimSummary
