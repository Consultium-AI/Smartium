import {
  Activity,
  BookOpen,
  CircleCheck,
  Dna,
  Eye,
  FlaskConical,
  HeartPulse,
  Layers,
  Microscope,
  Pill,
  Shield,
  Stethoscope,
  Syringe,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02InleidingEndocrieneOrganen from './Sect02InleidingEndocrieneOrganen'
import Sect03WaaromPancreasEnSchildklier from './Sect03WaaromPancreasEnSchildklier'
import Sect04AutoImmuunDiabetesType1 from './Sect04AutoImmuunDiabetesType1'
import Sect05KlinischeVerschijnselenT1dm from './Sect05KlinischeVerschijnselenT1dm'
import Sect06HistologieInsulitis from './Sect06HistologieInsulitis'
import Sect07GenetischeAssociaties from './Sect07GenetischeAssociaties'
import Sect08SchildklierGraves from './Sect08SchildklierGraves'
import Sect09GravesOftalmopathieEnNeonataal from './Sect09GravesOftalmopathieEnNeonataal'
import Sect10Hashimoto from './Sect10Hashimoto'
import Sect11BehandelingGravesEnHashimoto from './Sect11BehandelingGravesEnHashimoto'
import Sect12Checkpointremmers from './Sect12Checkpointremmers'
import Sect13Samenvatting from './Sect13Samenvatting'

const Blok5Week5Casus9EndocrieneAutoImmuunziektenSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Inleiding: endocriene organen en auto-immuniteit', icon: Layers },
    { id: 'sect-03', title: 'Waarom juist pancreas en schildklier?', icon: Activity },
    { id: 'sect-04', title: 'Auto-immuun diabetes type 1', icon: Syringe },
    { id: 'sect-05', title: 'Klinische verschijnselen van T1DM', icon: HeartPulse },
    { id: 'sect-06', title: 'Histologie en afweer bij insulitis', icon: Microscope },
    { id: 'sect-07', title: 'Genetische associaties', icon: Dna },
    { id: 'sect-08', title: 'Auto-immuunziekten van de schildklier · Graves', icon: Shield },
    { id: 'sect-09', title: 'Graves oftalmopathie · Neonatale thyreotoxicose', icon: Eye },
    { id: 'sect-10', title: 'Hashimoto: destructie van de schildklier', icon: Stethoscope },
    { id: 'sect-11', title: 'Behandeling van Graves en Hashimoto', icon: Pill },
    { id: 'sect-12', title: 'Endocriene auto-immuniteit als gevolg van kankerbehandeling', icon: FlaskConical },
    { id: 'sect-13', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Endocriene auto-immuunziekten"
      description="Endocriene organen maken hormonen: regulerende stoffen die via het bloed naar andere delen van het lichaam worden vervoerd. Veel organen bevatten wel endocriene cellen, maar sommige organen zijn duidelijk gespecialiseerd als endocrien orgaan. In deze stof gaat het vooral om de pancreas en de schildklier, omdat juist deze organen vaak doelwit zijn van auto-immuniteit."
      caseLabel="Week 5 · Casus 9: Patiënt met auto-immuunziekte"
      blokLabel="Blok 5"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02InleidingEndocrieneOrganen />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03WaaromPancreasEnSchildklier />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04AutoImmuunDiabetesType1 />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05KlinischeVerschijnselenT1dm />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06HistologieInsulitis />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07GenetischeAssociaties />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08SchildklierGraves />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09GravesOftalmopathieEnNeonataal />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10Hashimoto />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11BehandelingGravesEnHashimoto />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12Checkpointremmers />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week5Casus9EndocrieneAutoImmuunziektenSummary
