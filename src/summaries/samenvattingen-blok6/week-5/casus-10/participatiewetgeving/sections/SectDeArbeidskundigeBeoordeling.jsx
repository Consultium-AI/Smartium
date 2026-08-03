import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De arbeidskundige beoordeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De arbeidsdeskundige kijkt vervolgens naar de bekwaamheden van de cliënt: opleiding, werkervaring, hobby’s en andere activiteiten. Ook informatie van de werkgever kan hierbij helpen.`}</Inline></p>
      <PBody text={`Daarna worden passende functies gezocht met behulp van het **CBBS**: een databank met ongeveer 7000 functies uit het Nederlandse bedrijfsleven. Van elke functie zijn inhoud, belasting, opleidingseisen en werktijden beschreven. De arbeidsdeskundige selecteert functies die mogelijk passen bij de FML.`} />
      <p className="leading-relaxed"><Inline>{`Als een functie op onderdelen iets zwaarder lijkt dan de FML toestaat, beoordelen arbeidsdeskundige en verzekeringsarts samen of dat acceptabel is. Gaat het om een incidentele piekbelasting of een kleine overschrijding, dan kan de functie soms toch passend zijn. Is de totale belasting te groot, dan valt de functie af.`}</Inline></p>
      <PBody text={`Het loon dat iemand met geschikte functies kan verdienen, heet de **resterende verdiencapaciteit**. Dat wordt vergeleken met het vroegere loon, het **maatmanloon**. Het verschil bepaalt het arbeidsongeschiktheidspercentage.`} />
      <SubHeading><Inline>{`Tabel 5. Rekenschema arbeidsongeschiktheid`}</Inline></SubHeading>
      <DataTable rows={[["Begrip", "Betekenis"], ["Maatmanloon", "loon vóór ziekte"], ["Restverdiencapaciteit", "loon dat nog verdiend kan worden"], ["Arbeidsongeschiktheidspercentage", "verschil tussen beide, uitgedrukt in percentage"]]} />
      <p className="leading-relaxed"><Inline>{`Een voorbeeld laat zien dat iemand bij 63% van het oude loon 37% arbeidsongeschikt is. Dat zegt niets over hoe ernstig de ziekte zelf is, maar alleen over het verlies aan verdienvermogen. Bij meer dan 65% verdienvermogen is er geen recht op een WIA-uitkering.`}</Inline></p>
    </div>
  )
}
