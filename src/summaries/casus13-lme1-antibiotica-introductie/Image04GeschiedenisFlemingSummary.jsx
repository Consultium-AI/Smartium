import { FlaskConical } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image04GeschiedenisFlemingSummary = ({ standalone = true }) => {
  const toc = [{ id: 'geschiedenis', title: 'Geschiedenis penicilline', icon: FlaskConical }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Geschiedenis – Ontdekking penicilline"
      description="Alexander Fleming en de ontdekking van penicilline."
      caseLabel="Week 7 Casus 13 LME 1: Afbeelding 4"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme1-antibiotica-introductie-image04"
    >
      <section id="geschiedenis" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Geschiedenis penicilline</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Het eerste echte antibioticum penicilline werd in 1928 door Britse arts-bacterioloog Alexander Fleming geïdentificeerd als de werkzame stof afgescheiden door de schimmel <em>Penicillium chrysogenum</em>.
        </p>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Fleming was een sloddervos die zijn spullen slecht opruimde. Na een periode van afwezigheid bleek een bloedagar waarop Fleming <em>S. aureus</em> had gekweekt, gecontamineerd met de schimmel <em>penicillium</em>. Wat Fleming opviel was de zone rond de schimmel waar de <em>S. aureus</em> in groei geremd werd. Dit leidde tot de ontdekking van het antibioticum penicilline.
        </p>
        <p className="text-slate-700 leading-relaxed">
          In de Tweede Wereldoorlog werd penicilline veel gebruikt bij de behandeling van geïnfecteerde wonden en redde zo vele mensenlevens. Destijds werkte penicilline nog goed tegen de bacterie <em>S. aureus</em>, de meest voorkomende verwekker van wondinfecties.
        </p>
      </section>
    </SummaryLayout>
  )
}

export default Image04GeschiedenisFlemingSummary
