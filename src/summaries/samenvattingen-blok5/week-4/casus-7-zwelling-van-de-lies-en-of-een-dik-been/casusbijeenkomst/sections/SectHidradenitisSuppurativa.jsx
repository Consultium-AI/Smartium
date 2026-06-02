import { Inline, DataTable, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Hidradenitis suppurativa als typische okselaandoening`}</Inline></SubHeading>
      <p className="leading-relaxed">
        <Inline>{`Hidradenitis suppurativa is een chronische aandoening die vaak in de oksels voorkomt. Het beloop is recidiverend. Je ziet inflammatoire noduli en soms comedonen. Een roker heeft een verhoogde kans. De laesie kan pijnlijk zijn en terugkomen op dezelfde of andere plekken.`}</Inline>
      </p>
      <p className="font-semibold text-slate-900 dark:text-slate-100 m-0">
        <Inline>{`Tabel 2. Verschil tussen hidradenitis suppurativa en een furunkel`}</Inline>
      </p>
      <DataTable
        rows={[
          ['Kenmerk', 'Hidradenitis suppurativa', 'Furunkel'],
          ['---', '---', '---'],
          ['Beloop', 'Chronisch, recidiverend', 'Meestal eenmalig'],
          ['Locatie', 'Typisch oksels en liezen', 'Kan overal, minder typisch'],
          ['Huidafwijkingen', 'Inflammatoire noduli, comedonen', 'Pijnlijke ontstoken haarfollikel'],
          ['Oorzaak', 'Niet primair infectieus', 'Infectieus'],
          ['Diagnostiek', 'Klinisch', 'Klinisch, soms kweek'],
        ]}
      />
      <p className="leading-relaxed">
        <Inline>{`Bij een eerste presentatie kan een wondkweek worden afgenomen om onderscheid te maken met een infectie zoals een furunkel. Bij hidradenitis suppurativa is er vaak geen bacteriële groei; in ongeveer de helft van de gevallen groeit er niets. Een biopt is niet nodig voor de diagnose of het beleid.`}</Inline>
      </p>
      <SubHeading><Inline>{`Behandeling`}</Inline></SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`De lokale behandeling kan bestaan uit:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`resorcinolcrème;`}</Inline></li>
        <li><Inline>{`clindamycine-lotion.`}</Inline></li>
      </ul>
    </div>
  )
}
