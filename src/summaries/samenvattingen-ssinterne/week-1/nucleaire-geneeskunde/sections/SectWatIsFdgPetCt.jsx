import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat is FDG PET/CT?`}</Inline></SubHeading>
      <PBody text={`FDG PET/CT is een onderzoek waarmee je het **metabolisme** in het lichaam zichtbaar maakt. Het gebruikte radiofarmacon is **FDG**: een radioactieve vorm van glucose. FDG is zo aangepast dat het na opname in de cel daar **gevangen blijft** en niet verder wordt gemetaboliseerd. Daardoor zie je waar veel glucose wordt opgenomen.`} />
      <p className="leading-relaxed"><Inline>{`Hoe meer FDG een plek opneemt, hoe hoger het metabolisme daar is.`}</Inline></p>
    </div>
  )
}
