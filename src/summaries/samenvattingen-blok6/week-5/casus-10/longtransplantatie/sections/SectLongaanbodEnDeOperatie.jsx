import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Longaanbod en de operatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als er donorlongen beschikbaar komen, wordt gekeken of de patiënt op dat moment fit genoeg is voor transplantatie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Longtransplantatie kan:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**enkelzijdig** zijn: één long`}</Inline></li>
        <li><Inline>{`**dubbelzijdig** zijn: beide longen`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De voorkeur gaat steeds vaker uit naar dubbelzijdige transplantatie. Daarmee voorkom je problemen in de achterblijvende oude long, zoals kanker, infecties of pneumothorax.`}</Inline></p>
      <PBody text={`De operatie duurt vaak 8 tot 10 uur. Vroeger werd vaak de **clamshell-techniek** gebruikt, waarbij de borstkas breed wordt geopend en het sternum wordt doorgenomen. Tegenwoordig wordt meestal een **anterolaterale thoracotomie** gebruikt. Daarbij wordt het sternum niet doorgenomen, wat minder wondproblemen en minder pijn geeft. Als de toegang toch onvoldoende blijkt, kan alsnog worden uitgebreid naar een clamshell.`} />
      <p className="leading-relaxed"><Inline>{`Na de operatie gaat de patiënt naar de intensive care voor bewaking gedurende minstens 24 tot 48 uur. Daarna begint het herstel, het opbouwen van conditie en het leren leven met de nieuwe longen.`}</Inline></p>
    </div>
  )
}
