import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Cognitieve stoornissen: waarom dit belangrijk is`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Cognitieve stoornissen komen veel voor en zullen door de vergrijzing alleen maar vaker worden gezien. Bijna iedere zorgverlener krijgt er in de praktijk mee te maken. Het gaat vaak niet alleen om geheugenproblemen, maar ook om veranderingen in gedrag, aandacht, oriëntatie, taal, planning en het dagelijks functioneren. Juist daarom is een gestructureerde benadering nodig: je wilt niet alleen vaststellen dát er iets mis is, maar vooral begrijpen waardoor het komt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een cognitieve stoornis kan namelijk heel verschillende oorzaken hebben. Denk aan intoxicatie, metabole encefalopathie, psychiatrische aandoeningen, een delier, neurologische aandoeningen en dementie. De kern van de diagnostiek is dus steeds: welk proces verstoort de hersenfunctie?`}</Inline></p>
    </div>
  )
}
