import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling en vervolg`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na afname van de urinekweek start je antibiotica. Als het kind spuugt, geef je de antibiotica intraveneus. Bij een bewezen UWI met een ernstig beloop kan cefotaxim worden gegeven.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Wanneer de koorts afneemt en de infectieparameters verbeteren, is dat een goed teken. Als de nierfunctie zich herstelt, is dat eveneens gunstig. Toch blijft follow-up belangrijk, zeker als er sprake was van een gecompliceerd beloop of duidelijke afwijkingen van de urinewegen.`}</Inline></p>
      <SubHeading><Inline>{`Waarom follow-up nodig is`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Er zijn meerdere redenen om een kind met een gecompliceerde UWI onder controle te houden bij de kinderarts of kinderuroloog:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`De nierfunctie moet gecontroleerd worden na een gestoorde nierfunctie.`}</Inline></li>
        <li><Inline>{`Er is een indicatie voor een DMSA-scan na enkele maanden om littekenvorming op te sporen.`}</Inline></li>
        <li><Inline>{`De afwijking van de urinewegen moet vervolgd worden, inclusief blaasfunctie, bijvoorbeeld met uroflow en mictielijsten.`}</Inline></li>
        <li><Inline>{`Bij recidiverende UWI’s in combinatie met hooggradige reflux kan antibiotische profylaxe nodig zijn.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 8. Redenen voor follow-up`}</Inline></SubHeading>
      <DataTable rows={[["Reden", "Wat wordt gevolgd?"], ["Gestoorde nierfunctie", "Herstel en verdere nierfunctiecontrole"], ["Kans op littekenvorming", "DMSA-scan"], ["Urinewegafwijking", "Anatomie en blaasfunctie"], ["Hooggradige reflux met recidieven", "Eventuele antibiotische profylaxe"]]} />
    </div>
  )
}
