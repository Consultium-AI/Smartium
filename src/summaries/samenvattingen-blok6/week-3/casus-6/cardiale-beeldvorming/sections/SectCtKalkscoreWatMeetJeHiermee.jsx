import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`CT-kalkscore: wat meet je hiermee?`}</Inline></SubHeading>
      <PBody text={`Coronairverkalkingen zijn een belangrijk teken van atherosclerose. Die kun je zichtbaar maken met een CT van het hart **zonder contrast**. De hoeveelheid kalk wordt berekend met de **Agatston-methode** en uitgedrukt in een kalkscore.`} />
      <p className="leading-relaxed"><Inline>{`De kalkscore is klinisch relevant omdat:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een hogere score samenhangt met meer atherosclerose en meer stenosen;`}</Inline></li>
        <li><Inline>{`de score een voorspeller is van **MACE**: major adverse cardiac events;`}</Inline></li>
        <li><Inline>{`een score van **0** significante coronairstenosen zeer onwaarschijnlijk maakt;`}</Inline></li>
        <li><Inline>{`de score helpt bij **risicostratificatie** van asymptomatische patiënten;`}</Inline></li>
        <li><Inline>{`de score kan helpen om patiënten te motiveren voor leefstijlverandering.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Een kalkscore van 0 betekent dus niet dat er absoluut nooit iets aan de hand is, maar wel dat significante coronairstenosen zeer onwaarschijnlijk zijn. De negatieve voorspellende waarde is hoog, meer dan 95%.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 4. Interpretatie van de kalkscore`}</Inline></SubHeading>
      <DataTable rows={[["Kalkscore", "Interpretatie"], ["0", "Geen detecteerbaar kalk"], ["1-10", "Minimaal kalk"], ["11-100", "Mild verhoogd"], ["101-400", "Matig verhoogd"], [">400", "Ernstig verhoogd"]]} />
      <PBody text={`Een kalkscore van bijvoorbeeld **785** valt in de categorie **ernstig verhoogd**. Dat wijst op een duidelijk verhoogd risico op hart- en vaatziekten en kan aanleiding zijn voor preventieve maatregelen en verdere cardiologische evaluatie.`} />
    </div>
  )
}
