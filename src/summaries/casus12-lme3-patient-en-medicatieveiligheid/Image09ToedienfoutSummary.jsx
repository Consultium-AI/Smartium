import { AlertCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image09ToedienfoutSummary = ({ standalone = true }) => {
  const toc = [{ id: 'toedienfout', title: 'Medicatiefout met grootste kans op patiënt', icon: AlertCircle }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Welke medicatiefout bereikt de patiënt het vaakst?"
      description="Toedienfout heeft de grootste kans om de patiënt te bereiken."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 9"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image09"
    >
      <section id="toedienfout" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Medicatiefout met grootste kans op patiënt</h2>
        <p className="text-slate-700 mb-4">Van alle typen medicatiefouten (voorschrijffout, afleverfout, opslagfout, bereidingsfout, toedienfout, evaluatiefout, overdrachtsfout) heeft de <strong>toedienfout</strong> de grootste kans om de patiënt daadwerkelijk te bereiken.</p>
        <p className="text-slate-700 text-sm">Bij toediening is het geneesmiddel al voorbereid en wordt het direct aan de patiënt gegeven; fouten in deze fase zijn moeilijker te onderscheppen dan fouten in eerdere stappen.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image09ToedienfoutSummary
