import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Vormen van poliepen`}</Inline></SubHeading>
      <PBody text={`Eenzelfde type poliep kan verschillende vormen hebben. Die vormen worden beschreven met de **Paris classificatie**. De meest voorkomende vormen zijn:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**vlakke poliep**: Paris 0-IIa`}</Inline></li>
        <li><Inline>{`**sessiele poliep**: Paris Is`}</Inline></li>
        <li><Inline>{`**gesteelde poliep**: Paris Ip`}</Inline></li>
      </ul>
      <PBody text={`Bij een coloscopie is het belangrijk om van elke poliep de **vorm**, het **vermoedelijke type** en de **grootte** goed te beschrijven.`} />
      <PBody text={`**Aandachtsvraag:** Waarom moet je een poliep goed beschrijven?
**Mini-antwoord:** Omdat vorm, type en grootte belangrijk zijn voor de verdere beoordeling en follow-up.`} />
    </div>
  )
}
