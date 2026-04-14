import {
  BookOpen,
  CircleCheck,
  ClipboardList,
  GitBranch,
  HelpCircle,
  Layers,
  Microscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02VasculitisOfVasculopathie from './Sect02VasculitisOfVasculopathie'
import Sect03KleineVatenLeukocytoclastischeVasculitis from './Sect03KleineVatenLeukocytoclastischeVasculitis'
import Sect04PrimaireKenmerken from './Sect04PrimaireKenmerken'
import Sect05SecundaireKenmerken from './Sect05SecundaireKenmerken'
import Sect06AandachtvraagLeukocytoclasie from './Sect06AandachtvraagLeukocytoclasie'
import Sect07PrimairOfSecundairContext from './Sect07PrimairOfSecundairContext'
import Sect08BelangVanContext from './Sect08BelangVanContext'
import Sect09SystematischBenaderen from './Sect09SystematischBenaderen'
import Sect10AandachtvraagSterksteArgument from './Sect10AandachtvraagSterksteArgument'
import Sect11KernlogicaTabel3 from './Sect11KernlogicaTabel3'
import Sect12SlotSamenvatting from './Sect12SlotSamenvatting'

const Blok5Week2Casus3LmvVasculitisOfVasculopathieSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Vasculitis of vasculopathie?', icon: Layers },
    { id: 'sect-03', title: 'Kleine vaten leukocytoclastische vasculitis', icon: Layers },
    { id: 'sect-04', title: 'Primaire kenmerken van vaatschade', icon: Microscope },
    { id: 'sect-05', title: 'Secundaire kenmerken', icon: Microscope },
    { id: 'sect-06', title: 'Aandachtvraag', icon: HelpCircle },
    { id: 'sect-07', title: 'Primair of secundair? Dat hangt af van de context', icon: GitBranch },
    { id: 'sect-08', title: 'Het belang van context bij histopathologie', icon: Microscope },
    { id: 'sect-09', title: 'Hoe kun je dit systematisch benaderen?', icon: ClipboardList },
    { id: 'sect-10', title: 'Aandachtvraag', icon: HelpCircle },
    { id: 'sect-11', title: 'Overzicht van de kernlogica', icon: Table2 },
    { id: 'sect-12', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Vasculitis of vasculopathie"
      description="De kern van deze module is het onderscheid tussen vasculitis en vasculopathie. Dat onderscheid is niet altijd eenvoudig. Het kan zowel klinisch als histopathologisch lastig zijn om te bepalen wat je precies ziet."
      caseLabel="Week 2 · Casus 3: Paarse vlek"
      blokLabel="Blok 5"
      moduleKind="lmv"
      practiceLink="/oefenvragen?lme=blok5-week2-casus3-lmv-vasculitis-of-vasculopathie"
      tableOfContents={tableOfContents}
    summaryVariantToggle={{
      activeLmeId: 'blok5-week2-casus3-lmv-vasculitis-of-vasculopathie',
      variants: [
        { id: 'blok5-week2-casus3-lmv-vasculitis-of-vasculopathie', label: 'Uitgebreid' },
        { id: 'blok5-week2-casus3-lmv-vasculitis-of-vasculopathie-mini', label: 'Kort' },
      ],
    }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02VasculitisOfVasculopathie />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03KleineVatenLeukocytoclastischeVasculitis />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04PrimaireKenmerken />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05SecundaireKenmerken />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06AandachtvraagLeukocytoclasie />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07PrimairOfSecundairContext />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08BelangVanContext />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09SystematischBenaderen />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10AandachtvraagSterksteArgument />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11KernlogicaTabel3 />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12SlotSamenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week2Casus3LmvVasculitisOfVasculopathieSummary
