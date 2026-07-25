import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Aandachtspunten bij lichamelijk onderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Let op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`algemene indruk: acuut ziek of niet, hemodynamiek, koorts;`}</Inline></li>
        <li><Inline>{`wonden of tekenen van trauma, ook aan de behaarde hoofdhuid;`}</Inline></li>
        <li><Inline>{`klieren in hoofd en hals;`}</Inline></li>
        <li><Inline>{`longen: bijgeluiden;`}</Inline></li>
        <li><Inline>{`hart: souffles;`}</Inline></li>
        <li><Inline>{`buik: afwijkingen, massa’s, blaasretentie, stigmata van levercirrose;`}</Inline></li>
        <li><Inline>{`extremiteiten: decubitus, eventueel flapping tremor.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Ook een oriënterend neurologisch onderzoek hoort erbij. Daarbij kijk je globaal naar:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`nekstijfheid en EMV-score bij verdenking op trauma;`}</Inline></li>
        <li><Inline>{`hersenzenuwen, zoals pupillen, oogbolmotoriek, mimiek en symmetrie van het gelaat;`}</Inline></li>
        <li><Inline>{`armen en benen: tonus, kracht, sensibiliteit, coördinatie en reflexen;`}</Inline></li>
        <li><Inline>{`looppatroon.`}</Inline></li>
      </ul>
      <PBody text={`**Aandachtsvraag:** waarom moet je altijd aan lopen denken?
**Mini-antwoord:** omdat een loopstoornis een belangrijke aanwijzing kan zijn voor een neurologisch of metabool probleem.`} />
    </div>
  )
}
