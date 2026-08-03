import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Duur van de uitkering en loondoorbetaling`}</Inline></SubHeading>
      <PBody text={`Aanvankelijk gaf de Ziektewet recht op ziekengeld gedurende een half jaar. In **1947** werd dit verlengd tot **één jaar**, met een uitkering van **80% van het loon**. Later stegen de ziekteverzuimcijfers sterk, wat aanleiding gaf tot maatregelen. De uitkeringshoogte werd in **1985** verlaagd naar **75%** en in **1986** naar **70%**.`} />
      <p className="leading-relaxed"><Inline>{`In de jaren negentig werd de Ziektewet steeds verder geprivatiseerd en kwam de loondoorbetalingsplicht meer bij de werkgever te liggen. Daarbij werden achtereenvolgens de volgende wetten ingevoerd:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**1994: WTZ**`}</Inline></li>
        <li><Inline>{`**1996: WULBZ**`}</Inline></li>
        <li><Inline>{`**2002: WVP**`}</Inline></li>
        <li><Inline>{`**2004: WVLZ**`}</Inline></li>
      </ul>
      <PBody text={`Tegenwoordig moet een werkgever bij ziekte van een werknemer met een vast dienstverband **104 weken** loon doorbetalen. In totaal gaat het om **170% van het loon over 2 jaar**. In de praktijk betekent dit meestal:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de eerste **52 weken**: vaak **100% loon**;`}</Inline></li>
        <li><Inline>{`de tweede **52 weken**: vaak **70% loon**.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 1. Ontwikkeling van de loondoorbetaling bij ziekte`}</Inline></SubHeading>
      <DataTable rows={[["Jaar", "Wet", "Gevolg"], ["1994", "WTZ", "6 weken loondoorbetaling"], ["1996", "WULBZ", "52 weken loondoorbetaling"], ["2004", "WVLZ", "104 weken loondoorbetaling"]]} />
    </div>
  )
}
