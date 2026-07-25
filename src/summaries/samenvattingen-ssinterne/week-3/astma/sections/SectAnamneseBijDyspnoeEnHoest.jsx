import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Anamnese bij dyspnoe en hoest`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een patiënt met kortademigheid en hoesten vraag je eerst goed door naar de klachten zelf. Belangrijke vragen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`sinds wanneer bestaat de hoest;`}</Inline></li>
        <li><Inline>{`is er sputum;`}</Inline></li>
        <li><Inline>{`welke kleur heeft het sputum;`}</Inline></li>
        <li><Inline>{`is er bloed opgehoest;`}</Inline></li>
        <li><Inline>{`sinds wanneer is iemand kortademig;`}</Inline></li>
        <li><Inline>{`bij welke activiteiten treedt de kortademigheid op;`}</Inline></li>
        <li><Inline>{`is er ook kortademigheid in rust;`}</Inline></li>
        <li><Inline>{`wordt iemand ’s nachts wakker van benauwdheid;`}</Inline></li>
        <li><Inline>{`is er sprake van piepen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarnaast vraag je naar algemene symptomen, zoals koorts. Koorts kan wijzen op een infectie als oorzaak of uitlokkende factor.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Verder is de voorgeschiedenis belangrijk:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`eerder astma;`}</Inline></li>
        <li><Inline>{`eczeem;`}</Inline></li>
        <li><Inline>{`allergieën;`}</Inline></li>
        <li><Inline>{`hooikoorts;`}</Inline></li>
        <li><Inline>{`jeukende of tranende ogen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Ook blootstelling aan prikkelende stoffen en allergenen moet je uitvragen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`roken of meeroken;`}</Inline></li>
        <li><Inline>{`huisdieren;`}</Inline></li>
        <li><Inline>{`werk;`}</Inline></li>
        <li><Inline>{`hobby’s, vooral knutsel- of stofblootstelling;`}</Inline></li>
        <li><Inline>{`inrichting van het huis, zoals vloerbedekking, dekbedden en kussens.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Aandachtsvraag: waarom vraag je naar eczeem en allergieën?`}</Inline></SubHeading>
      <PBody text={`**Mini-antwoord:** Omdat deze klachten kunnen passen bij een allergische aanleg en eerder astma.`} />
    </div>
  )
}
