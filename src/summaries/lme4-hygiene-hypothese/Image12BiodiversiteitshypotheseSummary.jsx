import { Leaf } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image12BiodiversiteitshypotheseSummary = () => {
  const tableOfContents = [
    { id: 'definitie', title: 'Biodiversiteits-hypothese', icon: Leaf },
    { id: 'verlies', title: 'Verlies van biodiversiteit', icon: Leaf },
    { id: 'dysbiose', title: 'Dysbiose', icon: Leaf },
  ]

  return (
    <SummaryLayout
      title="Biodiversiteits-hypothese"
      description="Verband tussen microbiële biodiversiteit, dysbiose en inflammatoire ziekten."
      caseLabel="Week 5 Casus 7 LME 4: Afbeelding 12"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme4-hygiene-hypothese-image12"
    >
      <section id="definitie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Leaf className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Biodiversiteits-hypothese
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Volgens de Biodiversiteits-hypothese (Haahtela 2019) is een gebalanceerd immuunsysteem direct gerelateerd aan een gebalanceerd, divers microbioom in gebieden die met de buitenwereld in contact komen: huid, slijmvliezen van luchtwegen en maagdarmkanaal.
          </p>
        </div>
      </section>

      <section id="verlies" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Leaf className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Verlies van microbiële biodiversiteit
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Verlies van microbiële biodiversiteit door leefstijlveranderingen (o.a. verminderd contact met de natuur) leidt tot onbalans in het microbioom, verstoorde immuunbalans en verhoogd risico op inflammatoire ziekte.
          </p>
          
          <p>
            De hypothese komt voort uit observaties dat de microbiële diversiteit significant lager is bij chronische inflammatoire aandoeningen van de huid (eczeem) of darm (ziekte van Crohn). Een dergelijke associatie bewijst geen causaal verband – wat is kip en wat is ei?
          </p>
        </div>
      </section>

      <section id="dysbiose" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Leaf className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Dysbiose en bredere impact
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Er zijn aanwijzingen dat onbalans in het microbioom – <strong>dysbiose</strong> genoemd – al vóór de klinische symptomen waarneembaar is. Microbiële dysbiose in de darm wordt niet alleen geassocieerd met huid- en darmziekten, maar ook met metabole ziekten (diabetes, obesitas) en psychiatrische aandoeningen (schizofrenie, ernstige depressie).
          </p>
          
          <p className="text-slate-600 text-sm">
            Bron: Haahtela 2019. Allergy. PMID:30835837
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image12BiodiversiteitshypotheseSummary
