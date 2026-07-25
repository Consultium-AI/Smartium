import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Typen poliepen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Niet elke poliep wordt kwaadaardig. Tijdens een coloscopie is het echter niet goed mogelijk om direct te zien welke poliep wel of niet zal doorgroeien naar kanker. Pas nadat de poliep is verwijderd en door de patholoog is beoordeeld, weet je het exacte type.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De meest voorkomende typen poliepen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**adenoom**`}</Inline></li>
        <li><Inline>{`**serrated poliep**`}</Inline></li>
        <li><Inline>{`**hyperplastische poliep**`}</Inline></li>
      </ul>
      <PBody text={`Van de **hyperplastische poliep** is bekend dat deze niet in staat is om darmkanker te vormen.`} />
      <SubHeading><Inline>{`Tabel 1. Belangrijke typen poliepen`}</Inline></SubHeading>
      <DataTable rows={[["Type poliep", "Betekenis / belang"], ["Adenoom", "Voorstadium dat kan overgaan in darmkanker"], ["Serrated poliep", "Poliep met potentieel relevant risico"], ["Hyperplastische poliep", "Vormt geen darmkanker"]]} />
    </div>
  )
}
