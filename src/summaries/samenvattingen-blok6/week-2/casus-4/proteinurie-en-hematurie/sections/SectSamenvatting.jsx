import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Urineonderzoek met de urinstick is een snelle screening, maar de uitslag moet altijd goed geïnterpreteerd worden. Rode urine betekent niet automatisch hematurie: kleurstoffen, voeding en medicijnen kunnen de urine ook verkleuren. De stick reageert op hemoglobine-activiteit, waardoor vrij hemoglobine en myoglobine ook een positieve uitslag kunnen geven. Bij eiwitdetectie herkent de stick vooral albumine, zodat paraproteïnen gemist kunnen worden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Proteïnurie en hematurie kunnen wijzen op glomerulaire schade. De glomerulaire filtratiebarrière houdt normaal eiwitten en bloedcellen tegen via grootte- en ladingsselectiviteit. Bij minimal change disease is vooral de ladingsselectiviteit verstoord, terwijl bij membraneuze glomerulopathie meer structurele schade bestaat. Hematurie kan ook passen bij stoornissen van collageen type IV, zoals bij Alport of dunnebasaalmembraan nefropathie, of bij glomerulonefritis, waarbij de nierfunctie snel bedreigd kan zijn.`}</Inline></p>
    </div>
  )
}
