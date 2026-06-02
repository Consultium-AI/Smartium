import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Tabel 2. Verschil tussen hidradenitis suppurativa en een furunkel`}</Inline></SubHeading>
      <DataTable rows={[["Kenmerk", "Hidradenitis suppurativa", "Furunkel"], ["---", "---", "---"], ["Beloop", "Chronisch, recidiverend", "Meestal eenmalig"], ["Locatie", "Typisch oksels en liezen", "Kan overal, minder typisch"], ["Huidafwijkingen", "Inflammatoire noduli, comedonen", "Pijnlijke ontstoken haarfollikel"], ["Oorzaak", "Niet primair infectieus", "Infectieus"], ["Diagnostiek", "Klinisch", "Klinisch, soms kweek"]]} />
      <p className="leading-relaxed"><Inline>{`Bij een eerste presentatie kan een wondkweek worden afgenomen om onderscheid te maken met een infectie zoals een furunkel. Bij hidradenitis suppurativa is er vaak geen bacteriële groei; in ongeveer de helft van de gevallen groeit er niets. Een biopt is niet nodig voor de diagnose of het beleid.`}</Inline></p>
    </div>
  )
}
