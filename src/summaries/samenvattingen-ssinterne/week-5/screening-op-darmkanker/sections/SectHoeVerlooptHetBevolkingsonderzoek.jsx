import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe verloopt het bevolkingsonderzoek?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het proces verloopt in grote lijnen zo:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`iemand krijgt een uitnodiging;`}</Inline></li>
        <li><Inline>{`er wordt een **FIT** opgestuurd;`}</Inline></li>
        <li><Inline>{`de deelnemer stuurt de test terug;`}</Inline></li>
        <li><Inline>{`bij **bloed in de ontlasting** volgt een uitnodiging voor een coloscopie;`}</Inline></li>
        <li><Inline>{`bij een **negatieve test** volgt na **2 jaar** opnieuw een FIT.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 6. Verloop van het bevolkingsonderzoek`}</Inline></SubHeading>
      <DataTable rows={[["Uitslag FIT", "Vervolg"], ["Negatief", "Na 2 jaar opnieuw FIT"], ["Positief", "Coloscopie"]]} />
    </div>
  )
}
