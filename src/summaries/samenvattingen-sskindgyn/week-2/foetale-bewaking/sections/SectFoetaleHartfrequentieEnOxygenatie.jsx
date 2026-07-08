import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Foetale hartfrequentie en oxygenatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De foetale hartslag wordt gereguleerd via meerdere mechanismen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de baroreceptorreflex: stijgende bloeddruk leidt tot daling van de hartfrequentie;`}</Inline></li>
        <li><Inline>{`de chemoreceptorreflex: reageert op zuurstofspanning, kooldioxidespanning en waterstofionen;`}</Inline></li>
        <li><Inline>{`het evenwicht tussen sympathische en parasympathische activiteit: dit zie je terug in de beat-to-beat variatie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De foetale oxygenatie hangt af van:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een goed werkende placenta;`}</Inline></li>
        <li><Inline>{`voldoende foetale doorbloeding;`}</Inline></li>
        <li><Inline>{`goede uitwisseling van zuurstof tussen maternaal en foetaal bloed;`}</Inline></li>
        <li><Inline>{`een goede doorbloeding van de uterus.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Als de uteriene doorbloeding vermindert, bijvoorbeeld door hypertensieve aandoeningen of door contracties, kan de foetus sneller tekenen van hypoxie laten zien. Ook placenta-insufficiëntie, abruptio placentae en navelstrengcompressie kunnen de oxygenatie verstoren.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De snelheid waarmee afwijkingen op het CTG ontstaan, hangt af van de placentare reserve en de foetale reserve. Als die reserve klein is, kan al beperkte belasting snel tot afwijkingen leiden.`}</Inline></p>
    </div>
  )
}
