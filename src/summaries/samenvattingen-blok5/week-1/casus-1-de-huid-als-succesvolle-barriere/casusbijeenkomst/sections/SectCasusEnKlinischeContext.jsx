import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed"><Inline>{`De casus draait om de huid als barrière. De kern is dat de huid niet alleen een passieve bedekking is, maar een actieve beschermlaag die ons beschermt tegen uitdroging, irriterende stoffen, allergenen, micro-organismen en andere schadelijke invloeden van buitenaf.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een belangrijk voorbeeld in deze casus is een schilder. Bij dit beroep is de huid vaak blootgesteld aan oplosmiddelen, verf, veel handen wassen en andere irriterende factoren. Daardoor is de kans op huidklachten groter. De casus gebruikt dit om te laten zien hoe barrièrebeschadiging kan leiden tot ontsteking en eczeem.`}</Inline></p>
    </div>
  )
}
