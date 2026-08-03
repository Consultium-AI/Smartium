import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Alcoholproblematiek en interventies`}</Inline></SubHeading>
      <PBody text={`Bij alcoholproblematiek wordt gewerkt met richtlijnen en interventies. Stoornissen in het gebruik van alcohol is een overkoepelende term voor **alcoholmisbruik** en **alcoholafhankelijkheid**.`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Bij **alcoholmisbruik** is alcoholgebruik nadelig voor de gebruiker, bijvoorbeeld door ongelukken of het ontstaan van verslaving.`}</Inline></li>
        <li><Inline>{`Bij **alcoholafhankelijkheid** kan iemand niet meer functioneren zonder alcohol; er is lichamelijke en geestelijke afhankelijkheid.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Ongeveer 4% van de mensen in Nederland heeft een stoornis in het gebruik van alcohol.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De behandeling bestaat vaak uit een combinatie van maatregelen. Belangrijk zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`motiverende gespreksvoering;`}</Inline></li>
        <li><Inline>{`kortdurende interventies;`}</Inline></li>
        <li><Inline>{`cognitieve gedragstherapie;`}</Inline></li>
        <li><Inline>{`zelfhulpgroepen en de twaalfstappenbenadering;`}</Inline></li>
        <li><Inline>{`psychotherapie;`}</Inline></li>
        <li><Inline>{`medicatie;`}</Inline></li>
        <li><Inline>{`goede nazorg en terugvalpreventie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Terugvalpreventie is belangrijk, omdat verslaving wordt gezien als een ziekte van terugval. De kans op terugval blijft lang aanwezig. Daarom is begeleiding na behandeling essentieel.`}</Inline></p>
      <SubHeading><Inline>{`Aandacht-vraag`}</Inline></SubHeading>
      <PBody text={`**Waarom is nazorg zo belangrijk bij verslaving?**
Omdat terugval lang een risico blijft, ook nadat iemand is gestopt.`} />
    </div>
  )
}
