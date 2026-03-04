import { GitMerge } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image12PrismaBijnaFoutSummary = ({ standalone = true }) => {
  const toc = [{ id: 'bijnafout', title: 'PRISMA bij bijna-fout', icon: GitMerge }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="PRISMA bij bijna-fout"
      description="Faalzijde en herstelzijde bij near miss."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 12"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image12"
    >
      <section id="bijnafout" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">PRISMA bij bijna-fout</h2>
        <p className="text-slate-700 mb-4">Een PRISMA kan ook worden opgesteld voor een &apos;bijna-fout&apos; (near miss). Er komt dan een <strong>herstelzijde</strong> bij in de figuur.</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-red-50 rounded-xl border border-red-200">
            <h4 className="font-bold text-red-800 mb-2">Faalzijde</h4>
            <p className="text-red-700 text-sm">Factoren die bijdroegen aan de fout: verpleegkundige vermoeid, zesde nachtdienst, medicijnen lijken op elkaar en staan naast elkaar.</p>
          </div>
          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
            <h4 className="font-bold text-emerald-800 mb-2">Herstelzijde</h4>
            <p className="text-emerald-700 text-sm">Hoe de fout werd onderschept: patiënt merkt op dat pillen er anders uitzien → niet gepland herstel.</p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image12PrismaBijnaFoutSummary
