import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Casus 1: syndroom van Cushing door een hypofyse-adenoom`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een vrouw met snelle gewichtstoename, vermoeidheid, transpireren, amenorroe, centrale obesitas, buffalo hump, rompadipositas, striae en hypertensie past bij het syndroom van Cushing.`}</Inline></p>
      <PBody text={`De screening laat afwijkende cortisolwaarden zien, en onder gecontroleerde omstandigheden blijft de afwijking bestaan. Daarmee is de diagnose **syndroom van Cushing** gesteld.`} />
      <SubHeading><Inline>{`Bepalen van de oorzaak`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Omdat een ACTH-afhankelijke oorzaak waarschijnlijk is, wordt eerst gekeken naar de hypofyse. Een MRI laat aanvankelijk geen adenoom zien. Dat sluit een klein adenoom niet uit, want kleine adenomen kunnen gemist worden.`}</Inline></p>
      <PBody text={`Daarom volgt **sinus petrosus sampling**. Hierbij wordt ACTH gemeten in bloed uit de veneuze afvloed van de hypofyse en vergeleken met perifere waarden, voor en na stimulatie met CRH.`} />
      <SubHeading><Inline>{`Interpretatie van sinus petrosus sampling`}</Inline></SubHeading>
      <DataTable rows={[["Bevinding", "Betekenis"], ["Centrale-perifere ACTH-gradiënt", "Past bij hypofysaire ACTH-overproductie"], ["Geen gradiënt", "Past meer bij ectopische ACTH-productie"], ["Hogere ACTH rechts dan links", "Kan wijzen op rechtszijdige lokalisatie, maar hier niet absoluut betrouwbaar"]]} />
      <PBody text={`De uitslag past bij een **ACTH-producerend hypofyse-adenoom**. Later wordt dit alsnog zichtbaar op een nieuwe MRI met een krachtiger apparaat.`} />
    </div>
  )
}
