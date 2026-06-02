import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li>
          <Inline>{`Herkennen welke klachten binnenshuis kunnen passen bij een milieugerelateerde oorzaak, zoals koolmonoxide of schimmel/vocht.`}</Inline>
        </li>
        <li>
          <Inline>{`Analyseren welke informatie je als GGD-medewerker of zorgverlener eerst wilt verzamelen en hoe je dat doet.`}</Inline>
        </li>
        <li>
          <Inline>{`Uitleggen hoe je bij een patiënt met benauwdheid of mogelijke inhalatieschade de eerste beoordeling van de ademhaling uitvoert.`}</Inline>
        </li>
        <li>
          <Inline>{`Begrijpen welke klachten passen bij acute en chronische koolmonoxideblootstelling.`}</Inline>
        </li>
        <li>
          <Inline>{`Weten welke bevindingen en onderzoeken belangrijk zijn bij verdenking op koolmonoxidevergiftiging.`}</Inline>
        </li>
        <li>
          <Inline>{`Inzien dat vocht en schimmel in een woning luchtwegklachten kunnen verergeren, vooral bij mensen met astma of andere luchtwegproblemen.`}</Inline>
        </li>
      </ul>
    </div>
  )
}
