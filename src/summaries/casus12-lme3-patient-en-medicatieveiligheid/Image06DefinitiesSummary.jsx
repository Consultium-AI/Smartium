import { BookOpen } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image06DefinitiesSummary = ({ standalone = true }) => {
  const toc = [{ id: 'definities', title: 'Definities medicatiefouten', icon: BookOpen }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Medicatiefouten – definities"
      description="Schade, onbedoelde schade, vermijdbare en niet-vermijdbare schade."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 6"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image06"
    >
      <section id="definities" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Definities bij medicatiefouten</h2>
        <div className="space-y-3">
          <div className="p-4 bg-red-50 rounded-xl border border-red-200">
            <strong>Schade:</strong> Een gebeurtenis die leidt tot verlenging/verslechtering van behandeling, tijdelijk of permanent fysiek/psychologisch/sociaal functieverlies, of overlijden.
          </div>
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
            <strong>Onbedoelde schade:</strong> Onbedoeld gevolg, veroorzaakt door (niet) handelen van zorgverlener of zorgsysteem, leidend tot tijdelijke of permanente beperking of overlijden.
          </div>
          <div className="p-4 bg-orange-50 rounded-xl border border-orange-200">
            <strong>Vermijdbare schade:</strong> Schade die na analyse had kunnen worden voorkomen door passende maatregelen. Voorbeeld: hypoglykemie door te hoge dosis insuline bij verkeerd gerapporteerde glucosewaarde.
          </div>
          <div className="p-4 bg-teal-50 rounded-xl border border-teal-200">
            <strong>Niet-vermijdbare schade:</strong> Schade die niet had kunnen worden voorkomen, ook niet met optimale zorg. Voorbeeld: braken en diarree door flucloxacilline, leidend tot verlengde opname.
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image06DefinitiesSummary
