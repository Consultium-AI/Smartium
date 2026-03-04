import { XCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image11PreventieScherenSummary = () => {
  const toc = [{ id: 'scheren', title: 'Preoperatief scheren', icon: XCircle }]
  return (
    <SummaryLayout
      title="Preoperatief scheren – Geen preventieve maatregel"
      description="Waarom preoperatief scheren juist een risico is voor POWI."
      caseLabel="Week 6 Casus 12 LME 4: Afbeelding 11"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme4-zorggerelateerde-infecties-image11"
    >
      <section id="scheren" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Welke maatregel draagt NIET bij?</h2>
        <div className="p-5 bg-red-50 rounded-xl border border-red-200">
          <p className="text-red-700 text-sm m-0">Het <strong>preoperatief scheren van de huid</strong> wordt juist gezien als risico voor het ontwikkelen van een POWI, en wordt om die reden dan ook vermeden.</p>
        </div>
        <p className="text-slate-700 mt-4">Andere maatregelen die wél bijdragen aan preventie zijn o.a.: reductie van het aantal medewerkers op de OK, preoperatieve antibiotische profylaxe, en optimalisatie van de operatiekamer ventilatie.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image11PreventieScherenSummary
