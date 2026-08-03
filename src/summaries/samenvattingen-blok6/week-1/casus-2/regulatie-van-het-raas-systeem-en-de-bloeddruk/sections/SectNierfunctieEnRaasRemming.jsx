import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Nierfunctie en RAAS-remming`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het starten van een ACE-remmer kan de nierfunctie licht achteruitgaan. In de stof wordt dit gecontinueerd genoemd. Er wordt ook gewezen op tijdelijke glomerulaire hyperfiltratie bij RAAS-remming. Dat hoort bij het effect van deze middelen op de nierdoorbloeding en glomerulaire druk.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Als de nierfunctie echter fors achteruitgaat en de patiënt daarnaast een NSAID gebruikt, moet je denken aan het effect van NSAID’s op de nier. NSAID’s veroorzaken vasoconstrictie van het aanvoerende vat van de glomerulus. Daardoor verandert de doorbloeding van de nier en kan de nierfunctie verder verslechteren.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Welk elektrolyt moet je extra volgen bij RAAS-remming?
**Mini-antwoord:** Kalium.`} />
    </div>
  )
}
