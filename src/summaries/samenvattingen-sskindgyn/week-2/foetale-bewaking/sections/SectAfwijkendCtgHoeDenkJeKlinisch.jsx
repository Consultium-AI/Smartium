import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Afwijkend CTG: hoe denk je klinisch?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een afwijkend CTG kijk je opnieuw systematisch naar de vijf onderdelen. Vaak helpt het om eerst te bedenken of er een verklaring is in de situatie zelf, zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`weeënstimulatie met oxytocine;`}</Inline></li>
        <li><Inline>{`persfase;`}</Inline></li>
        <li><Inline>{`hypertonie van de uterus;`}</Inline></li>
        <li><Inline>{`navelstrengcompressie;`}</Inline></li>
        <li><Inline>{`placenta-insufficiëntie;`}</Inline></li>
        <li><Inline>{`abruptio placentae;`}</Inline></li>
        <li><Inline>{`uterusruptuur.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Soms is het CTG nog acceptabel, bijvoorbeeld als de variabiliteit later herstelt. Soms is er juist sprake van acute foetale nood en moet de baring snel worden beëindigd.`}</Inline></p>
      <SubHeading><Inline>{`Aandachtsvraag`}</Inline></SubHeading>
      <PBody text={`**Wanneer is direct handelen nodig?**
Bij een preterminaal CTG, of bij een ernstige afwijking zoals persisterende bradycardie met verlies van variabiliteit.`} />
    </div>
  )
}
