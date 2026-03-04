import { Users } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image17SecondVictimIntroSummary = () => {
  const toc = [{ id: 'victims', title: 'First en second victim', icon: Users }]
  return (
    <SummaryLayout
      title="First victim en second victim"
      description="Patiënt en zorgverlener na een medicatiefout."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 17"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image17"
    >
      <section id="victims" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">First victim en second victim</h2>
        <p className="text-slate-700 mb-4">Bij een medicatiefout: PRISMA kijk je terug om te onderzoeken wat er misging; PRI kijk je vooruit om herhaling te voorkomen.</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-red-50 rounded-xl border border-red-200">
            <h4 className="font-bold text-red-800 mb-2">First victim</h4>
            <p className="text-red-700 text-sm">De patiënt – direct getroffen door de fout.</p>
          </div>
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Second victim</h4>
            <p className="text-amber-700 text-sm">De betrokken zorgverlener – ook emotioneel/psychologisch getroffen en heeft ondersteuning nodig.</p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image17SecondVictimIntroSummary
