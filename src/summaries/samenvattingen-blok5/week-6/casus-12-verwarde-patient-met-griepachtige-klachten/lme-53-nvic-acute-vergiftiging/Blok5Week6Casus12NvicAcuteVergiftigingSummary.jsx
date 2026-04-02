import {
  Activity,
  BookOpen,
  Building2,
  CircleCheck,
  Database,
  Droplets,
  FileText,
  LayoutList,
  Phone,
  ShieldAlert,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02HetNVICEersteVraagpuntBijIntoxicaties from './Sect02HetNVICEersteVraagpuntBijIntoxicaties'
import Sect03WaaromBelangrijkVoorDePraktijkEnTabel1 from './Sect03WaaromBelangrijkVoorDePraktijkEnTabel1'
import Sect04HoeVaakWordtHetNVICGeraadpleegd from './Sect04HoeVaakWordtHetNVICGeraadpleegd'
import Sect05GGDArtsMeldingDifferentiaaldiagnose from './Sect05GGDArtsMeldingDifferentiaaldiagnose'
import Sect06KoolstofmonoxidevergiftigingWatZoekJeOp from './Sect06KoolstofmonoxidevergiftigingWatZoekJeOp'
import Sect07DiagnostiekEersteBehandelingCO from './Sect07DiagnostiekEersteBehandelingCO'
import Sect08DeGAGS from './Sect08DeGAGS'
import Sect09WaterstoffluorideEenIncidentVoorDeGAGS from './Sect09WaterstoffluorideEenIncidentVoorDeGAGS'
import Sect10KlinischBeeldNaBlootstellingNaIngestie from './Sect10KlinischBeeldNaBlootstellingNaIngestie'
import Sect11NaInhalatieEnConcentratie from './Sect11NaInhalatieEnConcentratie'
import Sect12AntidotumEnBehandeling from './Sect12AntidotumEnBehandeling'
import Sect13Samenvatting from './Sect13Samenvatting'

const Blok5Week6Casus12NvicAcuteVergiftigingSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Het NVIC: eerste vraagpunt bij intoxicaties', icon: Phone },
    { id: 'sect-03', title: 'Waarom is dit belangrijk voor de praktijk?', icon: Database },
    { id: 'sect-04', title: 'Hoe vaak wordt het NVIC geraadpleegd?', icon: Table2 },
    { id: 'sect-05', title: 'Een melding voor de GGD-arts: denken in differentiaaldiagnose', icon: FileText },
    { id: 'sect-06', title: 'Koolstofmonoxidevergiftiging: wat zoek je op?', icon: Stethoscope },
    { id: 'sect-07', title: 'Welke diagnostiek en eerste behandeling horen erbij?', icon: Activity },
    { id: 'sect-08', title: 'De GAGS: incidenten met gevaarlijke stoffen', icon: ShieldAlert },
    { id: 'sect-09', title: 'Waterstoffluoride: een incident voor de GAGS', icon: Droplets },
    { id: 'sect-10', title: 'Klinisch beeld na blootstelling', icon: LayoutList },
    { id: 'sect-11', title: 'Na inhalatie', icon: Building2 },
    { id: 'sect-12', title: 'Antidotum en behandeling', icon: Activity },
    { id: 'sect-13', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="NVIC acute vergiftiging"
      description="Het Nationaal Vergiftigingen Informatie Centrum, meestal het NVIC genoemd, geeft medisch advies aan zorgprofessionals die in een spoedsituatie te maken hebben met een intoxicatie."
      practiceLink="/oefenvragen?lme=blok5-week6-casus12-nvic-acute-vergiftiging"
      caseLabel="Week 6 · Casus 12: Verwarde patiënt met griepachtige klachten"
      blokLabel="Blok 5"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02HetNVICEersteVraagpuntBijIntoxicaties />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03WaaromBelangrijkVoorDePraktijkEnTabel1 />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04HoeVaakWordtHetNVICGeraadpleegd />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05GGDArtsMeldingDifferentiaaldiagnose />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06KoolstofmonoxidevergiftigingWatZoekJeOp />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07DiagnostiekEersteBehandelingCO />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08DeGAGS />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09WaterstoffluorideEenIncidentVoorDeGAGS />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10KlinischBeeldNaBlootstellingNaIngestie />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11NaInhalatieEnConcentratie />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12AntidotumEnBehandeling />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week6Casus12NvicAcuteVergiftigingSummary
