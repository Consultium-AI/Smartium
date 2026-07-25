import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Immunologische match en afstoting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voor een transplantatie is een goede immunologische match belangrijk om het risico op rejectie, dus afstoting, zo klein mogelijk te maken. De belangrijkste herkenningspunten voor het immuunsysteem zijn de bloedgroep en de HLA-typering.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bloedgroep O kan aan iedereen geven, en bloedgroep AB kan van iedereen ontvangen. Bij HLA geldt: hoe meer overeenkomst tussen donor en ontvanger, hoe kleiner de kans op rejectie. Alleen eeneiige tweelingen zijn volledig HLA-identiek. De meeste transplantaties hebben dus één of meer HLA-mismatches. Dat is acceptabel klein te maken met immuunsuppressieve medicatie.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Wat betekent HLA eigenlijk in deze context?
**Mini-antwoord:** Het zijn erfelijke kenmerken die het immuunsysteem gebruikt om “eigen” en “niet-eigen” te herkennen.`} />
      <SubHeading><Inline>{`Anti-HLA-antistoffen en incompatibiliteit`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Sommige mensen hebben antistoffen gevormd tegen bepaalde HLA-antigenen. Dat kan gebeuren na contact met cellen van andere mensen, bijvoorbeeld door bloedtransfusies, zwangerschappen of eerdere orgaantransplantaties. Als zo’n donor-specifieke antistof aanwezig is, kan het afweersysteem zeer snel en krachtig reageren op het transplantaat.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij bloedgroepincompatibiliteit of aanwezigheid van donor-specifieke anti-HLA-antistoffen is het rejectierisico onacceptabel groot. Dan zijn er grofweg twee oplossingen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`compatibele combinaties maken via cross-over of domino-paired cross-over;`}</Inline></li>
        <li><Inline>{`antistoffen verwijderen en extra immuunsuppressie geven bij ABO-incompatibele of HLA-incompatibele transplantaties.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij ABO-incompatibiliteit worden anti-bloedgroepantistoffen verwijderd met immuno-adsorptie. Bij HLA-incompatibiliteit gebeurt dat met plasmaferese. Daarna wordt extra immuunsuppressie gegeven om nieuwe antistofvorming te remmen. Ondanks deze maatregelen blijft het risico op rejectie hoger dan bij een volledig compatibele transplantatie.`}</Inline></p>
    </div>
  )
}
