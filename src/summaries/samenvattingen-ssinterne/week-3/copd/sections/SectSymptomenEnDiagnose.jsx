import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Symptomen en diagnose`}</Inline></SubHeading>
      <PBody text={`COPD moet je vooral overwegen bij iemand met **progressieve kortademigheid** en een **chronische hoest**, al dan niet met sputum. Vaak zijn er ook risicofactoren, zoals roken of blootstelling aan schadelijke stoffen, en soms herhaalde luchtweginfecties.`} />
      <PBody text={`**Aandachtsvraag:** Welke klachten passen het meest bij COPD?
**Mini-antwoord:** Kortademigheid, chronische hoest en soms sputumproductie.`} />
      <SubHeading><Inline>{`Lichamelijk onderzoek`}</Inline></SubHeading>
      <PBody text={`Bij mild COPD kan het lichamelijk onderzoek nog normaal zijn. Bij ernstiger COPD zie je soms een **tonthorax**: een meer bolvormige borstkas door hyperinflatie. Het ademgeruis kan normaal tot zacht zijn en het expirium kan verlengd zijn door de verhoogde luchtwegweerstand.`} />
      <SubHeading><Inline>{`Differentiaaldiagnose`}</Inline></SubHeading>
      <PBody text={`De belangrijkste differentiaaldiagnose is **astma**. Dat onderscheid kan lastig zijn. Ook andere aandoeningen kunnen op COPD lijken.`} />
      <PBody text={`**Tabel 3. Belangrijke differentiaaldiagnosen bij COPD**`} />
      <DataTable rows={[["Aandoening", "Kenmerken"], ["Astma", "Begin op jonge leeftijd, variatie in klachten, allergie, familieanamnese"], ["Hartfalen", "Vergroot hart op X-thorax, oedeem, geen luchtwegobstructie"], ["Bronchiëctasieën", "Veel sputum, recidiverende infecties, zichtbaar op foto of CT"], ["Tuberculose", "Alle leeftijden, zichtbaar op longfoto, kweek bevestigt diagnose"], ["Obliteratieve bronchiolitis", "Vaak jonger, niet-roker, soms bij reumatische ziekte of na transplantatie, airtrapping op CT"]]} />
      <SubHeading><Inline>{`Classificatie van COPD`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het stellen van de diagnose bepaal je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de ernst van de luchtwegobstructie;`}</Inline></li>
        <li><Inline>{`de ernst van de klachten;`}</Inline></li>
        <li><Inline>{`het risico op exacerbaties en ziekenhuisopnames.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Die indeling is belangrijk, omdat de behandeling daarop wordt afgestemd.`}</Inline></p>
      <SubHeading><Inline>{`Ernst van de luchtwegobstructie`}</Inline></SubHeading>
      <PBody text={`De ernst wordt bepaald met de **FEV1** na luchtwegverwijding.`} />
      <PBody text={`**Tabel 4. GOLD-classificatie op basis van FEV1**`} />
      <DataTable rows={[["GOLD-stadium", "Ernst", "FEV1 (% van voorspeld)"], ["GOLD 1", "Mild", "> 80%"], ["GOLD 2", "Matig", "50–80%"], ["GOLD 3", "Matig-ernstig", "30–50%"], ["GOLD 4", "Ernstig", "< 30%"]]} />
      <p className="leading-relaxed"><Inline>{`Belangrijk is dat de hoogte van de FEV1 niet altijd goed samenhangt met hoe benauwd iemand zich voelt. Daarom moet je ook naar klachten en exacerbaties kijken.`}</Inline></p>
      <SubHeading><Inline>{`Symptoomscore: mMRC en CAT`}</Inline></SubHeading>
      <PBody text={`De **mMRC-score** meet hoe benauwd iemand is bij inspanning. Hoe hoger de score, hoe meer beperkingen.`} />
      <PBody text={`De **CAT** en de **CCQ** geven een breder beeld van de ziektelast. De CAT kijkt niet alleen naar benauwdheid, maar ook naar hoest, slijm, druk op de borst, beperkingen in het dagelijks leven, slaap en energie.`} />
      <PBody text={`**Tabel 5. Indeling van klachten met mMRC**`} />
      <DataTable rows={[["mMRC", "Betekenis"], ["0", "Alleen benauwd bij zware inspanning"], ["1", "Benauwd bij snel lopen of een lichte helling"], ["2", "Langzamer lopen dan leeftijdsgenoten of moeten stoppen bij eigen tempo"], ["3", "Na ongeveer 100 meter of enkele minuten moeten stoppen"], ["4", "Te benauwd om het huis te verlaten of benauwd bij aankleden"]]} />
      <SubHeading><Inline>{`Risico op exacerbaties`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Ook het aantal exacerbaties in het afgelopen jaar telt mee:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**0 of 1 exacerbatie** zonder opname;`}</Inline></li>
        <li><Inline>{`**2 of meer exacerbaties**, of **1 exacerbatie met ziekenhuisopname**.`}</Inline></li>
      </ul>
      <PBody text={`Op basis van klachten en exacerbatierisico wordt de patiënt ingedeeld in groep **A, B, C of D**. De hoogste score is leidend.`} />
      <PBody text={`**Tabel 6. Globale classificatie van COPD**`} />
      <DataTable rows={[["Groep", "Klachten", "Exacerbatierisico"], ["A", "Weinig klachten", "Laag"], ["B", "Veel klachten", "Laag"], ["C", "Weinig klachten", "Hoog"], ["D", "Veel klachten", "Hoog"]]} />
    </div>
  )
}
