import { AlertCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image18ConclusieSummary = () => {
  const toc = [
    { id: 'toename', title: 'Toename wereldwijde resistentie', icon: AlertCircle },
    { id: 'tijdlijn', title: 'Ontdekking en resistentie', icon: AlertCircle },
  ]
  return (
    <SummaryLayout
      title="Conclusie – Antibioticaresistentie"
      description="Samenvatting van de wereldwijde dreiging van antibioticaresistentie."
      caseLabel="Week 7 Casus 13 LME 2: Afbeelding 18"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme2-antibiotica-resistentie-image18"
    >
      <section id="toename" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Toename wereldwijde resistentie</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Antibioticumresistentie is het grote gevaar van de komende decennia. Na elke ontdekking van een nieuwe klasse antibiotica volgt al snel resistentie ertegen. Door onnodig en ondeskundig gebruik van antibiotica neemt de resistentie tegen de huidige antibiotica snel toe. Als we het tij niet keren wordt er gevreesd voor <strong>10 miljoen doden</strong> ten gevolge van antibioticaresistentie per jaar in het jaar 2050.
        </p>
      </section>
      <section id="tijdlijn" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Ontdekking en resistentie</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          De tijdlijn toont dat resistentie vaak kort na de ontdekking van een antibioticumklasse optreedt. Voorbeelden: penicillines (ontdekt 1928, resistentie 1940), tetracyclines (1948/1953), macroliden en fluorchinolonen. Het is al meer dan 30 jaar geleden dat een nieuwe klasse antibiotica werd geïntroduceerd.
        </p>
        <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 text-sm text-amber-800">
          <strong>Referentie:</strong> WHO 10 Million People Die A Year Due to Antimicrobial Resistance by 2050? 2016 De Kraker et al. PLoS Med; 13(11) November 29.
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image18ConclusieSummary
