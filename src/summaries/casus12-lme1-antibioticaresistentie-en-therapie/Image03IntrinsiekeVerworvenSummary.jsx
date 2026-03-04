import { Dna } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image03IntrinsiekeVerworvenSummary = () => {
  const toc = [{ id: 'intrinsiek', title: 'Intrinsieke en verworven resistentie', icon: Dna }]
  return (
    <SummaryLayout
      title="Intrinsieke en verworven resistentie"
      description="Mechanismen waarmee bacteriën resistentie kunnen verkrijgen: mutatie, transformatie en conjugatie."
      caseLabel="Week 6 Casus 12 LME 1: Afbeelding 3"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme1-antibioticaresistentie-en-therapie-image03"
    >
      <section id="intrinsiek" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Intrinsieke en verworven resistentie</h2>
        <div className="space-y-6">
          <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-2">Intrinsieke (natuurlijke) resistentie</h4>
            <p className="text-blue-700 text-sm">Een bacterie is altijd resistent voor een specifiek antibioticum, bijvoorbeeld omdat het doelmolecuul ontbreekt of de celstructuur het antibioticum niet binnenlaat.</p>
          </div>
          <div className="p-4 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Verworven resistentie 1: Mutatie en uitselectie</h4>
            <p className="text-teal-700 text-sm mb-2">Bacteriën delen snel; replicatiefouten kunnen een resistentievoordeel geven. Onder antibiotische druk sterven gevoelige bacteriën, terwijl resistente bacteriën overblijven en uitgroeien tot een resistente populatie.</p>
          </div>
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Verworven resistentie 2: Opname van vreemd DNA</h4>
            <ul className="list-disc pl-6 space-y-1 text-amber-700 text-sm">
              <li><strong>Natuurlijke transformatie:</strong> Chromosomaal DNA uit geliseerde bacteriën wordt opgenomen en ingebouwd in het chromosoom van een acceptor-bacterie.</li>
              <li><strong>Conjugatie:</strong> Plasmiden (extrachromosomaal DNA) worden via een sex-pilus overgedragen van donor naar acceptor; kan ook tussen verschillende bacteriesoorten.</li>
            </ul>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image03IntrinsiekeVerworvenSummary
