import {
  Activity,
  BookOpen,
  CircleCheck,
  Footprints,
  GitBranch,
  HelpCircle,
  ListChecks,
  Microscope,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02ZwellingEerstAfbakenen from './Sect02ZwellingEerstAfbakenen'
import Sect03UnilateraalBilateraal from './Sect03UnilateraalBilateraal'
import Sect04AcuutChronisch from './Sect04AcuutChronisch'
import Sect05AnatomischeStructuren from './Sect05AnatomischeStructuren'
import Sect06Anamnese from './Sect06Anamnese'
import Sect07LichamelijkOnderzoek from './Sect07LichamelijkOnderzoek'
import Sect08AanvullendOnderzoek from './Sect08AanvullendOnderzoek'
import Sect09Tabel1 from './Sect09Tabel1'
import Sect10Liesbreuk from './Sect10Liesbreuk'
import Sect11PraktischeAanpak from './Sect11PraktischeAanpak'
import Sect12SlotSamenvatting from './Sect12SlotSamenvatting'

const Blok5Week4Casus7LmoDifferentiaalDiagnostischeAanpakZwellingBeenSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Zwelling van het been: eerst goed afbakenen wat je ziet', icon: Stethoscope },
    { id: 'sect-03', title: 'Unilateraal of bilateraal: een eerste grote splitsing', icon: GitBranch },
    { id: 'sect-04', title: 'Acuut of chronisch: ook dat maakt veel uit', icon: Activity },
    { id: 'sect-05', title: 'Welke anatomische structuren kunnen betrokken zijn?', icon: Microscope },
    { id: 'sect-06', title: 'Anamnese: welke vragen zijn belangrijk?', icon: ListChecks },
    { id: 'sect-07', title: 'Lichamelijk onderzoek: waar let je op?', icon: Footprints },
    { id: 'sect-08', title: 'Aanvullend onderzoek: niet alles tegelijk, maar gericht', icon: Stethoscope },
    { id: 'sect-09', title: 'Tabel 1. Klinische verschillen tussen drie veelvoorkomende oorzaken', icon: Table2 },
    { id: 'sect-10', title: 'Liesbreuk als oorzaak van zwelling', icon: HelpCircle },
    { id: 'sect-11', title: 'Praktische aanpak', icon: ListChecks },
    { id: 'sect-12', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Differentiaal diagnostische aanpak van zwelling in het been"
      description="Een belangrijk beginpunt is dat oedeem niet hetzelfde is als zwelling. Zwelling is een brede klinische beschrijving: een been of een deel van het been is dikker dan normaal. Oedeem is specifieker: dat is zwelling door toegenomen interstitieel vocht, dus vocht dat zich in het weefsel ophoopt."
      caseLabel="Week 4 · Casus 7: Zwelling van de lies en of een dik been"
      blokLabel="Blok 5"
      moduleKind="lmo"
      practiceLink="/oefenvragen?lme=blok5-week4-casus7-lmo-differentiaal-diagnostische-aanpak-zwelling-been"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02ZwellingEerstAfbakenen />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03UnilateraalBilateraal />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04AcuutChronisch />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05AnatomischeStructuren />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06Anamnese />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07LichamelijkOnderzoek />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08AanvullendOnderzoek />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09Tabel1 />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10Liesbreuk />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11PraktischeAanpak />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12SlotSamenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week4Casus7LmoDifferentiaalDiagnostischeAanpakZwellingBeenSummary
