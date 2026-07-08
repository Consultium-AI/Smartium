import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Breathing: beademen en ventileren`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als de pasgeborene na het openen van de luchtweg niet spontaan ademt, begin je met 5 inflatiebeademingen. Deze eerste inflaties duren 2 tot 3 seconden. De PEEP is 6 cm H₂O. De inspiratoire druk en zuurstofconcentratie hangen af van de zwangerschapsduur.`}</Inline></p>
      <DataTable rows={[["Tabel 2. Startinstellingen voor inflatiebeademingen"], ["≥ 32 weken", "30 cm H₂O", "21% O₂"], ["28-32 weken", "25 cm H₂O", "50% O₂"], ["< 28 weken", "25 cm H₂O", "100% O₂"]]} />
      <p className="leading-relaxed"><Inline>{`Bij een à terme pasgeborene start je dus met kamerlucht.`}</Inline></p>
      <SubHeading><Inline>{`Het masker en de CE-greep`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een goed passend masker is belangrijk. Het moet over neus en mond vallen, maar niet op de ogen drukken. Een verkeerd masker kan luchtlekkage geven of druk op de oogbollen veroorzaken. Je plaatst het masker op de kin onder de onderlip en rolt het naar boven af zodat het goed afsluit.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De handgreep waarmee je het masker vasthoudt heet de CE-greep. Duim en wijsvinger vormen de C bij de aansluiting van het masker. De overige vingers vormen de E op de onderkaak.`}</Inline></p>
      <SubHeading><Inline>{`Hoe weet je of de beademing goed is?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij elke beademing kijk je of de borstkas omhoogkomt. Thoraxexcursies wijzen op adequate ventilatie, maar zijn niet altijd zichtbaar. Als de hartfrequentie stijgt, mag je ervan uitgaan dat de inflatie goed is geweest, ook als je geen duidelijke borstkasbeweging zag.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Als de hartfrequentie wel stijgt maar de baby nog niet spontaan of voldoende ademt, ga je door met ventilatiebeademingen van 30 tot 60 per minuut, met een inspiratietijd van 1 seconde. Vaak is dan een lagere maximale druk nodig.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een spontaan ademende pasgeborene met verhoogde ademarbeid kan CPAP voldoende zijn nadat de luchtweg is geopend en de longen zijn ontplooid.`}</Inline></p>
      <SubHeading><Inline>{`Wat als de hartfrequentie niet stijgt?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als er geen thoraxexcursies zijn en de hartfrequentie blijft laag, dan is de luchtweg waarschijnlijk nog niet goed vrij of is de beademing niet adequaat. Denk dan bijvoorbeeld aan flexie of hyperextensie van de nek, of aan luchtlekkage door een verkeerd masker.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Dan herpositioneer je het hoofd in neutrale stand en geef je opnieuw 5 inflatiebeademingen. Als dat nog niet helpt, kun je alternatieve manieren gebruiken om de luchtweg te openen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`2-persoonstechniek, gevolgd door 5 inflatiebeademingen`}</Inline></li>
        <li><Inline>{`orofaryngeale luchtweg, gevolgd door 5 inflatiebeademingen`}</Inline></li>
        <li><Inline>{`uitzuigen onder direct zicht, gevolgd door 5 inflatiebeademingen`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De 2-persoonstechniek betekent dat de eerste persoon de jaw-thrust toepast en de tweede persoon het masker plaatst en beademt. Als je deze techniek later weer loslaat, kan de luchtweg opnieuw dichtvallen. Dan kan een orofaryngeale luchtweg een goed alternatief zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De juiste maat orofaryngeale luchtweg meet je van het midden van de onderlip tot de kaakhoek. Een te kleine tube duwt de tong juist naar achteren en geeft obstructie. Een te grote tube kan vagale prikkeling geven, met bradycardie of braken als gevolg. Je brengt de tube met een spatel of laryngoscoop in met de holle kant naar de tong, volgens de anatomie van het kind.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Uitzuigen onder zicht is zelden nodig, omdat een echte obstructie van de luchtweg bij een pasgeborene zeer ongebruikelijk is. Bij een voorgeschiedenis die wijst op meer kans op obstructie, bijvoorbeeld dik meconiumhoudend vruchtwater, kan inspectie van de oropharynx en gericht uitzuigen wel worden overwogen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Intubatie is bij de opvang of reanimatie van de pasgeborene maar zelden nodig. Als je hierin bekwaam bent, kan het op verschillende momenten in de flowchart worden overwogen. Een poging mag maximaal 30 seconden duren vanwege het risico op hypoxie. Ook een larynxmasker kan worden overwogen.`}</Inline></p>
      <SubHeading><Inline>{`Zuurstofsaturatie na de geboorte`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De preductale saturatie wordt gemeten aan de rechterhand. Dat is belangrijk omdat dit de zuurstofsaturatie vóór de ductus arteriosus weergeeft. ECG-monitoring van de hartfrequentie is sneller en betrouwbaarder dan auscultatie of het aflezen van de pols uit de saturatiemeting. Daarom wordt ECG vaak samen met saturatiemeting gebruikt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De saturatie stijgt na de geboorte geleidelijk. Een aanvaardbare preductale saturatie is ongeveer 60% na 2 minuten. De foetale saturatie is rond de 60%, en het kan tot 10 minuten duren voordat een saturatie van 90% wordt bereikt.`}</Inline></p>
      <DataTable rows={[["Tabel 3. Streefwaarden preductale saturatie na geboorte"], ["2 min", "ongeveer 60%"], ["3 min", "70-75%"], ["5 min", "80-85%"], ["10 min", "85-95%"]]} />
    </div>
  )
}
