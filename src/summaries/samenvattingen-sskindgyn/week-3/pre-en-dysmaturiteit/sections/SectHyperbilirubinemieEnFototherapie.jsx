import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hyperbilirubinemie en fototherapie`}</Inline></SubHeading>
      <PBody text={`Prematuriteit, dysmaturiteit en parenterale voeding zijn risicofactoren voor **hyperbilirubinemie**. Bij de beoordeling wordt een bilirubinecurve gebruikt die past bij de zwangerschapsduur en het geboortegewicht. Als de bilirubinewaarde boven de behandelgrens ligt, wordt gestart met **fototherapie**.`} />
    </div>
  )
}
