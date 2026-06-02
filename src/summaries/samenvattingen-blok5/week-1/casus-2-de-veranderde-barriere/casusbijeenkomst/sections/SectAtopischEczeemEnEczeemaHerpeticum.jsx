import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Atopisch eczeem en eczeema herpeticum`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De eczeemcasus gaat over een 25-jarige patiënt met atopisch eczeem sinds de babyleeftijd, met een positieve familieanamnese voor atopie. Er zijn pijnlijke blaasjes in het gezicht, passend bij **eczeema herpeticum**. Dat is een herpesinfectie op een eczeemplek.`}</Inline></p>
    </div>
  )
}
