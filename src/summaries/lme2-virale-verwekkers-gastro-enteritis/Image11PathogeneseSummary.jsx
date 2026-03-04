import { Activity } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image11PathogeneseSummary = ({ standalone = true }) => {
  const tableOfContents = [
    { id: 'patho', title: 'Pathogenese virale diarree', icon: Activity },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title="Pathogenese virale diarree"
      description="Mechanismen van vochtverlies en rol van rotavirus enterotoxine."
      caseLabel="Week 5 Casus 9 LME 2: Afbeelding 11"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme2-virale-verwekkers-gastro-enteritis-image11"
    >
      <section id="patho" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Pathogenese virale diarree
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Bij virale gastro-enteritis ontstaat diarree door een verstoorde vochtbalans in de darm. Het evenwicht tussen secretie en absorptie van vocht en elektrolyten wordt verstoord.
          </p>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Rotavirus – specifieke mechanismen</h4>
            <ul className="list-disc pl-6 space-y-1 text-teal-700 text-sm">
              <li>Infecteert enterocyten in de dunne darm</li>
              <li>Beschadigt microvilli en brush border → verminderde absorptie</li>
              <li>Produceert een <strong>enterotoxine (NSP4)</strong> dat de secretie stimuleert</li>
              <li>Combinatie van verminderde absorptie en verhoogde secretie leidt tot snelle uitdroging</li>
            </ul>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Norovirus en andere virussen</h4>
            <p className="text-amber-700 text-sm m-0">
              Ook norovirus en andere virussen beschadigen de darmmucosa, wat leidt tot verminderde absorptie en/of verhoogde secretie.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image11PathogeneseSummary
