import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Compensatiemechanismen bij hartfalen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Wanneer het hart minder goed pompt, daalt de cardiac output. Het lichaam ervaart dat als een bedreiging voor de doorbloeding van vitale organen, zoals hersenen en nieren. Daarom worden compensatiemechanismen geactiveerd die de bloeddruk en orgaanperfusie tijdelijk op peil moeten houden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De belangrijkste systemen zijn het sympathisch zenuwstelsel, het RAAS en de natriuretische peptiden. Deze systemen werken niet allemaal in dezelfde richting. De eerste twee proberen de circulatie te ondersteunen door vasoconstrictie, vochtretentie en verhoging van de hartfrequentie. De natriuretische peptiden vormen juist een tegenregulerend systeem dat het hart probeert te ontlasten.`}</Inline></p>
    </div>
  )
}
