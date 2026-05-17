import {
  Activity,
  Apple,
  BookOpen,
  ClipboardList,
  FileText,
  FlaskConical,
  HeartPulse,
  ListChecks,
  Stethoscope,
  Table2,
  Users,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Section01BrondocumentTitel from './sections/Section01BrondocumentTitel'
import Section02Leerdoelen from './sections/Section02Leerdoelen'
import Section03WaaromLeefstijlZoBelangrijkIs from './sections/Section03WaaromLeefstijlZoBelangrijkIs'
import Section04PreventieVanDiabetesType2DoorLeefstijl from './sections/Section04PreventieVanDiabetesType2DoorLeefstijl'
import Section05GezondeLeefstijlBijMensenMetDiabetesType2 from './sections/Section05GezondeLeefstijlBijMensenMetDiabetesType2'
import Section06LeefstijlinterventieBijType2 from './sections/Section06LeefstijlinterventieBijType2'
import Section07VoedingspatronenOnbewerktBewerktUltrabewerkt from './sections/Section07VoedingspatronenOnbewerktBewerktUltrabewerkt'
import Section08GunstigeEnOngunstigeVoedingsmiddelen from './sections/Section08GunstigeEnOngunstigeVoedingsmiddelen'
import Section09UltrabewerktVoedselEnNovaClassificatie from './sections/Section09UltrabewerktVoedselEnNovaClassificatie'
import Section10WaaromLeidtUltrabewerktVoedselTotMeerEten from './sections/Section10WaaromLeidtUltrabewerktVoedselTotMeerEten'
import Section11HetMediterraneDieet from './sections/Section11HetMediterraneDieet'
import Section12EffectenVanHetMediterraneDieet from './sections/Section12EffectenVanHetMediterraneDieet'
import Section13VeryLowCalorieDieet from './sections/Section13VeryLowCalorieDieet'
import Section14KoolhydraatbeperktDieet from './sections/Section14KoolhydraatbeperktDieet'
import Section15CasusMeneerVanDijk from './sections/Section15CasusMeneerVanDijk'
import Section16Samenvatting from './sections/Section16Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'LME43 – _Leefstijl_voeding_preventie_DM2', icon: FileText },
  { id: 'sect-02', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-03', title: 'Waarom leefstijl zo belangrijk is', icon: HeartPulse },
  { id: 'sect-04', title: 'Preventie van diabetes type 2 door leefstijl', icon: Activity },
  { id: 'sect-05', title: 'Gezonde leefstijl bij mensen met diabetes type 2', icon: Stethoscope },
  { id: 'sect-06', title: 'Leefstijlinterventie bij type 2 diabetes: wat levert het op?', icon: ListChecks },
  { id: 'sect-07', title: 'Voedingspatronen: onbewerkt, bewerkt en ultrabewerkt', icon: Table2 },
  { id: 'sect-08', title: 'Gunstige en ongunstige voedingsmiddelen', icon: Apple },
  { id: 'sect-09', title: 'Ultrabewerkt voedsel en de NOVA-classificatie', icon: FlaskConical },
  { id: 'sect-10', title: 'Waarom leidt ultrabewerkt voedsel tot meer eten?', icon: ClipboardList },
  { id: 'sect-11', title: 'Het Mediterrane dieet', icon: Apple },
  { id: 'sect-12', title: 'Effecten van het Mediterrane dieet', icon: HeartPulse },
  { id: 'sect-13', title: '(Very) low-calorie dieet', icon: Activity },
  { id: 'sect-14', title: 'Koolhydraatbeperkt dieet', icon: ClipboardList },
  { id: 'sect-15', title: 'Casus: meneer Van Dijk', icon: Users },
  { id: 'sect-16', title: 'Samenvatting', icon: BookOpen },
]

const Blok10Week5CasusC10DmType2LmeLeefstijlVoedingPreventieDm2Summary = () => (
  <SummaryLayout
    title="Leefstijl, voeding en preventie bij diabetes mellitus type 2"
    moduleKind="lme"
    description="Na het doornemen van deze stof kun je:"
    caseLabel="Week 5 · Casus C10: DM type 2"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Section01BrondocumentTitel />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Section02Leerdoelen />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Section03WaaromLeefstijlZoBelangrijkIs />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Section04PreventieVanDiabetesType2DoorLeefstijl />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Section05GezondeLeefstijlBijMensenMetDiabetesType2 />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Section06LeefstijlinterventieBijType2 />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Section07VoedingspatronenOnbewerktBewerktUltrabewerkt />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Section08GunstigeEnOngunstigeVoedingsmiddelen />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Section09UltrabewerktVoedselEnNovaClassificatie />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Section10WaaromLeidtUltrabewerktVoedselTotMeerEten />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <Section11HetMediterraneDieet />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <Section12EffectenVanHetMediterraneDieet />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <Section13VeryLowCalorieDieet />
    </section>
    <section id="sect-14" className="scroll-mt-24 mb-12">
      <Section14KoolhydraatbeperktDieet />
    </section>
    <section id="sect-15" className="scroll-mt-24 mb-12">
      <Section15CasusMeneerVanDijk />
    </section>
    <section id="sect-16" className="scroll-mt-24 mb-12">
      <Section16Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week5CasusC10DmType2LmeLeefstijlVoedingPreventieDm2Summary
