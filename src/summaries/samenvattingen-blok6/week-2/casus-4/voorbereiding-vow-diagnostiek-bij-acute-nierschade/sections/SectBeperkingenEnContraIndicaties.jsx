import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Beperkingen en contra-indicaties`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Echografie heeft ook beperkingen. De kwaliteit van het beeld hangt af van de apparatuur en van de vaardigheid van de echografist. Dat betekent dat dezelfde patiënt niet altijd exact hetzelfde beeld oplevert in verschillende handen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De contra-indicaties zijn relatief zeldzaam, maar kunnen bestaan uit ernstige obesitas of wonden op de huid. Bij ernstige obesitas kan het beeld minder goed doordringen, waardoor de beoordeling lastiger wordt. Wonden op de huid kunnen het onderzoek op die plek bemoeilijken.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijk is ook wat echografie níet goed laat zien. Het is geen geschikte techniek om glomerulaire schade aan te tonen. Glomerulaire schade zit op microscopisch niveau in de nierfilters en is met echo niet direct zichtbaar. Daarom heb je bij verdenking op dit soort schade andere diagnostiek nodig.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Beperkingen van echografie`}</Inline></SubHeading>
      <DataTable rows={[["Beperking", "Gevolg"], ["Afhankelijk van apparatuur", "Beeldkwaliteit kan verschillen"], ["Afhankelijk van vaardigheid echografist", "Interpretatie kan verschillen"], ["Ernstige obesitas", "Onderzoek kan technisch moeilijk zijn"], ["Wonden op de huid", "Onderzoek kan lokaal niet goed uitvoerbaar zijn"], ["Geen zicht op glomerulaire schade", "Niet geschikt om dit aan te tonen"]]} />
    </div>
  )
}
