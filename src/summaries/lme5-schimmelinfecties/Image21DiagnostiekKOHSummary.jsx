import { Microscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image21DiagnostiekKOHSummary = ({ standalone = true }) => {
  const tableOfContents = [
    { id: 'koh', title: 'KOH-preparaat', icon: Microscope },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title="Diagnostiek – KOH-preparaat"
      description="Aantonen van schimmeldraden met kaliumhydroxide preparaat."
      caseLabel="Week 5 Casus 7 LME 5: Afbeelding 21"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme5-schimmelinfecties-image21"
    >
      <section id="koh" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Microscope className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Diagnostiek
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Algemene aanpak</h4>
            <p className="text-primary-700 text-sm m-0">
              De diagnose schimmelinfectie van de huid wordt in de meerderheid gesteld op de symptomen en kenmerken van de plek op de huid. Als er twijfel is of als therapie niet goed lijkt te helpen, kan er gekeken worden of er schimmel aanwezig is.
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">KOH-preparaat</h4>
            <p className="text-teal-700 text-sm mb-3">
              Met dit preparaat probeert men schimmeldraden aan te tonen. Hiervoor neemt men een schilfer, schraapsel, stukje nagel of uitgetrokken haar. Dit wordt tussen objectglaasjes geplaatst en kaliumhydroxide (KOH) toegevoegd. Door het KOH lossen de celwanden en hoornmateriaal op maar de schimmeldraden niet. Onder de microscoop kan men dan schimmeldraden (hyfen) zien.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-teal-700 text-sm">
              <li>Materiaal: schilfer, schraapsel, stukje nagel of uitgetrokken haar</li>
              <li>KOH lost celwanden en hoornmateriaal op, niet de schimmeldraden</li>
            </ul>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image21DiagnostiekKOHSummary
