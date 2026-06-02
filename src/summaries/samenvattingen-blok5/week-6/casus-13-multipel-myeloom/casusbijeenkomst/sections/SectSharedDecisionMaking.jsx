import { Inline, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`In de latere fase van de ziekte wordt het gesprek over behandeling heel belangrijk. In de casus is de patiënte inmiddels 70 jaar en komt zij door haar longfunctie en performance status niet in aanmerking voor cellulaire therapieën zoals CAR-T.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`De situatie is dan als volgt:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li>
          <Inline>{`de ziekte kan nog behandeld worden met **pomalidomide-dexamethason**`}</Inline>
        </li>
        <li><Inline>{`maar de kans op respons is beperkt`}</Inline></li>
        <li><Inline>{`er zijn duidelijke bijwerkingen`}</Inline></li>
        <li><Inline>{`er zijn regelmatige ziekenhuiscontroles nodig`}</Inline></li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`De kans op respons is ongeveer **35%**, met een mediane progressievrije overleving van **4-5 maanden**. Mogelijke bijwerkingen zijn onder andere:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`polyneuropathie`}</Inline></li>
        <li><Inline>{`infecties`}</Inline></li>
        <li><Inline>{`anemie`}</Inline></li>
        <li><Inline>{`trombopenie`}</Inline></li>
        <li><Inline>{`neutropenie`}</Inline></li>
        <li><Inline>{`moeheid`}</Inline></li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`Het alternatief is stoppen met myeloomgerichte behandeling en kiezen voor **palliatief-supportieve zorg**, gericht op:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`pijnstilling`}</Inline></li>
        <li><Inline>{`transfusies`}</Inline></li>
        <li><Inline>{`antibiotica bij infecties`}</Inline></li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`Dat betekent dat het gesprek niet alleen over “wel of niet behandelen” gaat, maar vooral over wat voor de patiënt nog passend is: meer ziektebestrijding met kans op bijwerkingen, of vooral comfort en symptoombehandeling.`}</Inline>
      </p>

      <SubHeading level={3}>De verschillende perspectieven in het gesprek</SubHeading>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li>
          <Inline>{`**Patiënt:** bang voor nieuwe fracturen als de ziekte onbehandeld blijft, maar ziet op tegen nieuwe medicatie, bijwerkingen en ziekenhuisbezoeken.`}</Inline>
        </li>
        <li>
          <Inline>{`**Partner:** vreest dat de behandeling haar functioneren verder zal verminderen en dat zij niet meer zelfstandig ADL kan doen.`}</Inline>
        </li>
        <li><Inline>{`**Zoon:** wil zijn moeder niet verliezen.`}</Inline></li>
        <li>
          <Inline>{`**Hematoloog:** moet alle informatie helder uitleggen en samen met patiënt en familie tot een besluit komen.`}</Inline>
        </li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`De kern is dat het duidelijk moet zijn dat er **wel degelijk een keuze** is. Die keuze moet begrijpelijk worden uitgelegd, inclusief voordelen, nadelen en wat het alternatief is.`}</Inline>
      </p>
    </div>
  )
}
