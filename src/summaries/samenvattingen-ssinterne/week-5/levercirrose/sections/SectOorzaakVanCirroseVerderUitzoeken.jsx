import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Oorzaak van cirrose verder uitzoeken`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als cirrose is vastgesteld, wil je de oorzaak bepalen. Daarvoor vraag je aan:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`virologisch onderzoek naar HAV, HBV, HCV en HEV;`}</Inline></li>
        <li><Inline>{`immunologisch onderzoek naar auto-immuun leverziekten;`}</Inline></li>
        <li><Inline>{`onderzoek naar metabole leverziekten, zoals hemochromatose, alfa-1-antitrypsinedeficiëntie en de ziekte van Wilson.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Soms wordt ook een leverbiopsie gedaan. Fibroscan en gastroscopie helpen vooral om cirrose en portale hypertensie vast te stellen.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 4. Diagnostiek naar de oorzaak van cirrose`}</Inline></SubHeading>
      <DataTable rows={[["Onderzoeksgroep", "Doel"], ["Virologie", "hepatitis A, B, C en E opsporen"], ["Immunologie", "auto-immuun leverziekten opsporen"], ["Metabool/genetisch", "hemochromatose, A1AT-deficiëntie, ziekte van Wilson"], ["Biopt", "soms voor verdere duiding van de oorzaak"]]} />
    </div>
  )
}
