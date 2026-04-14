import {
  BookOpen,
  CircleCheck,
  ClipboardList,
  HelpCircle,
  Layers,
  Microscope,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02EersteBenadering from './Sect02EersteBenadering'
import Sect03AandachtvraagGroei from './Sect03AandachtvraagGroei'
import Sect04WanneerAanvullendOnderzoek from './Sect04WanneerAanvullendOnderzoek'
import Sect05PremaligneAfwijkingen from './Sect05PremaligneAfwijkingen'
import Sect06BasaalcelcarcinoomAlgemeen from './Sect06BasaalcelcarcinoomAlgemeen'
import Sect07Tabel1Bcc from './Sect07Tabel1Bcc'
import Sect08DiagnostiekEnBehandelingBcc from './Sect08DiagnostiekEnBehandelingBcc'
import Sect09AandachtvraagBccMetastasen from './Sect09AandachtvraagBccMetastasen'
import Sect10Plaveiselcelcarcinoom from './Sect10Plaveiselcelcarcinoom'
import Sect11Tabel2BccEnScc from './Sect11Tabel2BccEnScc'
import Sect12DiagnostiekEnBehandelingScc from './Sect12DiagnostiekEnBehandelingScc'
import Sect13EerstejaarsHerinnering from './Sect13EerstejaarsHerinnering'
import Sect14AandachtvraagVuistregel from './Sect14AandachtvraagVuistregel'
import Sect15SlotSamenvatting from './Sect15SlotSamenvatting'

const Blok5Week3Casus5LmoVerdachteHuidafwijkingenSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Eerste benadering van een verdachte huidafwijking', icon: Layers },
    { id: 'sect-03', title: 'Aandacht-vraagje', icon: HelpCircle },
    { id: 'sect-04', title: 'Wanneer aanvullend onderzoek nodig is', icon: Stethoscope },
    { id: 'sect-05', title: 'Premaligne afwijkingen: waarom ze belangrijk zijn', icon: Microscope },
    { id: 'sect-06', title: 'Basaalcelcarcinoom: de meest voorkomende huidkanker', icon: Layers },
    { id: 'sect-07', title: 'Tabel 1. Basaalcelcarcinoom in het kort', icon: Table2 },
    { id: 'sect-08', title: 'Diagnostiek en behandeling van BCC', icon: ClipboardList },
    { id: 'sect-09', title: 'Aandacht-vraagje', icon: HelpCircle },
    { id: 'sect-10', title: 'Plaveiselcelcarcinoom: klinisch belangrijker door metastaseringsrisico', icon: Layers },
    { id: 'sect-11', title: 'Tabel 2. BCC en SCC naast elkaar', icon: Table2 },
    { id: 'sect-12', title: 'Diagnostiek en behandeling van SCC', icon: ClipboardList },
    { id: 'sect-13', title: 'Wat moet je als eerstejaars vooral onthouden?', icon: BookOpen },
    { id: 'sect-14', title: 'Aandacht-vraagje', icon: HelpCircle },
    { id: 'sect-15', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Verdachte huidafwijkingen"
      description="Bij verdachte huidafwijkingen werk je stap voor stap. Eerst kijk je naar kleur en oppervlak. Is de afwijking huidkleurig of niet-huidkleurig? Is het oppervlak glad of juist keratotisch of schilferend? Daarna vergelijk je het beeld met de meest waarschijnlijke differentiaaldiagnosen."
      caseLabel="Week 3 · Casus 5: De verdachte huid"
      blokLabel="Blok 5"
      moduleKind="lmo"
      practiceLink="/oefenvragen?lme=blok5-week3-casus5-lmo-verdachte-huidafwijkingen"
      tableOfContents={tableOfContents}
    summaryVariantToggle={{
      activeLmeId: 'blok5-week3-casus5-lmo-verdachte-huidafwijkingen',
      variants: [
        { id: 'blok5-week3-casus5-lmo-verdachte-huidafwijkingen', label: 'Uitgebreid' },
        { id: 'blok5-week3-casus5-lmo-verdachte-huidafwijkingen-mini', label: 'Kort' },
      ],
    }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02EersteBenadering />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03AandachtvraagGroei />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04WanneerAanvullendOnderzoek />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05PremaligneAfwijkingen />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06BasaalcelcarcinoomAlgemeen />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07Tabel1Bcc />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08DiagnostiekEnBehandelingBcc />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09AandachtvraagBccMetastasen />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10Plaveiselcelcarcinoom />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11Tabel2BccEnScc />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12DiagnostiekEnBehandelingScc />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13EerstejaarsHerinnering />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14AandachtvraagVuistregel />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15SlotSamenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week3Casus5LmoVerdachteHuidafwijkingenSummary
