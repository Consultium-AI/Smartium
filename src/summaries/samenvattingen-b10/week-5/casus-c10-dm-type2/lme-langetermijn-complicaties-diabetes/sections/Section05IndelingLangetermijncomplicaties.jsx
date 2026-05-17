import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Welke langetermijncomplicaties bestaan er?`}</Inline></h3>
      <p><Inline>{`De langetermijncomplicaties van diabetes worden meestal verdeeld in microvasculaire en macrovasculaire complicaties. Microvasculair betekent: kleine bloedvaten. Macrovasculair betekent: grote bloedvaten.`}</Inline></p>
      <p><Inline>{`**Tabel 2. Indeling van langetermijncomplicaties bij diabetes**`}</Inline></p>
      <DataTable rows={[["Microvasculair", "Macrovasculair"], ["Nefropathie", "Myocardinfarct"], ["Neuropathie", "Cerebrovasculair accident (CVA)"], ["Retinopathie", "Claudicatio intermittens"], ["Diabetische voet: combinatie van micro- en macrovasculaire problemen", "Perifeer vaatlijden"]]} />
      <p><Inline>{`Een belangrijk punt is dat de diabetische voet niet netjes in één hokje past. Het is vaak een combinatie van microvasculaire en macrovasculaire problemen.`}</Inline></p>
    </div>
  )
}
