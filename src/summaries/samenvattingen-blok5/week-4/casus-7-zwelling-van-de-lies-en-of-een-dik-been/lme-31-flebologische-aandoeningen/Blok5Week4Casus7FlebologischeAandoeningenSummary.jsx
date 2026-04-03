import {
  Activity,
  BookOpen,
  CircleCheck,
  Droplets,
  Footprints,
  GitBranch,
  HeartPulse,
  ListChecks,
  Microscope,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02OverzichtEnTabel1 from './Sect02OverzichtEnTabel1'
import Sect03ChronischVeneuzeZiektePathofysiologie from './Sect03ChronischVeneuzeZiektePathofysiologie'
import Sect04ChronischVeneuzeZiekteKlinischBeeld from './Sect04ChronischVeneuzeZiekteKlinischBeeld'
import Sect05RisicofactorenChronischVeneuzeZiekte from './Sect05RisicofactorenChronischVeneuzeZiekte'
import Sect06LichamelijkOnderzoekTabel2 from './Sect06LichamelijkOnderzoekTabel2'
import Sect07DifferentiaaldiagnosePijnInHetBeen from './Sect07DifferentiaaldiagnosePijnInHetBeen'
import Sect08LymfoedeemDefinitieEnPathofysiologie from './Sect08LymfoedeemDefinitieEnPathofysiologie'
import Sect09LymfoedeemIndelingTabel3 from './Sect09LymfoedeemIndelingTabel3'
import Sect10TekenVanStemmerEnBehandelingLymfoedeem from './Sect10TekenVanStemmerEnBehandelingLymfoedeem'
import Sect11Lipoedeem from './Sect11Lipoedeem'
import Sect12VaatmalformatiesEnVaattumoren from './Sect12VaatmalformatiesEnVaattumoren'
import Sect13Samenvatting from './Sect13Samenvatting'

const Blok5Week4Casus7FlebologischeAandoeningenSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Overzicht van flebologische aandoeningen', icon: Table2 },
    {
      id: 'sect-03',
      title: 'Chronisch veneuze ziekte en ulcus cruris venosum',
      icon: HeartPulse,
    },
    { id: 'sect-04', title: 'Klinisch beeld', icon: Stethoscope },
    { id: 'sect-05', title: 'Risicofactoren', icon: ListChecks },
    { id: 'sect-06', title: 'Lichamelijk onderzoek', icon: Footprints },
    { id: 'sect-07', title: 'Differentiaaldiagnose bij pijn in het been', icon: GitBranch },
    { id: 'sect-08', title: 'Lymfoedeem', icon: Droplets },
    { id: 'sect-09', title: 'Indeling van lymfoedeem', icon: Table2 },
    { id: 'sect-10', title: 'Teken van Stemmer en behandeling', icon: Activity },
    { id: 'sect-11', title: 'Lipoedeem', icon: Microscope },
    { id: 'sect-12', title: 'Vaatmalformaties en vaattumoren', icon: HeartPulse },
    { id: 'sect-13', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Flebologische aandoeningen"
      description="Zwelling van een of twee benen kan verschillende oorzaken hebben."
      caseLabel="Week 4 · Casus 7: Zwelling van de lies en of een dik been"
      blokLabel="Blok 5"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=blok5-week4-casus7-flebologische-aandoeningen"
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02OverzichtEnTabel1 />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03ChronischVeneuzeZiektePathofysiologie />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04ChronischVeneuzeZiekteKlinischBeeld />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05RisicofactorenChronischVeneuzeZiekte />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06LichamelijkOnderzoekTabel2 />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07DifferentiaaldiagnosePijnInHetBeen />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08LymfoedeemDefinitieEnPathofysiologie />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09LymfoedeemIndelingTabel3 />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10TekenVanStemmerEnBehandelingLymfoedeem />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11Lipoedeem />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12VaatmalformatiesEnVaattumoren />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week4Casus7FlebologischeAandoeningenSummary
