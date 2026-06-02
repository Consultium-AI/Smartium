import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed"><Inline>{`De casusbijeenkomst draait om de huid als veranderde barrière. De huid kan op verschillende manieren “lek” of beschadigd raken: bij psoriasis door ontsteking en schilfering, bij eczeem door een verstoorde huidbarrière, en bij vasculitis door ontsteking van kleine bloedvaten. Ook stollingsproblemen kunnen zich op de huid laten zien, bijvoorbeeld als purpura of een hematoom.`}</Inline></p>
    </div>
  )
}
