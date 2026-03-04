import { Info } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image03ExantheemDefinitieSummary = () => {
  const tableOfContents = [
    { id: 'definitie', title: 'Exantheem of rash', icon: Info },
    { id: 'beschrijven', title: 'Beschrijven van de rash', icon: Info },
  ]

  return (
    <SummaryLayout
      title="Introductie exantheem – Definitie en beschrijving"
      description="Wat is een exantheem of rash? Terminologie en het belang van een goede dermatologische beschrijving."
      caseLabel="Week 5 Casus 7 LME 3: Afbeelding 3"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme3-viraal-exantheem-image03"
    >
      <section id="definitie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Info className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Exantheem of rash
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            <strong>Exantheem</strong> en <strong>rash</strong> zijn uitwisselbare termen voor een niet-specifiek gedefinieerde huiduitslag bestaande uit rode vlekken (maculae) of rode bultjes (papules). De term zelf geeft geen aanwijzing over de oorzaak.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Maculopapuleus exantheem</h4>
            <p className="text-primary-700 text-sm m-0">
              Als zowel vlekken als bultjes aanwezig zijn, spreekt men van een <strong>maculopapuleus exantheem</strong>. Rashes zijn meestal van voorbijgaande aard (verdwijnen binnen enkele dagen) en komen veel voor in de kindertijd, vaak door virale infecties.
            </p>
          </div>
        </div>
      </section>

      <section id="beschrijven" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Info className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Beschrijven van de rash
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Het herkennen en nauwkeurig beschrijven van verschillende typen huiduitslag is belangrijk om te kunnen differentiëren tussen infectieuze en niet-infectieuze oorzaken.
          </p>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Andere manifestaties</h4>
            <ul className="list-disc pl-6 space-y-1 text-amber-700 text-sm">
              <li><strong>Vesikels (blaasjes)</strong> – met helder vocht</li>
              <li><strong>Schilferingen</strong></li>
              <li><strong>Pustels</strong></li>
              <li><strong>Purpura</strong> – rode/paarse verkleuring die niet wegdrukbaar is</li>
            </ul>
          </div>
          
          <div className="p-5 bg-slate-50 rounded-xl border-l-4 border-primary-400">
            <h4 className="font-bold text-slate-800 mb-2">Efflorescentieleer</h4>
            <p className="text-slate-600 text-sm mb-2">
              De dermatologische beschrijving van huiduitslagen heet <strong>Efflorescentieleer</strong>. Meer beschrijvingen zijn te vinden op huidziekten.nl.
            </p>
            <p className="text-slate-600 text-sm m-0">
              Met behulp van een glas op de huiduitslag te drukken kunnen ouders zelf ook zien of de huiduitslag wegdrukbaar is of niet (blanching test / diascopie).
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image03ExantheemDefinitieSummary
