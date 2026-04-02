import {
  Activity,
  BookOpen,
  FlaskConical,
  GitBranch,
  HeartPulse,
  Layers,
  ListChecks,
  Map,
  Microscope,
  Route,
  ShieldAlert,
  Stethoscope,
  Table2,
  Zap,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02DeSetting from './Sect02DeSetting'
import Sect03PercutaneToegangEnVenaFemoralis from './Sect03PercutaneToegangEnVenaFemoralis'
import Sect04ArteriaFemoralis from './Sect04ArteriaFemoralis'
import Sect05TransseptalePunctie from './Sect05TransseptalePunctie'
import Sect06BelangrijkeStructurenTijdensToegang from './Sect06BelangrijkeStructurenTijdensToegang'
import Sect07DiagnostiekMetenEnUitlokken from './Sect07DiagnostiekMetenEnUitlokken'
import Sect08GeleidingstijdenMeten from './Sect08GeleidingstijdenMeten'
import Sect09Pacing from './Sect09Pacing'
import Sect10VanEcgNaarIntracardiaalEgm from './Sect10VanEcgNaarIntracardiaalEgm'
import Sect11VanAnatomieNaarRontgenbeeld from './Sect11VanAnatomieNaarRontgenbeeld'
import Sect12KleurcodesIn3d from './Sect12KleurcodesIn3d'
import Sect13CirkelsOfHaarden from './Sect13CirkelsOfHaarden'
import Sect14AblatieAVNRT from './Sect14AblatieAVNRT'
import Sect15AblatieTypischeBoezemflutter from './Sect15AblatieTypischeBoezemflutter'
import Sect16AblatieAVRTWPW from './Sect16AblatieAVRTWPW'
import Sect17FocaleAtrialeTachycardie from './Sect17FocaleAtrialeTachycardie'
import Sect18BoezemfibrillerenEnPulmonaleVeneIsolatie from './Sect18BoezemfibrillerenEnPulmonaleVeneIsolatie'
import Sect19BehandelingInDeVentrikels from './Sect19BehandelingInDeVentrikels'
import Sect20VeiligheidEnRisicos from './Sect20VeiligheidEnRisicos'
import Sect21Samenvatting from './Sect21Samenvatting'

const Blok9Week5Casus10ElektrofysiologischOnderzoekEnAblatiesSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'De setting: waarom doen we een EFO en ablatie?', icon: HeartPulse },
    { id: 'sect-03', title: 'Percutane toegang via de lies', icon: Route },
    { id: 'sect-04', title: 'Arteria femoralis: voor de arteriële route', icon: Activity },
    { id: 'sect-05', title: 'Transseptale punctie: de binnendoorweg naar het linker atrium', icon: GitBranch },
    { id: 'sect-06', title: 'Belangrijke structuren tijdens toegang', icon: Stethoscope },
    { id: 'sect-07', title: 'De diagnostiek: meten en uitlokken', icon: Microscope },
    { id: 'sect-08', title: '1. Geleidingstijden meten', icon: Zap },
    { id: 'sect-09', title: '2. Pacing: de ritmestoornis uitlokken', icon: Activity },
    { id: 'sect-10', title: 'Van ECG naar intracardiaal EGM', icon: Table2 },
    { id: 'sect-11', title: 'Van anatomie naar röntgenbeeld', icon: Map },
    { id: 'sect-12', title: 'Kleurcodes in 3D: activatiekaart en voltagekaart', icon: Layers },
    { id: 'sect-13', title: 'Cirkels of haarden? De twee hoofdmechanismen', icon: FlaskConical },
    { id: 'sect-14', title: 'Waar branden we bij re-entry?', icon: Zap },
    { id: 'sect-15', title: 'Typische boezemflutter', icon: GitBranch },
    { id: 'sect-16', title: 'AVRT / WPW', icon: Zap },
    { id: 'sect-17', title: 'Focale atriale tachycardie', icon: Activity },
    { id: 'sect-18', title: 'Boezemfibrilleren en pulmonale vene isolatie', icon: HeartPulse },
    { id: 'sect-19', title: 'Behandeling in de ventrikels', icon: Stethoscope },
    { id: 'sect-20', title: 'Veiligheid en risico’s', icon: ShieldAlert },
    { id: 'sect-21', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Elektrofysiologisch onderzoek en ablaties"
      description="Een elektrofysiologisch onderzoek (EFO) en ablatie vinden plaats in het hartkatheterisatielaboratorium, de zogeheten cathlab-setting. Het is een minimaal invasieve ingreep. De patiënt is wakker, soms met sedatie, of onder algehele narcose, afhankelijk van de complexiteit."
      caseLabel="Week 5 · Casus 10: Atriumfibrilleren"
      blokLabel="Blok 9"
      practiceLink="/oefenvragen?lme=blok9-week5-casus10-elektrofysiologisch-onderzoek-en-ablaties"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02DeSetting />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03PercutaneToegangEnVenaFemoralis />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04ArteriaFemoralis />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05TransseptalePunctie />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06BelangrijkeStructurenTijdensToegang />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07DiagnostiekMetenEnUitlokken />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08GeleidingstijdenMeten />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09Pacing />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10VanEcgNaarIntracardiaalEgm />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11VanAnatomieNaarRontgenbeeld />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12KleurcodesIn3d />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13CirkelsOfHaarden />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14AblatieAVNRT />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15AblatieTypischeBoezemflutter />
      </section>
      <section id="sect-16" className="scroll-mt-24 mb-12">
        <Sect16AblatieAVRTWPW />
      </section>
      <section id="sect-17" className="scroll-mt-24 mb-12">
        <Sect17FocaleAtrialeTachycardie />
      </section>
      <section id="sect-18" className="scroll-mt-24 mb-12">
        <Sect18BoezemfibrillerenEnPulmonaleVeneIsolatie />
      </section>
      <section id="sect-19" className="scroll-mt-24 mb-12">
        <Sect19BehandelingInDeVentrikels />
      </section>
      <section id="sect-20" className="scroll-mt-24 mb-12">
        <Sect20VeiligheidEnRisicos />
      </section>
      <section id="sect-21" className="scroll-mt-24 mb-12">
        <Sect21Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok9Week5Casus10ElektrofysiologischOnderzoekEnAblatiesSummary
