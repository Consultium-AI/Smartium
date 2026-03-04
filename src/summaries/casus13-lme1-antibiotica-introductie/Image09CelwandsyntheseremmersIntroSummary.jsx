import { Shield } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image09CelwandsyntheseremmersIntroSummary = ({ standalone = true }) => {
  const toc = [{ id: 'celwand', title: 'Celwandsyntheseremmers', icon: Shield }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Celwandsyntheseremmers"
      description="Antibiotica die aanhechten aan de celwand of het celmembraan."
      caseLabel="Week 7 Casus 13 LME 1: Afbeelding 9"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme1-antibiotica-introductie-image09"
    >
      <section id="celwand" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Antibiotica die aanhechten aan de celwand</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          De eerste groep antibiotica zijn de antibiotica die aanhechten aan de celwand of het celmembraan. Om de werking van deze antibiotica te begrijpen, is het belangrijk dat je weet hoe de bacteriële celwand is opgebouwd. De basis hiervan heb je geleerd in &apos;Introductie Bacteriologie&apos; in Casus 1 van dit blok.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Bekijk de video &apos;Opbouw celwand en werking celwandsyntheseremmers&apos; voor een uitgebreide uitleg.
        </p>
      </section>
    </SummaryLayout>
  )
}

export default Image09CelwandsyntheseremmersIntroSummary
