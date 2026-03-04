import { XCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image11PreoperatiefScherenSummary = () => {
  const toc = [{ id: 'scheren', title: 'Preoperatief scheren', icon: XCircle }]
  return (
    <SummaryLayout
      title="Preoperatief scheren – Geen preventieve maatregel"
      description="Waarom preoperatief scheren van de huid geen bijdrage levert aan het voorkomen van POWI."
      caseLabel="Week 6 Casus 12 LME 4: Afbeelding 11"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme4-zorggerelateerde-infecties-image11"
    >
      <section id="scheren" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Preoperatief scheren</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Het preoperatief scheren van de huid wordt juist gezien als <strong>risico</strong> voor het ontwikkelen van een POWI, en wordt om die reden dan ook vermeden.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Wel bijdragend aan het voorkomen van postoperatieve wondinfectie zijn onder andere: reductie van het aantal medewerkers op de OK, preoperatieve antibiotische profylaxe (waar geïndiceerd), en optimalisatie van de operatiekamer ventilatie.
        </p>
      </section>
    </SummaryLayout>
  )
}

export default Image11PreoperatiefScherenSummary
