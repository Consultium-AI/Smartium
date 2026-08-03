import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Pre-test probability`}</Inline></SubHeading>
      <PBody text={`De **pre-test probability** is de kans op hartfalen vóórdat je aanvullend onderzoek doet. Die kans schat je in op basis van:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`voorgeschiedenis, zoals myocardinfarct, hypertensie of cardiotoxische chemotherapie`}</Inline></li>
        <li><Inline>{`combinatie van klachten, zoals dyspnoe, orthopneu en oedeem`}</Inline></li>
        <li><Inline>{`lichamelijk onderzoek, zoals crepitaties of gestuwde halsvenen`}</Inline></li>
        <li><Inline>{`context, zoals leeftijd, comorbiditeit en beloop`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Deze inschatting bepaalt welke vervolgstap logisch is.`}</Inline></p>
      <PBody text={`**Tabel 3. Pre-test probability en vervolgstap**`} />
      <DataTable rows={[["Pre-test kans", "Vervolg"], ["Laag", "Hartfalen minder waarschijnlijk"], ["Tussengelegen", "NT-proBNP bepalen"], ["Hoog", "Direct verder onderzoek, vooral echocardiografie"]]} />
    </div>
  )
}
