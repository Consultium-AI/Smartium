import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hypoxic spells bij Tetralogie van Fallot`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een van de meest gevreesde complicaties bij een nog niet geopereerde Tetralogie van Fallot is een hypoxic spell. Dit is een acute aanval van ernstige cyanose.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Zo’n spell kan worden uitgelokt door agitatie, huilen, pijn of boosheid. Daardoor treedt samentrekking op van het spierweefsel net onder de pulmonalisklep. De vernauwing wordt dan erger, waardoor er bijna geen bloed meer naar de longslagader gaat. De baby wordt heel blauw, krijgt vervolgens zo weinig zuurstof dat hij kan flauwvallen en bleek kan worden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een spell kan ook ontstaan door een plotselinge daling van de systemische vaatweerstand, bijvoorbeeld na een warm bad. Dan neemt de rechts-links shunt toe.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Tijdens een hypoxic spell is er geen systolische souffle hoorbaar. Dat is een belangrijk kenmerk. De aanval is levensbedreigend en vraagt directe actie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De behandeling bestaat uit:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het kind geruststellen;`}</Inline></li>
        <li><Inline>{`de knieën naar de borst brengen om de veneuze return te verbeteren;`}</Inline></li>
        <li><Inline>{`zuurstof geven;`}</Inline></li>
        <li><Inline>{`morfine subcutaan toedienen;`}</Inline></li>
        <li><Inline>{`de intensive care waarschuwen;`}</Inline></li>
        <li><Inline>{`zo nodig sedatie en intubatie;`}</Inline></li>
        <li><Inline>{`medicatie geven om de systemische bloeddruk te verhogen.`}</Inline></li>
      </ul>
      <PBody text={`**Aandacht-vraagje:** Waarom helpt het buigen van de knieën?
**Mini-antwoord:** Daarmee verbeter je de veneuze return en kan er weer meer bloed naar de longen stromen.`} />
    </div>
  )
}
