import {
  Baby,
  BarChart3,
  BookOpen,
  CircleCheck,
  Droplets,
  Hand,
  HelpCircle,
  Layers,
  Microscope,
  Pill,
  Sparkles,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02AlgemeneKenmerken from './Sect02AlgemeneKenmerken'
import Sect03Tabel1KlinischeStadia from './Sect03Tabel1KlinischeStadia'
import Sect04AandachtLichenificatie from './Sect04AandachtLichenificatie'
import Sect05PathofysiologieHistologie from './Sect05PathofysiologieHistologie'
import Sect06Tabel2KliniekHistologie from './Sect06Tabel2KliniekHistologie'
import Sect07IndifferenteTherapie from './Sect07IndifferenteTherapie'
import Sect08ConstitutioneelAtopisch from './Sect08ConstitutioneelAtopisch'
import Sect09KliniekLeeftijdsafhankelijk from './Sect09KliniekLeeftijdsafhankelijk'
import Sect10Tabel3Leeftijd from './Sect10Tabel3Leeftijd'
import Sect11EpidemiologieComplicatiesDD from './Sect11EpidemiologieComplicatiesDD'
import Sect12PathofysiologieDiagnostiek from './Sect12PathofysiologieDiagnostiek'
import Sect13AandachtJeuk from './Sect13AandachtJeuk'
import Sect14TherapieConstitutioneel from './Sect14TherapieConstitutioneel'
import Sect15SeborrhoischEczeem from './Sect15SeborrhoischEczeem'
import Sect16OrthoErgischLuiereczeem from './Sect16OrthoErgischLuiereczeem'
import Sect17SlotSamenvatting from './Sect17SlotSamenvatting'

const Blok5Week1Casus2LmoEczeemSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Algemene kenmerken van eczeem', icon: Layers },
    { id: 'sect-03', title: 'Tabel 1. Klinische stadia van eczeem', icon: Table2 },
    { id: 'sect-04', title: 'Aandacht-vraagje lichenificatie', icon: HelpCircle },
    { id: 'sect-05', title: 'Pathofysiologie en histologie van eczeem', icon: Microscope },
    { id: 'sect-06', title: 'Tabel 2. Koppeling tussen kliniek en histologie', icon: Table2 },
    { id: 'sect-07', title: 'Indifferente therapie als basis van de behandeling', icon: Droplets },
    { id: 'sect-08', title: 'Constitutioneel / atopisch eczeem', icon: Sparkles },
    { id: 'sect-09', title: 'Kliniek en leeftijdsafhankelijk patroon', icon: Baby },
    { id: 'sect-10', title: 'Tabel 3. Constitutioneel eczeem per leeftijd', icon: Table2 },
    { id: 'sect-11', title: 'Epidemiologie, complicaties en differentiaaldiagnose', icon: BarChart3 },
    { id: 'sect-12', title: 'Pathofysiologie en diagnostiek', icon: Microscope },
    { id: 'sect-13', title: 'Aandacht-vraagje kernsymptoom', icon: HelpCircle },
    { id: 'sect-14', title: 'Therapie van constitutioneel eczeem', icon: Pill },
    { id: 'sect-15', title: 'Seborrhoïsch eczeem', icon: Layers },
    { id: 'sect-16', title: 'Ortho-ergisch contacteczeem en luiereczeem', icon: Hand },
    { id: 'sect-17', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Eczeem"
      description="Eczeem is geen één ziekte met één oorzaak, maar een reactiepatroon van de huid op verschillende prikkels en processen. De naam komt van het Griekse ekzein, wat “opkoken” of “opbruisen” betekent. Dat verwijst naar het vocht dat uit de huid kan komen bij nat eczeem. De module benadrukt drie kernkenmerken van eczeem: polymorfie, onscherpe begrenzing en jeuk."
      caseLabel="Week 1 · Casus 2: De veranderde barrière"
      blokLabel="Blok 5"
      moduleKind="lmo"
      practiceLink="/oefenvragen?lme=blok5-week1-casus2-lmo-eczeem"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02AlgemeneKenmerken />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03Tabel1KlinischeStadia />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04AandachtLichenificatie />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05PathofysiologieHistologie />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06Tabel2KliniekHistologie />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07IndifferenteTherapie />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08ConstitutioneelAtopisch />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09KliniekLeeftijdsafhankelijk />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10Tabel3Leeftijd />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11EpidemiologieComplicatiesDD />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12PathofysiologieDiagnostiek />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13AandachtJeuk />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14TherapieConstitutioneel />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15SeborrhoischEczeem />
      </section>
      <section id="sect-16" className="scroll-mt-24 mb-12">
        <Sect16OrthoErgischLuiereczeem />
      </section>
      <section id="sect-17" className="scroll-mt-24 mb-12">
        <Sect17SlotSamenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week1Casus2LmoEczeemSummary
