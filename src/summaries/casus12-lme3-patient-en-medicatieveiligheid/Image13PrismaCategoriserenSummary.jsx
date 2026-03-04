import { Layers } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image13PrismaCategoriserenSummary = ({ standalone = true }) => {
  const toc = [{ id: 'categoriseren', title: 'Organisatiefalen vs menselijk falen', icon: Layers }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="PRISMA – Categoriseren van oorzaken"
      description="Voorbeelden van organisatiefalen en menselijk falen."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 13"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image13"
    >
      <section id="categoriseren" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Organisatiefalen vs menselijk falen</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Organisatiefalen</h4>
            <ul className="list-disc pl-6 text-amber-700 text-sm space-y-1">
              <li>Apotheek heeft geen voorraad essentieel geneesmiddel</li>
              <li>Medische dossiers worden niet automatisch geüpdatet</li>
              <li>Verpleegkundige afgeleid omdat niet duidelijk was dat hij/zij bezig was</li>
              <li>Medicijnen lijken op elkaar en staan naast elkaar in de kast</li>
            </ul>
          </div>
          <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-2">Menselijk falen</h4>
            <ul className="list-disc pl-6 text-blue-700 text-sm space-y-1">
              <li>Arts vergeet allergie te controleren tijdens drukke nachtdienst</li>
              <li>Verpleegkundige heeft niet goed gekeken welk geneesmiddel zij pakte</li>
            </ul>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image13PrismaCategoriserenSummary
