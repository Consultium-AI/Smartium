import {
  Activity,
  BookOpen,
  CircleCheck,
  Dna,
  FlaskConical,
  GitBranch,
  Layers,
  Microscope,
  Stethoscope,
  Table2,
  Target,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02InleidingWatZijnHallmarks from './Sect02InleidingWatZijnHallmarks'
import Sect03BasisgedachteVanHetModel from './Sect03BasisgedachteVanHetModel'
import Sect04OverzichtTienHallmarksTabel1 from './Sect04OverzichtTienHallmarksTabel1'
import Sect05ZesOorspronkelijkHallmark1en2 from './Sect05ZesOorspronkelijkHallmark1en2'
import Sect06ZesOorspronkelijkHallmark3en4 from './Sect06ZesOorspronkelijkHallmark3en4'
import Sect07ZesOorspronkelijkHallmark5en6 from './Sect07ZesOorspronkelijkHallmark5en6'
import Sect08VierExtraKenmerken from './Sect08VierExtraKenmerken'
import Sect09PatientenEnTherapieenTabel2 from './Sect09PatientenEnTherapieenTabel2'
import Sect10KlinischeBetekenis from './Sect10KlinischeBetekenis'
import Sect11Samenvatting from './Sect11Samenvatting'

const Blok5Week5Casus11KinderoncologieBegrijpDeHallmarksSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Inleiding: wat zijn hallmarks of cancer?', icon: Layers },
    { id: 'sect-03', title: 'De basisgedachte van het model', icon: GitBranch },
    { id: 'sect-04', title: 'Overzicht van de tien hallmarks', icon: Table2 },
    { id: 'sect-05', title: 'De zes oorspronkelijke kenmerken (1–2)', icon: Microscope },
    { id: 'sect-06', title: 'De zes oorspronkelijke kenmerken (3–4)', icon: Activity },
    { id: 'sect-07', title: 'De zes oorspronkelijke kenmerken (5–6)', icon: Target },
    { id: 'sect-08', title: 'De vier extra kenmerken uit de latere uitbreiding', icon: Dna },
    { id: 'sect-09', title: 'Waarom zijn de hallmarks belangrijk voor patiënten?', icon: Stethoscope },
    { id: 'sect-10', title: 'Klinische betekenis: waarom dit kennis oplevert', icon: FlaskConical },
    { id: 'sect-11', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Kinderoncologie - begrijp de hallmarks"
      description="De term hallmarks of cancer verwijst naar de typische eigenschappen van kankercellen. Het is een manier om kanker te begrijpen als een ziekte waarbij cellen stap voor stap kenmerken verwerven die hen helpen om te groeien, te overleven en zich te verspreiden."
      caseLabel="Week 5 · Casus 11: Kind met algehele malaise, koorts en zwelling in de buik"
      blokLabel="Blok 5"
      practiceLink="/oefenvragen?lme=blok5-week5-casus11-kinderoncologie-begrijp-de-hallmarks"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02InleidingWatZijnHallmarks />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03BasisgedachteVanHetModel />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04OverzichtTienHallmarksTabel1 />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05ZesOorspronkelijkHallmark1en2 />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06ZesOorspronkelijkHallmark3en4 />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07ZesOorspronkelijkHallmark5en6 />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08VierExtraKenmerken />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09PatientenEnTherapieenTabel2 />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10KlinischeBetekenis />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week5Casus11KinderoncologieBegrijpDeHallmarksSummary
