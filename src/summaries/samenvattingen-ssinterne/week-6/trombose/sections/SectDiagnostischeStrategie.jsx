import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diagnostische strategie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De praktische aanpak is:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bij **lage klinische kans**: D-dimeer bepalen;`}</Inline></li>
        <li><Inline>{`bij **hoge klinische kans**: direct CUS.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Als de klinische kans laag is en de D-dimeer normaal, is DVT uitgesloten. Bij een hoge klinische kans of een afwijkende uitslag volgt echo-onderzoek.`}</Inline></p>
    </div>
  )
}
