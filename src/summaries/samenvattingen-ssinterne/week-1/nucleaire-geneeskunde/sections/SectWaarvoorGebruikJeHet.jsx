import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waarvoor gebruik je het?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Processen met een hoog metabolisme zijn onder andere:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**tumoren**`}</Inline></li>
        <li><Inline>{`**infecties**`}</Inline></li>
        <li><Inline>{`**inflammatie**`}</Inline></li>
      </ul>
      <PBody text={`Daarom is FDG PET/CT erg gevoelig: je ziet al snel verhoogde activiteit. Tegelijk is het onderzoek **niet erg specifiek**. Je kunt dus niet altijd op basis van de opname alleen zeggen wat de oorzaak is.`} />
      <PBody text={`Dat maakt de **klinische context** heel belangrijk. Een huidafwijking met FDG-opname kan bijvoorbeeld een infectie zijn, maar ook iets anders. Je moet dus altijd de vraagstelling en de patiëntgegevens meenemen in de beoordeling.`} />
      <SubHeading><Inline>{`Belangrijke beperking`}</Inline></SubHeading>
      <PBody text={`Langzaam groeiende tumoren, zoals bijvoorbeeld **prostaatkanker**, **schildklierkanker** en **neuro-endocriene tumoren**, kunnen gemist worden.`} />
    </div>
  )
}
