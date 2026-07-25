import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Kijken, luisteren en voelen`}</Inline></SubHeading>
      <SubHeading><Inline>{`Kijken`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Let op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`kleur: bleek of juist rood`}</Inline></li>
        <li><Inline>{`zichtbaar bloedverlies`}</Inline></li>
        <li><Inline>{`halsvenen: gestuwd of gecollabeerd`}</Inline></li>
        <li><Inline>{`droge slijmvliezen`}</Inline></li>
        <li><Inline>{`marmering van de huid`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Luisteren`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Ausculteer het hart en let op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`ritme`}</Inline></li>
        <li><Inline>{`luidheid van de tonen`}</Inline></li>
        <li><Inline>{`souffles`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Voelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Let op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`koude handen en voeten`}</Inline></li>
        <li><Inline>{`polsfrequentie`}</Inline></li>
        <li><Inline>{`regelmaat`}</Inline></li>
        <li><Inline>{`polsdruk`}</Inline></li>
      </ul>
    </div>
  )
}
