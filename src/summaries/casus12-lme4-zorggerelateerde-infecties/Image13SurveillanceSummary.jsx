import { Activity } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image13SurveillanceSummary = () => {
  const toc = [{ id: 'surveillance', title: 'Surveillance', icon: Activity }]
  return (
    <SummaryLayout
      title="Surveillance bij POWI"
      description="Belangrijke aspecten van actieve surveillance als kwaliteitsindicator."
      caseLabel="Week 6 Casus 12 LME 4: Afbeelding 13"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme4-zorggerelateerde-infecties-image13"
    >
      <section id="surveillance" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Surveillance</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          De Inspectie Gezondheidszorg en Jeugd (IGJ) heeft gesteld dat actieve surveillance moet plaatsvinden als een van de kwaliteitsindicatoren voor de preventie van postoperatieve wondinfecties en zorggerelateerde infecties.
        </p>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Een belangrijk aspect van surveillance omvat <strong>alle</strong> van de volgende:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Registreren</li>
          <li>Interpreteren</li>
          <li>Interveniëren</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image13SurveillanceSummary
