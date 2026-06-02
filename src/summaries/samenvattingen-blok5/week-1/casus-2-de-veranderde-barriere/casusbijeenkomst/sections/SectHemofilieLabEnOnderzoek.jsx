import { Inline, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`De aangevraagde onderzoeken zijn:`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bloedbeeld`}</Inline></li>
        <li><Inline>{`APTT`}</Inline></li>
        <li><Inline>{`PT`}</Inline></li>
        <li><Inline>{`VWF`}</Inline></li>
        <li><Inline>{`factor VIII`}</Inline></li>
        <li><Inline>{`factor IX`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Waarom deze onderzoeken?`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <Inline>{`**bloedbeeld**: om anemie of bloedverlies op te sporen`}</Inline>
        </li>
        <li>
          <Inline>{`**APTT**: meet de intrinsieke en gemeenschappelijke stollingsroute`}</Inline>
        </li>
        <li>
          <Inline>{`**PT**: beoordeelt de extrinsieke route`}</Inline>
        </li>
        <li>
          <Inline>{`**VWF, FVIII, FIX**: om specifieke stollingsfactorstoornissen op te sporen`}</Inline>
        </li>
      </ul>
      <p className="leading-relaxed">
        <Inline>{`De conclusie is **milde hemofilie A**:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`verlengde APTT`}</Inline></li>
        <li><Inline>{`factor VIII-deficiëntie`}</Inline></li>
      </ul>
      <p className="leading-relaxed">
        <Inline>{`Hemofilie is X-gebonden recessief en komt daarom vooral bij mannen voor. Vrouwen zijn meestal draagster.`}</Inline>
      </p>
    </div>
  )
}
