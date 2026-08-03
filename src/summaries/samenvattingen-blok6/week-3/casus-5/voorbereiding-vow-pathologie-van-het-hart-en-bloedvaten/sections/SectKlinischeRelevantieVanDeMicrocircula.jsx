import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische relevantie van de microcirculatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De bloeddruk wordt in belangrijke mate bepaald door de weerstand van het perifere vaatstelsel, vooral door de arteriolen. Daarnaast speelt de microcirculatie een grote rol in de regeling van de hoeveelheid vocht in de weefsels. Er moet steeds een evenwicht zijn tussen vocht dat uit de capillairen treedt en vocht dat wordt terug opgenomen of afgevoerd via de lymfe.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarvoor is een intact endotheel nodig. Als de vaatwand verandert, bijvoorbeeld door ziekte of veroudering, kan de vaatfunctie verstoord raken. Vooral arteriolaire afwijkingen zijn belangrijk, omdat arteriolen zo’n grote rol spelen in de bloeddrukregeling.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De vaattonus van arteriolen wordt beïnvloed door:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hormonen`}</Inline></li>
        <li><Inline>{`het perifere zenuwstelsel`}</Inline></li>
        <li><Inline>{`het circulerend bloedvolume`}</Inline></li>
        <li><Inline>{`het slagvolume van het hart`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De nieren spelen hierbij een belangrijke rol, omdat zij betrokken zijn bij de regeling van het circulerend bloedvolume. Bij stoornissen in de arteriolen kan de perfusie van de nieren verminderen. Dan kunnen de nieren als compensatie hormonen gaan produceren die de bloeddruk verhogen.`}</Inline></p>
      <PBody text={`Ook **diabetes mellitus** en **veroudering** gaan vaak gepaard met duidelijke veranderingen in de vaatwand van arteriolen.`} />
    </div>
  )
}
