import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Voorbereiding op het onderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een goede voorbereiding is essentieel, omdat je werkt met radioactief glucose. De patiënt moet daarom:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**6 uur nuchter** zijn;`}</Inline></li>
        <li><Inline>{`niet hard hebben gesport of andere intensieve lichamelijke activiteit hebben gedaan;`}</Inline></li>
        <li><Inline>{`ruim op tijd komen, zodat er geen stress of haast ontstaat;`}</Inline></li>
        <li><Inline>{`bij diabetes: **4 uur nuchter** zijn, maar niet op de ochtend van het onderzoek langwerkende insuline hebben gebruikt.`}</Inline></li>
      </ul>
      <PBody text={`Waarom is dat belangrijk? Omdat glucose en FDG anders vooral naar de **spieren** gaan, waardoor de beelden minder bruikbaar worden.`} />
      <PBody text={`**Aandacht-vraagje:** waarom moet iemand rustig en nuchter zijn voor FDG PET/CT?
**Mini-antwoord:** dan gaat FDG niet vooral naar spieren of andere ongewenste plekken, waardoor de scan beter beoordeelbaar is.`} />
      <SubHeading><Inline>{`Speciale aandachtspunten`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Metformine** kan zorgen voor diffuus verhoogde activiteit in de darmen. Afhankelijk van de indicatie kan dit middel daarom worden gestopt.`}</Inline></li>
        <li><Inline>{`**Kinderen en jongvolwassenen** hebben meer **bruin vet**. Dat is vet dat actief wordt bij kou en glucose gebruikt. Daardoor kan het FDG opnemen.`}</Inline></li>
        <li><Inline>{`Om opname in bruin vet te verminderen kan **propranolol** worden gegeven, een niet-selectieve bètablokker.`}</Inline></li>
        <li><Inline>{`Als je een tumor of infectie in of nabij het **hart** wilt beoordelen, wil je dat de hartspier zelf zo min mogelijk glucose opneemt. Daarom laat je de patiënt dan **12 uur nuchter** zijn en **24 uur koolhydraatarm** eten. Het myocard schakelt dan over op het verbranden van vrije vetzuren.`}</Inline></li>
      </ul>
    </div>
  )
}
