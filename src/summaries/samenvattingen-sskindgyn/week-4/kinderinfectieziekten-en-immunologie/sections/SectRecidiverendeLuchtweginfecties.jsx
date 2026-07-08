import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Recidiverende luchtweginfecties`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Recidiverende bovenste luchtweginfecties, zoals verkoudheid, oorontsteking en keelontsteking, komen bij jonge kinderen vaak voor en hoeven meestal niet verder onderzocht te worden. Er is veel variatie in hoe vaak kinderen luchtweginfecties doormaken. Bij kinderen tot 2 jaar kunnen tot 11 bovenste luchtweginfecties per jaar nog normaal zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Onderste luchtweginfecties zijn anders. Meer dan 2 onderste luchtweginfecties per jaar zijn volgens de huidige richtlijnen reden voor aanvullend onderzoek naar een onderliggende aandoening. Bij zulke kinderen wordt in een groot deel van de gevallen uiteindelijk een oorzaak gevonden, zoals chronische aspiratie, astma, een aangeboren luchtwegafwijking of een afweerstoornis.`}</Inline></p>
      <SubHeading><Inline>{`Welke diagnostiek is nodig?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij recidiverende onderste luchtweginfecties wil je vooral denken aan neutropenie en antistofdeficiënties. Daarom vraag je in elk geval een volledig bloedbeeld met differentiatie aan, plus immunoglobulines en subklassen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`IgG en IgG-subklassen;`}</Inline></li>
        <li><Inline>{`IgA en IgM.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`IgE kan nuttig zijn als je denkt aan astma of allergische uitlokkende factoren. Ferritine en serumijzer kunnen bij veel infecties verlaagd zijn, maar dat is eerder een gevolg dan een oorzaak. Vitamine C-tekort als oorzaak van recidiverende pneumonieën komt in Nederland eigenlijk niet voor, en de rol van vitamine B12 is niet relevant.`}</Inline></p>
      <SubHeading><Inline>{`Bronchiëctasiën`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Op een CT-scan kunnen bronchiëctasiën zichtbaar zijn: abnormaal verwijdde bronchiën. Dit is vaak het gevolg van langdurige of chronische longontstekingen door infecties of chronische aspiratie. Bronchiëctasiën worden daarom ook vaker gezien bij kinderen met een primaire immuundeficiëntie.`}</Inline></p>
    </div>
  )
}
