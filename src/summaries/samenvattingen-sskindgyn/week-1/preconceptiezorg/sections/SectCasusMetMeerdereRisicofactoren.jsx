import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Casus met meerdere risicofactoren`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een vrouw met een aangeboren hartafwijking, diabetes mellitus, anemie, een positieve familieanamnese voor sikkelcelanemie, roken en een partner met een familielid dat vroeg is overleden, moet je breed inventariseren.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 4. Belangrijke aandachtspunten per risicofactor`}</Inline></SubHeading>
      <DataTable rows={[["Risicofactor", "Wat moet je doen?"], ["Aangeboren hartafwijking", "Gegevens van cardioloog opvragen en verwijzen naar cardioloog"], ["Diabetes mellitus", "Gegevens van internist opvragen en verwijzen naar internist"], ["Sikkelcelanemie", "Hb-typering van partner en verwijzing klinisch geneticus"], ["Partner met vroeg overleden familielid", "Aard van de afwijking uitzoeken via klinisch geneticus"], ["Medicatiegebruik", "Controleren of medicatie veilig is in zwangerschap"]]} />
      <SubHeading><Inline>{`Aangeboren hartafwijking`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Je wilt weten:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hoe de huidige cardiale functie is;`}</Inline></li>
        <li><Inline>{`wat de gevolgen van zwangerschap zijn voor die functie;`}</Inline></li>
        <li><Inline>{`wat de gevolgen van die functie zijn voor de zwangerschap;`}</Inline></li>
        <li><Inline>{`of medicatie moet worden omgezet, bijvoorbeeld ACE-remmers of antistolling;`}</Inline></li>
        <li><Inline>{`welk beleid nodig is voor zwangerschap en partus;`}</Inline></li>
        <li><Inline>{`wat de etiologie en erfelijkheid van de hartafwijking is, in verband met prenatale diagnostiek.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Diabetes mellitus`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij diabetes mellitus wil je de glucoseregulatie optimaliseren. Ook moet je nagaan of er sprake is van nefropathie, neuropathie of retinopathie. Oogheelkundige controle is altijd nodig. Verder bespreek je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`gevolgen van zwangerschap op diabetes;`}</Inline></li>
        <li><Inline>{`gevolgen van diabetes voor de zwangerschap;`}</Inline></li>
        <li><Inline>{`eventuele noodzaak tot medicatieomzetting;`}</Inline></li>
        <li><Inline>{`beleid rondom zwangerschap en partus.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij deze casus is de diabetes niet goed gereguleerd en is er nierschade zichtbaar. Het HbA1c is verhoogd en er is proteïnurie. Daarom is er ook aandacht voor nierfunctie, glucose, HbA1c, Hb-analyse en urine-eiwit/kreatinineratio. Bij diabetes wordt vaak ook de schildklierfunctie bepaald met TSH en vrij T4.`}</Inline></p>
      <SubHeading><Inline>{`Sikkelcelanemie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een afwijkend hemoglobine en een positieve familieanamnese voor sikkelcelanemie moet de partner worden getest met Hb-typering. Ook is verwijzing naar een klinisch geneticus nodig, zodat prenatale diagnostiek besproken kan worden.`}</Inline></p>
      <SubHeading><Inline>{`Partner met vroeg overleden familielid`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als een familielid van de partner in het eerste levensjaar is overleden, moet de oorzaak worden uitgezocht. Daarom vraag je eerdere gegevens op en verwijs je naar een klinisch geneticus om de kans op herhaling te bepalen en prenatale diagnostiek te bespreken.`}</Inline></p>
    </div>
  )
}
