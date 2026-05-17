import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Leerdoelen`}</Inline></h3>
      <p><Inline>{`Na het doornemen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`uitleggen hoe leefstijlfactoren, zoals voeding, beweging, roken, slaap en stress, bijdragen aan het ontstaan én de preventie van diabetes type 2, inclusief de rol van overgewicht;`}</Inline></li>
        <li><Inline>{`de relatie beschrijven tussen voedingspatronen en diabetes type 2, en aangeven welke voedingsmiddelen het risico verhogen of verlagen;`}</Inline></li>
        <li><Inline>{`uitleggen hoe ultrabewerkt voedsel bijdraagt aan gewichtstoename en een hoger diabetesrisico;`}</Inline></li>
        <li><Inline>{`de kenmerken, onderbouwing en klinische effecten samenvatten van het Mediterrane dieet, het (very) low-calorie dieet en het koolhydraatbeperkte dieet;`}</Inline></li>
        <li><Inline>{`leefstijl- en voedingsadviezen integreren in de zorg voor een patiënt met type 2 diabetes, op een manier die past bij motivatie, voorkeuren en haalbaarheid.`}</Inline></li>
      </ul>
    </div>
  )
}
