import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat registreert een CTG?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een CTG registreert twee dingen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de foetale hartfrequentie;`}</Inline></li>
        <li><Inline>{`de uterusactiviteit.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De foetale hartfrequentie is het aantal hartslagen per minuut. Die hartfrequentie geeft een indruk van de actuele foetale conditie. Als de foetus bijvoorbeeld hypoxie krijgt door navelstrengcompressie of verminderde placentadoorbloeding, kan dat direct zichtbaar worden als een verandering in de hartfrequentie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De uterusactiviteit laat zien hoe vaak en hoe sterk de baarmoeder samentrekt. Dat is belangrijk, omdat contracties de doorbloeding van de placenta tijdelijk kunnen beïnvloeden. Juist daarom moet je niet alleen naar het hartfilmpje kijken, maar ook naar de weeënregistratie.`}</Inline></p>
      <SubHeading><Inline>{`Aandachtsvraag`}</Inline></SubHeading>
      <PBody text={`**Waarom kijk je altijd naar zowel hartfrequentie als uterusactiviteit?**
Omdat contracties de foetale oxygenatie kunnen beïnvloeden. Zonder de weeënregistratie mis je dus een belangrijk deel van het verhaal.`} />
    </div>
  )
}
