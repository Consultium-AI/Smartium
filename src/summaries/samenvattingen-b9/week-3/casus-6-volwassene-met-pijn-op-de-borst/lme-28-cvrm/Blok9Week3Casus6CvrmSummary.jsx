import {
  BookOpen,
  HeartPulse,
  ListChecks,
  Stethoscope,
  Table2,
  Scale,
  Activity,
  Apple,
  Pill,
  Microscope,
  ClipboardList,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02CvrmBasisEnPreventie from './Sect02CvrmBasisEnPreventie'
import Sect03Risicofactoren from './Sect03Risicofactoren'
import Sect04RisicoprofielAnamnese from './Sect04RisicoprofielAnamnese'
import Sect05LichamelijkOnderzoekEnTabel1 from './Sect05LichamelijkOnderzoekEnTabel1'
import Sect06RisicoInschatten from './Sect06RisicoInschatten'
import Sect07VerhoogdRisicoNntNnh from './Sect07VerhoogdRisicoNntNnh'
import Sect08LeefstijlEnTabel3 from './Sect08LeefstijlEnTabel3'
import Sect09Hypertensie from './Sect09Hypertensie'
import Sect10TherapieresistenteHypertensie from './Sect10TherapieresistenteHypertensie'
import Sect11Dyslipidemie from './Sect11Dyslipidemie'
import Sect12BehandelingDyslipidemie from './Sect12BehandelingDyslipidemie'
import Sect13KlinischeRelevantie from './Sect13KlinischeRelevantie'
import Sect14Samenvatting from './Sect14Samenvatting'

const Blok9Week3Casus6CvrmSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Cardiovasculair risicomanagement: de basis', icon: HeartPulse },
    { id: 'sect-03', title: 'Risicofactoren: wat moet je altijd uitvragen?', icon: ListChecks },
    { id: 'sect-04', title: 'Cardiovasculaire risicoprofiel-anamnese', icon: ClipboardList },
    { id: 'sect-05', title: 'Lichamelijk onderzoek en aanvullend onderzoek', icon: Stethoscope },
    { id: 'sect-06', title: 'Risico inschatten: hoe doe je dat?', icon: Scale },
    { id: 'sect-07', title: 'Wat doe je bij een verhoogd risico?', icon: Activity },
    { id: 'sect-08', title: 'Leefstijl: altijd het startpunt', icon: Apple },
    { id: 'sect-09', title: 'Hypertensie', icon: Pill },
    { id: 'sect-10', title: 'Therapieresistente hypertensie', icon: Pill },
    { id: 'sect-11', title: 'Dyslipidemie', icon: Microscope },
    { id: 'sect-12', title: 'Behandeling van dyslipidemie', icon: Table2 },
    { id: 'sect-13', title: 'Klinische relevantie', icon: Stethoscope },
    { id: 'sect-14', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="CVRM"
      description="Cardiovasculair risicomanagement, kortweg CVRM, draait om het voorkomen van hart- en vaatziekten. Voor hart- en vaatziekten geldt net als voor veel andere aandoeningen: voorkomen is beter dan genezen. Het gaat hierbij vooral om aandoeningen waarbij atherosclerose een centrale rol speelt."
      caseLabel="Week 3 · Casus 6: Volwassene met pijn op de borst"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=blok9-week3-casus6-cvrm"
      summaryVariantToggle={{
        activeLmeId: 'blok9-week3-casus6-cvrm',
        variants: [
          { id: 'blok9-week3-casus6-cvrm', label: 'Uitgebreid' },
          { id: 'blok9-week3-casus6-cvrm-mini', label: 'Kort' },
        ],
      }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02CvrmBasisEnPreventie /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03Risicofactoren /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04RisicoprofielAnamnese /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05LichamelijkOnderzoekEnTabel1 /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06RisicoInschatten /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07VerhoogdRisicoNntNnh /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08LeefstijlEnTabel3 /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09Hypertensie /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Sect10TherapieresistenteHypertensie /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Sect11Dyslipidemie /></section>
      <section id="sect-12" className="scroll-mt-24 mb-12"><Sect12BehandelingDyslipidemie /></section>
      <section id="sect-13" className="scroll-mt-24 mb-12"><Sect13KlinischeRelevantie /></section>
      <section id="sect-14" className="scroll-mt-24 mb-12"><Sect14Samenvatting /></section>
    </SummaryLayout>
  )
}

export default Blok9Week3Casus6CvrmSummary
