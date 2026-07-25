import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Antibiotica bij urineweginfectie en verminderde nierfunctie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Later in het ziektebeloop is de nierfunctie verder verslechterd. De eGFR is 23 mL/min. De patiënte heeft klachten die passen bij een urineweginfectie: branderig plassen, stinkende urine, leukocyturie en een positieve nitriettest.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij gezonde, niet-zwangere vrouwen is nitrofurantoïne vaak eerste keus. De gebruikelijke dosering is:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`5 dagen, 2 keer per dag 100 mg mga, of`}</Inline></li>
        <li><Inline>{`4 keer per dag 50 mg.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Waarom is nitrofurantoïne hier niet geschikt?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een creatinineklaring onder de 30 mL/min is nitrofurantoïne gecontra-indiceerd. De reden is tweeledig:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het middel bereikt dan geen effectieve concentratie in de urine;`}</Inline></li>
        <li><Inline>{`er is risico op ernstige neuropathie door accumulatie in het bloed.`}</Inline></li>
      </ul>
      <PBody text={`**Tabel 2. Nitrofurantoïne bij nierfunctiestoornissen**`} />
      <DataTable rows={[["Situatie", "Gevolg"], ["creatinineklaring < 30 mL/min", "contra-indicatie"], ["onvoldoende uitscheiding in urine", "te lage werkzaamheid"], ["opstapeling in bloed", "risico op ernstige neuropathie"]]} />
    </div>
  )
}
