import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Preload en afterload`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Preload is de vulling van het ventrikel vóór contractie. Afterload is de weerstand waartegen het ventrikel moet samentrekken. Door sympathische activatie en RAAS stijgen beide vaak. Dat helpt tijdelijk, omdat meer preload via het Frank-Starling mechanisme het slagvolume kan verhogen en meer afterload de bloeddruk kan ondersteunen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Maar op de lange termijn wordt dit schadelijk. Te veel preload geeft overvulling en hogere eind-diastolische druk, wat klachten zoals dyspneu en oedeem veroorzaakt. Te veel afterload verhoogt de wandspanning en het zuurstofverbruik, waardoor de pompfunctie verder verslechtert. Zo ontstaat een vicieuze cirkel van hartfalen.`}</Inline></p>
    </div>
  )
}
