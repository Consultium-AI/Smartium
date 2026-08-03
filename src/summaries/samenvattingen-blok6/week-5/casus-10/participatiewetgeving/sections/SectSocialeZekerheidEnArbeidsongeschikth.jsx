import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Sociale zekerheid en arbeidsongeschiktheid`}</Inline></SubHeading>
      <PBody text={`De verzekeringsgeneeskunde houdt zich bezig met arbeid en gezondheid binnen de sociale verzekeringswetgeving. In deze context zijn de begrippen **ziekte** en **arbeidsongeschiktheid** heel belangrijk, maar ze betekenen niet automatisch hetzelfde. Iemand kan wel ziek zijn, maar toch arbeidsgeschikt blijven als die persoon zijn of haar werk nog kan doen. Andersom kan iemand door dezelfde ziekte juist arbeidsongeschikt zijn voor een bepaald beroep.`} />
      <PBody text={`Dat verschil hangt dus af van de **context van het werk**. Een steigerbouwer met MS en een rolstoelgebonden beperking kan bijvoorbeeld arbeidsongeschikt zijn, terwijl een hoogleraar met dezelfde beperking nog wel arbeidsgeschikt kan zijn. De kern is steeds: kan iemand zijn eigen werk nog uitvoeren?`} />
      <SubHeading><Inline>{`Sociale verzekeringen in Nederland`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In Nederland zijn er twee hoofdgroepen sociale verzekeringen:`}</Inline></p>
      <DataTable rows={[["Tabel 1. Overzicht sociale verzekeringen"], ["**Volksverzekeringen**", "Verplicht voor iedereen in Nederland"], ["**Werknemersverzekeringen**", "Verplicht voor iedereen die in Nederland in loondienst werkt"]]} />
      <PBody text={`Tot de **volksverzekeringen** behoren:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`AOW`}</Inline></li>
        <li><Inline>{`Anw`}</Inline></li>
        <li><Inline>{`Wlz`}</Inline></li>
        <li><Inline>{`AKW`}</Inline></li>
      </ul>
      <PBody text={`Tot de **werknemersverzekeringen** behoren:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Ziektewet`}</Inline></li>
        <li><Inline>{`Werkloosheidswet`}</Inline></li>
        <li><Inline>{`Wet werk en inkomen naar arbeidsvermogen (WIA)`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De premies voor volksverzekeringen worden meestal via de loonheffing ingehouden. Werk je in loondienst, dan doet de werkgever dat. Ontvang je een uitkering, dan houdt de uitkerende instantie de premie in. Ben je ondernemer of zzp’er, dan loopt dit via de belastingaanslag.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Er zijn ook uitzonderingen op de verplichte verzekering, bijvoorbeeld bij gemoedsbezwaardheid of wanneer iemand al een buitenlandse of internationale uitkering ontvangt.`}</Inline></p>
      <SubHeading><Inline>{`Uitvoering van de volksverzekeringen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De uitvoering ligt bij verschillende instanties:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de **SVB** voert de AOW, Anw en AKW uit;`}</Inline></li>
        <li><Inline>{`de **Belastingdienst** int de premies;`}</Inline></li>
        <li><Inline>{`de zorg uit de **Wlz** loopt via zorgkantoren.`}</Inline></li>
      </ul>
    </div>
  )
}
