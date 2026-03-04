import { List } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image11PenicillinesOnderverdelingSummary = ({ standalone = true }) => {
  const toc = [
    { id: 'groepen', title: 'Groepen bètalactam', icon: List },
    { id: 'penicillines', title: 'Penicillines', icon: List },
  ]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Onderverdeling bètalactamantibiotica"
      description="Penicillines, cefalosporines, carbapenems en onderverdeling penicillines."
      caseLabel="Week 7 Casus 13 LME 1: Afbeelding 11"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme1-antibiotica-introductie-image11"
    >
      <section id="groepen" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Groepen bètalactamantibiotica</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
          <li>Penicillines</li>
          <li>Cefalosporinen</li>
          <li>Carbapenems</li>
        </ul>
      </section>
      <section id="penicillines" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Penicillines</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          <strong>NB:</strong> Penicillines is de groep; penicilline is één van de antibiotica. Penicilline staat niet in de exemplarische geneesmiddelenlijst maar is de &apos;oorsprong&apos; van alle antibiotica en moet je wél kennen.
        </p>
        <div className="space-y-4">
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h4 className="font-bold text-green-800 mb-2">Smal spectrum</h4>
            <p className="text-green-700 text-sm">(Benzyl)penicilline (iv/po), Feneticilline (po), Flucloxacilline</p>
          </div>
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Breed spectrum</h4>
            <p className="text-amber-700 text-sm">Amoxicilline</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-2">Penicilline met bètalactamaseremmer</h4>
            <p className="text-blue-700 text-sm">Amoxicilline-clavulaanzuur (Augmentin®)</p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image11PenicillinesOnderverdelingSummary
