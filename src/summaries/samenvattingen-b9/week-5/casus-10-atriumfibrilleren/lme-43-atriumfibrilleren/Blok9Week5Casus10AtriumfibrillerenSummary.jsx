import {
  Activity,
  AlertTriangle,
  BookOpen,
  ClipboardList,
  GitBranch,
  HeartPulse,
  Layers,
  ListChecks,
  Microscope,
  Route,
  ShieldAlert,
  Stethoscope,
  Syringe,
  Table2,
  Zap,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02NormaleGeleidingEnOntstaan from './Sect02NormaleGeleidingEnOntstaan'
import Sect03MechanismenTriggersEnSubstraat from './Sect03MechanismenTriggersEnSubstraat'
import Sect04OorzakenVanAf from './Sect04OorzakenVanAf'
import Sect05HemodynamischeGevolgen from './Sect05HemodynamischeGevolgen'
import Sect06StaseEnTrombogeniteit from './Sect06StaseEnTrombogeniteit'
import Sect07KlinischePresentatie from './Sect07KlinischePresentatie'
import Sect08EcgEnDiagnostiek from './Sect08EcgEnDiagnostiek'
import Sect09AanvullendOnderzoek from './Sect09AanvullendOnderzoek'
import Sect10ClassificatieVanAf from './Sect10ClassificatieVanAf'
import Sect11Risicostratificatie from './Sect11Risicostratificatie'
import Sect12Behandeling from './Sect12Behandeling'
import Sect13PulmonaleVeneIsolatie from './Sect13PulmonaleVeneIsolatie'
import Sect14InstabielePatiënt from './Sect14InstabielePatiënt'
import Sect15Samenvatting from './Sect15Samenvatting'

const Blok9Week5Casus10AtriumfibrillerenSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Normale geleiding en het ontstaan van atriumfibrilleren', icon: Activity },
    { id: 'sect-03', title: 'Mechanismen: triggers en substraat', icon: GitBranch },
    { id: 'sect-04', title: 'Oorzaken van AF', icon: Layers },
    { id: 'sect-05', title: 'Hemodynamische gevolgen: atriale kick en slagvolume', icon: HeartPulse },
    { id: 'sect-06', title: 'Stase en trombogeniteit', icon: Table2 },
    { id: 'sect-07', title: 'Klinische presentatie en lichamelijk onderzoek', icon: Stethoscope },
    { id: 'sect-08', title: 'ECG en diagnostiek', icon: Zap },
    { id: 'sect-09', title: 'Aanvullend onderzoek', icon: Microscope },
    { id: 'sect-10', title: 'Classificatie van AF', icon: ClipboardList },
    { id: 'sect-11', title: 'Risicostratificatie: waarom en hoe?', icon: ShieldAlert },
    { id: 'sect-12', title: 'Behandeling: de grote strategische keuze', icon: Route },
    { id: 'sect-13', title: 'Interventie: pulmonale vene-isolatie', icon: Syringe },
    { id: 'sect-14', title: 'Instabiele patiënt: de rode vlag', icon: AlertTriangle },
    { id: 'sect-15', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Atriumfibrilleren"
      description="Bij atriumfibrilleren is die georganiseerde geleiding verdwenen. Het hartritme wordt dan niet meer bepaald door één enkele impuls uit de sinusknoop, maar door meerdere, rondcirkelende elektrische golfjes: multiple meandering re-entry wavelets."
      caseLabel="Week 5 · Casus 10: Atriumfibrilleren"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02NormaleGeleidingEnOntstaan />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03MechanismenTriggersEnSubstraat />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04OorzakenVanAf />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05HemodynamischeGevolgen />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06StaseEnTrombogeniteit />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07KlinischePresentatie />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08EcgEnDiagnostiek />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09AanvullendOnderzoek />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10ClassificatieVanAf />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11Risicostratificatie />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12Behandeling />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13PulmonaleVeneIsolatie />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14InstabielePatiënt />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok9Week5Casus10AtriumfibrillerenSummary
