import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Geavanceerde therapieën`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij eindstadium hartfalen, ook wel advanced heart failure, zijn standaardbehandelingen niet meer voldoende. Patiënten hebben dan ernstige klachten ondanks maximale medicatie, vaak met frequente ziekenhuisopnames en zeer beperkte inspanningstolerantie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Dan komen geavanceerde therapieën in beeld:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`tijdelijke ondersteuning;`}</Inline></li>
        <li><Inline>{`ICD of CRT;`}</Inline></li>
        <li><Inline>{`klepinterventies;`}</Inline></li>
        <li><Inline>{`LVAD;`}</Inline></li>
        <li><Inline>{`harttransplantatie;`}</Inline></li>
        <li><Inline>{`soms palliatieve zorg.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tijdelijke ondersteuning`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij ernstige acuut hartfalen of cardiogene shock kunnen IABP, Impella en VA-ECMO worden gebruikt als tijdelijke ondersteuning.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**IABP** verlaagt afterload en verbetert coronair perfusie.`}</Inline></li>
        <li><Inline>{`**Impella** pompt bloed van de linker ventrikel naar de aorta en ontlast zo het hart.`}</Inline></li>
        <li><Inline>{`**VA-ECMO** ondersteunt zowel hart- als longfunctie, maar verhoogt de afterload.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Deze systemen hebben risico’s zoals infectie, trombose, bloeding en hemolyse.`}</Inline></p>
      <SubHeading><Inline>{`ICD en CRT`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een ICD detecteert en corrigeert levensbedreigende ritmestoornissen zoals ventrikeltachycardie en ventrikelfibrilleren. Het wordt gebruikt bij secundaire preventie en bij geselecteerde patiënten met HFrEF en een sterk verhoogd risico op plotselinge hartdood.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`CRT is bedoeld voor patiënten met HFrEF en linkerbundeltakblok. Het zorgt ervoor dat beide ventrikels weer synchroon samentrekken, waardoor de pompfunctie verbetert.`}</Inline></p>
      <SubHeading><Inline>{`Klepinterventies`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij sommige patiënten is kleplijden een belangrijke oorzaak van hartfalen. Dan kunnen minimaal invasieve ingrepen helpen.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**TAVI** is een katheterprocedure voor ernstige aortaklepstenose bij patiënten die geen openhartoperatie kunnen ondergaan.`}</Inline></li>
        <li><Inline>{`**TEER** is een minimaal invasieve reparatie van de mitralisklep, bijvoorbeeld met de MitraClip.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Primaire mitralisklepinsufficiëntie komt door een probleem van de klep zelf. Secundaire mitralisklepinsufficiëntie komt vaak voor bij HFrEF en ontstaat door verwijding van de linker ventrikel.`}</Inline></p>
      <SubHeading><Inline>{`LVAD en harttransplantatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een LVAD is een mechanische pomp die de linker ventrikel ondersteunt. Het kan dienen als brug naar transplantatie, brug naar herstel, brug naar beslissing of als definitieve therapie. Er zijn wel risico’s op infectie, trombose, bloedingen en hemolyse.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Harttransplantatie is de ultieme behandeling voor eindstadium hartfalen. Donorharten kunnen afkomstig zijn van DBD of DCD. Na transplantatie blijven er risico’s bestaan op rejectie, infectie, maligniteit, coronairlijden en nierinsufficiëntie.`}</Inline></p>
    </div>
  )
}
