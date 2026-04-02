import {
  BookOpen,
  Droplets,
  Route,
  ClipboardList,
  Stethoscope,
  Syringe,
  TrendingDown,
  TrendingUp,
  FlaskConical,
  Scale,
  LayoutList,
  ListChecks,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02KaliumbalansBasis from './Sect02KaliumbalansBasis'
import Sect03Pathofysiologie from './Sect03Pathofysiologie'
import Sect04Anamnese from './Sect04Anamnese'
import Sect05LichamelijkOnderzoek from './Sect05LichamelijkOnderzoek'
import Sect06BehandelingOverzicht from './Sect06BehandelingOverzicht'
import Sect07Hypokaliemie from './Sect07Hypokaliemie'
import Sect08Hyperkaliemie from './Sect08Hyperkaliemie'
import Sect09Natriumbicarbonaat from './Sect09Natriumbicarbonaat'
import Sect10RAASRemming from './Sect10RAASRemming'
import Sect11SamenvattendKlinisch from './Sect11SamenvattendKlinisch'
import Sect12Samenvatting from './Sect12Samenvatting'

const Blok9Week2Casus3KlinischeStoornissenKaliumbalansSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Kaliumbalans: wat moet je in de basis weten?', icon: Droplets },
    { id: 'sect-03', title: 'Pathofysiologie van hypo- en hyperkaliëmie', icon: Route },
    { id: 'sect-04', title: 'Anamnese: waar moet je altijd naar vragen?', icon: ClipboardList },
    { id: 'sect-05', title: 'Lichamelijk onderzoek en aanvullende diagnostiek', icon: Stethoscope },
    { id: 'sect-06', title: 'Behandeling van hypokaliëmie en hyperkaliëmie', icon: Syringe },
    { id: 'sect-07', title: 'Hypokaliëmie', icon: TrendingDown },
    { id: 'sect-08', title: 'Hyperkaliëmie', icon: TrendingUp },
    { id: 'sect-09', title: 'Beperkte rol van natriumbicarbonaat', icon: FlaskConical },
    { id: 'sect-10', title: 'Hyperkaliëmie bij behandeling met RAAS-remming', icon: Scale },
    { id: 'sect-11', title: 'Samenvattend klinisch beeld', icon: LayoutList },
    { id: 'sect-12', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Klinische stoornissen van de kaliumbalans"
      description="Kalium is een belangrijk ion dat vooral intracellulair zit: het overgrote deel bevindt zich dus in de cellen en maar een heel klein deel in het serum. Juist daarom kan de serumkaliumspiegel snel veranderen door verschuivingen tussen intra- en extracellulair compartiment."
      caseLabel="Week 2 · Casus 3: Patiënt met ernstig verstoorde elektrolyten"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=blok9-week2-casus3-klinische-stoornissen-kaliumbalans"
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02KaliumbalansBasis /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03Pathofysiologie /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04Anamnese /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05LichamelijkOnderzoek /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06BehandelingOverzicht /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07Hypokaliemie /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08Hyperkaliemie /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09Natriumbicarbonaat /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Sect10RAASRemming /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Sect11SamenvattendKlinisch /></section>
      <section id="sect-12" className="scroll-mt-24 mb-12"><Sect12Samenvatting /></section>
    </SummaryLayout>
  )
}

export default Blok9Week2Casus3KlinischeStoornissenKaliumbalansSummary
