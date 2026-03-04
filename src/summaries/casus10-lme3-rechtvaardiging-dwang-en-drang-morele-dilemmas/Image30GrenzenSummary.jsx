import { Shield } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image30GrenzenSummary = ({ standalone = true }) => {
  const toc = [{ id: 'grenzen', title: 'Grenzen', icon: Shield }]
  return (
    <SummaryLayout
      standalone={standalone}
 title="Grenzen" description="De grenzen van dwang en drang bij vaccinatie." caseLabel="Week 5 Casus 10 LME 3: Afbeelding 30" tableOfContents={toc} practiceLink="/oefenvragen?lme=casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image30">
      <section id="grenzen" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Grenzen</h2>
        <p className="text-slate-700 mb-4">Er zijn grenzen aan wat moreel en juridisch aanvaardbaar is bij dwang en drang. Fysieke dwang tot vaccinatie overschrijdt in de meeste gevallen deze grenzen; drang via toegangsbeperkingen roept andere ethische vragen op.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image30GrenzenSummary
