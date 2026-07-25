import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De belangrijkste ritmestoornissen`}</Inline></SubHeading>
      <SubHeading><Inline>{`Ventriculaire tachycardie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een ventriculaire tachycardie ontstaat in de ventrikels. Dit is vaak een instabiele situatie en verdient snelle aandacht. Een VT is bijna altijd een breedcomplextachycardie, omdat de activatie van de ventrikels niet meer via het normale geleidingssysteem loopt, maar via het myocard zelf. Daardoor duurt de ventriculaire activatie langer.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Er wordt onderscheid gemaakt tussen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**focale VT**, op basis van automaticiteit;`}</Inline></li>
        <li><Inline>{`**re-entry VT**, op basis van re-entry.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Re-entry VT zie je typisch na een doorgemaakt myocardinfarct, maar ook bij andere aandoeningen met fibrotische afwijkingen in de ventrikels.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** waarom is een VT gevaarlijk?
**Mini-antwoord:** omdat deze snel kan overgaan in ventrikelfibrilleren.`} />
      <SubHeading><Inline>{`Torsade des Pointes`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Torsade des Pointes is een bijzondere vorm van polymorfe VT. Deze wordt vrijwel altijd uitgelokt door een prikkel in een verlengde repolarisatie, bijvoorbeeld bij een lang-QT-syndroom. Daarom is QT-verlengende medicatie gevaarlijk.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een polymorfe VT kan gepaard gaan met bloeddrukverlies en bewustzijnsverlies.`}</Inline></p>
      <SubHeading><Inline>{`Ventrikelfibrilleren`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij ventrikelfibrilleren is het ventriculaire ritme volledig chaotisch. Er is geen effectieve pompfunctie meer. Dit is niet met het leven verenigbaar en moet zo snel mogelijk worden behandeld met een elektrische schok: defibrillatie.`}</Inline></p>
      <SubHeading><Inline>{`Pulseless Electrical Activity en asystolie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`PEA en asystolie zijn reanimatietoestanden. Het hart heeft dan geen effectieve output meer.`}</Inline></p>
    </div>
  )
}
