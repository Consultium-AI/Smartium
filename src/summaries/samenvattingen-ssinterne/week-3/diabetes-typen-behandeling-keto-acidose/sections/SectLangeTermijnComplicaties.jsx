import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Lange termijn complicaties`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het doel van diabetesbehandeling is het voorkomen van langetermijncomplicaties. Hoge glucosewaarden zijn toxisch voor de vaatwand. Bij type 2 spelen vaak ook hypertensie en dyslipidemie mee.`}</Inline></p>
      <SubHeading><Inline>{`Microvasculaire complicaties`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`retinopathie`}</Inline></li>
        <li><Inline>{`nefropathie`}</Inline></li>
        <li><Inline>{`neuropathie`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Macrovasculaire complicaties`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`myocardinfarct`}</Inline></li>
        <li><Inline>{`herseninfarct`}</Inline></li>
        <li><Inline>{`perifeer vaatlijden`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Een diabetische voet is meestal een combinatie van microvasculaire en macrovasculaire problemen. Neuropathie zorgt ervoor dat wondjes minder goed gevoeld worden, terwijl vaatlijden de wondgenezing belemmert.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 7. Complicaties van diabetes`}</Inline></SubHeading>
      <DataTable rows={[["Type complicatie", "Voorbeelden"], ["Microvasculair", "retinopathie, nefropathie, neuropathie"], ["Macrovasculair", "myocardinfarct, CVA, perifeer vaatlijden"], ["Combinatie", "diabetische voet"]]} />
      <p className="leading-relaxed"><Inline>{`Bij cardiovasculair risico is LDL-cholesterol een belangrijke beïnvloedbare risicofactor. Voor het voorkomen van macrovasculaire complicaties is behandeling van andere cardiovasculaire risicofactoren dus heel belangrijk. Voor microvasculaire complicaties is strikte glucoseregulatie juist belangrijk.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Intensieve insulinetherapie bij type 1 verlaagt de kans op microvasculaire complicaties. Dat is een belangrijk uitgangspunt voor de behandeling.`}</Inline></p>
    </div>
  )
}
