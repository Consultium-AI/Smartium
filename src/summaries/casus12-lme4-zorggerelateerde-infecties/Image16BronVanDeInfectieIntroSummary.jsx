import { Search } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image16BronVanDeInfectieIntroSummary = () => {
  const toc = [{ id: 'bron', title: 'De bron van de infectie', icon: Search }]
  return (
    <SummaryLayout
      title="De bron van de infectie"
      description="Introductie op het identificeren van infectiebronnen in het ziekenhuis."
      caseLabel="Week 6 Casus 12 LME 4: Afbeelding 16"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme4-zorggerelateerde-infecties-image16"
    >
      <section id="bron" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">De bron van de infectie</h2>
        <p className="text-slate-700 leading-relaxed">
          Het identificeren van de bron van een infectie is essentieel voor preventie en behandeling. Infecties kunnen endogeen (vanuit de patiënt zelf) of exogeen (vanuit de omgeving, personeel of materiaal) ontstaan.
        </p>
      </section>
    </SummaryLayout>
  )
}

export default Image16BronVanDeInfectieIntroSummary
