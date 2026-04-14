import {
  BookOpen,
  HelpCircle,
  LayoutGrid,
  HeartHandshake,
  Gavel,
  AlertTriangle,
  Cross,
  Landmark,
  Moon,
  ListOrdered,
  GitCompare,
  FileText,
  ListChecks,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02WaaromOrgaandonatie from './Sect02WaaromOrgaandonatie'
import Sect03TweeKlassiekeBenaderingen from './Sect03TweeKlassiekeBenaderingen'
import Sect04LevendeOrgaandonatie from './Sect04LevendeOrgaandonatie'
import Sect05JuridischeVoorwaarden from './Sect05JuridischeVoorwaarden'
import Sect06MoreleSpanning from './Sect06MoreleSpanning'
import Sect07PostmortaleOrgaandonatie from './Sect07PostmortaleOrgaandonatie'
import Sect08NederlandseDonorsysteem from './Sect08NederlandseDonorsysteem'
import Sect09LevenNaDeDood from './Sect09LevenNaDeDood'
import Sect10Wachtlijsten from './Sect10Wachtlijsten'
import Sect11UitsprakenHerkennen from './Sect11UitsprakenHerkennen'
import Sect12SamenvattingBelangrijksteGedachte from './Sect12SamenvattingBelangrijksteGedachte'
import Sect13Samenvatting from './Sect13Samenvatting'

const Blok9Week1Casus2EthiekVanOrgaantransplantatieSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Waarom orgaandonatie ethisch bijzonder is', icon: HelpCircle },
    { id: 'sect-03', title: 'Twee klassieke benaderingen van ethische argumentatie', icon: LayoutGrid },
    { id: 'sect-04', title: 'Levende orgaandonatie', icon: HeartHandshake },
    { id: 'sect-05', title: 'Juridische voorwaarden bij levende donatie', icon: Gavel },
    { id: 'sect-06', title: 'Morele spanning bij levende donatie', icon: AlertTriangle },
    { id: 'sect-07', title: 'Postmortale orgaandonatie', icon: Cross },
    { id: 'sect-08', title: 'Het Nederlandse donorsysteem', icon: Landmark },
    { id: 'sect-09', title: 'Leven na de dood in morele zin', icon: Moon },
    { id: 'sect-10', title: 'Wachtlijsten en verdelingsvraagstukken', icon: ListOrdered },
    { id: 'sect-11', title: 'Deontologische en teleologische uitspraken herkennen', icon: GitCompare },
    { id: 'sect-12', title: 'Samenvatting van de belangrijkste gedachte', icon: FileText },
    { id: 'sect-13', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Ethiek van orgaantransplantatie"
      description="Orgaandonatie is ethisch een bijzonder terrein binnen de geneeskunde, omdat er bijna altijd een derde betrokkene is: de donor. Zonder donor is transplantatie niet mogelijk. Daardoor ontstaan direct specifieke morele vragen."
      caseLabel="Week 1 · Casus 2: Patiënt met chronische nierschade"
      blokLabel="Blok 9"
      practiceLink="/oefenvragen?lme=blok9-week1-casus2-ethiek-van-orgaantransplantatie"
      tableOfContents={tableOfContents}
      summaryVariantToggle={{
        activeLmeId: 'blok9-week1-casus2-ethiek-van-orgaantransplantatie',
        variants: [
          { id: 'blok9-week1-casus2-ethiek-van-orgaantransplantatie', label: 'Uitgebreid' },
          { id: 'blok9-week1-casus2-ethiek-van-orgaantransplantatie-mini', label: 'Kort' },
        ],
      }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02WaaromOrgaandonatie /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03TweeKlassiekeBenaderingen /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04LevendeOrgaandonatie /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05JuridischeVoorwaarden /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06MoreleSpanning /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07PostmortaleOrgaandonatie /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08NederlandseDonorsysteem /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09LevenNaDeDood /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Sect10Wachtlijsten /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Sect11UitsprakenHerkennen /></section>
      <section id="sect-12" className="scroll-mt-24 mb-12"><Sect12SamenvattingBelangrijksteGedachte /></section>
      <section id="sect-13" className="scroll-mt-24 mb-12"><Sect13Samenvatting /></section>
    </SummaryLayout>
  )
}

export default Blok9Week1Casus2EthiekVanOrgaantransplantatieSummary
