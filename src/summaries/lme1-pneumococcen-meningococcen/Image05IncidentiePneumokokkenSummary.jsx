import { BarChart3 } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image05IncidentiePneumokokkenSummary = () => {
  const tableOfContents = [
    { id: 'incidentie', title: 'Incidentie per leeftijdsgroep', icon: BarChart3 },
    { id: 'verklaring', title: 'Verklaring hoge incidentie 65+', icon: BarChart3 },
  ]

  return (
    <SummaryLayout
      title="Epidemiologie invasieve pneumokokkenziekte – Incidentie"
      description="Incidentie per leeftijdsgroep en de impact van vaccinatie vanaf 2006 en 2011."
      caseLabel="Week 5 Casus 7 LME 1: Afbeelding 5"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme1-pneumococcen-image05"
    >
      <section id="incidentie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Incidentie per leeftijdsgroep
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Figuur 1 toont het aantal patiënten met invasieve pneumokokkenziekte per jaar per 100.000 inwoners per leeftijdsgroep voor alle pneumokokkentypen, vóór en na de invoering van vaccinatie (het 7-valente vaccin in 2006 en het 10-valente vaccin in 2011), over de periode juni 2004 – mei 2019.
          </p>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Belangrijkste bevinding</h4>
            <p className="text-amber-700 m-0">
              De <strong>65+</strong> leeftijdsgroep heeft de hoogste incidentie van invasieve pneumokokkenziekte. Na invoering van de vaccins daalde de incidentie bij kinderen &lt;5 jaar sterk.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      <section id="verklaring" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Verklaring hoge incidentie 65+
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <ul className="list-disc pl-6 space-y-2">
            <li>Verminderde weerstand door veroudering</li>
            <li>Verminderde barrièrefunctie en aangeboren afweer door veroudering van slijmvliezen</li>
            <li>Verminderde functie van alveolaire macrofagen bij ouderen</li>
            <li>Roken</li>
            <li>Mogelijke secundaire infecties door verergerde respiratoire virale infecties zoals influenza of SARS-CoV-2</li>
          </ul>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image05IncidentiePneumokokkenSummary
