import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tijdelijke risicofactoren`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voorbeelden van tijdelijke risicofactoren zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`operatie;`}</Inline></li>
        <li><Inline>{`orale anticonceptie of hormoonsubstitutie die wordt gestopt;`}</Inline></li>
        <li><Inline>{`zwangerschap of kraambed;`}</Inline></li>
        <li><Inline>{`immobiliteit met meer dan 3 dagen bedrust;`}</Inline></li>
        <li><Inline>{`morbide obesitas als die later niet meer aanwezig is;`}</Inline></li>
        <li><Inline>{`gipsimmobilisatie;`}</Inline></li>
        <li><Inline>{`tijdelijke centraal veneuze lijn.`}</Inline></li>
      </ul>
    </div>
  )
}
