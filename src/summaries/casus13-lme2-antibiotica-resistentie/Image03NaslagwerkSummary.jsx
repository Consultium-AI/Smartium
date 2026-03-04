import { FileText } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image03NaslagwerkSummary = ({ standalone = true }) => {
  const toc = [{ id: 'naslagwerk', title: 'Naslagwerk antibiotica', icon: FileText }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Naslagwerk – Antibiotica"
      description="Overzicht van de 15 antibiotica en het naslagwerk in deze e-learning."
      caseLabel="Week 7 Casus 13 LME 2: Afbeelding 3"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme2-antibiotica-resistentie-image03"
    >
      <section id="naslagwerk" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Naslagwerk</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          In deze e-learning bespreken we 15 antibiotica die je aan het einde van de bachelor moet kennen. Van 13 van deze antibiotica moet je de indicatie, manier van toediening en belangrijkste bijwerkingen kunnen noemen. Van 2 antibiotica moet je weten in welke klasse zij thuishoren. Deze basiskennis heb je geleerd in de e-module &apos;Antibiotica Introductie&apos;. Deze basiskennis vind je ook in het naslagwerk; per antibioticum staat hier:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Een video met toelichting over het betreffende antibioticum (+ uitgeschreven tekst)</li>
          <li>De tabel met het spectrum</li>
          <li>De video van Geneesmiddel van de Week, indien beschikbaar (ter verdieping)</li>
          <li>Eventuele bijzonderheden</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image03NaslagwerkSummary
