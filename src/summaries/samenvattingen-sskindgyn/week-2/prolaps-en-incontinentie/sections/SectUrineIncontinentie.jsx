import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Urine-incontinentie`}</Inline></SubHeading>
      <PBody text={`Urine-incontinentie is ongewild urineverlies. Bij vrouwen komt dit vaak voor en het is belangrijk om eerst goed te bepalen **welke vorm van incontinentie** er speelt, omdat de aanpak daarvan verschilt. Een jonge vrouw met urineverlies heeft bijvoorbeeld relatief vaak **stress urine-incontinentie (SUI)**.`} />
      <PBody text={`Bij **SUI** treedt urineverlies op bij momenten van verhoogde druk in de buik, zoals hoesten, lachen, tillen of sporten. Twee oorzaken die hierbij passen zijn:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**hypermobiliteit** van de urethra`}</Inline></li>
        <li><Inline>{`**intrinsieke sfincterdeficiëntie**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dit betekent dat de sluitspier van de urinebuis minder goed werkt.`}</Inline></p>
      <SubHeading><Inline>{`Anamnese bij urineverlies`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Om het urineverlies goed in kaart te brengen, vraag je gericht door. Belangrijke vragen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Op welke momenten treedt het verlies op?`}</Inline></li>
        <li><Inline>{`Hoe lang kan patiënte het ophouden als zij aandrang voelt?`}</Inline></li>
        <li><Inline>{`Hoe vaak plast zij overdag?`}</Inline></li>
        <li><Inline>{`Hoe vaak plast zij ’s nachts?`}</Inline></li>
        <li><Inline>{`Hoeveel drinkt zij?`}</Inline></li>
        <li><Inline>{`Welk opvangmateriaal gebruikt zij en hoe vaak moet dit worden vervangen?`}</Inline></li>
        <li><Inline>{`Welke invloed heeft het urineverlies op de kwaliteit van leven?`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Deze vragen helpen om te begrijpen of het vooral gaat om stressincontinentie, urge-incontinentie of een combinatie daarvan.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Waarom vraag je naar de frequentie van plassen overdag en ’s nachts?
**Mini-antwoord:** Daarmee krijg je inzicht in het mictiepatroon en kun je het urineverlies beter typeren.`} />
      <SubHeading><Inline>{`Lichamelijk onderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij het gynaecologisch onderzoek let je op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de vulva en vagina, eventueel tekenen van atrofie`}</Inline></li>
        <li><Inline>{`hypermobiliteit van de urethra`}</Inline></li>
        <li><Inline>{`de aan- of afwezigheid van een prolaps`}</Inline></li>
        <li><Inline>{`een massa in de onderbuik bij abdominaal onderzoek en vaginaal toucher`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Aanvullend onderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Aanvullend onderzoek bestaat uit:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een **mictiedagboek**`}</Inline></li>
        <li><Inline>{`**urineonderzoek** om infectie of andere pathologie uit te sluiten`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Behandeling`}</Inline></SubHeading>
      <PBody text={`Een behandeling die geschikt is voor zowel **stress urine-incontinentie** als **urge-incontinentie** is:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**bekkenfysiotherapie**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dit is dus een belangrijke eerste conservatieve behandeloptie.`}</Inline></p>
    </div>
  )
}
