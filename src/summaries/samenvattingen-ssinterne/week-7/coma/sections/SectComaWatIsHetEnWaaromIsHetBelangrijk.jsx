import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Coma: wat is het en waarom is het belangrijk?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Coma is een ernstige toestand. Een patiënt die comateus is, kan levensgevaarlijk ziek zijn. Daarom moet je bij een verlaagd bewustzijn altijd snel denken aan direct bedreigende oorzaken en eerst zorgen dat de patiënt stabiel blijft. Pas daarna ga je verder zoeken naar de onderliggende oorzaak.`}</Inline></p>
      <PBody text={`Bewustzijn bestaat uit twee onderdelen: de **inhoud** en de **activering**. De inhoud gaat over wat iemand waarneemt, denkt, voelt en wil. De activering gaat over de mate van aandacht voor de omgeving. Bij een somatische oorzaak van bewustzijnsdaling is vooral de activering verminderd; de inhoud verandert dan vaak mee of verdwijnt. Als vooral de inhoud van het bewustzijn gestoord is, past dat eerder bij een psychiatrisch probleem. Voor normale wekbaarheid is het functioneren van ten minste één hersenhelft nodig.`} />
      <PBody text={`**Aandachtsvraag:** wat bedoelen we met coma?
**Mini-antwoord:** een patiënt opent de ogen niet bij aanspreken of pijnprikkels, voert geen opdrachten uit en geeft geen verbale reactie.`} />
      <PBody text={`Bij coma is de EMV-score maximaal **8 of lager**. De diepte van de bewustzijnsdaling leid je dan vooral af uit de motorische reactie op pijnprikkels.`} />
    </div>
  )
}
