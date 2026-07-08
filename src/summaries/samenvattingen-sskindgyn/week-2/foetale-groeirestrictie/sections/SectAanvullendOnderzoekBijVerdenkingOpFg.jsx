import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Aanvullend onderzoek bij verdenking op FGR`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij FGR kan aanvullend onderzoek nodig zijn naar de oorzaak. Dat is vooral relevant als de groeirestrictie vroeg optreedt of als er bijkomende afwijkingen zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Overweeg aanvullend onderzoek in de vorm van:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`genetische diagnostiek;`}</Inline></li>
        <li><Inline>{`onderzoek naar CMV;`}</Inline></li>
        <li><Inline>{`een GUO bij vroege FGR om congenitale afwijkingen op te sporen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`GUO staat voor geavanceerd ultrageluidonderzoek.`}</Inline></p>
      <SubHeading><Inline>{`Wanneer is aanvullend onderzoek vooral zinvol?`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bij FGR onder de 24 weken en een EFW of AC < p5;`}</Inline></li>
        <li><Inline>{`bij bijkomende echoscopische afwijkingen;`}</Inline></li>
        <li><Inline>{`bij vroege FGR onder de 32 weken.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Waarom vooral bij vroege FGR?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hoe vroeger de groeirestrictie ontstaat, hoe groter de kans op een onderliggende chromosomale afwijking of congenitale afwijking. Triploïdie is daarbij een vaak gevonden afwijking.`}</Inline></p>
    </div>
  )
}
