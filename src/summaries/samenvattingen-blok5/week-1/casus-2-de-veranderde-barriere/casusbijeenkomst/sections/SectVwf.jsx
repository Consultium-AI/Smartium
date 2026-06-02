import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`VWF`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`factor VIII`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`factor IX`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Waarom deze onderzoeken?`}</Inline></p>
      <PBody text={`**bloedbeeld**: om anemie of bloedverlies op te sporen`} />
      <PBody text={`**APTT**: meet de intrinsieke en gemeenschappelijke stollingsroute`} />
      <PBody text={`**PT**: beoordeelt de extrinsieke route`} />
      <PBody text={`**VWF, FVIII, FIX**: om specifieke stollingsfactorstoornissen op te sporen`} />
    </div>
  )
}
