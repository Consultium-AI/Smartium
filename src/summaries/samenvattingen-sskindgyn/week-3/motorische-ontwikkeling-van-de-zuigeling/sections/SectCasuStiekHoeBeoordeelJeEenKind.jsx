import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Casuïstiek: hoe beoordeel je een kind?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een kind van 7 maanden dat niet leeftijdsadequaat beweegt, is het gevoel vaak “niet pluis”. Kwantitatief is de ontwikkeling dan niet passend als het kind bijvoorbeeld niet kan rollen of niet tot gestrekte armsteun komt. Kwalitatief kunnen dan ook variatie en vloeiendheid ontbreken, terwijl symmetrie soms nog wel aanwezig is.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een ander kind van 7 maanden kan de ontwikkeling juist leeftijdsadequaat zijn. Dan zie je bijvoorbeeld gestrekte armsteun, tijgeren en kruiphouding. In dat geval is het gevoel positief en zijn zowel de kwantitatieve als kwalitatieve kenmerken passend.`}</Inline></p>
    </div>
  )
}
