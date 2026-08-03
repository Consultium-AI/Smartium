import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Kruisreactiviteit van de urinstick`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De urinstick reageert op hemoglobine-achtige peroxidase-activiteit. Daardoor kunnen ook andere stoffen een positieve reactie geven.`}</Inline></p>
      <SubHeading><Inline>{`Vrij hemoglobine`}</Inline></SubHeading>
      <PBody text={`Bij **hemolyse** gaan erytrocyten kapot en komt vrij hemoglobine in het bloed. Dat hemoglobine kan in de urine terechtkomen en een positieve stick geven. Hemoglobine is een groot molecuul en wordt normaal niet makkelijk gefiltreerd, maar bij veel vrij hemoglobine kan de stick toch reageren.`} />
      <p className="leading-relaxed"><Inline>{`Het onderscheid tussen erytrocyten in de urine en vrij hemoglobine maak je door:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het **urinesediment** te bekijken;`}</Inline></li>
        <li><Inline>{`de **afgedraaide urine** te beoordelen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij vrij hemoglobine ontbreken erytrocyten in het sediment, terwijl de urine na centrifugeren rood verkleurd kan blijven omdat het vrije hemoglobine in de vloeistof blijft.`}</Inline></p>
      <SubHeading><Inline>{`Myoglobine`}</Inline></SubHeading>
      <PBody text={`Bij **rhabdomyolyse** komt myoglobine vrij uit spierweefsel. Myoglobine is kleiner dan hemoglobine en wordt daardoor makkelijker gefiltreerd. De urinstick reageert echter ook op myoglobine. Daardoor kan de urine rood of bruin zijn, terwijl er geen erytrocyten in zitten.`} />
      <p className="leading-relaxed"><Inline>{`Ook hier geldt: sedimentonderzoek en beoordeling van de gecentrifugeerde urine helpen om het onderscheid te maken.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** waarom kan de stick positief zijn zonder erytrocyten?
**Mini-antwoord:** omdat de stick reageert op hemoglobine-activiteit, en ook vrij hemoglobine of myoglobine die reactie kan geven.`} />
    </div>
  )
}
