import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Beroepsziekten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een beroepsziekte is een ziekte of aandoening die ontstaat door een belasting die in overwegende mate in arbeid of arbeidsomstandigheden heeft plaatsgevonden. Als de onveilige of ongezonde situatie op het werk er niet was geweest, was de ziekte niet ontstaan.`}</Inline></p>
      <PBody text={`Jaarlijks krijgen naar schatting **20.000 werknemers** in Nederland een beroepsziekte. De tijd tussen blootstelling en klachten kan heel kort zijn, zoals bij een infectie, maar ook heel lang, zoals bij asbest en mesothelioom.`} />
    </div>
  )
}
