import {
  BookOpen,
  Droplets,
  Table2,
  GitBranch,
  Activity,
  Stethoscope,
  ListChecks,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import SectLeerdoelenEnWatIs from './SectLeerdoelenEnWatIs'
import SectSerumcreatinineNietRenale from './SectSerumcreatinineNietRenale'
import SectAnatomischeIndeling from './SectAnatomischeIndeling'
import SectPrerenaleOorzaken from './SectPrerenaleOorzaken'
import SectRenaleOorzaken from './SectRenaleOorzaken'
import SectPostrenaleOorzaken from './SectPostrenaleOorzaken'
import SectVoorbeeldenPraktijk from './SectVoorbeeldenPraktijk'
import SectSamenvattingSlot from './SectSamenvattingSlot'

const Blok9Week1Casus1AcuteNierschadeSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen en wat is acute nierschade?', icon: BookOpen },
    { id: 'sect-02', title: 'Serumcreatinine zonder echte nierschade', icon: Droplets },
    { id: 'sect-03', title: 'Anatomische indeling', icon: Table2 },
    { id: 'sect-04', title: 'Prerenale oorzaken', icon: GitBranch },
    { id: 'sect-05', title: 'Renale oorzaken', icon: Activity },
    { id: 'sect-06', title: 'Postrenale oorzaken', icon: Stethoscope },
    { id: 'sect-07', title: 'Voorbeelden uit de praktijk', icon: ListChecks },
    { id: 'sect-08', title: 'Samenvatting', icon: BookOpen },
  ]

  return (
    <SummaryLayout
      title="Acute nierschade"
      description="Acute nierschade wordt ook wel acute nierinsufficiëntie genoemd. Het gaat om een plotselinge daling van de nierfunctie, meestal in uren tot dagen, en die verandering is in principe herstelbaar."
      caseLabel="Week 1 · Casus 1: Patiënt met acute nierschade"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=blok9-week1-casus1-acute-nierschade"
      summaryVariantToggle={{
        activeLmeId: 'blok9-week1-casus1-acute-nierschade',
        variants: [
          { id: 'blok9-week1-casus1-acute-nierschade', label: 'Uitgebreid' },
          { id: 'blok9-week1-casus1-acute-nierschade-mini', label: 'Kort' },
        ],
      }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <SectLeerdoelenEnWatIs />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <SectSerumcreatinineNietRenale />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <SectAnatomischeIndeling />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <SectPrerenaleOorzaken />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <SectRenaleOorzaken />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <SectPostrenaleOorzaken />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <SectVoorbeeldenPraktijk />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <SectSamenvattingSlot />
      </section>
    </SummaryLayout>
  )
}

export default Blok9Week1Casus1AcuteNierschadeSummary
