import { AlertTriangle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image05FoutenMedicatieprocesSummary = () => {
  const toc = [{ id: 'fouten', title: 'Fouten binnen het medicatieproces', icon: AlertTriangle }]
  return (
    <SummaryLayout
      title="Fouten binnen het medicatieproces"
      description="Voorbeelden van medicatiefouten per stap van het medicatieproces."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 5"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image05"
    >
      <section id="fouten" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Fouten binnen het medicatieproces</h2>
        <p className="text-slate-700 mb-4">Elke fout hoort bij een onderdeel van het medicatieproces:</p>
        <div className="space-y-2 text-slate-700 text-sm">
          <div className="p-3 bg-slate-50 rounded-lg"><strong>Opslag en beheer:</strong> Amoxicilline/clavulaanzuur niet in koelkast bewaard; verkeerde medicatie in afdelingsvoorraad.</div>
          <div className="p-3 bg-slate-50 rounded-lg"><strong>Voorschrijven:</strong> Arts controleert nierfunctie niet, schrijft verkeerde dosis ciprofloxacine voor; amoxicilline voorgeschreven bij bekende penicilline-allergie.</div>
          <div className="p-3 bg-slate-50 rounded-lg"><strong>Ter hand stellen:</strong> Patiënt krijgt nitrofurantoïne directe afgifte in plaats van gereguleerde afgifte.</div>
          <div className="p-3 bg-slate-50 rounded-lg"><strong>Gereed maken:</strong> Hele ampul cotrimoxazol toegevoegd in plaats van halve.</div>
          <div className="p-3 bg-slate-50 rounded-lg"><strong>Toedienen en registreren:</strong> Infuus flucloxacilline bedoeld voor 24 uur in 1 uur ingelopen.</div>
          <div className="p-3 bg-slate-50 rounded-lg"><strong>Evaluatie:</strong> Allergische reactie bij patiënt zonder bekende allergie; patiënt met ernstige bijwerkingen heeft geen contact opgenomen.</div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image05FoutenMedicatieprocesSummary
