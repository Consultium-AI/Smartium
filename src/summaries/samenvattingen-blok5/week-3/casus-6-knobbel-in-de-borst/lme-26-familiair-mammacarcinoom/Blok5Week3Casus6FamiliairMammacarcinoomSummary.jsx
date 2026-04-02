import {
  BookOpen,
  CircleCheck,
  ClipboardList,
  Dna,
  GitBranch,
  Layers,
  Stethoscope,
  Syringe,
  Table2,
  Users,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02VoorkomenBorstkanker from './Sect02VoorkomenBorstkanker'
import Sect03Tabel1Risicofactoren from './Sect03Tabel1Risicofactoren'
import Sect04WanneerErfelijkheidsonderzoek from './Sect04WanneerErfelijkheidsonderzoek'
import Sect05Tabel2Situaties from './Sect05Tabel2Situaties'
import Sect06Stap1Anamnese from './Sect06Stap1Anamnese'
import Sect07HistologieHormoonBehandelplan from './Sect07HistologieHormoonBehandelplan'
import Sect08Stamboom from './Sect08Stamboom'
import Sect09Stap2DnaOnderzoek from './Sect09Stap2DnaOnderzoek'
import Sect10Tabel3Genen from './Sect10Tabel3Genen'
import Sect11Stap3UitslagPreventie from './Sect11Stap3UitslagPreventie'
import Sect12WatBetekentDitVoorFamilieleden from './Sect12WatBetekentDitVoorFamilieleden'
import Sect13PresymptomatischOnderzoek from './Sect13PresymptomatischOnderzoek'
import Sect14ErfelijkheidEnKinderwens from './Sect14ErfelijkheidEnKinderwens'
import Sect15AddendumModerateRisk from './Sect15AddendumModerateRisk'
import Sect16Samenvatting from './Sect16Samenvatting'

const Blok5Week3Casus6FamiliairMammacarcinoomSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Voorkomen van borstkanker en waarom erfelijkheid belangrijk is', icon: Stethoscope },
    { id: 'sect-03', title: 'Tabel 1. Risicofactoren voor borstkanker', icon: Table2 },
    { id: 'sect-04', title: 'Wanneer denk je aan erfelijkheidsonderzoek?', icon: ClipboardList },
    { id: 'sect-05', title: 'Tabel 2. Voorbeelden van situaties waarbij erfelijkheidsonderzoek past', icon: Table2 },
    { id: 'sect-06', title: 'Stap 1 van de genetische counseling: anamnese en familieanamnese', icon: Users },
    { id: 'sect-07', title: 'Histologische kenmerken, hormoonreceptoren en behandelplan', icon: Layers },
    { id: 'sect-08', title: 'De stamboom: het overzicht van de familie', icon: GitBranch },
    { id: 'sect-09', title: 'Stap 2 van de genetische counseling: DNA-onderzoek', icon: Dna },
    { id: 'sect-10', title: 'Tabel 3. Belangrijke genen bij erfelijke of familiaire borstkanker', icon: Table2 },
    { id: 'sect-11', title: 'Stap 3 van de genetische counseling: uitslag en adviezen', icon: Syringe },
    { id: 'sect-12', title: 'Wat betekent dit voor familieleden?', icon: Users },
    { id: 'sect-13', title: 'Presymptomatisch onderzoek bij familieleden', icon: ClipboardList },
    { id: 'sect-14', title: 'Erfelijkheid en kinderwens', icon: Users },
    { id: 'sect-15', title: 'Addendum: moderate risk genen en familiair mammacarcinoom', icon: Layers },
    { id: 'sect-16', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Familiair mammacarcinoom"
      description="Borstkanker is de meest voorkomende kankersoort bij vrouwen. Ongeveer 26% van alle kankerdiagnoses bij vrouwen is borstkanker. In Nederland bestaat ook bevolkingsonderzoek: vrouwen worden dan eens in de twee jaar opgeroepen voor een mammografie."
      caseLabel="Week 3 · Casus 6: Knobbel in de borst"
      blokLabel="Blok 5"
      practiceLink="/oefenvragen?lme=blok5-week3-casus6-familiair-mammacarcinoom"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02VoorkomenBorstkanker />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03Tabel1Risicofactoren />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04WanneerErfelijkheidsonderzoek />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05Tabel2Situaties />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06Stap1Anamnese />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07HistologieHormoonBehandelplan />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08Stamboom />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09Stap2DnaOnderzoek />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10Tabel3Genen />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11Stap3UitslagPreventie />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12WatBetekentDitVoorFamilieleden />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13PresymptomatischOnderzoek />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14ErfelijkheidEnKinderwens />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15AddendumModerateRisk />
      </section>
      <section id="sect-16" className="scroll-mt-24 mb-12">
        <Sect16Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week3Casus6FamiliairMammacarcinoomSummary
