import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klachten en herkenning`}</Inline></SubHeading>
      <PBody text={`Typische klachten zijn **hoofdpijn**, **misselijkheid**, **sterretjes zien**, **tintelingen**, **oedeem** en een **bandgevoel** in de bovenbuik. Ook klachten als braken in de tweede helft van de zwangerschap moeten dus altijd alert maken.`} />
      <SubHeading><Inline>{`Aandacht-vraagje`}</Inline></SubHeading>
      <PBody text={`**Welke combinatie maakt pre-eclampsie waarschijnlijk?**
Hypertensie in de tweede helft van de zwangerschap samen met proteïnurie.`} />
    </div>
  )
}
