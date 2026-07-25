import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Peritoneale dialyse`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij peritoneale dialyse fungeert het peritoneum als filter tussen het bloed en het dialysaat in de buikholte. In de buik wordt spoelvloeistof ingebracht met een hoge osmolariteit, bepaald door glucose of een polymeer.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Water en grotere afvalstoffen worden door osmose naar het dialysaat getrokken. Kleine afvalstoffen bewegen door diffusie vanuit het bloed naar het dialysaat. Na enkele uren wordt de vloeistof uit de buik gelaten en vervangen door nieuwe spoelvloeistof.`}</Inline></p>
      <SubHeading><Inline>{`Meer vocht onttrekken`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als iemand minder of geen restdiurese meer heeft en je wilt meer vocht per dag onttrekken, gebruik je spoelvloeistof met een hogere glucoseconcentratie. Daardoor wordt de osmotische gradiënt groter en wordt meer water naar de buikholte getrokken. Osmose verloopt wel vrij traag, dus te snelle wisselingen zijn minder effectief.`}</Inline></p>
      <SubHeading><Inline>{`Vormen van peritoneale dialyse`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een actieve patiënt die overdag werkt, is continue cyclische peritoneale dialyse (CCPD), ook wel automatische peritoneale dialyse (APD), geschikt. De wisselingen gebeuren dan met een machine, meestal ’s nachts gedurende 8–10 uur. Overdag kan vloeistof in de buik blijven, maar hoeft de patiënt niet handmatig te wisselen.`}</Inline></p>
      <SubHeading><Inline>{`Complicaties van peritoneale dialyse`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Buikpijn en braken bij een patiënt met peritoneale dialyse kunnen passen bij verschillende aandoeningen, waaronder bacteriële peritonitis, scleroserende peritonitis en obstipatie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bacteriële peritonitis herken je aan koorts en troebele spoelvloeistof. Dan wordt spoelvloeistof onderzocht met een leukocytentelling; je verwacht veel granulocyten. Ook wordt de vloeistof gekweekt en start je met intraperitoneale antibiotica.`}</Inline></p>
      <SubHeading><Inline>{`Scleroserende peritonitis`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een gevreesde complicatie van langdurige peritoneale dialyse is scleroserende peritonitis, ook wel encapsulating peritoneal sclerosis (EPS). Daarbij wordt het peritoneum verdikt en omsluit het de dunne darm, waardoor obstructie ontstaat. Operatief vrijmaken van de darmen is moeilijk door het risico op perforaties. In ernstige gevallen kunnen patiënten niet meer eten en wordt de aandoening levensbedreigend.`}</Inline></p>
    </div>
  )
}
