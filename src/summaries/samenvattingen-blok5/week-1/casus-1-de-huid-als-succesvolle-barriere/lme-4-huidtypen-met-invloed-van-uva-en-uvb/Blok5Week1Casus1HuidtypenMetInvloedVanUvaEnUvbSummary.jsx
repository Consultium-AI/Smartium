import {
  BookOpen,
  CircleCheck,
  FlaskConical,
  Layers,
  ListChecks,
  Shield,
  Sun,
  Table2,
  Umbrella,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02HuidtypenEnDeFitzpatrickSchaal from './Sect02HuidtypenEnDeFitzpatrickSchaal'
import Sect03WaarHangtHuidkleurVanAf from './Sect03WaarHangtHuidkleurVanAf'
import Sect04UvaUvbEnUvc from './Sect04UvaUvbEnUvc'
import Sect05EffectVanUvStralingOpDeHuid from './Sect05EffectVanUvStralingOpDeHuid'
import Sect06BruinWordenVanDeHuid from './Sect06BruinWordenVanDeHuid'
import Sect07KortetermijnreactiesInEenOverzicht from './Sect07KortetermijnreactiesInEenOverzicht'
import Sect08BeschermingTegenUvSchade from './Sect08BeschermingTegenUvSchade'
import Sect09Langetermijneffecten from './Sect09Langetermijneffecten'
import Sect10UvbTherapie from './Sect10UvbTherapie'
import Sect11UvaTherapie from './Sect11UvaTherapie'
import Sect12PreventieVanUvSchade from './Sect12PreventieVanUvSchade'
import Sect13Samenvatting from './Sect13Samenvatting'

const Blok5Week1Casus1HuidtypenMetInvloedVanUvaEnUvbSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Huidtypen en de Fitzpatrick-schaal', icon: Table2 },
    { id: 'sect-03', title: 'Waar hangt huidkleur van af?', icon: Layers },
    { id: 'sect-04', title: 'UVA, UVB en UVC: wat is het verschil?', icon: Sun },
    { id: 'sect-05', title: 'Effect van UV-straling op de huid', icon: Sun },
    { id: 'sect-06', title: 'Bruin worden van de huid', icon: Sun },
    { id: 'sect-07', title: 'Kortetermijnreacties in één overzicht', icon: Table2 },
    { id: 'sect-08', title: 'Bescherming tegen UV-schade', icon: Shield },
    { id: 'sect-09', title: 'Langetermijneffecten: huidveroudering en huidkanker', icon: FlaskConical },
    { id: 'sect-10', title: 'UVA en UVB als behandeling bij huidziekten', icon: ListChecks },
    { id: 'sect-11', title: 'UVA-therapie', icon: ListChecks },
    { id: 'sect-12', title: 'Preventie van UV-schade', icon: Umbrella },
    { id: 'sect-13', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Huidtypen met invloed van UVA en UVB"
      description="De huid verschilt wereldwijd in kleur en in gevoeligheid voor zonlicht. Binnen de dermatologie wordt vaak gewerkt met de Fitzpatrick-schaal."
      caseLabel="Week 1 · Casus 1: De huid als succesvolle barrière"
      blokLabel="Blok 5"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02HuidtypenEnDeFitzpatrickSchaal />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03WaarHangtHuidkleurVanAf />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04UvaUvbEnUvc />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05EffectVanUvStralingOpDeHuid />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06BruinWordenVanDeHuid />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07KortetermijnreactiesInEenOverzicht />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08BeschermingTegenUvSchade />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09Langetermijneffecten />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10UvbTherapie />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11UvaTherapie />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12PreventieVanUvSchade />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week1Casus1HuidtypenMetInvloedVanUvaEnUvbSummary
