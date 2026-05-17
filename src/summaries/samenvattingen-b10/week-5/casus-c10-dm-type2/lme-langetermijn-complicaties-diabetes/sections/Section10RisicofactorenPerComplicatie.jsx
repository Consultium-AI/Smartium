import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Risicofactoren en verschijnselen per complicatie`}</Inline></h3>
      <p><Inline>{`**Tabel 3. Risicofactoren, verschijnselen en diagnostiek per complicatie**`}</Inline></p>
      <DataTable rows={[["Complicatie", "Belangrijke risicofactoren", "Typische verschijnselen", "Diagnostiek"], ["Retinopathie", "Hyperglykemie, bloeddruk, roken, dyslipidemie, diabetesduur, proteinurie, zwangerschap", "Vaak lang geen klachten; later visusverlies", "Fundoscopie, fundusfoto’s, fluoresceïenceangiografie, OCT op indicatie"], ["Nefropathie", "Hyperglykemie, hoge bloeddruk, leeftijd/diabetesduur, pre-existente nierfunctiestoornis, roken, obesitas", "Microalbuminurie, later achteruitgang nierfunctie, uiteindelijk nierfalen", "Urine-albumine/creatinineratio, nierfunctie vervolgen"], ["Neuropathie", "—", "Perifeer: verlies van sensibiliteit, pijn, paresthesieën, wonden, standsafwijkingen. Autonoom: tachycardie, orthostatische hypotensie, gastroparese, diarree of obstipatie", "Microfilament, vibratieonderzoek, bloeddrukmetingen, orthostatische metingen, maaglediging"], ["Macrovasculaire complicaties", "Hyperglykemie, hoge bloeddruk, dyslipidemie, roken, familiaire belasting, obesitas", "Pijn op de borst, claudicatio intermittens, neurologische uitval", "ECG, enkel-armindex, CTA hersenen op indicatie"]]} />
    </div>
  )
}
