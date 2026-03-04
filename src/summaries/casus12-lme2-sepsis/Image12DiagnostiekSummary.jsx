import { Stethoscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image12DiagnostiekSummary = () => {
  const toc = [{ id: 'diagnostiek', title: 'Diagnostiek', icon: Stethoscope }]
  return (
    <SummaryLayout
      title="Waarom infectiefocus zoeken – Diagnostiek"
      description="Gerichte diagnostiek op basis van vermoedelijke focus."
      caseLabel="Week 6 Casus 12 LME 2: Afbeelding 12"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme2-sepsis-image12"
    >
      <section id="diagnostiek" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Diagnostiek</h2>
        <p className="text-slate-700 mb-4">Het vermoeden van een infectiefocus bepaalt welke aanvullende diagnostiek zinvol is:</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Long: thoraxfoto, sputumkweek</li>
          <li>Abdomen: echografie, CT, eventueel punctie</li>
          <li>Urinewegen: urinekweek, urinesediment</li>
          <li>Bloedbaan: bloedkweken (altijd bij sepsis)</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image12DiagnostiekSummary
