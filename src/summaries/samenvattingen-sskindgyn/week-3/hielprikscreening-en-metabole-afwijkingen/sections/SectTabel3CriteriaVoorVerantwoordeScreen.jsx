import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 3. Criteria voor verantwoorde screening`}</Inline></SubHeading>
      <DataTable rows={[["Criteria", "Betekenis"], ["Belangrijk gezondheidsprobleem", "de ziekte moet relevant zijn"], ["Behandelingsmethode beschikbaar", "er moet iets aan te doen zijn"], ["Voorzieningen voor diagnose en behandeling", "zorg moet beschikbaar zijn"], ["Herkenbaar vroeg stadium", "de ziekte moet vroeg op te sporen zijn"], ["Betrouwbare opsporingsmethode", "de test moet goed werken"], ["Aanvaardbaar voor de bevolking", "de test moet acceptabel zijn"], ["Natuurlijk verloop bekend", "je moet weten hoe de ziekte zich ontwikkelt"], ["Overeenstemming over wie behandeld wordt", "ook mildere vormen moeten afgewogen worden"], ["Kosten acceptabel", "kosten moeten in verhouding staan"], ["Continu proces", "screening moet structureel zijn"]]} />
      <p className="leading-relaxed"><Inline>{`Later zijn hier nog WHO-criteria aan toegevoegd, zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een erkende behoefte;`}</Inline></li>
        <li><Inline>{`een vooraf vastgesteld doel;`}</Inline></li>
        <li><Inline>{`een vastgestelde doelgroep;`}</Inline></li>
        <li><Inline>{`wetenschappelijk bewezen effectiviteit;`}</Inline></li>
        <li><Inline>{`goede scholing en programmamanagement;`}</Inline></li>
        <li><Inline>{`borging van kwaliteit;`}</Inline></li>
        <li><Inline>{`respect voor privacy en autonomie;`}</Inline></li>
        <li><Inline>{`toegankelijkheid voor de hele doelgroep;`}</Inline></li>
        <li><Inline>{`evaluatie vanaf het begin;`}</Inline></li>
        <li><Inline>{`voordelen moeten opwegen tegen de nadelen.`}</Inline></li>
      </ul>
      <PBody text={`**Aandacht-vraagje:** Waarom is een goede screening meer dan alleen een test?
**Mini-antwoord:** Omdat ook organisatie, behandeling, kwaliteit en ethische aspecten goed geregeld moeten zijn.`} />
    </div>
  )
}
