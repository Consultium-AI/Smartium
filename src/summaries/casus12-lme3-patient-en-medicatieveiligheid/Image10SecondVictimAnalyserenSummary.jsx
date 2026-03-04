import { MessageCircle, Search } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image10SecondVictimAnalyserenSummary = ({ standalone = true }) => {
  const toc = [
    { id: 'praten', title: 'Erover praten', icon: MessageCircle },
    { id: 'analyseren', title: 'Analyseren', icon: Search },
  ]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Wat gebeurt er na een incident? – Praten en analyseren"
      description="Second victim, ondersteuning en PRISMA/PRI-analyse."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 10"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image10"
    >
      <section id="praten" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Erover praten</h2>
        <p className="text-slate-700 mb-4">Wanneer een zorgverlener een fout maakt die de patiënt schaadt, leidt dit vaak tot angst, onzekerheid en schaamte. Ze vrezen verwijten, reputatieschade of een klacht. Deze gevoelens worden versterkt als collega&apos;s afstandelijk reageren. Dit kan leiden tot PTSS-achtige klachten (concentratieproblemen, herbeleving) en verhoogd risico op burn-out of nieuwe fouten.</p>
        <p className="text-slate-700 mb-4">De patiënt is de &apos;first victim&apos;; de betrokken zorgverlener is de &apos;second victim&apos; en heeft ook ondersteuning nodig. Openheid over de fout en zoeken naar technische en organisatorische oorzaken zijn cruciaal. Second victims melden zich vaak niet bij Social Work of Psychologie, maar hebben baat bij peer support van getrainde collega&apos;s.</p>
      </section>
      <section id="analyseren" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Analyseren</h2>
        <p className="text-slate-700 mb-4">Na een calamiteit wordt een analyse gevraagd om technische, organisatorische en/of menselijke oorzaken te identificeren. Methoden: PRISMA-analyse en PRI (Prospectieve Risico-Inventarisatie). Beide worden op de volgende pagina&apos;s uitgelegd.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image10SecondVictimAnalyserenSummary
