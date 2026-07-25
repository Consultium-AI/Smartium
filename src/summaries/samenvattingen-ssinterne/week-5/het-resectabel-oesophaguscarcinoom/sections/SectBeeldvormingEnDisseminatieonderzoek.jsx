import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Beeldvorming en disseminatieonderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het stellen van de diagnose moet aanvullend disseminatieonderzoek worden verricht. Het doel daarvan is te bepalen of de patiënt echt resectabel is en welke behandeling mogelijk is. Dit onderzoek bestaat standaard uit een CT-scan van thorax en abdomen en een PET-CT-scan.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een PET-CT-scan combineert twee soorten informatie:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een statisch beeld van plaats en omvang van afwijkingen;`}</Inline></li>
        <li><Inline>{`een functioneel beeld van metabole activiteit, dus hoe actief een afwijking is.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daardoor kunnen ook metastasen worden opgespoord die op een gewone CT-scan gemist zouden worden. Dat is belangrijk, omdat een operatie alleen zinvol is als er geen metastasen op afstand zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Op geleide van klachten of verschijnselen kan aanvullend onderzoek nodig zijn, zoals een CT van de hersenen of een botscan. Dat hoort niet bij de standaarddiagnostiek, maar wordt alleen gedaan als daar een reden voor is.`}</Inline></p>
    </div>
  )
}
