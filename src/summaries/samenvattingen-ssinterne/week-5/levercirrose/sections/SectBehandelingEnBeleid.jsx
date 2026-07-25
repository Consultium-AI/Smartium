import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling en beleid`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De behandeling hangt af van de oorzaak, de ernst van de leverfunctiestoornis en de complicaties.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In deze casus wordt de patiënt opgenomen en verder onderzocht. Bij ascites en verdenking op SBP worden antibiotica gestart als het aantal neutrofielen in ascites boven 250/mm³ ligt. Bij een slechte nierfunctie moet je voorzichtig zijn met contrastonderzoek, zoals CT met contrast, omdat dit de nierfunctie verder kan verslechteren.`}</Inline></p>
      <SubHeading><Inline>{`Behandeling van de oorzaak`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De oorzaak van cirrose moet zo goed mogelijk worden opgespoord en behandeld. Dat kan betekenen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`stoppen met alcohol;`}</Inline></li>
        <li><Inline>{`behandeling van virale hepatitis;`}</Inline></li>
        <li><Inline>{`behandeling van auto-immuun leverziekte;`}</Inline></li>
        <li><Inline>{`behandeling van metabole leverziekten.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Behandeling van complicaties`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Complicaties worden apart behandeld, bijvoorbeeld:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`ascites behandelen en monitoren;`}</Inline></li>
        <li><Inline>{`SBP behandelen met antibiotica;`}</Inline></li>
        <li><Inline>{`portale hypertensie en varices vervolgen;`}</Inline></li>
        <li><Inline>{`nierfunctie bewaken;`}</Inline></li>
        <li><Inline>{`levertransplantatie overwegen bij ernstig leverfalen.`}</Inline></li>
      </ul>
    </div>
  )
}
