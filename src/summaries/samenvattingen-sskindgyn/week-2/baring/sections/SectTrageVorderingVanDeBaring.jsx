import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Trage vordering van de baring`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Soms vordert de baring te langzaam. Dan kijk je eerst naar de voortgang van de ontsluiting en de indaling. Dit kun je volgen met een partogram. Dat is een grafische weergave van de baring waarmee je overzicht krijgt over de progressie van de partus en kunt zien of de ontsluiting onvoldoende vordert.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De oorzaken van een trage vordering kunnen liggen bij:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`onvoldoende krachtige weeën`}</Inline></li>
        <li><Inline>{`een afwijkende stand van het presenterende foetale deel`}</Inline></li>
        <li><Inline>{`afwijkingen in het maternale bekken`}</Inline></li>
        <li><Inline>{`afwijkingen in de uterus, bijvoorbeeld een myoom dat de uitgang belemmert`}</Inline></li>
      </ul>
      <PBody text={`**Aandachtsvraag:** Wat doe je als de weeën te zwak zijn?
**Mini-antwoord:** Dan kun je oxytocine geven om de weeënkracht te verbeteren.`} />
    </div>
  )
}
