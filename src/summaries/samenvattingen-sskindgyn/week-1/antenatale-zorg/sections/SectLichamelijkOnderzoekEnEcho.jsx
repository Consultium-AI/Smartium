import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Lichamelijk onderzoek en echo`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij de eerste controle kijk je naar de algemene indruk, meet je lengte, gewicht en bloeddruk, en verricht je lichamelijk onderzoek van hart en longen en zo nodig andere orgaansystemen. De fundushoogte kan vanaf 12 weken uitwendig worden bepaald.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Echoscopie hoort ook bij de eerste controle. Daarmee kun je hartactie zien vanaf ongeveer 6 weken en de CRL meten. De termijnecho tussen 10 en 13 weken is tegenwoordig bepalend voor de uitgerekende datum.`}</Inline></p>
    </div>
  )
}
