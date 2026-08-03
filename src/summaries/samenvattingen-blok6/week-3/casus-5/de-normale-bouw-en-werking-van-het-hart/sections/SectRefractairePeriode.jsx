import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Refractaire periode`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na een actiepotentiaal is een hartcel tijdelijk niet of minder prikkelbaar.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Absolute refractaire periode:** geen nieuwe actiepotentiaal mogelijk`}</Inline></li>
        <li><Inline>{`**Relatieve refractaire periode:** alleen met een sterkere prikkel mogelijk`}</Inline></li>
        <li><Inline>{`**Effectieve refractaire periode:** kortste periode waarin een prikkel zich ook echt kan voortgeleiden`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De lange refractaire periode voorkomt tetanus en zorgt ervoor dat het hart tussen de slagen door kan vullen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
