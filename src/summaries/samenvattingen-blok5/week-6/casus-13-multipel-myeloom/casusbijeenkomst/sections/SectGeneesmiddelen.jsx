import { Inline, DataTable, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="font-semibold text-slate-900 dark:text-slate-100 m-0">
        <Inline>{`Tabel 4. Werkingsmechanismen in het kort`}</Inline>
      </p>
      <DataTable
        rows={[
          ['Middel', 'Type', 'Werking'],
          ['---', '---', '---'],
          [
            'Daratumumab',
            'monoklonaal antilichaam',
            'Richt zich op CD38 op myelomacellen en helpt het immuunsysteem deze cellen aan te vallen',
          ],
          [
            'Isatuximab',
            'monoklonaal antilichaam',
            'Richt zich ook op CD38, maar op een iets andere plek dan daratumumab',
          ],
          [
            'Bortezomib',
            'proteasoomremmer',
            'Remt het 26S-proteasoom, waardoor eiwitten zich opstapelen en de tumorcel sterft',
          ],
          [
            'Carfilzomib',
            'proteasoomremmer',
            'Bindt irreversibel aan het proteasoom en remt zo de eiwitafbraak',
          ],
          [
            'Dexamethason',
            'corticosteroïd',
            'Geeft in hoge dosis apoptose van plasmacellen en is vaak onderdeel van combinaties',
          ],
          [
            'Pomalidomide',
            'IMiD',
            'Remt myeloomgroei, stimuleert het immuunsysteem en remt bloedvatvorming',
          ],
        ]}
      />

      <SubHeading level={3}>Daratumumab en isatuximab</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Beide zijn **anti-CD38-antistoffen**. CD38 zit op myelomacellen. Door eraan te binden helpen deze middelen het immuunsysteem om de kwaadaardige cellen op te ruimen.`}</Inline>
      </p>

      <SubHeading level={3}>Bortezomib en carfilzomib</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Dit zijn **proteasoomremmers**. Het proteasoom is een systeem waarmee cellen eiwitten afbreken. Als je dat remt, stapelen eiwitten zich op en raakt de tumorcel beschadigd. Myeloomcellen zijn hier extra gevoelig voor.`}</Inline>
      </p>

      <SubHeading level={3}>Dexamethason</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Dit is een corticosteroïd met sterke ontstekingsremmende werking. In myeloombehandeling zorgt het voor afsterven van plasmacellen en wordt het vaak als basis in combinaties gebruikt.`}</Inline>
      </p>

      <SubHeading level={3}>Pomalidomide</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Pomalidomide werkt op meerdere manieren:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`remt de groei van myeloomcellen`}</Inline></li>
        <li><Inline>{`stimuleert het immuunsysteem`}</Inline></li>
        <li><Inline>{`remt de vorming van bloedvaten die de tumor voeden`}</Inline></li>
      </ul>
    </div>
  )
}
