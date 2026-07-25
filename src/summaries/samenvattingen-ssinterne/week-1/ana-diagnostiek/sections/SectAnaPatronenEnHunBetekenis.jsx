import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`ANA-patronen en hun betekenis`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij ANA-bepaling kunnen verschillende patronen worden gezien. Het patroon hangt af van de celbestanddelen waartegen de antistoffen gericht zijn. Belangrijke patronen zijn onder andere:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`gespikkeld`}</Inline></li>
        <li><Inline>{`homogeen`}</Inline></li>
        <li><Inline>{`centromeer`}</Inline></li>
        <li><Inline>{`nucleolair`}</Inline></li>
        <li><Inline>{`mitotic spindle apparatus`}</Inline></li>
        <li><Inline>{`mitochondriën`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Deze patronen zijn klinisch relevant, omdat ze geassocieerd kunnen zijn met specifieke ziekten en antistoffen.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. ANA-patronen, antistoffen en geassocieerde ziekten`}</Inline></SubHeading>
      <DataTable rows={[["Patroon", "Voorbeelden van antistoffen", "Geassocieerde ziekte(n)"], ["Gespikkeld", "SS-A, SS-B, RNP, Sm, Mi-2, RP-II/III", "SS, SLE, MCTD, PM/DM, SSc"], ["Homogeen", "dsDNA, histonen, Scl-70", "SLE, DLE, SSc"], ["Centromeer", "CENP-A/B, CENP-C/H", "SSc, SS"], ["Nucleolair", "RP-I, fibrillarine, NOR90, Th/to, PM-Scl", "SSc, PM/DM"], ["Mitotic spindle apparatus", "NuMa1", "Aspecifiek"], ["Mitochondriën", "M2", "PBC"]]} />
      <p className="leading-relaxed"><Inline>{`De herkenning van deze patronen helpt dus om systeemziekten beter van elkaar te onderscheiden.`}</Inline></p>
    </div>
  )
}
