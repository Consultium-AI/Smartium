import {
  BookOpen,
  CircleCheck,
  ClipboardList,
  Layers,
  Microscope,
  Stethoscope,
  Syringe,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Brondocumentkop from './Sect01Brondocumentkop'
import Sect02Leerdoelen from './Sect02Leerdoelen'
import Sect03LymfklierzwellingDenkBreed from './Sect03LymfklierzwellingDenkBreed'
import Sect04OorzakenBenigneMetTabel1 from './Sect04OorzakenBenigneMetTabel1'
import Sect05OorzakenMaligneMetTabel2 from './Sect05OorzakenMaligneMetTabel2'
import Sect06Anamnese from './Sect06Anamnese'
import Sect07KenmerkenMaligniteit from './Sect07KenmerkenMaligniteit'
import Sect08LichamelijkOnderzoek from './Sect08LichamelijkOnderzoek'
import Sect09Palpatie from './Sect09Palpatie'
import Sect10DiagnostiekHistologie from './Sect10DiagnostiekHistologie'
import Sect11AanvullendOnderzoekLymfoom from './Sect11AanvullendOnderzoekLymfoom'
import Sect12BehandelplanStadiering from './Sect12BehandelplanStadiering'
import Sect13HistologieKlinischVoorbeeld from './Sect13HistologieKlinischVoorbeeld'
import Sect14SamenvattendKlinischDenken from './Sect14SamenvattendKlinischDenken'
import Sect15Samenvatting from './Sect15Samenvatting'

const Blok5Week4Casus7LymfadenopathieSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'LME 32 – Lymfadenopathie', icon: BookOpen },
    { id: 'sect-02', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-03', title: 'Lymfklierzwelling: denk breed', icon: Stethoscope },
    { id: 'sect-04', title: 'Oorzaken van lymfklierzwelling', icon: Table2 },
    { id: 'sect-05', title: 'Maligne oorzaken', icon: Table2 },
    { id: 'sect-06', title: 'Anamnese: welke vragen zijn belangrijk?', icon: ClipboardList },
    { id: 'sect-07', title: 'Kenmerken die in de richting van maligniteit wijzen', icon: Layers },
    { id: 'sect-08', title: 'Lichamelijk onderzoek: waar let je op?', icon: Stethoscope },
    { id: 'sect-09', title: 'Palpatie: welke kenmerken passen bij welke oorzaak?', icon: Syringe },
    { id: 'sect-10', title: 'Diagnostiek: hoe kom je tot een diagnose?', icon: Microscope },
    { id: 'sect-11', title: 'Aanvullend onderzoek bij verdenking op lymfoom', icon: Microscope },
    { id: 'sect-12', title: 'Behandelplan bij lymfoom', icon: Stethoscope },
    { id: 'sect-13', title: 'Histologie en klinische consequentie', icon: Microscope },
    { id: 'sect-14', title: 'Samenvattend klinisch denken', icon: ClipboardList },
    { id: 'sect-15', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Lymfadenopathie"
      description="Een lymfklierzwelling, ook wel lymfadenopathie genoemd, heeft een zeer brede differentiaaldiagnose."
      caseLabel="Week 4 · Casus 7: Zwelling van de lies en of een dik been"
      blokLabel="Blok 5"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=blok5-week4-casus7-lymfadenopathie"
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Brondocumentkop />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02Leerdoelen />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03LymfklierzwellingDenkBreed />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04OorzakenBenigneMetTabel1 />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05OorzakenMaligneMetTabel2 />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06Anamnese />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07KenmerkenMaligniteit />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08LichamelijkOnderzoek />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09Palpatie />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10DiagnostiekHistologie />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11AanvullendOnderzoekLymfoom />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12BehandelplanStadiering />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13HistologieKlinischVoorbeeld />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14SamenvattendKlinischDenken />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week4Casus7LymfadenopathieSummary
