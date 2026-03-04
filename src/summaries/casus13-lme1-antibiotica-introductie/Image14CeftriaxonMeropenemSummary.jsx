import { Pill } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image14CeftriaxonMeropenemSummary = ({ standalone = true }) => {
  const toc = [{ id: 'classificatie', title: 'Ceftriaxon en meropenem', icon: Pill }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Ceftriaxon en meropenem"
      description="Classificatie van ceftriaxon (cefalosporine) en meropenem (carbapenem)."
      caseLabel="Week 7 Casus 13 LME 1: Afbeelding 14"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme1-antibiotica-introductie-image14"
    >
      <section id="classificatie" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Classificatie</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Van ceftriaxon en meropenem moet je alleen weten in welke klasse zij thuishoren:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
          <li><strong>Cefalosporines:</strong> ceftriaxon (derde generatie cefalosporine)</li>
          <li><strong>Carbapenems:</strong> meropenem</li>
        </ul>
        <p className="text-slate-700 leading-relaxed">
          Beide behoren tot de bètalactamantibiotica. Bètalactamantibiotica werken door de bacteriële celwand te verstoren, bevatten een bètalactamring en omvatten penicillines, cefalosporines, monobactams en carbapenems.
        </p>
      </section>
    </SummaryLayout>
  )
}

export default Image14CeftriaxonMeropenemSummary
