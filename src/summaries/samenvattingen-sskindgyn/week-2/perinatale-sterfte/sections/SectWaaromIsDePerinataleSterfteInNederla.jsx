import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waarom is de perinatale sterfte in Nederland relatief hoog?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Nederland heeft, ondanks de daling, nog steeds een hogere perinatale sterfte dan veel andere Europese landen. Daarvoor worden meerdere verklaringen genoemd:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een terughoudend beleid bij de opvang van zeer vroeg geboren kinderen;`}</Inline></li>
        <li><Inline>{`het ontbreken van standaard screening op aangeboren afwijkingen vóór 2007;`}</Inline></li>
        <li><Inline>{`een relatief hoog percentage oudere moeders;`}</Inline></li>
        <li><Inline>{`een hoger percentage meerlingzwangerschappen;`}</Inline></li>
        <li><Inline>{`een hoger percentage vrouwen met een niet-westerse achtergrond;`}</Inline></li>
        <li><Inline>{`meer roken tijdens de zwangerschap.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Ook de organisatie van de zorg speelt mee. In Nederland is de prenatale zorg anders georganiseerd dan in veel andere Europese landen. Daarnaast kunnen verschillen in registratie een rol spelen: zwangerschapsafbreking vóór 24 weken wordt niet overal op dezelfde manier meegeteld.`}</Inline></p>
    </div>
  )
}
