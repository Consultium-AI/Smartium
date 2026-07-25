import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Surveillance na meerdere poliepen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij iemand met:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**twee poliepen**,`}</Inline></li>
        <li><Inline>{`een poliep in het **proximale colon**,`}</Inline></li>
        <li><Inline>{`en een poliep van **≥ 10 mm**,`}</Inline></li>
      </ul>
      <PBody text={`komt de volgende surveillancecoloscopie na **3 jaar**. In het voorbeeld leverde dit 3 punten op, en dat betekende een interval van 3 jaar.`} />
      <SubHeading><Inline>{`Tabel 7. Voorbeeld surveillance-interval`}</Inline></SubHeading>
      <DataTable rows={[["Bevindingen", "Volgende coloscopie"], ["Twee poliepen, proximale lokalisatie, één poliep ≥ 10 mm", "3 jaar"]]} />
    </div>
  )
}
