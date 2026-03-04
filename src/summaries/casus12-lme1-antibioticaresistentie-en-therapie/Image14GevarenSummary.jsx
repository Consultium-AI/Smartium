import { AlertOctagon } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image14GevarenSummary = () => {
  const toc = [{ id: 'gevaren', title: 'Gevaren van resistente micro-organismen', icon: AlertOctagon }]
  return (
    <SummaryLayout
      title="Zijn resistente micro-organismen gevaarlijk?"
      description="Problemen die gepaard gaan met resistente micro-organismen."
      caseLabel="Week 6 Casus 12 LME 1: Afbeelding 14"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme1-antibioticaresistentie-en-therapie-image14"
    >
      <section id="gevaren" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Problemen bij resistente micro-organismen</h2>
        <p className="text-slate-700 mb-4">Resistente micro-organismen zijn niet per se gevaarlijker dan hun gevoelige varianten, maar leiden wel tot meer problemen:</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>De behandeling van resistente bacteriën is inferieur aan die van gevoelige</li>
          <li>Alternatieve behandelingen hebben meer bijwerkingen</li>
          <li>Behandeling leidt tot langere opnameduur</li>
          <li>Resistentie leidt tot toename van morbiditeit</li>
          <li>Resistentie leidt tot toename van mortaliteit</li>
          <li>Meer resistentie in de populatie beïnvloedt de empirische behandeling</li>
          <li>Resistentie leidt tot hogere zorgkosten</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image14GevarenSummary
