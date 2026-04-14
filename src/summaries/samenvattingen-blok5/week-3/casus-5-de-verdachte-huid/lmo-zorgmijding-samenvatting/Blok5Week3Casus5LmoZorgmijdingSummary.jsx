import {
  AlertCircle,
  BookOpen,
  CircleCheck,
  HeartHandshake,
  HelpCircle,
  Home,
  Layers,
  Scale,
  Stethoscope,
  Table2,
  Users,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02WatIsZorgmijding from './Sect02WatIsZorgmijding'
import Sect03WaaromIsZorgmijdingBelangrijk from './Sect03WaaromIsZorgmijdingBelangrijk'
import Sect04MogelijkeRedenenVoorZorgmijding from './Sect04MogelijkeRedenenVoorZorgmijding'
import Sect05ExtraRisicoDakEnThuisloos from './Sect05ExtraRisicoDakEnThuisloos'
import Sect06TweeSoortenKenmerken from './Sect06TweeSoortenKenmerken'
import Sect07TermZorgmijderStigmatiserend from './Sect07TermZorgmijderStigmatiserend'
import Sect08WatHelptZorgToegankelijker from './Sect08WatHelptZorgToegankelijker'
import Sect09AandachtvraagEerste from './Sect09AandachtvraagEerste'
import Sect10DermatologischeCasus from './Sect10DermatologischeCasus'
import Sect11MaatschappelijkEnMedischVraagstuk from './Sect11MaatschappelijkEnMedischVraagstuk'
import Sect12OverzichtTabellen from './Sect12OverzichtTabellen'
import Sect13AandachtvraagTweede from './Sect13AandachtvraagTweede'
import Sect14Samenvatting from './Sect14Samenvatting'

const Blok5Week3Casus5LmoZorgmijdingSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Wat is zorgmijding?', icon: HelpCircle },
    { id: 'sect-03', title: 'Waarom is zorgmijding belangrijk?', icon: AlertCircle },
    { id: 'sect-04', title: 'Mogelijke redenen voor zorgmijding', icon: Layers },
    {
      id: 'sect-05',
      title: 'Extra risico op zorgmijding bij dak- en thuisloze mensen',
      icon: Home,
    },
    {
      id: 'sect-06',
      title: 'Twee soorten kenmerken die bijdragen aan zorgmijding',
      icon: Users,
    },
    {
      id: 'sect-07',
      title: 'Waarom kan de term ‘zorgmijder’ stigmatiserend zijn?',
      icon: AlertCircle,
    },
    { id: 'sect-08', title: 'Wat helpt om zorg toegankelijker te maken?', icon: HeartHandshake },
    { id: 'sect-09', title: 'Aandacht-vraag', icon: HelpCircle },
    { id: 'sect-10', title: 'De dermatologische casus: wat laat die zien?', icon: Stethoscope },
    {
      id: 'sect-11',
      title: 'Zorgmijding als maatschappelijk en medisch vraagstuk',
      icon: Scale,
    },
    { id: 'sect-12', title: 'Overzicht van belangrijke factoren', icon: Table2 },
    { id: 'sect-13', title: 'Aandacht-vraag', icon: HelpCircle },
    { id: 'sect-14', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Zorgmijding"
      description="Zorgmijding betekent dat mensen geen hulp zoeken terwijl zij die hulp wel nodig hebben. Dat kan op verschillende manieren zichtbaar worden."
      caseLabel="Week 3 · Casus 5: De verdachte huid"
      blokLabel="Blok 5"
      moduleKind="lmo"
      practiceLink="/oefenvragen?lme=blok5-week3-casus5-lmo-zorgmijding"
      tableOfContents={tableOfContents}
    summaryVariantToggle={{
      activeLmeId: 'blok5-week3-casus5-lmo-zorgmijding',
      variants: [
        { id: 'blok5-week3-casus5-lmo-zorgmijding', label: 'Uitgebreid' },
        { id: 'blok5-week3-casus5-lmo-zorgmijding-mini', label: 'Kort' },
      ],
    }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02WatIsZorgmijding />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03WaaromIsZorgmijdingBelangrijk />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04MogelijkeRedenenVoorZorgmijding />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05ExtraRisicoDakEnThuisloos />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06TweeSoortenKenmerken />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07TermZorgmijderStigmatiserend />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08WatHelptZorgToegankelijker />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09AandachtvraagEerste />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10DermatologischeCasus />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11MaatschappelijkEnMedischVraagstuk />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12OverzichtTabellen />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13AandachtvraagTweede />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week3Casus5LmoZorgmijdingSummary
