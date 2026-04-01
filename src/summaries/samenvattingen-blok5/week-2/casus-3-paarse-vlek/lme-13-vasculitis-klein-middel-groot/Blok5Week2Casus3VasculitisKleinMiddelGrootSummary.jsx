import {
  Activity,
  BookOpen,
  CircleCheck,
  GitBranch,
  Layers,
  Microscope,
  Pill,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02WatIsVasculitis from './Sect02WatIsVasculitis'
import Sect03IndelingTabel1 from './Sect03IndelingTabel1'
import Sect04GroteBloedvatenIntro from './Sect04GroteBloedvatenIntro'
import Sect05GcaKlinischBelangrijk from './Sect05GcaKlinischBelangrijk'
import Sect06PathofysiologieGcaTabel2 from './Sect06PathofysiologieGcaTabel2'
import Sect07DiagnostiekGcaTabel3 from './Sect07DiagnostiekGcaTabel3'
import Sect08BehandelingGcaTakayasu from './Sect08BehandelingGcaTakayasu'
import Sect09KleineBloedvatenIntro from './Sect09KleineBloedvatenIntro'
import Sect10AncaGeassocieerdeVasculitis from './Sect10AncaGeassocieerdeVasculitis'
import Sect11BehandelingGpaTabel4 from './Sect11BehandelingGpaTabel4'
import Sect12ImmuneComplexGemedieerd from './Sect12ImmuneComplexGemedieerd'
import Sect13IgaVasculitisEnAndere from './Sect13IgaVasculitisEnAndere'
import Sect14Tabel5Vergelijking from './Sect14Tabel5Vergelijking'
import Sect15SamenvattingKlinischeKern from './Sect15SamenvattingKlinischeKern'
import Sect16Samenvatting from './Sect16Samenvatting'

const Blok5Week2Casus3VasculitisKleinMiddelGrootSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Wat is vasculitis?', icon: Layers },
    { id: 'sect-03', title: 'Indeling (tabel 1)', icon: Table2 },
    { id: 'sect-04', title: 'Grote bloedvaten', icon: Activity },
    { id: 'sect-05', title: 'GCA klinisch', icon: Stethoscope },
    { id: 'sect-06', title: 'Pathofysiologie GCA', icon: Microscope },
    { id: 'sect-07', title: 'Diagnostiek GCA', icon: Table2 },
    { id: 'sect-08', title: 'Behandeling GCA / Takayasu', icon: Pill },
    { id: 'sect-09', title: 'Kleine bloedvaten', icon: GitBranch },
    { id: 'sect-10', title: 'ANCA-vasculitis', icon: GitBranch },
    { id: 'sect-11', title: 'Behandeling GPA', icon: Table2 },
    { id: 'sect-12', title: 'Immune complex', icon: Layers },
    { id: 'sect-13', title: 'IgA-vasculitis', icon: Stethoscope },
    { id: 'sect-14', title: 'Tabel 5: vergelijking', icon: Table2 },
    { id: 'sect-15', title: 'Klinische kern', icon: CircleCheck },
    { id: 'sect-16', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Vasculitis - klein, middel, groot"
      description="Vasculitis betekent ontsteking van de bloedvatwand. Dat kan verschillende soorten vaten treffen, en juist de grootte van het aangedane vat is heel belangrijk voor het type vasculitis, de klachten en de behandeling. Bij een ontstekingsreactie tegen de bloedvatwand spreken we per definitie van een systemische auto-immuunziekte."
      caseLabel="Week 2 · Casus 3: Paarse vlek"
      blokLabel="Blok 5"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02WatIsVasculitis />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03IndelingTabel1 />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04GroteBloedvatenIntro />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05GcaKlinischBelangrijk />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06PathofysiologieGcaTabel2 />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07DiagnostiekGcaTabel3 />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08BehandelingGcaTakayasu />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09KleineBloedvatenIntro />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10AncaGeassocieerdeVasculitis />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11BehandelingGpaTabel4 />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12ImmuneComplexGemedieerd />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13IgaVasculitisEnAndere />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14Tabel5Vergelijking />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15SamenvattingKlinischeKern />
      </section>
      <section id="sect-16" className="scroll-mt-24 mb-12">
        <Sect16Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week2Casus3VasculitisKleinMiddelGrootSummary
