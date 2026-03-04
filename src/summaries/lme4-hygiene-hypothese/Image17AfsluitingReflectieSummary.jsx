import { BookOpen } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image17AfsluitingReflectieSummary = () => {
  const tableOfContents = [
    { id: 'afsluiting', title: 'Afsluiting', icon: BookOpen },
    { id: 'reflectie', title: 'Reflectie', icon: BookOpen },
  ]

  return (
    <SummaryLayout
      title="Afsluiting en reflectie"
      description="Samenvatting van de hygiëne hypothese en de vier theorieën; reflectie-opdracht."
      caseLabel="Week 5 Casus 7 LME 4: Afbeelding 17"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme4-hygiene-hypothese-image17"
    >
      <section id="afsluiting" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Afsluiting
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            De hygiënehypothese en verwante theorieën proberen de toegenomen prevalentie van allergieën en auto-immuunziekten te verklaren – een toename die sinds halverwege de 20e eeuw wordt gezien, vooral in landen met verstedelijkte omgevingen en een westerse leefstijl.
          </p>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Bredere implicaties</h4>
            <p className="text-amber-700 text-sm m-0">
              Vervolgonderzoek wijst erop dat de waargenomen veranderingen en mechanismen niet beperkt zijn tot allergieën en auto-immuunziekten. Ze gelden ook voor een breder spectrum aan aandoeningen, waaronder metabole en psychologische stoornissen. Al deze aandoeningen worden gekenmerkt door laaggradige, systemische ontsteking.
            </p>
          </div>
          
          <p>
            Het immuunsysteem, samen met het endocriene en zenuwstelsel, is geëvolueerd om te reageren op en te beschermen tegen verstoringen van de homeostase. De observatie dat het immuunsysteem bij een aanzienlijk deel van de populatie chronisch overactief lijkt, wijst op een aanhoudende verstoring van het fysiologisch evenwicht.
          </p>
        </div>
      </section>

      <section id="reflectie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Reflectie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Zet voor jezelf de essenties van de vier theorieën die in deze e-module aan bod zijn gekomen op een rij. Maak hierbij een overzicht van de overeenkomsten en verschillen.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">De vier theorieën</h4>
            <ol className="list-decimal pl-6 space-y-1 text-primary-700 text-sm">
              <li>Hygiënehypothese (Th1/Th2-balans)</li>
              <li>Old friends-hypothese</li>
              <li>Biodiversiteits-hypothese</li>
              <li>Epitheliale barrière theorie</li>
            </ol>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image17AfsluitingReflectieSummary
