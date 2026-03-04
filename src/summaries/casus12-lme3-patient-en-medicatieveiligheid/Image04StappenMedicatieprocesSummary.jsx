import { ListOrdered } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image04StappenMedicatieprocesSummary = ({ standalone = true }) => {
  const toc = [{ id: 'stappen', title: 'Stappen medicatieproces', icon: ListOrdered }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Stappen medicatieproces"
      description="De 6 stappen van het medicatieproces en mogelijke fouten per stap."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 4"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image04"
    >
      <section id="stappen" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Stappen medicatieproces</h2>
        <p className="text-slate-700 mb-4">Er kan veel misgaan binnen het medicatieproces. Het medicatieproces bestaat uit 6 stappen:</p>
        <ol className="list-decimal pl-6 space-y-3 text-slate-700">
          <li><strong>Voorschrijven:</strong> De arts of bevoegde zorgverlener schrijft een geneesmiddel voor.</li>
          <li><strong>Ter hand stellen / afleveren:</strong> De apotheek levert het geneesmiddel af.</li>
          <li><strong>Opslag / beheer:</strong> Medicatie moet vaak nog bewaard worden voordat het ingenomen/toegediend wordt.</li>
          <li><strong>Gereed maken:</strong> Sommige medicatie moet nog voor toediening gereed gemaakt worden (afmeten volume, tablet delen, ampul toevoegen aan infuuszak).</li>
          <li><strong>Toedienen / registreren:</strong> Het geneesmiddel wordt aangereikt of toegediend; in het ziekenhuis moet toediening geregistreerd worden.</li>
          <li><strong>Evaluatie:</strong> Effect en bijwerking worden geëvalueerd; dit kan leiden tot aanpassing van de farmacotherapie, waarna de cirkel weer wordt doorlopen.</li>
        </ol>
      </section>
    </SummaryLayout>
  )
}

export default Image04StappenMedicatieprocesSummary
