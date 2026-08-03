import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Echografie in de nefrologie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Echografie is in de nefrologie een veelgebruikte eerste beeldvormende techniek. Dat komt vooral doordat het onderzoek snel beschikbaar is, geen straling gebruikt en aan het bed van de patiënt kan worden uitgevoerd. Dat laatste heet bedside gebruik: je hoeft de patiënt dus niet eerst naar een andere afdeling te verplaatsen. Juist bij patiënten met acute nierschade is dat praktisch en vaak heel waardevol.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De echo wordt in de nefrologie vaak vroeg ingezet, omdat je er snel belangrijke vragen mee kunt beantwoorden. Denk bijvoorbeeld aan de vraag of er sprake is van een obstructie van de urineafvoer. Ook kun je de grootte en structuur van de nieren beoordelen en kijken naar afwijkingen van de blaas.`}</Inline></p>
      <SubHeading><Inline>{`Waarom is dit zo belangrijk bij acute nierschade?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij acute nierschade wil je snel onderscheid maken tussen verschillende oorzaken. Een echo helpt vooral om een postrenale oorzaak op te sporen of uit te sluiten. Postrenaal betekent dat het probleem ná de nier zit, bijvoorbeeld door een afsluiting in de urinewegen. Als de urine niet goed weg kan, kan de nierfunctie snel achteruitgaan.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Waarom kies je bij acute nierschade vaak eerst voor een echo?
**Mini-antwoord:** Omdat het snel, veilig en laagdrempelig is, en omdat je er obstructie en andere belangrijke afwijkingen mee kunt opsporen.`} />
    </div>
  )
}
