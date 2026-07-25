import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diagnostiek bij verdenking op cirrose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De diagnostiek bestaat uit laboratoriumonderzoek, beeldvorming en onderzoek naar de oorzaak.`}</Inline></p>
      <SubHeading><Inline>{`Laboratoriumonderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Je vraagt onder andere aan:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`leverlab;`}</Inline></li>
        <li><Inline>{`stollingsonderzoek;`}</Inline></li>
        <li><Inline>{`virologie;`}</Inline></li>
        <li><Inline>{`nierfunctie en elektrolyten;`}</Inline></li>
        <li><Inline>{`echografie van de lever.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De laboratoriumuitslagen laten vaak een beeld zien van ernstige leverfunctiestoornissen. In deze casus zijn onder meer bilirubine, ASAT, ALAT, alkalische fosfatase, albumine, PT/INR, ureum, creatinine en natrium afwijkend.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Belangrijke laboratoriumafwijkingen bij deze patiënt`}</Inline></SubHeading>
      <DataTable rows={[["Bepaling", "Waarde", "Betekenis"], ["Totale bilirubine", "354 µmol/L", "sterk verhoogd"], ["Directe bilirubine", "248 µmol/L", "sterk verhoogd"], ["ASAT", "170 U/L", "verhoogd"], ["ALAT", "72 U/L", "verhoogd"], ["Albumine", "22 g/L", "verlaagd"], ["PT", "22,6 sec", "verlengd"], ["INR", "1,9", "verhoogd"], ["Ureum", "18,3 mmol/L", "verhoogd"], ["Creatinine", "169 µmol/L", "verhoogd"], ["Natrium", "115 mmol/L", "verlaagd"]]} />
      <p className="leading-relaxed"><Inline>{`De combinatie van hoog bilirubine, laag albumine, gestoorde stolling en nierfunctiestoornis past bij ernstig leverfalen met systemische ontregeling.`}</Inline></p>
      <SubHeading><Inline>{`Aandachtspunt`}</Inline></SubHeading>
      <PBody text={`**Wat zegt een laag albumine je?**
Dat de lever minder goed eiwit aanmaakt. Dat past bij verminderde leverfunctie en kan bijdragen aan oedeem en ascites.`} />
    </div>
  )
}
