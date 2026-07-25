import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diagnostiek en behandeling van inhalatieallergie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij inhalatieallergie kun je gebruikmaken van:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`specifiek IgE in serum;`}</Inline></li>
        <li><Inline>{`priktesten;`}</Inline></li>
        <li><Inline>{`neusprovocatie;`}</Inline></li>
        <li><Inline>{`soms intracutane testen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Totaal IgE is hiervoor niet zinvol.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In de eerste lijn heb je vooral serologisch onderzoek beschikbaar. Priktesten en neusprovocaties gebeuren in de tweede lijn.`}</Inline></p>
      <SubHeading><Inline>{`Behandeling van de allergische patiënt`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De behandeling rust op drie pijlers:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**allergeenvermijding**`}</Inline></li>
        <li><Inline>{`**immunotherapie**`}</Inline></li>
        <li><Inline>{`**farmacotherapie**`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Farmacotherapie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij allergische rhinitis en conjunctivitis kunnen verschillende middelen worden gebruikt.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Orale antihistaminica** helpen tegen jeuk en niezen, maar niet goed tegen neusverstopping.`}</Inline></li>
        <li><Inline>{`**Nasale antihistaminica** werken ook niet goed bij neusverstopping.`}</Inline></li>
        <li><Inline>{`**Antihistaminica oogdruppels** zijn nuttig bij allergische conjunctivitis.`}</Inline></li>
        <li><Inline>{`**Nasale steroïden** zijn het meest effectief, vooral bij neusverstopping.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Niet geschikt voor langdurige behandeling:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**xylometazoline**: alleen kortdurend gebruiken, anders kans op rhinitis medicamentosa;`}</Inline></li>
        <li><Inline>{`**steroïdinjecties** zoals Kenacort: worden afgeraden;`}</Inline></li>
        <li><Inline>{`**steroïdhoudende oogdruppels**: alleen op indicatie van de oogarts.`}</Inline></li>
      </ul>
    </div>
  )
}
