import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waarom de zuur-base balans zo belangrijk is`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De pH in het lichaam moet binnen nauwe grenzen blijven. Dat gebeurt vooral door de pH van het arteriële bloed strikt te regelen. Daarmee wordt niet alleen de extracellulaire vloeistof beïnvloed, maar uiteindelijk ook de intracellulaire pH.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een te grote afwijking van de pH is schadelijk. Bij een pH boven 7,8 of onder 6,8 raken meerdere lichaamsprocessen verstoord. Dat komt doordat:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de binding van hemoglobine aan zuurstof verandert, waardoor de zuurstofvoorziening van weefsels ontregeld raakt;`}</Inline></li>
        <li><Inline>{`de ionisatie van tussenproducten in de stofwisseling verandert, waardoor de energievoorziening van weefsels verstoord raakt;`}</Inline></li>
        <li><Inline>{`de driedimensionale structuur van eiwitten en enzymen verandert, waardoor hun functie achteruitgaat.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Je kunt het dus zo zien: een kleine pH-verandering heeft al snel grote gevolgen voor het hele lichaam.`}</Inline></p>
    </div>
  )
}
