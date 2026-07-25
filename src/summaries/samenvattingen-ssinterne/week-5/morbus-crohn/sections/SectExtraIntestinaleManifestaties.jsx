import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Extra-intestinale manifestaties`}</Inline></SubHeading>
      <PBody text={`Crohn kan ook klachten buiten de darm geven. In de casus ontwikkelde de patiënte later **uveitis anterior**: pijn aan het oog, fotofobie en verminderd zicht. Dit is een extra-intestinale manifestatie en kan vaak lokaal behandeld worden.`} />
      <PBody text={`Ook **perifere artritis** hoort bij de extra-intestinale manifestaties van Crohn.`} />
    </div>
  )
}
