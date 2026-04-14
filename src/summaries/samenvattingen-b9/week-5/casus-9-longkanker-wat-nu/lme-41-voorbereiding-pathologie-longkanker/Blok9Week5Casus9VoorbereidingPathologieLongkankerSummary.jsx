import {
  BookOpen,
  Boxes,
  ClipboardList,
  Droplets,
  Hand,
  Layers,
  LayoutList,
  ListChecks,
  Microscope,
  Route,
  Scan,
  Stethoscope,
  Table2,
  Wind,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02NormaleLongIntro from './Sect02NormaleLongIntro'
import Sect03BronchusEnBronchuswand from './Sect03BronchusEnBronchuswand'
import Sect04Tabel1Bronchus from './Sect04Tabel1Bronchus'
import Sect05HetAlveolaireDeel from './Sect05HetAlveolaireDeel'
import Sect06PneumocytenEnSurfactant from './Sect06PneumocytenEnSurfactant'
import Sect07DeBloedLuchtbarriere from './Sect07DeBloedLuchtbarriere'
import Sect08AndereKenmerkenAlveolair from './Sect08AndereKenmerkenAlveolair'
import Sect09Tabel2Alveoli from './Sect09Tabel2Alveoli'
import Sect10LongcarcinoomBasisbegrippen from './Sect10LongcarcinoomBasisbegrippen'
import Sect11OorzakenEnRisicofactoren from './Sect11OorzakenEnRisicofactoren'
import Sect12Tabel3Risicofactoren from './Sect12Tabel3Risicofactoren'
import Sect13KlinischePresentatie from './Sect13KlinischePresentatie'
import Sect14Mesothelioom from './Sect14Mesothelioom'
import Sect15DeCasus from './Sect15DeCasus'
import Sect16DeHandafwijking from './Sect16DeHandafwijking'
import Sect17Hypercalciemie from './Sect17Hypercalciemie'
import Sect18WaaromZoveelLuchtweginfecties from './Sect18WaaromZoveelLuchtweginfecties'
import Sect19AanvullendOnderzoekEnBeeldvorming from './Sect19AanvullendOnderzoekEnBeeldvorming'
import Sect20Beleid from './Sect20Beleid'
import Sect21SamenvattendOverzicht from './Sect21SamenvattendOverzicht'
import Sect22Samenvatting from './Sect22Samenvatting'

const Blok9Week5Casus9VoorbereidingPathologieLongkankerSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Normale long: bouw en histologie', icon: Wind },
    { id: 'sect-03', title: 'De bronchus en bronchuswand', icon: Boxes },
    { id: 'sect-04', title: 'Tabel 1. Belangrijke onderdelen van de bronchus', icon: Table2 },
    { id: 'sect-05', title: 'Het alveolaire deel van de long', icon: Droplets },
    { id: 'sect-06', title: 'Pneumocyten en surfactant', icon: Layers },
    { id: 'sect-07', title: 'De bloed-luchtbarrière', icon: Route },
    { id: 'sect-08', title: 'Andere kenmerken van het alveolaire gebied', icon: Boxes },
    { id: 'sect-09', title: 'Tabel 2. Belangrijke cellen in de alveoli', icon: Table2 },
    { id: 'sect-10', title: 'Longcarcinoom: basisbegrippen en indeling', icon: Microscope },
    { id: 'sect-11', title: 'Oorzaken en risicofactoren', icon: Stethoscope },
    { id: 'sect-12', title: 'Tabel 3. Risicofactoren voor longcarcinoom', icon: Table2 },
    { id: 'sect-13', title: 'Klinische presentatie van longtumoren', icon: ClipboardList },
    { id: 'sect-14', title: 'Mesothelioom', icon: Layers },
    { id: 'sect-15', title: 'De casus: klachten, onderzoek en interpretatie', icon: ClipboardList },
    { id: 'sect-16', title: 'De handafwijking', icon: Hand },
    { id: 'sect-17', title: 'Hypercalciëmie', icon: Droplets },
    { id: 'sect-18', title: 'Waarom zoveel luchtweginfecties?', icon: Stethoscope },
    { id: 'sect-19', title: 'Aanvullend onderzoek en beeldvorming', icon: Scan },
    { id: 'sect-20', title: 'Beleid', icon: ClipboardList },
    { id: 'sect-21', title: 'Samenvattend overzicht', icon: LayoutList },
    { id: 'sect-22', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Voorbereiding pathologie longkanker"
      description="Om longkanker goed te begrijpen, is het belangrijk eerst te weten hoe een normale long eruitziet. De long bestaat uit meerdere onderdelen, van grotere luchtwegen zoals de trachea en bronchi tot de kleine luchtwegen en de alveoli."
      caseLabel="Week 5 · Casus 9: Longkanker, wat nu"
      blokLabel="Blok 9"
      practiceLink="/oefenvragen?lme=blok9-week5-casus9-voorbereiding-pathologie-longkanker"
      tableOfContents={tableOfContents}
      summaryVariantToggle={{
        activeLmeId: 'blok9-week5-casus9-voorbereiding-pathologie-longkanker',
        variants: [
          { id: 'blok9-week5-casus9-voorbereiding-pathologie-longkanker', label: 'Uitgebreid' },
          { id: 'blok9-week5-casus9-voorbereiding-pathologie-longkanker-mini', label: 'Kort' },
        ],
      }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02NormaleLongIntro /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03BronchusEnBronchuswand /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04Tabel1Bronchus /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05HetAlveolaireDeel /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06PneumocytenEnSurfactant /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07DeBloedLuchtbarriere /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08AndereKenmerkenAlveolair /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09Tabel2Alveoli /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Sect10LongcarcinoomBasisbegrippen /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Sect11OorzakenEnRisicofactoren /></section>
      <section id="sect-12" className="scroll-mt-24 mb-12"><Sect12Tabel3Risicofactoren /></section>
      <section id="sect-13" className="scroll-mt-24 mb-12"><Sect13KlinischePresentatie /></section>
      <section id="sect-14" className="scroll-mt-24 mb-12"><Sect14Mesothelioom /></section>
      <section id="sect-15" className="scroll-mt-24 mb-12"><Sect15DeCasus /></section>
      <section id="sect-16" className="scroll-mt-24 mb-12"><Sect16DeHandafwijking /></section>
      <section id="sect-17" className="scroll-mt-24 mb-12"><Sect17Hypercalciemie /></section>
      <section id="sect-18" className="scroll-mt-24 mb-12"><Sect18WaaromZoveelLuchtweginfecties /></section>
      <section id="sect-19" className="scroll-mt-24 mb-12"><Sect19AanvullendOnderzoekEnBeeldvorming /></section>
      <section id="sect-20" className="scroll-mt-24 mb-12"><Sect20Beleid /></section>
      <section id="sect-21" className="scroll-mt-24 mb-12"><Sect21SamenvattendOverzicht /></section>
      <section id="sect-22" className="scroll-mt-24 mb-12"><Sect22Samenvatting /></section>
    </SummaryLayout>
  )
}

export default Blok9Week5Casus9VoorbereidingPathologieLongkankerSummary
