import { Stethoscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image09RolArtsSummary = ({ standalone = true }) => {
  const toc = [{ id: 'arts', title: 'Rol van de arts', icon: Stethoscope }]
  return (
    <SummaryLayout
      standalone={standalone}

      title="Rol van de arts"
      description="De arts als adviseur en vertrouwenspersoon."
      caseLabel="Week 5 Casus 10 LME 3: Afbeelding 9"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image09"
    >
      <section id="arts" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Rol van de arts</h2>
        <p className="text-slate-700 mb-4">De arts heeft een adviserende rol. Door vertrouwen op te bouwen en goed te informeren, kan de arts ouders helpen een weloverwogen keuze te maken over vaccinatie.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image09RolArtsSummary
