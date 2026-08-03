import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Fibrose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De pathogenese van fibrose wordt het best begrepen bij IPF. Daar lijkt fibrose te ontstaan door een combinatie van:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`langdurige epitheelbeschadiging door ingeademde schadelijke stoffen`}</Inline></li>
        <li><Inline>{`veroudering`}</Inline></li>
        <li><Inline>{`genetische aanleg`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Door deze combinatie raken alveolaire epitheelstamcellen vroegtijdig senescent, dus functioneel verouderd. Daardoor herstellen ze slecht na schade. De alveolaire bekleding wordt niet goed opnieuw opgebouwd en de basaalmembraan komt bloot te liggen. Daarna wordt een wondgenezingscascade geactiveerd, maar die raakt uit balans. Profibrotische factoren overheersen, waardoor macrofagen, epitheelcellen, fibroblasten en endotheelcellen worden geactiveerd. Het gevolg is overmatige productie van collageen en extracellulaire matrix.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Dat leidt tot:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`verlies van alveolair oppervlak voor gaswisseling`}</Inline></li>
        <li><Inline>{`verstoring van de longarchitectuur`}</Inline></li>
        <li><Inline>{`remodellering van de longvaten`}</Inline></li>
        <li><Inline>{`ontwikkeling van secundaire pulmonale hypertensie`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Als de extracellulaire matrix stijver wordt, kan fibrose zichzelf in stand gaan houden. Op dat moment kan de ziekte doorgaan, zelfs als de oorspronkelijke trigger niet meer aanwezig is.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Waarom wordt fibrose steeds erger?
**Kort antwoord:** Omdat de beschadigde long in een soort zelfversterkende wondgenezingsreactie terechtkomt.`} />
    </div>
  )
}
