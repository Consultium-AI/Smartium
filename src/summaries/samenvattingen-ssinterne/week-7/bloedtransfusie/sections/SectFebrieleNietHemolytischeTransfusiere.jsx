import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Febriele, niet-hemolytische transfusiereactie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Dit is koorts die optreedt binnen 30 tot 60 minuten na transfusie. Vaak is dit een immunologische reactie op het bloedproduct, maar het kan ook passen bij bacteriële contaminatie of een beginnende hemolytische reactie. Een lichte temperatuurstijging zonder belangrijke klachten is geen reden om een transfusie per se te stoppen; die kan onder strikte controle worden voortgezet. Koorts is dus geen contra-indicatie om te starten met transfusie.`}</Inline></p>
    </div>
  )
}
