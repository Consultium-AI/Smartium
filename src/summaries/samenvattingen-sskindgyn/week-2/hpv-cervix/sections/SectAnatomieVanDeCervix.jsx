import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Anatomie van de cervix`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De cervix uteri is de baarmoedermond. Deze bestaat uit twee soorten epitheel:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Endocervix**: eenlagig cilindrisch, slijmvormend epitheel.`}</Inline></li>
        <li><Inline>{`**Ectocervix** en vagina: meerlagig, niet-verhoornend plaveiselepitheel.`}</Inline></li>
      </ul>
      <PBody text={`Het overgangsgebied tussen deze twee epitheeltypen heet de **squamocolumnar junction (SCJ)**. Bij de geboorte ligt de oorspronkelijke SCJ op de plek waar het cilinderepitheel overgaat in plaveiselepitheel. Door hormonale veranderingen, onder andere in de puberteit, schuift deze overgang op richting de endocervix. Daardoor ontstaat een **nieuwe SCJ**.`} />
      <PBody text={`Het gebied tussen de oorspronkelijke en de nieuwe SCJ heet de **transformatiezone (TZ)**. Dit is een belangrijk gebied, omdat premaligne afwijkingen van de cervix hier vrijwel altijd ontstaan. Dat komt doordat hier het oorspronkelijke cilinderepitheel verandert in plaveiselepitheel; dit proces heet **metaplasie**.`} />
      <PBody text={`**Aandachtsvraag:** Waarom is de transformatiezone zo belangrijk?
**Mini-antwoord:** Omdat cervicale intra-epitheliale neoplasie, kortweg CIN, vrijwel altijd in dit gebied ontstaat.`} />
    </div>
  )
}
