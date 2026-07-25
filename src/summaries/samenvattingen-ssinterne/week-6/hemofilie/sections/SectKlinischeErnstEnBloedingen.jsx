import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische ernst en bloedingen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hemofilie kent verschillende ernstgraden, afhankelijk van de hoeveelheid resterende stollingsfactor.`}</Inline></p>
      <PBody text={`**Tabel 3. Ernst van hemofilie**`} />
      <DataTable rows={[["Ernst", "Stollingsfactoractiviteit", "Wanneer ontstaan bloedingen?"], ["Ernstig", "< 1%", "Spontaan"], ["Matig", "1–5%", "Spontaan of na trauma"], ["Mild", "> 5%", "Alleen na trauma"]]} />
      <p className="leading-relaxed"><Inline>{`De belangrijkste bloedingen bij hemofilie zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`gewrichtsbloedingen;`}</Inline></li>
        <li><Inline>{`spierbloedingen;`}</Inline></li>
        <li><Inline>{`hersenbloedingen;`}</Inline></li>
        <li><Inline>{`bloedingen na operaties en kiesextracties.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Gewrichtsbloedingen zijn het belangrijkst`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Gewrichtsbloedingen zijn de belangrijkste bloedingen bij hemofilie, vooral door de schade op lange termijn. Herhaalde bloedingen kunnen leiden tot ernstige arthropathie en gewrichtsdeformatie. De schade ontstaat niet alleen door het bloed zelf, maar vooral door het ijzer in het bloed, dat het gewricht beschadigt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een gewrichtsbloeding herken je aan:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`pijn;`}</Inline></li>
        <li><Inline>{`moeite met buigen of niet kunnen buigen;`}</Inline></li>
        <li><Inline>{`niet kunnen belasten door pijn;`}</Inline></li>
        <li><Inline>{`soms lichte zwelling;`}</Inline></li>
        <li><Inline>{`soms warmte of roodheid.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Het gewricht staat vaak in een licht gebogen stand.`}</Inline></p>
    </div>
  )
}
