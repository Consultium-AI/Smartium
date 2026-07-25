import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Chronische hepatitis C is een behandelbare infectieziekte die vooral via bloed-bloedcontact wordt overgedragen. De infectie kan lang onopgemerkt blijven, maar onbehandeld leidt zij uiteindelijk tot ernstige leverziekte, levercirrose en hepatocellulair carcinoom. De diagnose actieve hepatitis C stel je met HCV-RNA, niet alleen met leverenzymen of anti-HCV. Behandeling is tegenwoordig zeer effectief en heeft als doel genezing, minder sterfte en minder overdracht. Voor het starten van therapie moet je altijd de leverschade beoordelen.`}</Inline></p>
    </div>
  )
}
