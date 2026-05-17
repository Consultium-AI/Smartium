import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Dumpingklachten en voedingsadvies`}</Inline></h3>
      <p><Inline>{`Dumpingklachten komen vaak voor en kunnen met dieetadviezen worden behandeld. Ze kunnen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`vroeg optreden: 10 tot 30 minuten na een maaltijd;`}</Inline></li>
        <li><Inline>{`laat optreden: 1 tot 3 uur na een maaltijd.`}</Inline></li>
      </ul>
      <p><Inline>{`Bij vroege of late dumping horen adviezen zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`frequente kleine maaltijden;`}</Inline></li>
        <li><Inline>{`niet drinken 30 minuten vóór of na de maaltijd;`}</Inline></li>
        <li><Inline>{`vaste voeding gebruiken, zo nodig met een verdikkingsmiddel;`}</Inline></li>
        <li><Inline>{`complexe koolhydraten gebruiken, zoals volkoren graanproducten, pasta, aardappelen, vers fruit en groenten;`}</Inline></li>
        <li><Inline>{`snel opneembare koolhydraten vermijden;`}</Inline></li>
        <li><Inline>{`voldoende vezels en eiwit nemen;`}</Inline></li>
        <li><Inline>{`melk en melkproducten vermijden bij klachten;`}</Inline></li>
        <li><Inline>{`bij ernstige klachten 30 minuten na de maaltijd gaan liggen;`}</Inline></li>
        <li><Inline>{`in ernstige gevallen kan continue sondevoeding via de restmaag worden overwogen.`}</Inline></li>
      </ul>
      <p><Inline>{`Bij colonklachten speelt vaak mee dat de opname van vetten en koolhydraten gestoord is en dat er bacteriële overgroei kan bestaan. Ook wordt gevraagd naar het gebruik van zoetstoffen en antibiotica. Het dieet moet dan worden beperkt in vetten en polysachariden zoals zetmeel.`}</Inline></p>
    </div>
  )
}
