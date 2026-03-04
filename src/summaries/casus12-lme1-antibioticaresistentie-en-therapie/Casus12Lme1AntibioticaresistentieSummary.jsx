import {
  BookOpen, LayoutList, Dna, Shield, Layers, Pill, Target, Settings,
  AlertTriangle, Bug, AlertCircle, ShieldCheck, AlertOctagon, CheckCircle
} from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'
import Image01IntroductieSummary from './Image01IntroductieSummary'
import Image02MenuSummary from './Image02MenuSummary'
import Image03IntrinsiekeVerworvenSummary from './Image03IntrinsiekeVerworvenSummary'
import Image04NatuurlijkeResistentieSummary from './Image04NatuurlijkeResistentieSummary'
import Image05CelwandSummary from './Image05CelwandSummary'
import Image06BetalactamSummary from './Image06BetalactamSummary'
import Image07WildtypeSummary from './Image07WildtypeSummary'
import Image08ResistentiemechanismenSummary from './Image08ResistentiemechanismenSummary'
import Image09BetalactamResistentieSummary from './Image09BetalactamResistentieSummary'
import Image10SAureusSummary from './Image10SAureusSummary'
import Image11MRSASummary from './Image11MRSASummary'
import Image12VoorkomenMRSASummary from './Image12VoorkomenMRSASummary'
import Image13BRMOSummary from './Image13BRMOSummary'
import Image14GevarenSummary from './Image14GevarenSummary'
import Image15SamenvattingSummary from './Image15SamenvattingSummary'

const Casus12Lme1AntibioticaresistentieSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Introductie en leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Menu', icon: LayoutList },
    { id: 'sect-03', title: 'Intrinsieke en verworven resistentie', icon: Dna },
    { id: 'sect-04', title: 'Natuurlijke resistentie – Vancomycine', icon: Shield },
    { id: 'sect-05', title: 'Celwandstructuur Gram+ en Gram-', icon: Layers },
    { id: 'sect-06', title: 'Beta-lactam antibiotica', icon: Pill },
    { id: 'sect-07', title: 'Wild-type gevoeligheid', icon: Target },
    { id: 'sect-08', title: 'Resistentiemechanismen', icon: Settings },
    { id: 'sect-09', title: 'Resistentie voor beta-lactam antibiotica', icon: AlertTriangle },
    { id: 'sect-10', title: 'Resistentiemechanisme bij S. aureus', icon: Bug },
    { id: 'sect-11', title: 'MRSA', icon: AlertCircle },
    { id: 'sect-12', title: 'Voorkomen van MRSA', icon: ShieldCheck },
    { id: 'sect-13', title: 'BRMO', icon: Bug },
    { id: 'sect-14', title: 'Gevaren van resistente micro-organismen', icon: AlertOctagon },
    { id: 'sect-15', title: 'Samenvatting', icon: CheckCircle },
  ]

  return (
    <SummaryLayout
      title="Antibioticaresistentie en therapie"
      description="Complete samenvatting van de module over antibioticaresistentie en bijzonder resistente micro-organismen (BRMO's)."
      caseLabel="Week 6 Casus 12 Lijninfecties & resistenties LME 1"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=casus12-lme1-antibioticaresistentie-en-therapie"
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Image01IntroductieSummary standalone={false} /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Image02MenuSummary standalone={false} /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Image03IntrinsiekeVerworvenSummary standalone={false} /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Image04NatuurlijkeResistentieSummary standalone={false} /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Image05CelwandSummary standalone={false} /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Image06BetalactamSummary standalone={false} /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Image07WildtypeSummary standalone={false} /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Image08ResistentiemechanismenSummary standalone={false} /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Image09BetalactamResistentieSummary standalone={false} /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Image10SAureusSummary standalone={false} /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Image11MRSASummary standalone={false} /></section>
      <section id="sect-12" className="scroll-mt-24 mb-12"><Image12VoorkomenMRSASummary standalone={false} /></section>
      <section id="sect-13" className="scroll-mt-24 mb-12"><Image13BRMOSummary standalone={false} /></section>
      <section id="sect-14" className="scroll-mt-24 mb-12"><Image14GevarenSummary standalone={false} /></section>
      <section id="sect-15" className="scroll-mt-24 mb-12"><Image15SamenvattingSummary standalone={false} /></section>
    </SummaryLayout>
  )
}

export default Casus12Lme1AntibioticaresistentieSummary
