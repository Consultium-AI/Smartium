import {
  BookOpen,
  CircleCheck,
  GitBranch,
  Layers,
  MapPin,
  Microscope,
  Stethoscope,
  Syringe,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02WatIsVasculitis from './Sect02WatIsVasculitis'
import Sect03ClassificatieTabel1 from './Sect03ClassificatieTabel1'
import Sect04AncaGeassocieerdeVasculitis from './Sect04AncaGeassocieerdeVasculitis'
import Sect05ImmuuncomplexVasculitis from './Sect05ImmuuncomplexVasculitis'
import Sect06AlgemeneSymptomenTabel2 from './Sect06AlgemeneSymptomenTabel2'
import Sect07HuidafwijkingenKleineVaten from './Sect07HuidafwijkingenKleineVaten'
import Sect08Tabel3EnLokalisatie from './Sect08Tabel3EnLokalisatie'
import Sect09MiddelgroteVaten from './Sect09MiddelgroteVaten'
import Sect10KlinischeBetekenisVatgrootte from './Sect10KlinischeBetekenisVatgrootte'
import Sect11Diagnose from './Sect11Diagnose'
import Sect12Beleid from './Sect12Beleid'
import Sect13Differentiaaldiagnoses from './Sect13Differentiaaldiagnoses'
import Sect14Samenvatting from './Sect14Samenvatting'

const Blok5Week2Casus3BegripsbepalingDermatologischeUitingenSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Wat is vasculitis?', icon: Layers },
    { id: 'sect-03', title: 'Classificatie en tabel 1', icon: Table2 },
    { id: 'sect-04', title: 'ANCA-geassocieerde vasculitis', icon: GitBranch },
    { id: 'sect-05', title: 'Immuuncomplex-vasculitis', icon: GitBranch },
    { id: 'sect-06', title: 'Algemene symptomen', icon: Stethoscope },
    { id: 'sect-07', title: 'Huid: kleine vaten', icon: Stethoscope },
    { id: 'sect-08', title: 'Tabel 3 en lokalisatie', icon: MapPin },
    { id: 'sect-09', title: 'Middelgrote vaten', icon: Table2 },
    { id: 'sect-10', title: 'Betekenis vatgrootte', icon: Layers },
    { id: 'sect-11', title: 'Diagnose', icon: Microscope },
    { id: 'sect-12', title: 'Beleid', icon: Syringe },
    { id: 'sect-13', title: 'Differentiaaldiagnoses', icon: Stethoscope },
    { id: 'sect-14', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Begripsbepaling dermatologische uitingen"
      description="Vasculitis is beschadiging van de vaatwand door een ontstekingsproces. Het kan voorkomen in de huid, maar eigenlijk in principe overal in het lichaam en in elk orgaan. Als de huid is aangedaan, spreek je van cutane vasculitis. Dat kan ook een huidcomponent zijn van een systemische vasculitis."
      caseLabel="Week 2 · Casus 3: Paarse vlek"
      blokLabel="Blok 5"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02WatIsVasculitis />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03ClassificatieTabel1 />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04AncaGeassocieerdeVasculitis />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05ImmuuncomplexVasculitis />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06AlgemeneSymptomenTabel2 />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07HuidafwijkingenKleineVaten />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08Tabel3EnLokalisatie />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09MiddelgroteVaten />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10KlinischeBetekenisVatgrootte />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11Diagnose />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12Beleid />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13Differentiaaldiagnoses />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week2Casus3BegripsbepalingDermatologischeUitingenSummary
