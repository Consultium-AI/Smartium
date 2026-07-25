import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Pseudo-allergische reacties`}</Inline></SubHeading>
      <PBody text={`Een **pseudo-allergische reactie** lijkt op een allergische reactie, maar verloopt **niet via een klassieke immunologische allergie**. De klachten kunnen dus sterk lijken op een echte allergie, maar de onderliggende oorzaak is anders.`} />
      <PBody text={`Dit is klinisch belangrijk, omdat de patiënt en de arts de reactie vaak wel als “allergie” ervaren, terwijl het mechanisme niet hetzelfde is. Bij sommige geneesmiddelen, vooral **NSAID’s**, komen dit soort reacties relatief vaak voor.`} />
      <SubHeading><Inline>{`Aandachtsvraag`}</Inline></SubHeading>
      <PBody text={`**Waarom is het verschil tussen allergisch en pseudo-allergisch belangrijk?**
Omdat het iets zegt over het mechanisme, de kans op herhaling en de manier waarop je het geneesmiddel in de toekomst moet vermijden of beoordelen.`} />
    </div>
  )
}
