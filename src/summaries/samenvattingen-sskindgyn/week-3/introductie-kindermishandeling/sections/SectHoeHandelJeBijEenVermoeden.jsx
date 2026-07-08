import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe handel je bij een vermoeden?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een vermoeden van kindermishandeling werk je volgens een vaste meldcode. Dat helpt om gestructureerd en zorgvuldig te handelen.`}</Inline></p>
      <SubHeading><Inline>{`De KNMG-meldcode in 5 stappen`}</Inline></SubHeading>
      <PBody text={`**Tabel 3. Stappen van de meldcode**`} />
      <DataTable rows={[["Stap", "Inhoud"], ["1", "Signalen in kaart brengen"], ["2", "Overleggen met een collega en eventueel Veilig Thuis raadplegen"], ["3", "Gesprek met de cliënt/ouder(s)"], ["4", "Wegen van huiselijk geweld of kindermishandeling"], ["5a", "Bepalen of melden noodzakelijk is"], ["5b", "Bepalen of hulp verlenen of organiseren ook mogelijk is"]]} />
      <p className="leading-relaxed"><Inline>{`Er bestaat ook een app waarmee je deze stappen bij de hand hebt.`}</Inline></p>
    </div>
  )
}
