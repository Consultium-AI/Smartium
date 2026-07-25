import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische voorbeelden`}</Inline></SubHeading>
      <SubHeading><Inline>{`Longkanker`}</Inline></SubHeading>
      <PBody text={`Bij verdenking op **longkanker** krijgt een patiënt in principe een FDG PET/CT voor **stadiëring**. Dat betekent dat je kijkt hoe uitgebreid de ziekte is. In een voorbeeldcasus was op de thoraxfoto een tumor in het rechter onderveld zichtbaar, waarna de PET/CT werd aangevraagd.`} />
      <SubHeading><Inline>{`Koorts zonder focus bij een kind`}</Inline></SubHeading>
      <PBody text={`Bij een kind met **koorts zonder focus** kan FDG PET/CT helpen om een infectiebron op te sporen. In een voorbeeld was er stapeling in de rechternier op twee plaatsen met een ringvorm, passend bij **nierabcessen** of **geïnfecteerde niercysten**. Daarnaast was er diffus verhoogde stapeling in **beenmerg** en **milt**. Dat past bij een reactieve toestand, bijvoorbeeld bij **sepsis** of na **chemotherapie**.`} />
      <SubHeading><Inline>{`Vasculitis`}</Inline></SubHeading>
      <PBody text={`Bij een patiënte met vage klachten, verhoogde **bezinking** en **CRP**, subfebriele temperatuur, anemie en spier-/lichaamspijnen, maar zonder aanwijzingen voor infectie of arteritis temporalis/polymyalgia rheumatica, kan FDG PET/CT een **vasculitis** aantonen. Dan zie je stapeling in de **vaatwand van grote vaten**. Als er geen verhoogde stapeling in de gewrichten is, zijn er geen aanwijzingen voor PMR.`} />
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
