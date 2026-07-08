import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Huid en kleur`}</Inline></SubHeading>
      <PBody text={`De huid van een pasgeborene geeft veel informatie. De normale kleur is meestal **lichtroze**. Bij prematuren is de huid vaak **roder**, omdat er minder subcutaan vetweefsel aanwezig is.`} />
      <SubHeading><Inline>{`Kleurafwijkingen`}</Inline></SubHeading>
      <DataTable rows={[["Tabel 1. Belangrijke huid- en kleurafwijkingen bij de pasgeborene"], ["**Icterus**", "Geelzucht; fysiologisch rond dag 7–10, maximaal rond dag 3–5. Als het langer dan 10 dagen zichtbaar blijft, heet het icterus prolongatus. Vooral zichtbaar aan de sclerae en mondslijmvliezen."], ["**Bleekheid**", "Kan passen bij anemie, slechte perifere circulatie of oedeem."], ["**Cyanose**", "Past bij gestoorde gaswisseling, hartgebreken met een rechts-links-shunt of een hoog hematocriet."]]} />
      <PBody text={`Naast de kleur let je ook op andere huidkenmerken, zoals **vernix caseosa**, **lanugo-beharing**, **haemangiomen**, **naevus flammeus**, andere naevi, **petechien** en **milia**. Dit zijn allemaal dingen die je kunt zien bij een pasgeborene en die je meeweegt in je beoordeling.`} />
      <PBody text={`Een bijzonder huidkenmerk is de **Mongolenvlek**: een blauw-grijze pigmentvlek, meestal laag op de rug en soms op de onderste extremiteiten. Deze is onschuldig van aard.`} />
    </div>
  )
}
