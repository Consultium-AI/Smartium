import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling van postmenopauzale klachten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De behandeling hangt af van de klachten. Bij vaginale klachten en opvliegers zijn er verschillende mogelijkheden.`}</Inline></p>
      <SubHeading><Inline>{`Lokale behandeling bij vaginale klachten`}</Inline></SubHeading>
      <PBody text={`Bij vaginale klachten heeft **vaginale oestriolbehandeling** de voorkeur. Een gebruikelijk schema is:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`4 weken 1 keer per dag 0,5 mg als ovule of crème via applicator;`}</Inline></li>
        <li><Inline>{`daarna geleidelijk afbouwen naar 2 keer per week 0,5 mg.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Deze behandeling heeft weinig bijwerkingen. De voorkeur is om het niet langer dan een half jaar tot een jaar te gebruiken, omdat er geen gegevens bekend zijn over de risico’s van langer gebruik dan 1 jaar.`}</Inline></p>
      <SubHeading><Inline>{`Hormonale behandeling van opvliegers`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voor algemene klachten zoals opvliegers kan hormonale behandeling worden overwogen.`}</Inline></p>
      <PBody text={`Bij vrouwen **met uterus** kies je voor een combinatie van **oestrogeen en progestageen**:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`in de perimenopauze wordt een progestageen cyclisch toegevoegd;`}</Inline></li>
        <li><Inline>{`in de postmenopauze wordt een progestageen continu toegevoegd.`}</Inline></li>
      </ul>
      <PBody text={`Bij vrouwen met een verhoogd risico op veneuze trombo-embolie, en eventueel ook bij vrouwen met een BMI boven 30, kies je voor **transdermaal estradiol**.`} />
      <PBody text={`Bij vrouwen **zonder uterus** kies je voor een preparaat met alleen oestrogenen.`} />
      <PBody text={`Na 3 maanden moet worden geëvalueerd of de behandeling verlichting geeft. In het algemeen probeer je een postmenopauzale vrouw niet langer dan **5 jaar** te behandelen vanwege het verhoogde risico op mammacarcinoom.`} />
      <SubHeading><Inline>{`Aandachtsvraag`}</Inline></SubHeading>
      <PBody text={`**Waarom krijgt een vrouw met uterus ook een progestageen?**
Omdat oestrogeen alleen het endometrium kan stimuleren. Daarom wordt bij een aanwezige uterus een progestageen toegevoegd.`} />
    </div>
  )
}
