import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Ziekteverzuim en re-integratie`}</Inline></SubHeading>
      <PBody text={`Als iemand ziek wordt, is dat niet alleen een medisch probleem maar ook een probleem voor werk en inkomen. In de eerste **104 weken** zijn werkgever en werknemer samen verantwoordelijk voor de re-integratie. Het doel is steeds: zo snel en volledig mogelijk terugkeer naar arbeid, en langdurig verzuim of instroom in de WIA voorkomen.`} />
      <PBody text={`De aanpak richt zich niet op wat iemand niet meer kan, maar vooral op wat iemand ondanks beperkingen nog **wel** kan. Daarbij zijn er twee sporen:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**eerste spoor**: terugkeer naar het eigen werk;`}</Inline></li>
        <li><Inline>{`**tweede spoor**: als dat niet lukt, zoeken naar ander passend werk, eerst bij de eigen werkgever en anders elders.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Stappen in het ziekteverzuimtraject`}</Inline></SubHeading>
      <DataTable rows={[["Tabel 3. Globale tijdslijn bij ziekteverzuim"], ["1e arbeidsongeschiktheidsdag", "Start verzuim"], ["6 weken", "Medische probleemanalyse"], ["8 weken", "Plan van aanpak"], ["42 weken", "Aangifte langdurig verzuim"], ["52 weken", "Eerstejaars evaluatie"], ["88–91 weken", "Re-integratieverslag en aanvraag uitkering"], ["104 weken", "Poortwachtertoets / beoordeling"]]} />
      <p className="leading-relaxed"><Inline>{`Bij werknemers zonder werkgever, zoals vangnetters, voert het UWV de begeleiding en re-integratie uit. Het UWV vervult dan als het ware de rol van werkgever, en de verzekeringsarts vervangt de bedrijfsarts.`}</Inline></p>
      <SubHeading><Inline>{`Aandacht-vraag`}</Inline></SubHeading>
      <PBody text={`**Waarom ligt de nadruk op mogelijkheden in plaats van beperkingen?**
Omdat re-integratie draait om wat iemand nog kan benutten in werk.`} />
    </div>
  )
}
