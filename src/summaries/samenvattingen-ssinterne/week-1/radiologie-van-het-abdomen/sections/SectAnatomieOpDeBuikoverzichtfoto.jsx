import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Anatomie op de buikoverzichtfoto`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Op een buikoverzichtfoto kun je een aantal structuren herkennen, al is dat minder precies dan op een CT. Je ziet er vooral lucht, zachte weefsels en botstructuren op terug.`}</Inline></p>
      <SubHeading><Inline>{`Wat kun je herkennen?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Op een X-BOZ kun je onder andere de volgende structuren zien:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`pulmonale vaten`}</Inline></li>
        <li><Inline>{`lever`}</Inline></li>
        <li><Inline>{`nieren`}</Inline></li>
        <li><Inline>{`milt`}</Inline></li>
        <li><Inline>{`psoas-spieren`}</Inline></li>
        <li><Inline>{`lucht in de maag`}</Inline></li>
        <li><Inline>{`delen van maag en colon`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Systematiek bij beoordeling van een X-BOZ`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij het bekijken van een buikoverzichtfoto is een vaste systematiek handig. Je kijkt steeds bewust naar een aantal punten.`}</Inline></p>
      <PBody text={`**Tabel 1. Systematiek bij een X-BOZ**`} />
      <DataTable rows={[["Stap", "Waar let je op?", "Waarom belangrijk?"], ["1", "Darmlissen", "Zijn ze niet te wijd?"], ["2", "Vrije lucht", "Kan wijzen op perforatie"], ["3", "Stenen", "Kunnen projecteren over nieren of blaas"], ["4", "Lever en milt", "Grof beoordelen op grootte"], ["5", "Skelet", "Zoek naar afwijkingen"]]} />
      <p className="leading-relaxed"><Inline>{`Bij darmlissen let je op de hoeveelheid lucht en inhoud. Lucht in de darm is zwart/grijs, voedsel in de darm is witter. Een dunne darm is te wijd bij meer dan 3 cm, een dikke darm bij meer dan 5 cm.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Vrije lucht is een belangrijk alarmsignaal. Stenen kunnen soms zichtbaar zijn als kleine witte, dense bolletjes, maar dat is niet altijd goed te zien omdat ontlasting ook wit kan lijken. Lever en milt kun je op een buikoverzichtfoto maar beperkt betrouwbaar beoordelen.`}</Inline></p>
      <PBody text={`**Aandachtvraag:** Waarom kijk je altijd eerst naar vrije lucht?
**Mini-antwoord:** Omdat vrije lucht kan passen bij een perforatie en dan is snelle herkenning belangrijk.`} />
    </div>
  )
}
