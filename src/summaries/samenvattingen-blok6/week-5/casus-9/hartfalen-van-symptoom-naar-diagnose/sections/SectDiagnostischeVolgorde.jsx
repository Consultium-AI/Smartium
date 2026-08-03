import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diagnostische volgorde`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een logische aanpak is:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`klachten en voorgeschiedenis uitvragen`}</Inline></li>
        <li><Inline>{`lichamelijk onderzoek doen`}</Inline></li>
        <li><Inline>{`pre-test probability inschatten`}</Inline></li>
        <li><Inline>{`NT-proBNP bepalen bij twijfel`}</Inline></li>
        <li><Inline>{`ECG maken`}</Inline></li>
        <li><Inline>{`echocardiografie aanvragen bij verhoogde kans of afwijkende testen`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Belangrijke uitzondering: atriumfibrilleren`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij atriumfibrilleren is NT-proBNP vaak verhoogd, ook zonder hartfalen. Daarom verliest NT-proBNP daar een deel van zijn uitsluitende waarde. Bij verdenking op hartfalen en atriumfibrilleren ga je dan sneller naar echocardiografie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
