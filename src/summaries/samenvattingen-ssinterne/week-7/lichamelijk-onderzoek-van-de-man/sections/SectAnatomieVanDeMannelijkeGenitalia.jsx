import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Anatomie van de mannelijke genitalia`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De mannelijke geslachtsorganen hebben een duidelijke opbouw die je goed moet kennen voordat je lichamelijk onderzoek doet. De testis maakt zaadcellen. Daarna gaan die zaadcellen naar de epididymis, waar verdere uitrijping plaatsvindt. Ze verblijven daar ongeveer 2 tot 3 weken. De epididymis heeft dus een belangrijke functie in opslag en uitrijping van zaadcellen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De penis bestaat uit drie zwellichamen: twee corpora cavernosa en één corpus spongiosum. De corpora cavernosa zorgen vooral voor de erectie. Het corpus spongiosum omgeeft de plasbuis en blijft ook bij erectie doorbloed.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De uitwendige sluitspier van de blaas ligt onder de prostaat, rondom de plasbuis. De vesicula seminalis maakt sperma-vloeistof. Ongeveer 75% van het sperma-vloeistof komt uit deze kliertjes, 15% uit de prostaat en de rest uit de zaadleiders en epididymis. In de vesicula seminalis zelf bevinden zich geen zaadcellen.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Belangrijke anatomische onderdelen en hun functie`}</Inline></SubHeading>
      <DataTable rows={[["Onderdeel", "Functie"], ["Testis", "Productie van zaadcellen"], ["Epididymis", "Opslag en uitrijping van zaadcellen"], ["Corpora cavernosa", "Zorgen voor erectie"], ["Corpus spongiosum", "Omgeeft de urethra en blijft doorbloed"], ["Vesicula seminalis", "Productie van sperma-vloeistof"], ["Uitwendige sluitspier blaas", "Sluit de blaas af rondom de urethra onder de prostaat"]]} />
      <PBody text={`**Aandachtsvraag:** Waarom is de epididymis belangrijk?
**Mini-antwoord:** Daar rijpen de zaadcellen verder uit en worden ze tijdelijk opgeslagen.`} />
    </div>
  )
}
