import { Lightbulb } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image14OplossingenOrganisatiefalenSummary = ({ standalone = true }) => {
  const toc = [{ id: 'oplossingen', title: 'Oplossingen voor organisatiefalen', icon: Lightbulb }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Oplossingen voor organisatiefalen"
      description="Voorbeelden van verbetermaatregelen bij organisatiefalen."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 14"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image14"
    >
      <section id="oplossingen" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Oplossingen voor organisatiefalen</h2>
        <div className="space-y-3">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <strong>Probleem:</strong> Medicijnen lijken op elkaar en staan naast elkaar in de kast.<br />
            <strong>Oplossing:</strong> Geneesmiddelen die op elkaar lijken niet in dezelfde kast naast elkaar leggen.
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <strong>Probleem:</strong> Verpleegkundige werd afgeleid tijdens het delen van medicatie omdat niet duidelijk was dat hij/zij daarmee bezig was.<br />
            <strong>Oplossing:</strong> Hesje voor verpleegkundige met &apos;Niet storen, ik deel medicijnen&apos;.
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image14OplossingenOrganisatiefalenSummary
