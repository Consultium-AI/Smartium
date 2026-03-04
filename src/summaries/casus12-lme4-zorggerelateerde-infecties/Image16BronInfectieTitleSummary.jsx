import { Search } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image16BronInfectieTitleSummary = () => {
  const toc = [{ id: 'bron', title: 'De bron van de infectie', icon: Search }]
  return (
    <SummaryLayout
      title="De bron van de infectie"
      description="Inleiding op endogene en exogene bronnen van infectie."
      caseLabel="Week 6 Casus 12 LME 4: Afbeelding 16"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme4-zorggerelateerde-infecties-image16"
    >
      <section id="bron" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">De bron van de infectie</h2>
        <p className="text-slate-700">Er zijn verscheidene transmissieroutes van infectie in het ziekenhuis, en daarbij zijn er ook tal van bronnen aan te wijzen. De 'makkelijkste' bron van infectie betreft de patiënt, hierbij gaat het om een besmetting met eigen flora. Het wordt lastiger als een exogene bron van infectie moet worden aangewezen.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image16BronInfectieTitleSummary
