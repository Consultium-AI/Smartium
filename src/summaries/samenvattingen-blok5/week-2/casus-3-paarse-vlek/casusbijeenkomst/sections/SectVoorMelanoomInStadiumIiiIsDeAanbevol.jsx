import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Stadium III`}</Inline></SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Voor melanoom in stadium III is de aanbevolen aanpak:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`chirurgische excisie;`}</Inline></li>
        <li>
          <Inline>{`gevolgd door of gecombineerd met adjuvante of neoadjuvante immunotherapie, afhankelijk van de situatie.`}</Inline>
        </li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij satellietlaesies wordt eerst gekeken of chirurgische resectie nog mogelijk is. Als er geen afstandsmetastasen zijn, heeft resectie de voorkeur. Daarna kan adjuvante systemische therapie volgen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Als er wel afstandsmetastasen zijn, wordt beeldvorming overwogen en moet een metastase zo mogelijk eerst met biopt bevestigd worden. Daarna volgt systemische therapie.`}</Inline></p>
    </div>
  )
}
