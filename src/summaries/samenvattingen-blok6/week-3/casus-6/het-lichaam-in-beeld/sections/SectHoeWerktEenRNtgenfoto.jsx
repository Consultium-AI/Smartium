import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe werkt een röntgenfoto?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een röntgenbuis maakt röntgenstraling. Die straling gaat door het lichaam heen. Verschillende weefsels houden de straling in verschillende mate tegen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Bot** absorbeert veel straling en wordt **wit** zichtbaar.`}</Inline></li>
        <li><Inline>{`**Lucht** absorbeert weinig straling en wordt **zwart** zichtbaar.`}</Inline></li>
        <li><Inline>{`**Weke delen** zoals organen en spieren komen in **grijstinten** in beeld.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Je kijkt dus eigenlijk naar een afbeelding van de schaduw die het lichaam op de detector werpt.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Hoe weefsels eruitzien op een röntgenfoto`}</Inline></SubHeading>
      <DataTable rows={[["Structuur", "Houdt straling tegen?", "Uiterlijk op de foto"], ["Bot", "Veel", "Wit"], ["Metaal", "Heel veel", "Zeer wit"], ["Weke delen", "Matig", "Grijs"], ["Vet", "Minder dan weke delen", "Donkergrijs"], ["Lucht", "Nauwelijks", "Zwart"]]} />
      <p className="leading-relaxed"><Inline>{`Hoe dichter een structuur is, hoe witter die wordt afgebeeld. Hoe meer straling erdoorheen komt, hoe zwarter het beeld.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Waarom zie je bot zo goed op een röntgenfoto?
**Mini-antwoord:** Omdat bot veel röntgenstraling absorbeert en daardoor wit afsteekt tegen de rest.`} />
    </div>
  )
}
