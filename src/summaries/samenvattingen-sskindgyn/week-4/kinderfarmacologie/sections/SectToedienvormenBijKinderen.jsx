import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Toedienvormen bij kinderen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De juiste toedienvorm kiezen is bij kinderen vaak lastig. Tabletten of capsules kunnen niet altijd worden doorgeslikt. De benodigde dosis is vaak veel lager dan de beschikbare sterkte. Een vieze smaak leidt sneller tot uitspugen. Ook hulpstoffen kunnen ongewenst zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Het Kinderformularium geeft onder instructies en toedieningsvormen aan welke vormen geschikt zijn per leeftijd.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Vaste orale vormen zoals tabletten en capsules zijn meestal pas vanaf ongeveer 6 jaar goed toe te dienen.`}</Inline></li>
        <li><Inline>{`Heel doorslikken kan soms vanaf ongeveer 5 jaar worden aangeleerd.`}</Inline></li>
        <li><Inline>{`Bij jongere kinderen wordt vaak een drank gebruikt.`}</Inline></li>
        <li><Inline>{`De smaak van een drank is vaak sterker, waardoor uitspugen vaker voorkomt.`}</Inline></li>
        <li><Inline>{`Het maximale volume per gift is leeftijdsafhankelijk:`}</Inline></li>
        <li><Inline>{`onder 5 jaar: maximaal 5 ml, bij neonaten zelfs minder dan 1 ml;`}</Inline></li>
        <li><Inline>{`boven 5 jaar: maximaal 10 ml.`}</Inline></li>
      </ul>
    </div>
  )
}
