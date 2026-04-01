import {
  Activity,
  BookOpen,
  Brain,
  ClipboardList,
  GitBranch,
  HeartPulse,
  HelpCircle,
  ListChecks,
  Microscope,
  Scale,
  ShieldAlert,
  Stethoscope,
  Table2,
  Zap,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02WatIsSyncope from './Sect02WatIsSyncope'
import Sect03Basismechanisme from './Sect03Basismechanisme'
import Sect04DrieHoofdoorzaken from './Sect04DrieHoofdoorzaken'
import Sect05VasculaireOorzaken from './Sect05VasculaireOorzaken'
import Sect06ObstructieveOorzaken from './Sect06ObstructieveOorzaken'
import Sect07AritmischeOorzaken from './Sect07AritmischeOorzaken'
import Sect08SyncopeOfIetsAnders from './Sect08SyncopeOfIetsAnders'
import Sect09TweeTypenUitgelicht from './Sect09TweeTypenUitgelicht'
import Sect10VasovagaleSyncope from './Sect10VasovagaleSyncope'
import Sect11StokesAdams from './Sect11StokesAdams'
import Sect12VergelijkingTabel2 from './Sect12VergelijkingTabel2'
import Sect13KlinischeHerkenningVasovagaal from './Sect13KlinischeHerkenningVasovagaal'
import Sect14DiagnostischeHulpmiddelen from './Sect14DiagnostischeHulpmiddelen'
import Sect15Kantelproef from './Sect15Kantelproef'
import Sect16Carotissinusmassage from './Sect16Carotissinusmassage'
import Sect17SamenvattendKlinischOnderscheid from './Sect17SamenvattendKlinischOnderscheid'
import Sect18Samenvatting from './Sect18Samenvatting'

const Blok9Week5Casus10SyncopeSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Wat is syncope?', icon: HelpCircle },
    { id: 'sect-03', title: 'Het basismechanisme: falende hersenperfusie', icon: Brain },
    { id: 'sect-04', title: 'De drie hoofdoorzaken van cardiovasculaire syncope', icon: Table2 },
    { id: 'sect-05', title: 'Vasculaire oorzaken', icon: Activity },
    { id: 'sect-06', title: 'Obstructieve oorzaken', icon: Scale },
    { id: 'sect-07', title: 'Aritmische oorzaken', icon: Zap },
    { id: 'sect-08', title: 'Syncope of toch iets anders?', icon: Microscope },
    { id: 'sect-09', title: 'Twee belangrijke typen syncope uitgelicht', icon: GitBranch },
    { id: 'sect-10', title: 'Vasovagale syncope: een paradoxale reflex', icon: HeartPulse },
    { id: 'sect-11', title: 'Stokes-Adams-aanval: een plotselinge elektrische stilstand', icon: ShieldAlert },
    { id: 'sect-12', title: 'Vasovagaal versus Stokes-Adams', icon: Table2 },
    { id: 'sect-13', title: 'Klinische herkenning van vasovagale syncope', icon: Stethoscope },
    { id: 'sect-14', title: 'Diagnostische hulpmiddelen', icon: Microscope },
    { id: 'sect-15', title: 'De kantelproef (tilt test)', icon: Activity },
    { id: 'sect-16', title: 'Carotissinusmassage', icon: Stethoscope },
    { id: 'sect-17', title: 'Samenvattend klinisch onderscheid', icon: ClipboardList },
    { id: 'sect-18', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Syncope"
      description="Syncope is een veelvoorkomend klinisch symptoom dat vaak wordt omschreven als flauwvallen of een wegraking. De formele definitie is: een tijdelijk verlies van bewustzijn door onvoldoende bloedtoevoer naar de hersenen."
      caseLabel="Week 5 · Casus 10: Atriumfibrilleren"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02WatIsSyncope />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03Basismechanisme />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04DrieHoofdoorzaken />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05VasculaireOorzaken />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06ObstructieveOorzaken />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07AritmischeOorzaken />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08SyncopeOfIetsAnders />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09TweeTypenUitgelicht />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10VasovagaleSyncope />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11StokesAdams />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12VergelijkingTabel2 />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13KlinischeHerkenningVasovagaal />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14DiagnostischeHulpmiddelen />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15Kantelproef />
      </section>
      <section id="sect-16" className="scroll-mt-24 mb-12">
        <Sect16Carotissinusmassage />
      </section>
      <section id="sect-17" className="scroll-mt-24 mb-12">
        <Sect17SamenvattendKlinischOnderscheid />
      </section>
      <section id="sect-18" className="scroll-mt-24 mb-12">
        <Sect18Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok9Week5Casus10SyncopeSummary
