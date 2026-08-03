import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Belangrijke echobegrippen`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**B-mode**: standaard 2D-echobeelden.`}</Inline></li>
        <li><Inline>{`Wit = echorijk, bijvoorbeeld bot, nierstenen, galstenen en ook vetweefsel.`}</Inline></li>
        <li><Inline>{`Zwart = echoarm, bijvoorbeeld vloeistoffen zoals bloed en urine.`}</Inline></li>
        <li><Inline>{`**Doppler-echografie**: meet bloedstroomsnelheid en -richting via het Doppler-effect.`}</Inline></li>
        <li><Inline>{`**Kleurendoppler**: laat richting en snelheid van bloedstroom in kleur zien.`}</Inline></li>
        <li><Inline>{`**3D- en 4D-echografie**: driedimensionale beelden, waarbij 4D bewegende 3D-beelden zijn.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 5. Echografie in het kort`}</Inline></SubHeading>
      <DataTable rows={[["Onderdeel", "Betekenis"], ["B-mode", "Standaard 2D-beeld"], ["Doppler", "Bloedstroom meten"], ["Kleurendoppler", "Bloedstroom in kleur"], ["3D/4D", "Ruimtelijke, bewegende beelden"]]} />
    </div>
  )
}
