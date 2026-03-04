import { ClipboardList } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image15Prisummary = () => {
  const toc = [{ id: 'pri', title: 'Prospectieve Risico-Inventarisatie', icon: ClipboardList }]
  return (
    <SummaryLayout
      title="De Prospectieve Risico-Inventarisatie (PRI)"
      description="Prospectieve analyse van risico&apos;s, aanpak en barrières."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 15"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image15"
    >
      <section id="pri" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">PRI</h2>
        <p className="text-slate-700 mb-4">De prospectieve risico-inventarisatie verdeelt een risicovol proces in deelstappen om potentiële risico&apos;s en hun impact systematisch te analyseren.</p>
        <h3 className="font-bold text-slate-800 mb-2">Vier vragen</h3>
        <ol className="list-decimal pl-6 space-y-2 text-slate-700">
          <li><strong>Faalwijze:</strong> Wat kan er misgaan?</li>
          <li><strong>Gevolgen:</strong> Wat zijn de mogelijke gevolgen voor patiënt of proces?</li>
          <li><strong>Ernst:</strong> Hoe ernstig (catastrofaal, groot, matig, klein)?</li>
          <li><strong>Frequentie:</strong> Hoe vaak (wekelijks, maandelijks, jaarlijks, &lt;1×/jaar)?</li>
        </ol>
        <h3 className="font-bold text-slate-800 mt-4 mb-2">Aanpak</h3>
        <ul className="list-disc pl-6 text-slate-700">
          <li><strong>Voorkomen:</strong> Elimineren van het risico</li>
          <li><strong>Beheersen:</strong> Kans verminderen of tijdig ingrijpen</li>
          <li><strong>Accepteren:</strong> Het risico aanvaarden</li>
        </ul>
        <h3 className="font-bold text-slate-800 mt-4 mb-2">Effectieve barrières</h3>
        <ul className="list-disc pl-6 text-slate-700">
          <li><strong>Fysieke maatregelen:</strong> Bijv. programma dat pas verdergaat na invullen verplichte velden</li>
          <li><strong>Tijd en plaats:</strong> Handelingen verspreiden over dagen of locaties</li>
          <li><strong>Menselijke checks:</strong> Checklists of dubbelcontroles</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image15Prisummary
