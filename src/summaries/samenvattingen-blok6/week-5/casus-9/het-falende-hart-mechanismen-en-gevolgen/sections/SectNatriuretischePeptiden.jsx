import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Natriuretische peptiden`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Wanneer het myocard uitrekt door druk- of volume-overbelasting, maakt het proBNP aan. Dit wordt gesplitst in BNP en NT-proBNP. BNP is biologisch actief, NT-proBNP is inactief maar blijft langer circuleren en wordt gebruikt als biomarker.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`BNP werkt juist ontlastend:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`vasodilatatie;`}</Inline></li>
        <li><Inline>{`natriurese en diurese;`}</Inline></li>
        <li><Inline>{`remming van RAAS en sympathicus;`}</Inline></li>
        <li><Inline>{`verlaging van wandspanning en drukbelasting.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Zo probeert het lichaam de overbelasting tegen te gaan.`}</Inline></p>
      <PBody text={`**Tabel 3. Belangrijkste compensatiemechanismen**`} />
      <DataTable rows={[["Systeem", "Korte termijn effect", "Lange termijn effect"], ["Sympathicus", "Tachycardie, vasoconstrictie, meer contractiliteit", "Schade, ritmestoornissen, remodellering"], ["RAAS", "Vasoconstrictie, vochtretentie, hogere bloeddruk", "Fibrose, hypertrofie, volume-overbelasting"], ["BNP/NT-proBNP", "Vasodilatatie, natriurese, diurese", "Ontlastend tegenregulerend systeem"]]} />
    </div>
  )
}
