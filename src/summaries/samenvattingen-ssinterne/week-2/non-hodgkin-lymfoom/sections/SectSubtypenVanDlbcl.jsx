import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Subtypen van DLBCL`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Binnen DLBCL-NOS, de grootste groep, kunnen op basis van genexpressie twee subtypen worden onderscheiden:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`germinal center B-cell type, afgekort GCB;`}</Inline></li>
        <li><Inline>{`activated B-cell type, afgekort ABC.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Het GCB-type heeft de beste prognose. Patiënten met een GCB-subtype hebben na eerstelijnstherapie met R-CHOP een betere overleving dan patiënten met een ABC-subtype.`}</Inline></p>
    </div>
  )
}
