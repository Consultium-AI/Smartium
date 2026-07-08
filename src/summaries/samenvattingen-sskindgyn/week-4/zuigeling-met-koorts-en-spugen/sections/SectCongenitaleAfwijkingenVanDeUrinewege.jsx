import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Congenitale afwijkingen van de urinewegen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een echo kunnen afwijkingen zichtbaar zijn zoals hydronefrose, verwijding van de ureter en een verdikte blaaswand. Ook troebele blaasinhoud kan worden gezien. Dit kan passen bij een obstructie, bijvoorbeeld urethrakleppen, met secundaire vesico-ureterale reflux.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarna kan een mictiecysto-ureterogram worden verricht. Daarmee kun je reflux en anatomische afwijkingen van de urethra beoordelen.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 7. Internationale gradering van vesico-ureterale reflux`}</Inline></SubHeading>
      <DataTable rows={[["Graad", "Omschrijving"], ["Graad I", "Reflux in een niet-verwijd ureter"], ["Graad II", "Reflux tot in nierbekken en kelken zonder verwijding"], ["Graad III", "Reflux met milde tot matige verwijding en minimale afvlakking van de fornices"], ["Graad IV", "Reflux met matige kronkeling van de ureter en verwijding van nierbekken en kelken"], ["Graad V", "Ernstige verwijding van ureter, nierbekken en kelken, verlies van papillaire indrukken en kronkeling van de ureter"]]} />
    </div>
  )
}
