import { Pill } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image12PreventieProfylaxeSummary = () => {
  const toc = [{ id: 'profylaxe', title: 'Preoperatieve antibiotische profylaxe', icon: Pill }]
  return (
    <SummaryLayout
      title="Preoperatieve antibiotische profylaxe"
      description="Wanneer wordt profylaxe voorgeschreven?"
      caseLabel="Week 6 Casus 12 LME 4: Afbeelding 12"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme4-zorggerelateerde-infecties-image12"
    >
      <section id="profylaxe" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Preoperatieve antibiotische profylaxe</h2>
        <p className="text-slate-700 mb-4">Preoperatieve antibiotische profylaxe wordt <strong>voorgeschreven afhankelijk van de kans op het ontstaan van infectie</strong>.</p>
        <p className="text-slate-700 mb-4">Elke ingreep, gekoppeld aan de lokalisatie op het lichaam, kent een eigen risico op het ontstaan van een infectie. Afhankelijk van dat risico wordt er al dan niet gekozen voor preoperatieve antibiotische profylaxe.</p>
        <p className="text-slate-700 mb-4">Soms is het risico op het ontstaan van een infectie laag, maar omdat de gevolgen van een dergelijke infectie wel groot zijn, kan om die reden ook gekozen worden voor profylaxe. Wanneer wel of niet gekozen zou moeten worden hiervoor, is vastgelegd in een protocol zodat iedere snijdende specialist hetzelfde handelt.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image12PreventieProfylaxeSummary
