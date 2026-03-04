import { Pause } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image06PlichtOpPauzeSummary = ({ standalone = true }) => {
  const toc = [{ id: 'pauze', title: 'De plicht op pauze', icon: Pause }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="De plicht op pauze"
      description="Suspensie van de pokkenvaccinatieplicht 1929-1939."
      caseLabel="Week 5 Casus 10 LME 1: Afbeelding 6"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme1-dwang-en-drang-historisch-perspectief-image06"
    >
      <section id="pauze" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">De plicht op pauze</h2>
        <p className="text-slate-700 mb-4">Vaccinatie werd een individuele risico-afweging: ouders wogen het risico op pokken tegen bijwerkingen. In 1928 leidde de encephalitis-gevaar tot politieke bezorgdheid; het pokkenbriefje was vanaf 1929 niet meer verplicht. Omdat veiligheidsgaranties niet gegeven konden worden, duurde de suspensie tot 1939. Tussen 1929 en 1939 was er geen gehandhaafde vaccinatiewet. Formulieren uit 1937 ondersteunden artsen bij individuele risico-afweging.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image06PlichtOpPauzeSummary
