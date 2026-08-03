import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De glomerulaire filtratiebarrière: waarom eiwit normaal wordt tegengehouden`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De glomerulus laat water en kleine opgeloste stoffen door, maar houdt bloedcellen en grote eiwitten normaal tegen. Dat gebeurt via drie onderdelen van de filtratiebarrière:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Endotheel met fenestrae**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dit zijn openingen in de vaatwand.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Negatief geladen glycoproteïnen**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Deze zorgen voor ladingsselectiviteit en stoten negatief geladen eiwitten af, zoals albumine.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Podocyten met filtratiespleten**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Deze zorgen voor grootte-selectiviteit.`}</Inline></p>
      <PBody text={`Kleine eiwitten kunnen soms toch gefiltreerd worden, maar worden normaal in de **proximale tubulus** weer gereabsorbeerd. De nier gaat dus heel zorgvuldig om met eiwitten.`} />
      <SubHeading><Inline>{`Grootte- en ladingsselectiviteit`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De filtratiebarrière heeft twee belangrijke eigenschappen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**grootte-selectiviteit**: grote eiwitten worden tegengehouden;`}</Inline></li>
        <li><Inline>{`**ladingsselectiviteit**: negatief geladen eiwitten worden afgestoten.`}</Inline></li>
      </ul>
      <PBody text={`Als de grootte-selectiviteit verstoord is, komen ook grotere eiwitten in de urine.
Als de ladingsselectiviteit verstoord is, vooral kleine negatief geladen eiwitten zoals albumine.`} />
      <SubHeading><Inline>{`Tabel 3. Verschil tussen stoornis in grootte- en ladingsselectiviteit`}</Inline></SubHeading>
      <DataTable rows={[["Stoornis", "Gevolg in de urine"], ["Verlies van grootte-selectiviteit", "Vooral grote én kleine eiwitten komen door"], ["Verlies van ladingsselectiviteit", "Vooral kleine, negatief geladen eiwitten zoals albumine komen door"], ["Normale barrière", "Vrijwel geen eiwit in de urine"]]} />
    </div>
  )
}
