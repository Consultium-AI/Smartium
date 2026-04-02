import {
  Activity,
  BookOpen,
  CircleCheck,
  HeartPulse,
  Layers,
  ListChecks,
  Microscope,
  Pill,
  Sparkles,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02WatIsPsoriasisTabel1 from './Sect02WatIsPsoriasisTabel1'
import Sect03RisicofactorenEnUitlokkendeFactoren from './Sect03RisicofactorenEnUitlokkendeFactoren'
import Sect04PathofysiologieStapVoorStap from './Sect04PathofysiologieStapVoorStap'
import Sect05Tabel2SpelersPathofysiologie from './Sect05Tabel2SpelersPathofysiologie'
import Sect06KlinischeKenmerkenVulgaris from './Sect06KlinischeKenmerkenVulgaris'
import Sect07Tabel3ProvokePsoriasis from './Sect07Tabel3ProvokePsoriasis'
import Sect08VerschillendeVormenPsoriasis from './Sect08VerschillendeVormenPsoriasis'
import Sect09CapitisUnguiumErytrodermie from './Sect09CapitisUnguiumErytrodermie'
import Sect10Comorbiditeit from './Sect10Comorbiditeit'
import Sect11ArtritisPsoriatica from './Sect11ArtritisPsoriatica'
import Sect12Diagnostiek from './Sect12Diagnostiek'
import Sect13BehandelingBasis from './Sect13BehandelingBasis'
import Sect14LokaleEnLadderBehandeling from './Sect14LokaleEnLadderBehandeling'
import Sect15Samenvatting from './Sect15Samenvatting'

const Blok5Week1Casus2PsoriasisSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Wat is psoriasis?', icon: HeartPulse },
    { id: 'sect-03', title: 'Risicofactoren en uitlokkende factoren', icon: Activity },
    { id: 'sect-04', title: 'Pathofysiologie van psoriasis', icon: Layers },
    { id: 'sect-05', title: 'Belangrijke spelers (tabel)', icon: Table2 },
    { id: 'sect-06', title: 'Klinische kenmerken van psoriasis vulgaris', icon: Stethoscope },
    { id: 'sect-07', title: 'PROVOKE bij psoriasis vulgaris', icon: Sparkles },
    { id: 'sect-08', title: 'Verschillende vormen van psoriasis', icon: ListChecks },
    { id: 'sect-09', title: 'Capitis, unguium, erytrodermie', icon: Stethoscope },
    { id: 'sect-10', title: 'Comorbiditeit', icon: HeartPulse },
    { id: 'sect-11', title: 'Artritis psoriatica', icon: Activity },
    { id: 'sect-12', title: 'Diagnostiek', icon: Microscope },
    { id: 'sect-13', title: 'Behandeling — basis', icon: Pill },
    { id: 'sect-14', title: 'Lokale behandeling en ladder', icon: Table2 },
    { id: 'sect-15', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Psoriasis"
      description="Psoriasis is een chronische, auto-immuun huidaandoening. Het is, naast eczeem, één van de meest voorkomende chronische huidziekten. Wereldwijd komt het naar schatting voor bij 2-3% van de bevolking; in Nederland gaat het om ongeveer 600.000 mensen. De aandoening treedt vaak op tussen het 20e en 40e levensjaar, maar kan op elke leeftijd voorkomen. Mannen en vrouwen hebben er ongeveer even vaak last van. Bij mensen met een lichtere huid wordt psoriasis vaker gezien dan bij mensen met een donkere huid."
      caseLabel="Week 1 · Casus 2: De veranderde barrière"
      blokLabel="Blok 5"
      practiceLink="/oefenvragen?lme=blok5-week1-casus2-psoriasis"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02WatIsPsoriasisTabel1 />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03RisicofactorenEnUitlokkendeFactoren />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04PathofysiologieStapVoorStap />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05Tabel2SpelersPathofysiologie />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06KlinischeKenmerkenVulgaris />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07Tabel3ProvokePsoriasis />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08VerschillendeVormenPsoriasis />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09CapitisUnguiumErytrodermie />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10Comorbiditeit />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11ArtritisPsoriatica />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12Diagnostiek />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13BehandelingBasis />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14LokaleEnLadderBehandeling />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week1Casus2PsoriasisSummary
