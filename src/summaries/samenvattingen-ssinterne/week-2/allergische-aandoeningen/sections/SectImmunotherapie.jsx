import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Immunotherapie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Immunotherapie is alleen zinvol als er:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`klachten zijn bij blootstelling;`}</Inline></li>
        <li><Inline>{`én onvoldoende effect is van medicamenteuze behandeling;`}</Inline></li>
        <li><Inline>{`én er sprake is van relevante sensibilisatie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Indicaties zijn onder andere klachten door boompollen, graspollen, huisstofmijt of kat, of het niet kunnen verdragen van medicatie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Contra-indicaties zijn onder meer:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`slecht gecontroleerd astma of FEV1 < 70%;`}</Inline></li>
        <li><Inline>{`slechte therapietrouw;`}</Inline></li>
        <li><Inline>{`leeftijd jonger dan 5 jaar;`}</Inline></li>
        <li><Inline>{`gebruik van bètablokkers;`}</Inline></li>
        <li><Inline>{`actieve systeemziekte;`}</Inline></li>
        <li><Inline>{`niet-stabiele angina pectoris.`}</Inline></li>
      </ul>
    </div>
  )
}
