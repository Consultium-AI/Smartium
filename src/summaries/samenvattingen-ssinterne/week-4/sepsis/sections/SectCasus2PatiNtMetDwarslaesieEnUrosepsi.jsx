import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Casus 2: patiënt met dwarslaesie en urosepsis`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een jonge man met een dwarslaesie ontwikkelt koorts en koude rillingen. Bij deze patiënt moet je actief zoeken naar een infectiefocus. Denk dan aan luchtwegen, urinewegen, buik, wonden, rugoperaties, decubitus en bewustzijnsverandering. Door de dwarslaesie kan de anamnese lastiger zijn, omdat klachten anders of minder duidelijk kunnen zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Deze patiënt had een atone blaas, werd meerdere keren per dag gekatheteriseerd en had eerder urineweginfecties. Ook waren er nierstenen in het pyelum van de linkernier. Hij had koorts, tachycardie, hypotensie, tachypneu en verwardheid. Dat past bij sepsis, in dit geval urosepsis.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij sepsis moet snel worden gehandeld:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`opname in het ziekenhuis`}</Inline></li>
        <li><Inline>{`snelle toediening van intraveneuze vloeistoffen`}</Inline></li>
        <li><Inline>{`urineproductie bewaken`}</Inline></li>
        <li><Inline>{`bloedkweken en urinekweek afnemen`}</Inline></li>
        <li><Inline>{`zo snel mogelijk antibiotica starten, liefst binnen 1 uur`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Het lokale antibioticabeleid kan per ziekenhuis verschillen, omdat de lokale resistentiepatronen verschillen. In het Erasmus MC komt bijvoorbeeld veel ciprofloxacineresistentie voor bij urinewegpathogenen, waardoor ciprofloxacine niet standaard in het empirisch beleid zit.`}</Inline></p>
      <SubHeading><Inline>{`Hospital acquired of community acquired?`}</Inline></SubHeading>
      <PBody text={`Deze infectie werd beschouwd als **hospital acquired** of in elk geval health care associated, omdat de patiënt in een revalidatiecentrum verbleef en eerder vaak was opgenomen. Daardoor is de kans op ziekenhuisflora groter en moet je breder empirisch behandelen.`} />
      <PBody text={`De gekozen behandeling was piperacilline/tazobactam plus gentamicine. Voor gentamicine heb je het gewicht nodig, en voor piperacilline/tazobactam moet je rekening houden met de nierfunctie. Bij deze patiënt werd later duidelijk dat een eerdere urinekweek al een **E. coli** liet zien die resistent was tegen piperacilline/tazobactam maar gevoelig voor gentamicine. Daarom werd overgestapt op meropenem.`} />
      <PBody text={`**Aandacht-vraagje:** Waarom is een oude urinekweek hier belangrijk?
**Mini-antwoord:** Omdat die al liet zien welke bacterie waarschijnlijk de oorzaak was en tegen welk antibioticum die bacterie resistent was.`} />
      <SubHeading><Inline>{`Meropenem en orale switch`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Meropenem werd gegeven in een aangepaste dosering bij verminderde nierfunctie. Toen de patiënt opknapte, koortsvrij en hemodynamisch stabiel werd, kon worden overgeschakeld van intraveneuze naar orale antibiotica. Dat is veilig als aan de voorwaarden voor switch wordt voldaan.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De patiënt kreeg ciprofloxacine als oraal vervolgmiddel, omdat dit goed oraal wordt opgenomen en goede bloedspiegels geeft. De totale behandelduur was 10-14 dagen, omdat het ging om een gecompliceerde urineweginfectie met sepsis en bacteriëmie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De kans op recidief moest worden verminderd door de onderliggende oorzaak aan te pakken. In dit geval waren de nierstenen belangrijk, omdat bacteriën daarin kunnen persisteren. Daarom moest de uroloog worden betrokken om een plan te maken voor verwijdering van de stenen. Ook de katheterisatie en de atone blaas blijven risicofactoren.`}</Inline></p>
    </div>
  )
}
