import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Voorbeelden van het verschil`}</Inline></SubHeading>
      <PBody text={`Een mooi voorbeeld is de zuurstofregeling. De **arteriële zuurstofspanning** is homeostatisch gereguleerd en blijft dus stabiel, ook als de hoeveelheid zuurstof in de omgeving verandert. De **ademhalingsfrequentie** is juist niet-homeostatisch gereguleerd. Die verandert mee om de arteriële zuurstofspanning stabiel te houden.`} />
      <p className="leading-relaxed"><Inline>{`Dat laat goed zien hoe de twee soorten variabelen samenwerken:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de **homeostatische variabele** blijft zo constant mogelijk`}</Inline></li>
        <li><Inline>{`de **niet-homeostatische variabele** wordt aangepast om dat mogelijk te maken`}</Inline></li>
      </ul>
    </div>
  )
}
