import { AlertTriangle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image33RisicosCRSSummary = ({ standalone = true }) => {
  const toc = [{ id: 'crs', title: 'Congenitaal rubellasyndroom', icon: AlertTriangle }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Risico's – Hogere gemiddelde infectieleeftijd en CRS"
      description="Bij rodehond: bij te lage vaccinatiegraad meer CRS dan zonder vaccinatie."
      caseLabel="Week 5 Casus 10 LME 4: Afbeelding 33"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image33"
    >
      <section id="crs" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Hogere gemiddelde infectieleeftijd</h2>
        <p className="text-slate-700 mb-4">Bij vaccinatie stijgt de gemiddelde leeftijd waarop niet-gevaccineerden besmet raken. Bij rodehond kan dit leiden tot meer congenitaal rubellasyndroom (CRS) als zwangere vrouwen besmet raken.</p>
        <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
          <h4 className="font-bold text-amber-800 mb-2">Belangrijk</h4>
          <p className="text-amber-700 text-sm m-0">Bij een te lage vaccinatiegraad kunnen er meer CRS-gevallen zijn dan zonder vaccinatie. Daarom: niet vaccineren tegen rodehond als je geen voldoende hoge vaccinatiegraad kunt garanderen. Grote delen van Afrika en Azië vaccineren daarom niet tegen rodehond.</p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image33RisicosCRSSummary
