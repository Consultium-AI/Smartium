import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Bij een knobbel in de borst denk je in elk geval aan:`}</Inline></SubHeading>
      <DataTable rows={[["Mogelijke diagnose", "Kenmerk"], ["---", "---"], ["Fibroadenoom", "Vaak rond, scherp begrensd en benigne van aard"], ["Cyste", "Kan passen bij een goedaardige afwijking"], ["Mammacarcinoom", "Moet zeker worden uitgesloten bij verdachte kenmerken of risicofactoren"]]} />
      <p className="leading-relaxed"><Inline>{`Een ronde, scherp begrensde afwijking past vaker bij een benigne afwijking, zeker bij een jonge vrouw. Toch blijft aanvullende diagnostiek nodig als de context verdacht is.`}</Inline></p>
    </div>
  )
}
