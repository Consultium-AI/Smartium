import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling van COPD`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De behandeling is gericht op het verbeteren van prognose en het verminderen van ziektelast. Er zijn vier belangrijke doelen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`klachten en beperkingen verminderen en conditie verbeteren;`}</Inline></li>
        <li><Inline>{`exacerbaties voorkomen;`}</Inline></li>
        <li><Inline>{`over- of ondergewicht voorkomen;`}</Inline></li>
        <li><Inline>{`achteruitgang van de longfunctie stabiliseren.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Niet-medicamenteuze behandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De belangrijkste maatregel is stoppen met roken. Dat is de enige interventie die het natuurlijke beloop van COPD echt kan beïnvloeden. Het vermindert klachten en verlaagt de exacerbatiefrequentie. Goede voorlichting en rookstopbegeleiding zijn daarom essentieel.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarnaast is fysieke activiteit belangrijk, bij voorkeur dagelijks minstens een half uur matig intensief bewegen, zoals wandelen, fietsen of zwemmen. Bij meer ziektelast of angst voor dyspneu kan verwijzing naar een gespecialiseerde fysiotherapeut zinvol zijn. Behoud van conditie en spiermassa is belangrijk.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Vaccinaties zijn ook belangrijk, omdat virale luchtweginfecties een longaanval kunnen uitlokken. Voor alle patiënten met COPD worden influenza- en COVID-19-vaccinatie geadviseerd. Pneumokokkenvaccinatie wordt alleen geadviseerd vanaf 60 jaar of bij ernstig COPD.`}</Inline></p>
      <SubHeading><Inline>{`Medicamenteuze behandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Inhalatiemedicatie is vooral symptoomgericht. Het heeft geen effect op de geleidelijke achteruitgang van de FEV1, maar vermindert klachten, beperkingen en longaanvallen. De keuze voor medicatie hangt af van symptomen en exacerbatiefrequentie, niet van de ernst van de obstructie alleen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De hoeksteen bestaat uit luchtwegverwijders:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**B2-agonisten**: stimuleren B2-receptoren, ontspannen gladde spiercellen en geven bronchodilatatie.`}</Inline></li>
        <li><Inline>{`**Muscarine-antagonisten**: blokkeren muscarinereceptoren, ontspannen gladde spiercellen, geven bronchodilatatie en verminderen slijmproductie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Er zijn kortwerkende en langwerkende vormen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`SABA en LABA;`}</Inline></li>
        <li><Inline>{`SAMA en LAMA.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Voorbeelden zijn salbutamol, tiotropium en ipratropium.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij milde klachten en weinig exacerbaties wordt meestal gestart met een LAMA. Als dat onvoldoende is, wordt een LABA toegevoegd, vaak als combinatie LAMA+LABA. Kortwerkende luchtwegverwijders kunnen daarnaast zo nodig worden voorgeschreven, bijvoorbeeld bij acute benauwdheid of voor inspanning.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 7. Globale medicamenteuze aanpak`}</Inline></SubHeading>
      <DataTable rows={[["Situatie", "Behandeling"], ["Weinig klachten, weinig exacerbaties", "LAMA of andere bronchodilatator"], ["Meer klachten", "LABA + LAMA"], ["Frequente exacerbaties of ziekenhuisopname", "Overweeg toevoeging ICS"], ["Zo nodig", "SABA en/of SAMA"]]} />
      <p className="leading-relaxed"><Inline>{`Inhalatiecorticosteroïden worden toegevoegd bij ernstige exacerbatie met ziekenhuisopname of bij ≥2 exacerbaties per jaar, en bij eosinofielen ≥0,3 x 10^9/L. Let op: ICS verhogen het risico op pneumonie. Ook bij concomitante astma of eerdere ziekenhuisopnames voor exacerbaties is er een sterke reden om ICS te gebruiken.`}</Inline></p>
      <SubHeading><Inline>{`Inhalatiedevices`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Er zijn verschillende toedieningsvormen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`dosisaerosol: klein en snel, maar techniekgevoelig en vaak alleen met voorzetkamer goed te gebruiken;`}</Inline></li>
        <li><Inline>{`poederinhalator: geen drijfgas, maar krachtige inademing nodig;`}</Inline></li>
        <li><Inline>{`soft mist inhaler: langzame nevel, makkelijker in te ademen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De keuze hangt af van voorkeur, inhalatiekracht en coördinatie. Goede instructie is belangrijk, omdat verkeerd gebruik vaak voorkomt en het effect vermindert.`}</Inline></p>
      <SubHeading><Inline>{`Zuurstofbehandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij ernstige hypoxemie in rust kan zuurstofbehandeling de levensduur verlengen. De indicatie is:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`PaO2 ≤ 55 mmHg of SaO2 < 88%;`}</Inline></li>
        <li><Inline>{`of PaO2 tussen 55 en 60 mmHg bij rechtszijdig hartfalen of erythrocytose.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Zuurstof wordt getitreerd tot een SaO2 van ten minste 90%. Belangrijk is dat zuurstof niet de oorzaak van dyspneu bij COPD wegneemt; die dyspneu komt vaak vooral door air trapping en hyperinflatie.`}</Inline></p>
    </div>
  )
}
