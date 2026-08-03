import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waarom zorg op afstand?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De eerste reden is simpel: soms is fysiek contact moeilijk of zelfs onmogelijk. Dat gold tijdens de pandemie, maar ook in alledaagse situaties. Denk bijvoorbeeld aan een patiënt die op vakantie is en een medische vraag heeft.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Maar los van noodsituaties is er eigenlijk een bredere vraag: waarom zou je zorg níét op afstand organiseren als het ook anders kan? Digitale oplossingen maken veel dingen in het dagelijks leven makkelijker, zoals eten bestellen, bankzaken regelen en reizen boeken. Medische zorg zou ook toegankelijker kunnen zijn. Dat levert de patiënt vooral tijdswinst en minder reiskosten op.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een belangrijk voordeel is bovendien dat de patiënt zelf metingen thuis kan doen, bijvoorbeeld van de bloeddruk. Daarmee krijgt de patiënt meer regie over de eigen gezondheid. De zorg verschuift dan van zorg die vooral rond de arts en het ziekenhuis is georganiseerd, naar zorg die meer rond de patiënt is georganiseerd.`}</Inline></p>
      <SubHeading><Inline>{`Voordelen voor de patiënt`}</Inline></SubHeading>
      <DataTable rows={[["Voordeel", "Uitleg"], ["Metingen thuis", "De patiënt kan zelf bijvoorbeeld bloeddruk meten."], ["Meer regie", "De patiënt krijgt meer invloed op de eigen gezondheid en zorg."], ["Minder reistijd en -kosten", "Er zijn minder ziekenhuisbezoeken nodig."]]} />
      <PBody text={`**Aandachtsvraag:** Waarom is dat belangrijk voor de patiënt?
**Mini-antwoord:** Omdat zorg dan minder afhankelijk wordt van reizen en ziekenhuisbezoeken, en meer past bij het dagelijks leven van de patiënt.`} />
    </div>
  )
}
