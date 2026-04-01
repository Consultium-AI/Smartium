import {
  BookOpen,
  CircleCheck,
  GitCompare,
  Microscope,
  Route,
  Shapes,
  Stethoscope,
  Target,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02AcuteVersusChronisch from './Sect02AcuteVersusChronisch'
import Sect03HistologischeKenmerken from './Sect03HistologischeKenmerken'
import Sect04MacrofagenEnRol from './Sect04MacrofagenEnRol'
import Sect05Oorzaken from './Sect05Oorzaken'
import Sect06Granuloom from './Sect06Granuloom'
import Sect07Gevolgen from './Sect07Gevolgen'
import Sect08Samenvatting from './Sect08Samenvatting'

const Blok5Week2Casus4ChronischeOntstekingSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Acute versus chronische ontsteking', icon: GitCompare },
    { id: 'sect-03', title: 'Histologische kenmerken', icon: Microscope },
    { id: 'sect-04', title: 'Macrofagen en hun rol', icon: Target },
    { id: 'sect-05', title: 'Oorzaken van chronische ontsteking', icon: Route },
    { id: 'sect-06', title: 'Granulomateuze ontsteking', icon: Shapes },
    { id: 'sect-07', title: 'Gevolgen en weefseluitkomst', icon: Stethoscope },
    { id: 'sect-08', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Chronische ontsteking"
      description="Chronische ontsteking is een langdurige ontstekingsreactie waarbij mononucleaire cellen — vooral macrofagen, lymfocyten en plasmacellen — centraal staan, vaak gepaard met weefselverandering en reparatie zoals fibrose."
      caseLabel="Week 2 · Casus 4: Donkere vlek"
      blokLabel="Blok 5"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02AcuteVersusChronisch />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03HistologischeKenmerken />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04MacrofagenEnRol />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05Oorzaken />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06Granuloom />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07Gevolgen />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week2Casus4ChronischeOntstekingSummary
