import {
  Activity,
  BookOpen,
  Building2,
  Car,
  CircleCheck,
  ClipboardList,
  Factory,
  Globe2,
  Leaf,
  ListChecks,
  Pill,
  Scale,
  Sprout,
  Table2,
  Target,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02ZorgEnKlimaat from './Sect02ZorgEnKlimaat'
import Sect03WettenRegelsEnDoelen from './Sect03WettenRegelsEnDoelen'
import Sect04WaarKomtUitstootVandaan from './Sect04WaarKomtUitstootVandaan'
import Sect05WaarZitDeCo2Uitstoot from './Sect05WaarZitDeCo2Uitstoot'
import Sect06ImpactInKaart from './Sect06ImpactInKaart'
import Sect07TriasEnergetica from './Sect07TriasEnergetica'
import Sect08Energiegebruik from './Sect08Energiegebruik'
import Sect09Vervoer from './Sect09Vervoer'
import Sect10MedicijnenEnHulpmiddelen from './Sect10MedicijnenEnHulpmiddelen'
import Sect11Voeding from './Sect11Voeding'
import Sect12BeleidEnManagement from './Sect12BeleidEnManagement'
import Sect13DuurzaamErasmusMc from './Sect13DuurzaamErasmusMc'
import Sect14BelangrijksteBoodschap from './Sect14BelangrijksteBoodschap'
import Sect15Samenvatting from './Sect15Samenvatting'

const Blok5Week3Casus5MilieuEnGezondheidSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Zorg en klimaat: waarom is dit belangrijk?', icon: Globe2 },
    { id: 'sect-03', title: 'Wetten, regels en doelen', icon: Scale },
    { id: 'sect-04', title: 'Waar komt de uitstoot in de zorg vandaan?', icon: Factory },
    { id: 'sect-05', title: 'Waar zit de CO₂-uitstoot in?', icon: Table2 },
    { id: 'sect-06', title: 'Hoe breng je impact in kaart?', icon: ClipboardList },
    { id: 'sect-07', title: 'Wat kun je doen? De trias energetica', icon: Leaf },
    { id: 'sect-08', title: 'Energiegebruik: kleine keuzes, grote winst', icon: Activity },
    { id: 'sect-09', title: 'Vervoer: minder beweging, schonere beweging', icon: Car },
    { id: 'sect-10', title: 'Medicijnen en hulpmiddelen: kijk naar de hele keten', icon: Pill },
    { id: 'sect-11', title: 'Voeding: minder verspillen, duurzamer kiezen', icon: Sprout },
    {
      id: 'sect-12',
      title: 'Beleid en management: verduurzaming vraagt om keuzes aan de top',
      icon: Building2,
    },
    { id: 'sect-13', title: 'Duurzaam Erasmus MC en jouw rol als student', icon: ListChecks },
    { id: 'sect-14', title: 'Belangrijkste boodschap', icon: Target },
    { id: 'sect-15', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Milieu en gezondheid"
      description="De zorgsector draagt in Nederland voor ongeveer 7% bij aan de nationale CO₂-uitstoot. Dat is een groot aandeel en vergelijkbaar met de uitstoot van 19 miljoen huishoudens. Tegelijk is juist de zorg er om gezondheid te beschermen."
      caseLabel="Week 3 · Casus 5: De verdachte huid"
      blokLabel="Blok 5"
      practiceLink="/oefenvragen?lme=blok5-week3-casus5-milieu-en-gezondheid"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02ZorgEnKlimaat />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03WettenRegelsEnDoelen />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04WaarKomtUitstootVandaan />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05WaarZitDeCo2Uitstoot />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06ImpactInKaart />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07TriasEnergetica />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08Energiegebruik />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09Vervoer />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10MedicijnenEnHulpmiddelen />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11Voeding />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12BeleidEnManagement />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13DuurzaamErasmusMc />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14BelangrijksteBoodschap />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week3Casus5MilieuEnGezondheidSummary
