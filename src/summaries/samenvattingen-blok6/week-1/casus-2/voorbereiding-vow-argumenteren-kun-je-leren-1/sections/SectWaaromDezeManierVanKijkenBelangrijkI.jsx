import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waarom deze manier van kijken belangrijk is`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In de geneeskunde is het niet genoeg om alleen te weten *wat* een arts doet. Het is ook belangrijk om te begrijpen *vanuit welk denkkader* die arts redeneert. Dat denkkader bepaalt namelijk welke vragen centraal staan, welke gegevens belangrijk worden gevonden en hoe ziekte wordt opgevat. Daardoor beïnvloedt het ook de manier waarop diagnostiek en behandeling tot stand komen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een denkkader is dus meer dan alleen een denkwijze. Het is een geheel van uitgangspunten, aannames, gewoonten en contexten waarin medische kennis ontstaat en gebruikt wordt. Juist daarom helpt deze module om medische teksten en medische redeneringen beter te begrijpen.`}</Inline></p>
    </div>
  )
}
