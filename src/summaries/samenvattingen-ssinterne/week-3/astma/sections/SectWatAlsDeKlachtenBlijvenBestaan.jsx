import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat als de klachten blijven bestaan?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als de klachten persisteren, denk je eerst aan oorzaken die de klachten in stand houden:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`therapie wordt niet goed gebruikt;`}</Inline></li>
        <li><Inline>{`inhalatietechniek is onjuist;`}</Inline></li>
        <li><Inline>{`de luchtweginfectie is nog niet over;`}</Inline></li>
        <li><Inline>{`er is een secundaire bacteriële infectie;`}</Inline></li>
        <li><Inline>{`er zijn KNO-problemen zoals sinusitis of post-nasal drip;`}</Inline></li>
        <li><Inline>{`er is blootstelling aan prikkelende stoffen;`}</Inline></li>
        <li><Inline>{`er is blootstelling aan allergenen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Als dit allemaal niet speelt en de klachten blijven bestaan, moet de behandeling worden opgeschaald. Mogelijke stappen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een kuur orale steroïden;`}</Inline></li>
        <li><Inline>{`toevoegen van een langwerkend beta-2-sympathicomimeticum;`}</Inline></li>
        <li><Inline>{`toevoegen van een leukotrieënantagonist.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Als er ondanks deze stappen geen verbetering optreedt, is verwijzing naar de longarts nodig. Dan wordt de diagnose opnieuw beoordeeld en kan verdere analyse volgen. In een later stadium kunnen ook derdelijnsbehandelingen zoals anti-IgE of anti-IL-5 worden ingezet.`}</Inline></p>
    </div>
  )
}
