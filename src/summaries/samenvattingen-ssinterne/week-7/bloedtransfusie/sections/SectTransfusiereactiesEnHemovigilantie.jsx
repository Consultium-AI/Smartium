import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Transfusiereacties en hemovigilantie`}</Inline></SubHeading>
      <PBody text={`Transfusies zijn niet zonder risico. Daarom bestaat **hemovigilantie**: het systematisch bewaken van de veiligheid en kwaliteit van de hele transfusieketen, van donor tot patiënt. Daarbij worden transfusiereacties en andere ongewenste effecten gevolgd.`} />
      <p className="leading-relaxed"><Inline>{`Belangrijke transfusiereacties zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`acute hemolytische transfusiereactie;`}</Inline></li>
        <li><Inline>{`febriele, niet-hemolytische transfusiereactie;`}</Inline></li>
        <li><Inline>{`uitgestelde hemolytische transfusiereactie;`}</Inline></li>
        <li><Inline>{`allergische reacties;`}</Inline></li>
        <li><Inline>{`reacties door gecontamineerde bloedproducten;`}</Inline></li>
        <li><Inline>{`TRALI;`}</Inline></li>
        <li><Inline>{`bloedoverdraagbare virale en parasitaire infecties.`}</Inline></li>
      </ul>
    </div>
  )
}
