import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Risicofactoren en preventie`}</Inline></SubHeading>
      <PBody text={`Uit dit denken ontstond het begrip **risicofactor**. Dat begrip kwam oorspronkelijk uit de levensverzekeringswereld, waar men keek naar groepen met een verhoogd financieel risico. Later werd het in de geneeskunde belangrijk, vooral door epidemiologische studies zoals de Framingham Heart Study.`} />
      <PBody text={`Daarmee verschoof de aandacht van individuele ziekte naar statistische verbanden tussen waarden en latere ziekte. Bloeddruk werd zo een **risicofactor** voor hart- en vaatziekten.`} />
      <PBody text={`De beschikbaarheid van nieuwe medicijnen speelde hierbij een grote rol. Thiazidediuretica maakten massabehandeling mogelijk, ook bij mildere vormen van hypertensie. Daardoor werd het gerechtvaardigd om niet alleen een duidelijke ziekte, maar ook een **risico** te behandelen.`} />
    </div>
  )
}
