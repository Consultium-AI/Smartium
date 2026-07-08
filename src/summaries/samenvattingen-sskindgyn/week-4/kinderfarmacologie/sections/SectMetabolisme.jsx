import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Metabolisme`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Veel geneesmiddelen moeten eerst worden omgezet naar een beter uitscheidbare vorm. Dat gebeurt via fase I- en fase II-reacties.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Fase I**: oxidatie, reductie en hydrolyse, vaak via cytochroom P450.`}</Inline></li>
        <li><Inline>{`**Fase II**: conjugatie, zoals glucuronidering en sulfatering.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De leverenzymen ontwikkelen zich niet allemaal even snel. Sommige enzymactiviteiten kunnen zelfs hoger zijn dan bij volwassenen.`}</Inline></p>
      <SubHeading><Inline>{`Fase I: caffeine`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Caffeine wordt gebruikt bij apneus van neonaten. Bij volwassenen wordt caffeine vooral gemetaboliseerd door CYP1A2. Bij neonaten is dit enzym nog nauwelijks ontwikkeld. Daardoor is de halfwaardetijd veel langer: bij neonaten dagen, bij volwassenen slechts enkele uren.`}</Inline></p>
      <SubHeading><Inline>{`Fase II: chlooramfenicol`}</Inline></SubHeading>
      <PBody text={`Chlooramfenicol wordt via glucuronidering afgebroken. Bij jonge zuigelingen is die leverfunctie nog onvoldoende ontwikkeld. Bij systemische toediening kan dan het **grey baby syndrome** ontstaan, met grauwe cyanose, hypothermie, braken, een gezwollen buik, onregelmatige snelle ademhaling en lethargie.`} />
    </div>
  )
}
