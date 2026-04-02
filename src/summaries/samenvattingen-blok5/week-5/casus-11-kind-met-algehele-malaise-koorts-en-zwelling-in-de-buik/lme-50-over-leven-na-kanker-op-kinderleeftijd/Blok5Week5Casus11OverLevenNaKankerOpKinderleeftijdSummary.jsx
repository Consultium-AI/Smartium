import {
  Activity,
  BookOpen,
  CircleCheck,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  Layers,
  Microscope,
  Stethoscope,
  Table2,
  Users,
  Wind,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02WaaromOverlevenNaKinderkankerZoBelangrijkIs from './Sect02WaaromOverlevenNaKinderkankerZoBelangrijkIs'
import Sect03OrganisatieVanDeLaterZorg from './Sect03OrganisatieVanDeLaterZorg'
import Sect04AlgemeneLangeTermijnEffectenLateMortaliteit from './Sect04AlgemeneLangeTermijnEffectenLateMortaliteit'
import Sect05Vermoeidheid from './Sect05Vermoeidheid'
import Sect06SchoolEnWerk from './Sect06SchoolEnWerk'
import Sect07PsychosocialeGevolgen from './Sect07PsychosocialeGevolgen'
import Sect08Vruchtbaarheid from './Sect08Vruchtbaarheid'
import Sect09OrgaanspecifiekeLateEffectenTabel2 from './Sect09OrgaanspecifiekeLateEffectenTabel2'
import Sect10BehandelingEnOrgaanschadeTabel3 from './Sect10BehandelingEnOrgaanschadeTabel3'
import Sect11WetenschappelijkOnderzoekEnVerbeteringVanZorg from './Sect11WetenschappelijkOnderzoekEnVerbeteringVanZorg'
import Sect12Samenvatting from './Sect12Samenvatting'

const Blok5Week5Casus11OverLevenNaKankerOpKinderleeftijdSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Waarom overleven na kinderkanker zo belangrijk is', icon: HeartPulse },
    { id: 'sect-03', title: 'De organisatie van de LATER-zorg', icon: Layers },
    { id: 'sect-04', title: 'Algemene lange termijn effecten', icon: Activity },
    { id: 'sect-05', title: 'Vermoeidheid', icon: Wind },
    { id: 'sect-06', title: 'School en werk', icon: GraduationCap },
    { id: 'sect-07', title: 'Psychosociale gevolgen', icon: Users },
    { id: 'sect-08', title: 'Vruchtbaarheid', icon: Stethoscope },
    { id: 'sect-09', title: 'Orgaanspecifieke late effecten', icon: Table2 },
    { id: 'sect-10', title: 'Behandeling en orgaanschade', icon: Microscope },
    { id: 'sect-11', title: 'Wetenschappelijk onderzoek en verbetering van zorg', icon: FlaskConical },
    { id: 'sect-12', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Over leven na kanker op kinderleeftijd"
      description="Ruim 50 jaar geleden werd begonnen met het behandelen van kinderen met kanker volgens vaste protocollen. Die behandeling kon bestaan uit intensieve chemotherapie, radiotherapie en chirurgie. Door die intensievere behandeling is de overleving van kinderen met kanker enorm verbeterd."
      caseLabel="Week 5 · Casus 11: Kind met algehele malaise, koorts en zwelling in de buik"
      blokLabel="Blok 5"
      practiceLink="/oefenvragen?lme=blok5-week5-casus11-over-leven-na-kanker-op-kinderleeftijd"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02WaaromOverlevenNaKinderkankerZoBelangrijkIs />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03OrganisatieVanDeLaterZorg />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04AlgemeneLangeTermijnEffectenLateMortaliteit />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05Vermoeidheid />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06SchoolEnWerk />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07PsychosocialeGevolgen />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08Vruchtbaarheid />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09OrgaanspecifiekeLateEffectenTabel2 />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10BehandelingEnOrgaanschadeTabel3 />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11WetenschappelijkOnderzoekEnVerbeteringVanZorg />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week5Casus11OverLevenNaKankerOpKinderleeftijdSummary
