import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`Belangrijke begrippen hierbij zijn:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**sensitiviteit**: hoe goed een test ziekte opspoort;`}</Inline></li>
        <li><Inline>{`**specificiteit**: hoe goed een test gezonde mensen als gezond herkent;`}</Inline></li>
        <li>
          <Inline>{`**positief voorspellende waarde**: hoe groot de kans is dat iemand echt ziek is bij een positieve test;`}</Inline>
        </li>
        <li>
          <Inline>{`**negatief voorspellende waarde**: hoe groot de kans is dat iemand echt niet ziek is bij een negatieve test.`}</Inline>
        </li>
      </ul>
      <p className="leading-relaxed">
        <Inline>{`Bij heel dicht borstweefsel is de sensitiviteit van mammografie lager. Dat betekent dat je afwijkingen makkelijker kunt missen. Daarom is de interpretatie van een mammogram bij jonge vrouwen lastiger.`}</Inline>
      </p>
    </div>
  )
}
