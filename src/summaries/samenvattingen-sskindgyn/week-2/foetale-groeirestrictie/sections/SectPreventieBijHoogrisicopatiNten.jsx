import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Preventie bij hoogrisicopatiënten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Er zijn verschillende preventieve maatregelen onderzocht. Bedrust helpt niet en kan zelfs nadelige effecten hebben. Wel belangrijk zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`stoppen met roken;`}</Inline></li>
        <li><Inline>{`vermijden van toxische stoffen;`}</Inline></li>
        <li><Inline>{`stoppen met drugs en overmatig alcoholgebruik.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Kinderen van vrouwen die vroeg in de zwangerschap stoppen met roken hebben geboortegewichten die niet verschillen van kinderen van vrouwen die nooit hebben gerookt of al vóór de zwangerschap waren gestopt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij vrouwen met een hoog risico op FGR door placentaire insufficiëntie in de voorgeschiedenis kan het starten van acetylsalicylzuur rond 16 weken zwangerschap zinvol zijn.`}</Inline></p>
    </div>
  )
}
