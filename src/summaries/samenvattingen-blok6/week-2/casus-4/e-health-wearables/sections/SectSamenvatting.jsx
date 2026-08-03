import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Wearables zijn sterk in opkomst en worden steeds vaker gebruikt om gezondheid continu te volgen. De markt is groot, omdat veel mensen hun stappen, hartslag, slaap en conditie willen meten. De ontwikkeling gaat bovendien van alleen registreren naar ook daadwerkelijk interveniëren op basis van de metingen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De validiteit van wearables is een belangrijk aandachtspunt. Een voorbeeld is fotoplethysmografie (PPG), waarbij met licht veranderingen in bloedvolume worden gemeten. Daarmee kun je onder andere hartslag, ritme en ademhalingsfrequentie volgen. Onderzoek laat zien dat fitness-trackers activiteit kunnen verhogen en dat AF met een smartwatch vrij nauwkeurig kan worden opgespoord.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Tegelijk moet je kritisch blijven: kijk naar de onderbouwing van claims, naar de opzet van evaluatiestudies en naar de betekenis van begrippen als sensitiviteit en PPV. Dat is precies de kern van deze e-module.`}</Inline></p>
    </div>
  )
}
