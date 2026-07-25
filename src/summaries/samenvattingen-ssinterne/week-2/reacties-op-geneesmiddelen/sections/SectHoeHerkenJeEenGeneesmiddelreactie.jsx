import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe herken je een geneesmiddelreactie?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In de praktijk let je bij een mogelijke geneesmiddelreactie op een aantal dingen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Welke klachten zijn er?**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Denk aan huid, luchtwegen of algemene verschijnselen.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Wanneer zijn de klachten begonnen?**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Het tijdsverloop na inname van het geneesmiddel is belangrijk.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Welk middel is gebruikt?**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Vooral bekende veroorzakers zoals NSAID’s verdienen aandacht.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Is er eerder iets soortgelijks gebeurd?**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Eerdere reacties kunnen wijzen op herhaling bij opnieuw gebruik.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Past het bij een allergische of pseudo-allergische reactie?**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dat onderscheid helpt bij de verdere beoordeling.`}</Inline></p>
      <SubHeading><Inline>{`Aandachtsvraag`}</Inline></SubHeading>
      <PBody text={`**Waarom kijk je altijd naar het tijdsverloop?**
Omdat het helpt om te beoordelen of de reactie waarschijnlijk samenhangt met het geneesmiddel.`} />
    </div>
  )
}
