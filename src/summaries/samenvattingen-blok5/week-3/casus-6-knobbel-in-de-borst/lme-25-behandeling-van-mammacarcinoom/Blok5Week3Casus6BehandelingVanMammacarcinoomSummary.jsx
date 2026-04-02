import {
  BookOpen,
  CircleCheck,
  ClipboardList,
  Layers,
  ListOrdered,
  Radio,
  Scissors,
  Stethoscope,
  Syringe,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02GelokaliseerdEnGemetastaseerd from './Sect02GelokaliseerdEnGemetastaseerd'
import Sect03TnmClassificatie from './Sect03TnmClassificatie'
import Sect04VolgordeEnSoortBehandeling from './Sect04VolgordeEnSoortBehandeling'
import Sect05SystemischeBehandeling from './Sect05SystemischeBehandeling'
import Sect06ChirurgischeBehandeling from './Sect06ChirurgischeBehandeling'
import Sect07SentinelNodeProcedure from './Sect07SentinelNodeProcedure'
import Sect08RadiotherapieWatIsHet from './Sect08RadiotherapieWatIsHet'
import Sect09RadiotherapieEnBehandelingsvolgorde from './Sect09RadiotherapieEnBehandelingsvolgorde'
import Sect10DoelvolumeCtvEnPtv from './Sect10DoelvolumeCtvEnPtv'
import Sect11RadiotherapieInDePraktijk from './Sect11RadiotherapieInDePraktijk'
import Sect12DosisplanningEnFractionering from './Sect12DosisplanningEnFractionering'
import Sect13VoorbereidingOpRadiotherapie from './Sect13VoorbereidingOpRadiotherapie'
import Sect14Samenvatting from './Sect14Samenvatting'

const Blok5Week3Casus6BehandelingVanMammacarcinoomSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Gelokaliseerd en gemetastaseerd mammacarcinoom', icon: Layers },
    { id: 'sect-03', title: 'TNM-classificatie en stadiëring', icon: Table2 },
    { id: 'sect-04', title: 'Volgorde en soort behandeling', icon: ListOrdered },
    { id: 'sect-05', title: 'Systemische behandeling van mammacarcinoom', icon: Syringe },
    { id: 'sect-06', title: 'Chirurgische behandeling van het mammacarcinoom', icon: Scissors },
    { id: 'sect-07', title: 'Sentinel node procedure', icon: Stethoscope },
    { id: 'sect-08', title: 'Radiotherapie: wat is het en waarom wordt het gegeven?', icon: Radio },
    { id: 'sect-09', title: 'Radiotherapie en behandelingsvolgorde', icon: Radio },
    { id: 'sect-10', title: 'Doelvolume, CTV en PTV', icon: Layers },
    { id: 'sect-11', title: 'Radiotherapie bij mammacarcinoom in de praktijk', icon: Radio },
    { id: 'sect-12', title: 'Dosisplanning en fractionering', icon: ClipboardList },
    { id: 'sect-13', title: 'Voorbereiding op radiotherapie', icon: ClipboardList },
    { id: 'sect-14', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Behandeling van mammacarcinoom"
      description="Bij mammacarcinoom is het belangrijk om eerst te bepalen of er sprake is van gelokaliseerde ziekte of van uitzaaiingen op afstand. Dat verschil bepaalt namelijk of de behandeling nog curatief kan zijn of vooral palliatief is."
      caseLabel="Week 3 · Casus 6: Knobbel in de borst"
      blokLabel="Blok 5"
      practiceLink="/oefenvragen?lme=blok5-week3-casus6-behandeling-van-mammacarcinoom"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02GelokaliseerdEnGemetastaseerd />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03TnmClassificatie />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04VolgordeEnSoortBehandeling />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05SystemischeBehandeling />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06ChirurgischeBehandeling />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07SentinelNodeProcedure />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08RadiotherapieWatIsHet />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09RadiotherapieEnBehandelingsvolgorde />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10DoelvolumeCtvEnPtv />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11RadiotherapieInDePraktijk />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12DosisplanningEnFractionering />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13VoorbereidingOpRadiotherapie />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week3Casus6BehandelingVanMammacarcinoomSummary
