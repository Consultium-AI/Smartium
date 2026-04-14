import {
  Activity,
  AlertTriangle,
  BookOpen,
  Cpu,
  HeartPulse,
  Layers,
  ListChecks,
  Microscope,
  Shield,
  Stethoscope,
  Syringe,
  Table2,
  Zap,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02HetElektrischeNetwerk from './Sect02HetElektrischeNetwerk'
import Sect03WatIsBradycardie from './Sect03WatIsBradycardie'
import Sect04KlinischBeeld from './Sect04KlinischBeeld'
import Sect05DiagnostiekEcg from './Sect05DiagnostiekEcg'
import Sect06BehandelingBradycardie from './Sect06BehandelingBradycardie'
import Sect07DePacemaker from './Sect07DePacemaker'
import Sect08IcdSecundairePreventie from './Sect08IcdSecundairePreventie'
import Sect09PrimairePreventieIcd from './Sect09PrimairePreventieIcd'
import Sect10Crt from './Sect10Crt'
import Sect11VerdiepingCspEnSicd from './Sect11VerdiepingCspEnSicd'
import Sect12Complicaties from './Sect12Complicaties'
import Sect13KernInDePraktijk from './Sect13KernInDePraktijk'
import Sect14Samenvatting from './Sect14Samenvatting'

const Blok9Week5Casus10BradyAritmieEnImplanteerbareCardialeDevicesSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Het elektrische netwerk van het hart', icon: Activity },
    { id: 'sect-03', title: 'Wat is bradycardie en waardoor ontstaat het?', icon: HeartPulse },
    { id: 'sect-04', title: 'Klinisch beeld: wat merkt de patiënt?', icon: Stethoscope },
    { id: 'sect-05', title: 'Diagnostiek: denken in het ECG', icon: Zap },
    { id: 'sect-06', title: 'Behandeling van bradycardie', icon: Syringe },
    { id: 'sect-07', title: 'De pacemaker', icon: Cpu },
    { id: 'sect-08', title: 'De ICD: functie en secundaire preventie', icon: Shield },
    { id: 'sect-09', title: 'Primaire preventie met ICD', icon: Layers },
    { id: 'sect-10', title: 'CRT: als het hart niet synchroon samentrekt', icon: HeartPulse },
    { id: 'sect-11', title: 'Verdieping: CSP en S-ICD', icon: Microscope },
    { id: 'sect-12', title: 'Complicaties en risico\u2019s van device-therapie', icon: AlertTriangle },
    { id: 'sect-13', title: 'De kern in de praktijk', icon: Table2 },
    { id: 'sect-14', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Brady aritmie en implanteerbare cardiale devices"
      description="Het hart heeft een eigen elektrisch geleidingssysteem dat ervoor zorgt dat de boezems en kamers in de juiste volgorde samenknijpen. De belangrijkste onderdelen zijn de sinusknoop, de AV-knoop, de bundel van His en de bundeltakken met Purkinjevezels."
      caseLabel="Week 5 · Casus 10: Atriumfibrilleren"
      blokLabel="Blok 9"
      practiceLink="/oefenvragen?lme=blok9-week5-casus10-brady-aritmie-en-implanteerbare-cardiale-devices"
      tableOfContents={tableOfContents}
      summaryVariantToggle={{
        activeLmeId: 'blok9-week5-casus10-brady-aritmie-en-implanteerbare-cardiale-devices',
        variants: [
          { id: 'blok9-week5-casus10-brady-aritmie-en-implanteerbare-cardiale-devices', label: 'Uitgebreid' },
          { id: 'blok9-week5-casus10-brady-aritmie-en-implanteerbare-cardiale-devices-mini', label: 'Kort' },
        ],
      }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02HetElektrischeNetwerk />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03WatIsBradycardie />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04KlinischBeeld />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05DiagnostiekEcg />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06BehandelingBradycardie />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07DePacemaker />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08IcdSecundairePreventie />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09PrimairePreventieIcd />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10Crt />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11VerdiepingCspEnSicd />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12Complicaties />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13KernInDePraktijk />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok9Week5Casus10BradyAritmieEnImplanteerbareCardialeDevicesSummary
