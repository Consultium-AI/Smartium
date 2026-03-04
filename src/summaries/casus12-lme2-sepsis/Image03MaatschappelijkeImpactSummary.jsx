import { Globe } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image03MaatschappelijkeImpactSummary = () => {
  const toc = [{ id: 'impact', title: 'Maatschappelijke impact', icon: Globe }]
  return (
    <SummaryLayout
      title="De maatschappelijke impact van sepsis"
      description="Wereldwijde en Nederlandse cijfers over sepsis en de gevolgen voor overlevenden."
      caseLabel="Week 6 Casus 12 LME 2: Afbeelding 3"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme2-sepsis-image03"
    >
      <section id="impact" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Maatschappelijke impact</h2>
        <p className="text-slate-700 mb-4">Sepsis is een ernstige ziekte gekenmerkt door acute orgaandysfunctie ten gevolge van een ontregelde gastheerrespons op een infectie.</p>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-2">Wereldwijd</h4>
            <p className="text-blue-700 text-sm">In 2017 stierven 11 miljoen mensen wereldwijd aan sepsis – de belangrijkste doodsoorzaak.</p>
          </div>
          <div className="p-4 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Nederland</h4>
            <p className="text-teal-700 text-sm">Jaarlijks 10.000–20.000 IC-opnames vanwege sepsis; inclusief verpleegafdelingen circa 60.000 sepsispatiënten. De incidentie stijgt (veroudering, immunosuppressiva). Circa 9.000 mensen overlijden jaarlijks; mortaliteitsrisico 15–50%.</p>
          </div>
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Gevolgen voor overlevenden</h4>
            <p className="text-amber-700 text-sm">Verminderde gezondheid, kortere levensverwachting, lagere kwaliteit van leven, medische zorg nodig, mobiliteitsproblemen, cognitieve problemen, verminderde arbeidsmogelijkheden, angst en depressie.</p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image03MaatschappelijkeImpactSummary
