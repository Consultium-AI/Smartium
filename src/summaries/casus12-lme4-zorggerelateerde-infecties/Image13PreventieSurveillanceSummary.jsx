import { Activity } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image13PreventieSurveillanceSummary = () => {
  const toc = [{ id: 'surveillance', title: 'Surveillance', icon: Activity }]
  return (
    <SummaryLayout
      title="Surveillance – IGJ kwaliteitsindicator"
      description="Belangrijke aspecten van surveillance naar postoperatieve wondinfecties."
      caseLabel="Week 6 Casus 12 LME 4: Afbeelding 13"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme4-zorggerelateerde-infecties-image13"
    >
      <section id="surveillance" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Surveillance</h2>
        <p className="text-slate-700 mb-4">De Inspectie Gezondheidszorg en Jeugd (IGJ) heeft als één van de kwaliteitsindicatoren dat actieve surveillance dient plaats te vinden naar het voorkomen van postoperatieve wondinfectie en zorggerelateerde infecties.</p>
        <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
          <h4 className="font-bold text-primary-800 mb-2">Belangrijke aspecten van surveillance</h4>
          <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
            <li>Registreren</li>
            <li>Interpreteren</li>
            <li>Interveniëren</li>
          </ul>
          <p className="text-primary-700 text-sm mt-2 m-0">Alle bovenstaande aspecten zijn belangrijk.</p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image13PreventieSurveillanceSummary
