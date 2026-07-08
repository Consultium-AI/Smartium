import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Gelaat, ogen, oren, neus en tong`}</Inline></SubHeading>
      <PBody text={`Bij het gelaat let je op symmetrie. Een **asymmetrische mimiek** kan passen bij een **facialisparese of -paralyse**, bijvoorbeeld door geboortetrauma.`} />
      <SubHeading><Inline>{`Ogen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij de ogen kijk je naar:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`oogbewegingen;`}</Inline></li>
        <li><Inline>{`subconjunctivale bloedingen;`}</Inline></li>
        <li><Inline>{`epicanthus;`}</Inline></li>
        <li><Inline>{`hypertelorisme bij bepaalde syndromen;`}</Inline></li>
        <li><Inline>{`oogstand, bijvoorbeeld mongoloïde of anti-mongoloïde stand bij bepaalde syndromen.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Oren`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij de oren let je op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`implantatie;`}</Inline></li>
        <li><Inline>{`vorm;`}</Inline></li>
        <li><Inline>{`eventuele bijoren.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Neus`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij de neus kijk je naar:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`vorm;`}</Inline></li>
        <li><Inline>{`doorgankelijkheid;`}</Inline></li>
        <li><Inline>{`choane-atresie;`}</Inline></li>
        <li><Inline>{`aangezichtsspleten.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tong`}</Inline></SubHeading>
      <PBody text={`Een belangrijke afwijking is **macroglossie**, een vergrote tong. Dit kan onder andere voorkomen bij **trisomie 21**.`} />
      <PBody text={`**Aandacht-vraagje:** Waarom kijk je bij de neus ook naar doorgankelijkheid?
**Mini-antwoord:** Omdat een pasgeborene sterk afhankelijk is van vrije neusademhaling; een obstructie kan dus direct relevant zijn.`} />
    </div>
  )
}
