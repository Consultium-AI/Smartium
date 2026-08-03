import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De behandeling hangt af van het type ILD en van de mate waarin ontsteking of fibrose op de voorgrond staat.`}</Inline></p>
      <SubHeading><Inline>{`Ontstekingsremmende behandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij ILD’s met ontsteking kunnen corticosteroïden en andere immunosuppressiva worden gebruikt. Dit geldt bijvoorbeeld bij hypersensitivity pneumonitis, CTD-ILD, medicamenteuze ILD en sarcoïdose.`}</Inline></p>
      <SubHeading><Inline>{`Antifibrotische behandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij IPF en andere ILD’s met progressieve fibrose zijn antifibrotische middelen zoals pirfenidon en nintedanib nuttig.`}</Inline></p>
      <SubHeading><Inline>{`Ondersteunende behandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Ondersteunende zorg is ook belangrijk:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`stoppen met roken`}</Inline></li>
        <li><Inline>{`vermijden van bekende triggers`}</Inline></li>
        <li><Inline>{`zuurstoftherapie`}</Inline></li>
        <li><Inline>{`longrevalidatie`}</Inline></li>
        <li><Inline>{`symptoombestrijding`}</Inline></li>
        <li><Inline>{`fysiotherapie`}</Inline></li>
        <li><Inline>{`dieetadvies`}</Inline></li>
        <li><Inline>{`psychologische ondersteuning`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij gevorderde ziekte kan longtransplantatie worden overwogen.`}</Inline></p>
    </div>
  )
}
