import { Pill } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image10BetalactamantibioticaSummary = ({ standalone = true }) => {
  const toc = [
    { id: 'mechanisme', title: 'Werkingsmechanisme', icon: Pill },
    { id: 'allergie', title: 'Allergie en resistentie', icon: Pill },
  ]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Bètalactamantibiotica"
      description="De belangrijkste celwandsyntheseremmers: werkingsmechanisme, allergie en bètalactamases."
      caseLabel="Week 7 Casus 13 LME 1: Afbeelding 10"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme1-antibiotica-introductie-image10"
    >
      <section id="mechanisme" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Werkingsmechanisme</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          De belangrijkste antibiotica die hechten aan de celwand van de bacterie zijn alle antibiotica uit de groep bètalactamantibiotica. Zij verstoren de opbouw van de peptidoglycaanlaag in de celwand.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Alleen bacteriën hebben een celwand met peptidoglycaan; daarom zijn antibiotica die hierop aangrijpen zo specifiek en hebben ze relatief weinig bijwerkingen.
        </p>
      </section>
      <section id="allergie" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Allergie en bètalactamases</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Het is belangrijk te weten welke antibiotica tot deze groep behoren omdat ze allemaal een bètalactamring hebben waar patiënten allergisch op kunnen reageren. Als een patiënt allergisch is tegen de bètalactamring, is hij allergisch voor deze hele groep. Maar het kan ook voorkomen dat er allergie is voor een zijketen; dan is de patiënt allergisch tegen één specifiek antibioticum (bijv. amoxicilline) en niet penicilline.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Bètalactamases (enzymen) gemaakt door bacteriën kunnen deze antibiotica onwerkzaam maken.
        </p>
      </section>
    </SummaryLayout>
  )
}

export default Image10BetalactamantibioticaSummary
