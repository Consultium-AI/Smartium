import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`3. Laboratory medicine: ziekte als proces in de tijd`}</Inline></SubHeading>
      <PBody text={`In de tweede helft van de 19e eeuw werd de ziekenhuisgeneeskunde verder versterkt door de opkomst van het **laboratoriumonderzoek**. Daarmee ontstond de **laboratory medicine**.`} />
      <PBody text={`Hier verschoof de aandacht opnieuw. Niet langer stond vooral de anatomische afwijking centraal, maar het **functioneren** van het lichaam. Ziekte werd opgevat als een verstoring van fysiologische processen, vaak op het niveau van **cellen en weefsels**. Het ging dus om ziekte als een **proces in de tijd**, niet alleen om een afwijkende vorm.`} />
      <PBody text={`De diagnostiek veranderde mee. Artsen gingen steeds meer gebruikmaken van **aanvullende diagnostiek**: bloedonderzoek, beeldvorming en andere technieken die lichaamsfuncties zichtbaar maken in getallen, grafieken en beelden. De patiënt werd in deze benadering soms gereduceerd tot een **cellencomplex** of tot laboratoriumwaarden.`} />
      <PBody text={`Ook de plaats waar medische kennis werd gemaakt veranderde. Het laboratorium werd steeds belangrijker en trok onderzoekers aan met een natuurwetenschappelijke achtergrond. Daardoor groeide de afstand tussen laboratorium en kliniek: de bekende kloof tussen **bench en bedside**.`} />
      <PBody text={`**Kern van laboratory medicine**`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`ziekte als **fysiologisch** probleem;`}</Inline></li>
        <li><Inline>{`nadruk op **functie** en **proces**;`}</Inline></li>
        <li><Inline>{`diagnostiek via laboratoriumtechnieken en aanvullende onderzoeken;`}</Inline></li>
        <li><Inline>{`herkenbaar in de biomedische basiswetenschappen en in disciplines die sterk op diagnostiek steunen.`}</Inline></li>
      </ul>
      <PBody text={`**Aandachtsvraag:** Wat is hier de grote verschuiving?
**Mini-antwoord:** Van de plaats van de afwijking naar de verstoring van het functioneren zelf.`} />
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
