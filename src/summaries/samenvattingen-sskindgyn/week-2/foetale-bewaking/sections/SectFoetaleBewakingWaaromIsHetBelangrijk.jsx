import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Foetale bewaking: waarom is het belangrijk?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Foetale bewaking is een manier om een indruk te krijgen van de conditie van de foetus op dat moment. In de verloskunde is het CTG daarbij een belangrijke, niet-invasieve en weinig belastende methode voor moeder en kind. Het CTG wordt vooral gebruikt in situaties waarin er risico is op foetale nood, zowel vóór de baring als tijdens de baring.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Denk bijvoorbeeld aan:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`foetale groeivertraging;`}</Inline></li>
        <li><Inline>{`diabetes mellitus;`}</Inline></li>
        <li><Inline>{`koorts;`}</Inline></li>
        <li><Inline>{`vroeggeboorte;`}</Inline></li>
        <li><Inline>{`postterme zwangerschap;`}</Inline></li>
        <li><Inline>{`meconiumhoudend vruchtwater.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Het CTG helpt dus om te beoordelen of de foetus het goed doet en of er aanleiding is om het beleid aan te passen, bijvoorbeeld door af te wachten, extra diagnostiek te doen of de baring te beëindigen.`}</Inline></p>
    </div>
  )
}
