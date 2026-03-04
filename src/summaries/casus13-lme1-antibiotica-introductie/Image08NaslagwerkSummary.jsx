import { BookOpen } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image08NaslagwerkSummary = () => {
  const toc = [
    { id: 'aantal', title: 'Aantal antibiotica', icon: BookOpen },
    { id: 'inhoud', title: 'Inhoud naslagwerk', icon: BookOpen },
  ]
  return (
    <SummaryLayout
      title="Naslagwerk"
      description="Overzicht van de 15 antibiotica en wat je per antibioticum in het naslagwerk vindt."
      caseLabel="Week 7 Casus 13 LME 1: Afbeelding 8"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme1-antibiotica-introductie-image08"
    >
      <section id="aantal" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Aantal antibiotica</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          In deze e-learning bespreken we 15 antibiotica die je aan het einde van de bachelor moet kennen. Van 13 van deze antibiotica moet je de indicatie, manier van toediening en belangrijkste bijwerkingen kunnen noemen. Van 2 antibiotica moet je weten in welke klasse zij thuishoren.
        </p>
      </section>
      <section id="inhoud" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Inhoud naslagwerk per antibioticum</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Een video met toelichting over het betreffende antibioticum (+ uitgeschreven tekst)</li>
          <li>De tabel met het spectrum</li>
          <li>De video van Geneesmiddel van de Week, indien beschikbaar (ter verdieping)</li>
          <li>Eventuele bijzonderheden</li>
        </ul>
        <p className="text-slate-700 mt-4 leading-relaxed">
          In deze e-module wordt telkens aangegeven welk antibioticum je moet bestuderen in het naslagwerk.
        </p>
      </section>
    </SummaryLayout>
  )
}

export default Image08NaslagwerkSummary
