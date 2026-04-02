import {
  BookOpen,
  Info,
  Scale,
  Search,
  Layers,
  Droplets,
  HeartPulse,
  Activity,
  Lollipop,
  Pill,
  ScanLine,
  Heart,
  Dna,
  Table2,
  ListOrdered,
  Moon,
  ListChecks,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02Inleiding from './Sect02Inleiding'
import Sect03PrimaireVersusSecundaire from './Sect03PrimaireVersusSecundaire'
import Sect04WanneerSecundaireHypertensie from './Sect04WanneerSecundaireHypertensie'
import Sect05EndocrieneOorzaken from './Sect05EndocrieneOorzaken'
import Sect06PrimairHyperaldosteronisme from './Sect06PrimairHyperaldosteronisme'
import Sect07FeochromocytoomEnCushing from './Sect07FeochromocytoomEnCushing'
import Sect08BijnierEnRaas from './Sect08BijnierEnRaas'
import Sect09Drop from './Sect09Drop'
import Sect10Geneesmiddelen from './Sect10Geneesmiddelen'
import Sect11ParenchymateuzeNierziekten from './Sect11ParenchymateuzeNierziekten'
import Sect12RenovasculairEnCoarctatio from './Sect12RenovasculairEnCoarctatio'
import Sect13MonogenetischeHypertensie from './Sect13MonogenetischeHypertensie'
import Sect14Tabel3Clues from './Sect14Tabel3Clues'
import Sect15PraktischeSamenvattingOorzaken from './Sect15PraktischeSamenvattingOorzaken'
import Sect16Osas from './Sect16Osas'
import Sect17EindSamenvatting from './Sect17EindSamenvatting'

const Blok9Week3Casus5SecundaireHypertensieSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Inleiding', icon: Info },
    { id: 'sect-03', title: 'Primaire versus secundaire hypertensie', icon: Scale },
    { id: 'sect-04', title: 'Wanneer denk je aan secundaire hypertensie?', icon: Search },
    { id: 'sect-05', title: 'Oorzaken van secundaire hypertensie', icon: Layers },
    { id: 'sect-06', title: 'Primair hyperaldosteronisme', icon: Droplets },
    { id: 'sect-07', title: 'Feochromocytoom en Cushing', icon: HeartPulse },
    { id: 'sect-08', title: 'Bijnier en RAAS', icon: Activity },
    { id: 'sect-09', title: 'Diët en genotsmiddelen: drop', icon: Lollipop },
    { id: 'sect-10', title: 'Geneesmiddelen', icon: Pill },
    { id: 'sect-11', title: 'Parenchymateuze nierziekten', icon: ScanLine },
    { id: 'sect-12', title: '(Reno)vasculaire oorzaken', icon: Heart },
    { id: 'sect-13', title: 'Monogenetische hypertensie', icon: Dna },
    { id: 'sect-14', title: 'Clues en aanvullend onderzoek', icon: Table2 },
    { id: 'sect-15', title: 'Praktische samenvatting van de belangrijkste oorzaken', icon: ListOrdered },
    { id: 'sect-16', title: 'Obstructief slaapapneusyndroom (OSAS)', icon: Moon },
    { id: 'sect-17', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Secundaire hypertensie"
      description="Hypertensie is een veelvoorkomende chronische aandoening. In de meeste gevallen is er geen duidelijke, enkelvoudige oorzaak aan te wijzen. Dan gaat het om primaire hypertensie: een combinatie van factoren speelt samen, zoals aanleg, leefstijl en stress."
      caseLabel="Week 3 · Casus 5: Patiënt met hypertensie"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=blok9-week3-casus5-secundaire-hypertensie"
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02Inleiding /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03PrimaireVersusSecundaire /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04WanneerSecundaireHypertensie /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05EndocrieneOorzaken /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06PrimairHyperaldosteronisme /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07FeochromocytoomEnCushing /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08BijnierEnRaas /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09Drop /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Sect10Geneesmiddelen /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Sect11ParenchymateuzeNierziekten /></section>
      <section id="sect-12" className="scroll-mt-24 mb-12"><Sect12RenovasculairEnCoarctatio /></section>
      <section id="sect-13" className="scroll-mt-24 mb-12"><Sect13MonogenetischeHypertensie /></section>
      <section id="sect-14" className="scroll-mt-24 mb-12"><Sect14Tabel3Clues /></section>
      <section id="sect-15" className="scroll-mt-24 mb-12"><Sect15PraktischeSamenvattingOorzaken /></section>
      <section id="sect-16" className="scroll-mt-24 mb-12"><Sect16Osas /></section>
      <section id="sect-17" className="scroll-mt-24 mb-12"><Sect17EindSamenvatting /></section>
    </SummaryLayout>
  )
}

export default Blok9Week3Casus5SecundaireHypertensieSummary
