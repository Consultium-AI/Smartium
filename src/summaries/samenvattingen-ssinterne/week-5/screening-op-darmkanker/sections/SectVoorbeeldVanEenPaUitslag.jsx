import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Voorbeeld van een PA-uitslag`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een poliep kan na pathologisch onderzoek bijvoorbeeld blijken te zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een **tubulair adenoom**;`}</Inline></li>
        <li><Inline>{`**11 mm** groot;`}</Inline></li>
        <li><Inline>{`met **laaggradige dysplasie**;`}</Inline></li>
        <li><Inline>{`en radicaal verwijderd.`}</Inline></li>
      </ul>
      <PBody text={`Dan kun je in de conclusie spreken van een **gesteelde adenomateuze poliep van 11 mm** die radicaal is verwijderd.`} />
      <SubHeading><Inline>{`Tabel 2. Voorbeeld van surveillance-interval`}</Inline></SubHeading>
      <DataTable rows={[["Bevinding", "Interval"], ["Gesteeld adenoom van 11 mm, radicaal verwijderd", "5 jaar"]]} />
    </div>
  )
}
