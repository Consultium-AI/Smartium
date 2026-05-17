import {
  BookOpen,
  Lightbulb,
  FlaskConical,
  Droplets,
  Repeat2,
  GitCompare,
  ClipboardList,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import { blok10Week4CasusC07LeververvettingLmeVetverteringEnterohepatischeCyclusPracticeHref } from './Blok10Week4CasusC07LeververvettingLmeVetverteringEnterohepatischeCyclusOefenvragen'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02InleidingEnSamenstelling from './sections/Sect02InleidingEnSamenstelling'
import Sect03AfbraakInTractus from './sections/Sect03AfbraakInTractus'
import Sect04GalSecretieOpslag from './sections/Sect04GalSecretieOpslag'
import Sect05EnteroHepatischeCyclus from './sections/Sect05EnteroHepatischeCyclus'
import Sect06RegulatieEnKliniek from './sections/Sect06RegulatieEnKliniek'
import Sect07Samenvatting from './sections/Sect07Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Inleiding en samenstelling van vet · Tabel 1', icon: Lightbulb },
  { id: 'sect-03', title: 'Afbraak in de tractus digestivus · Tabel 2', icon: FlaskConical },
  { id: 'sect-04', title: 'Gal: secretie, opslag en functie · Tabel 3', icon: Droplets },
  { id: 'sect-05', title: 'Entero-hepatische cyclus', icon: Repeat2 },
  { id: 'sect-06', title: 'Regulatie van galzoutsynthese en kliniek', icon: GitCompare },
  { id: 'sect-07', title: 'Samenvatting', icon: ClipboardList },
]

const Blok10Week4CasusC07LeververvettingLmeVetverteringEnterohepatischeCyclusSummary = () => (
  <SummaryLayout
    title="Vetvertering en entero-hepatische cyclus"
    moduleKind="lme"
    description={
      <>
        Vetten, oftewel lipiden, zijn een belangrijk deel van onze voeding. Ze leveren energie, bevatten essentiële
        vetzuren en zijn nodig voor de opname van de vet-oplosbare vitaminen A, D, E en K. Tegelijk zijn lipiden sterk
        apolair, dus slecht oplosbaar in water. En juist in de darm gebeurt de afbraak in een waterig milieu. Daardoor
        is vetvertering ingewikkelder dan de vertering van veel andere voedingsstoffen.
      </>
    }
    caseLabel="Week 4 · Casus C07: Leververvetting"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
    practiceLink={blok10Week4CasusC07LeververvettingLmeVetverteringEnterohepatischeCyclusPracticeHref}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02InleidingEnSamenstelling />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03AfbraakInTractus />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04GalSecretieOpslag />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05EnteroHepatischeCyclus />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06RegulatieEnKliniek />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week4CasusC07LeververvettingLmeVetverteringEnterohepatischeCyclusSummary
