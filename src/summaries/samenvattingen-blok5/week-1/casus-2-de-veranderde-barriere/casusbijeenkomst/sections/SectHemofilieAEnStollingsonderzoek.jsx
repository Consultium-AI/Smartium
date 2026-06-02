import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Hemofilie A en stollingsonderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In de tweede casus is er een jongen met een verkleuring en zwelling van het onderbeen. De huidafwijking blijkt een **hematoom** te zijn, niet een vasculitis. Omdat er aan een stollingsprobleem wordt gedacht, volgt hematologisch onderzoek.`}</Inline></p>
    </div>
  )
}
