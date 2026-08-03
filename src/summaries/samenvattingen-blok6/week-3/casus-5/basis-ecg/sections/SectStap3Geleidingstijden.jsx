import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Stap 3: geleidingstijden`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De drie standaardtijden die je beoordeelt zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`PQ-tijd`}</Inline></li>
        <li><Inline>{`QRS-duur`}</Inline></li>
        <li><Inline>{`QT-tijd`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`PQ-tijd`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De PQ-tijd is de tijd die de prikkel nodig heeft om de atria en het His-Purkinje-systeem te doorlopen. Je meet van het begin van de P-top tot het begin van het QRS-complex. De normale PQ-tijd ligt tussen 0,12 en 0,2 seconde.`}</Inline></p>
      <SubHeading><Inline>{`QRS-duur`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De QRS-duur geeft weer hoe lang het duurt om de ventrikels te activeren. Normaal duurt dit niet meer dan 0,1 seconde. Bij een duur van meer dan 0,12 seconde is er sprake van een geleidingsvertraging, vaak door een linker- of rechterbundeltakblok. Het einde van het QRS-complex heet het J-punt.`}</Inline></p>
      <SubHeading><Inline>{`QT-tijd`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De QT-tijd weerspiegelt de tijd die het hart nodig heeft om te repolariseren. Je meet van het begin van het QRS-complex tot het einde van de T-top. Omdat de T-top van vorm kan variëren, trek je een raaklijn langs het steilste deel van de dalende flank; waar die de basislijn kruist, ligt het einde van de T-top.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Normale QT-tijden zijn korter dan:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`450 ms bij mannen`}</Inline></li>
        <li><Inline>{`460 ms bij vrouwen`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Een U-golf telt niet mee voor de QT-tijd.`}</Inline></p>
      <SubHeading><Inline>{`QTc-tijd`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De QT-tijd hangt af van de hartfrequentie. Daarom corrigeer je die voor de frequentie met de QTc-tijd:`}</Inline></p>
      <PBody text={`**QTc = QT / √RR-interval**`} />
      <p className="leading-relaxed"><Inline>{`Een verlengde QT-tijd geeft een verhoogd risico op ventriculaire ritmestoornissen.`}</Inline></p>
    </div>
  )
}
