import {
  Activity,
  Baby,
  BookOpen,
  CircleCheck,
  Droplets,
  Flame,
  HeartPulse,
  LayoutList,
  Link2,
  Stethoscope,
  Wind,
  Zap,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02ZuurstoftransportDoorHetBloed from './Sect02ZuurstoftransportDoorHetBloed'
import Sect03HemoglobineZuurstofVerzadigingscurve from './Sect03HemoglobineZuurstofVerzadigingscurve'
import Sect0423BpgEnZuurstofaffiniteit from './Sect0423BpgEnZuurstofaffiniteit'
import Sect05WatBepaaltZuurstofafgifte from './Sect05WatBepaaltZuurstofafgifte'
import Sect06KoolmonoxidevergiftigingHoeOntstaatHet from './Sect06KoolmonoxidevergiftigingHoeOntstaatHet'
import Sect07BindingCOAanHemoglobine from './Sect07BindingCOAanHemoglobine'
import Sect08WatDoetCOmetZuurstoftransport from './Sect08WatDoetCOmetZuurstoftransport'
import Sect09KlinischeVerschijnselenCOIntoxicatie from './Sect09KlinischeVerschijnselenCOIntoxicatie'
import Sect10PaO2EnSpO2VaakWeinigZeggen from './Sect10PaO2EnSpO2VaakWeinigZeggen'
import Sect11BehandelingCOIntoxicatie from './Sect11BehandelingCOIntoxicatie'
import Sect12WaaromZwangerschapExtraRisico from './Sect12WaaromZwangerschapExtraRisico'
import Sect13KlinischeWaardeVanDeCasus from './Sect13KlinischeWaardeVanDeCasus'
import Sect14Samenvatting from './Sect14Samenvatting'

const Blok5Week6Casus12GaswisselingHbO2Co2CoSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Zuurstoftransport door het bloed', icon: Droplets },
    {
      id: 'sect-03',
      title: 'Hemoglobine, zuurstof en de zuurstofverzadigingscurve',
      icon: Activity,
    },
    { id: 'sect-04', title: '2,3-BPG en de zuurstofaffiniteit', icon: Link2 },
    { id: 'sect-05', title: 'Wat bepaalt de zuurstofafgifte aan de weefsels?', icon: Wind },
    { id: 'sect-06', title: 'Koolmonoxidevergiftiging: hoe ontstaat het?', icon: Flame },
    { id: 'sect-07', title: 'De binding van CO aan hemoglobine', icon: Zap },
    { id: 'sect-08', title: 'Wat doet CO met zuurstoftransport?', icon: LayoutList },
    { id: 'sect-09', title: 'Klinische verschijnselen van CO-intoxicatie', icon: Stethoscope },
    { id: 'sect-10', title: 'Waarom paO2 en SpO2 vaak weinig zeggen', icon: HeartPulse },
    { id: 'sect-11', title: 'Behandeling van CO-intoxicatie', icon: Activity },
    { id: 'sect-12', title: 'Waarom zwangerschap extra risico geeft', icon: Baby },
    { id: 'sect-13', title: 'De klinische waarde van de casus', icon: LayoutList },
    { id: 'sect-14', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Gaswisseling Hb, O2, CO2, CO"
      description="Zuurstof wordt vanuit de longen via het bloed vervoerd naar de perifere weefsels, zoals spieren, hersenen en lever."
      caseLabel="Week 6 · Casus 12: Verwarde patiënt met griepachtige klachten"
      blokLabel="Blok 5"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02ZuurstoftransportDoorHetBloed />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03HemoglobineZuurstofVerzadigingscurve />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect0423BpgEnZuurstofaffiniteit />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05WatBepaaltZuurstofafgifte />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06KoolmonoxidevergiftigingHoeOntstaatHet />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07BindingCOAanHemoglobine />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08WatDoetCOmetZuurstoftransport />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09KlinischeVerschijnselenCOIntoxicatie />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10PaO2EnSpO2VaakWeinigZeggen />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11BehandelingCOIntoxicatie />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12WaaromZwangerschapExtraRisico />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13KlinischeWaardeVanDeCasus />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week6Casus12GaswisselingHbO2Co2CoSummary
