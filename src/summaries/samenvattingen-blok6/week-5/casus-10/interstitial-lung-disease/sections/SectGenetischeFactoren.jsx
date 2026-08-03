import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Genetische factoren`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Veel ILD’s kunnen familiair voorkomen. Binnen één familie kunnen zelfs verschillende vormen van fibrotische ILD optreden. Genetische studies hebben meerdere single nucleotide polymorphisms gevonden die samenhangen met progressieve fibrose. Deze varianten beïnvloeden onder andere:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`telomeerlengte`}</Inline></li>
        <li><Inline>{`surfactantvorming`}</Inline></li>
        <li><Inline>{`celdeling`}</Inline></li>
        <li><Inline>{`afweer tegen ziekteverwekkers`}</Inline></li>
      </ul>
    </div>
  )
}
