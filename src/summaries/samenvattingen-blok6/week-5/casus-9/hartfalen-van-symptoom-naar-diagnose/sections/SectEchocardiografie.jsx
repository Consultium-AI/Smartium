import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Echocardiografie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Echocardiografie is het belangrijkste beeldvormende onderzoek bij verdenking op hartfalen. Daarmee kun je de diagnose objectief bevestigen en het type hartfalen bepalen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Op een echo beoordeel je onder andere:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`linker ventrikel functie`}</Inline></li>
        <li><Inline>{`ejectiefractie`}</Inline></li>
        <li><Inline>{`wandbewegingen`}</Inline></li>
        <li><Inline>{`diastolische functie`}</Inline></li>
        <li><Inline>{`klepfunctie`}</Inline></li>
        <li><Inline>{`vullingsdrukken`}</Inline></li>
        <li><Inline>{`rechterhartfunctie en pulmonale druk`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Ejectiefractie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De ejectiefractie is het percentage bloed dat het linker ventrikel per contractie uitpompt.`}</Inline></p>
      <PBody text={`**Tabel 5. Typen hartfalen op basis van EF**`} />
      <DataTable rows={[["Type hartfalen", "EF", "Kenmerken"], ["HFrEF", "< 40%", "verminderde systolische functie, vaak dilatatie"], ["HFmrEF", "40–49%", "tussenbeeld"], ["HFpEF", "≥ 50%", "normale EF, vaak stijve kamer en verhoogde vullingsdrukken"]]} />
      <p className="leading-relaxed"><Inline>{`Bij HFpEF is de EF normaal, maar de kamer is stijf en vult slecht. De klachten ontstaan dus door verhoogde vullingsdrukken, niet door een lage ejectiefractie.`}</Inline></p>
      <SubHeading><Inline>{`Waarom is het type hartfalen belangrijk?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het type hartfalen bepaalt mede:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`welke behandeling zinvol is`}</Inline></li>
        <li><Inline>{`welke medicatie geïndiceerd is`}</Inline></li>
        <li><Inline>{`of aanvullende therapie zoals ICD of CRT in beeld komt`}</Inline></li>
      </ul>
    </div>
  )
}
