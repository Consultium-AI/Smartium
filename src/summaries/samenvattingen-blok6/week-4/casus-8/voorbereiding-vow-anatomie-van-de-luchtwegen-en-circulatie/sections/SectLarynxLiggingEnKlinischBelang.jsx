import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Larynx: ligging en klinisch belang`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De larynx hangt aan het os hyoideum, het tongbeen. In de larynx zitten verschillende kraakbenige onderdelen, waaronder het cartilago thyroidea en het cartilago cricoidea. Het uitstekende deel van het cartilago thyroidea wordt ook wel de adamsappel genoemd.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Tussen het cartilago thyroidea en het cartilago cricoidea ligt een inkeping met de membrana cricothyroidea. Deze plek is klinisch belangrijk, omdat hier een coniotomie kan worden uitgevoerd bij acute obstructie van de larynx.`}</Inline></p>
      <DataTable rows={[["Tabel 1. Belangrijke structuren van de larynx"], ["Os hyoideum", "Tongbeen waaraan de larynx hangt"], ["Cartilago thyroidea", "Schildkraakbeen, met de adamsappel"], ["Cartilago cricoidea", "Zegelringkraakbeen"], ["Membrana cricothyroidea", "Inkeping tussen thyroid en cricoid; belangrijk voor coniotomie"]]} />
    </div>
  )
}
