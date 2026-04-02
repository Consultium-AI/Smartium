import {
  Activity,
  BookOpen,
  CircleCheck,
  Globe,
  HeartPulse,
  Layers,
  MessageCircle,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02Volksgezondheidsmaten from './Sect02Volksgezondheidsmaten'
import Sect03SterfteEnLevensverwachting from './Sect03SterfteEnLevensverwachting'
import Sect04GezondeLevensverwachting from './Sect04GezondeLevensverwachting'
import Sect05AandachtBijInterpretatieLevensverwachting from './Sect05AandachtBijInterpretatieLevensverwachting'
import Sect06DALYsZiektelast from './Sect06DALYsZiektelast'
import Sect07GezondheidEnZiektelastOpWereldschaal from './Sect07GezondheidEnZiektelastOpWereldschaal'
import Sect08GezondheidsverschillenTussenWHORegios from './Sect08GezondheidsverschillenTussenWHORegios'
import Sect09InkomensniveauEnEpidemiologischeTransitie from './Sect09InkomensniveauEnEpidemiologischeTransitie'
import Sect10RokenSterfteEnBeleid from './Sect10RokenSterfteEnBeleid'
import Sect11Samenvatting from './Sect11Samenvatting'

const Blok5Week4Casus8VolksgezondheidsindicatorenDalysSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Volksgezondheidsmaten', icon: Layers },
    { id: 'sect-03', title: 'Sterfte en levensverwachting', icon: HeartPulse },
    { id: 'sect-04', title: 'Gezonde levensverwachting', icon: Activity },
    { id: 'sect-05', title: 'Aandacht bij de interpretatie van levensverwachting', icon: MessageCircle },
    { id: 'sect-06', title: 'DALY’s: ziektelast in één maat', icon: Table2 },
    { id: 'sect-07', title: 'Gezondheid en ziektelast op wereldschaal', icon: Globe },
    { id: 'sect-08', title: 'Gezondheidsverschillen tussen WHO-regio’s', icon: Globe },
    { id: 'sect-09', title: 'Inkomensniveau en epidemiologische transitie', icon: Table2 },
    { id: 'sect-10', title: 'Roken, sterfte en beleid', icon: Stethoscope },
    { id: 'sect-11', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Volksgezondheidsindicatoren DALY’s"
      description="Om de gezondheidstoestand van een bevolking te beschrijven, worden verschillende maten gebruikt. Die zijn niet helemaal los van elkaar, maar ze leggen wel andere accenten. Het is handig om ze in vier groepen te verdelen."
      caseLabel="Week 4 · Casus 8: Zwelling in de oksel"
      blokLabel="Blok 5"
      practiceLink="/oefenvragen?lme=blok5-week4-casus8-volksgezondheidsindicatoren-dalys"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02Volksgezondheidsmaten />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03SterfteEnLevensverwachting />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04GezondeLevensverwachting />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05AandachtBijInterpretatieLevensverwachting />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06DALYsZiektelast />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07GezondheidEnZiektelastOpWereldschaal />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08GezondheidsverschillenTussenWHORegios />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09InkomensniveauEnEpidemiologischeTransitie />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10RokenSterfteEnBeleid />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week4Casus8VolksgezondheidsindicatorenDalysSummary
