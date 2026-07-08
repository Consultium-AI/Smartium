import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Aanvullend onderzoek bij de man`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het belangrijkste onderzoek bij de man is de semenanalyse. De man levert hiervoor een spermamonster in. Daarin worden onder andere bepaald:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het volume;`}</Inline></li>
        <li><Inline>{`het aantal zaadcellen per milliliter;`}</Inline></li>
        <li><Inline>{`de beweeglijkheid van de zaadcellen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De kwaliteit van het sperma wordt beïnvloed door meerdere factoren, zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de duur van onthouding;`}</Inline></li>
        <li><Inline>{`koorts in de afgelopen maand;`}</Inline></li>
        <li><Inline>{`de tijd tussen productie en beoordeling.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De WHO heeft referentiewaarden opgesteld. In 2010 zijn die aangepast.`}</Inline></p>
      <PBody text={`**Tabel 3. Referentiewaarden semenanalyse**`} />
      <DataTable rows={[["Parameter", "WHO 2010 ondergrens"], ["Semenvolume", "1,5 ml"], ["Spermaconcentratie", "15 miljoen/ml"], ["Progressieve motiliteit", "32%"], ["Totale motiliteit", "40%"]]} />
      <p className="leading-relaxed"><Inline>{`Op basis van de semenanalyse kun je ook de VCM berekenen: het totaal aantal bewegende zaadcellen per ejaculaat. Dat doe je door volume × concentratie × percentage goed bewegende zaadcellen te nemen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij Jaap zijn de waarden normaal:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`volume 3,2 ml;`}</Inline></li>
        <li><Inline>{`concentratie 26 miljoen/ml;`}</Inline></li>
        <li><Inline>{`motiliteit a+b samen 40%.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De VCM is 33,3.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Afwijkingen in de semenanalyse worden ingedeeld in:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`azoöspermie: geen zaadcellen in het ejaculaat;`}</Inline></li>
        <li><Inline>{`extreme OAT;`}</Inline></li>
        <li><Inline>{`matige OAT;`}</Inline></li>
        <li><Inline>{`milde OAT.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`OAT staat voor oligoasthenoteratozoöspermie: te weinig zaadcellen, te weinig beweeglijke zaadcellen en afwijkende vorm.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een afwijkende semenanalyse vraag je altijd extra naar leefstijl- en omgevingsfactoren die mogelijk verbeterd kunnen worden. Ook vraag je bijvoorbeeld naar koorts in de afgelopen 3 maanden. Afhankelijk van de uitslag wordt de analyse herhaald of wordt de man verwezen naar de androloog.`}</Inline></p>
    </div>
  )
}
