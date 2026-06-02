import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Tabel 1. Hoofdgroepen van oorzaken`}</Inline></SubHeading>
      <DataTable rows={[["Hoofdgroep", "Voorbeelden"], ["---", "---"], ["Vasculair", "Trombose, idiopathisch, paraneoplastisch, door compressie, iatrogeen"], ["Inflammatoir", "Vasculitis"], ["Lymfatisch", "Iatrogeen, infectieus, maligne"], ["Borstklierweefsel", "Cyste, fibroadenoom, mammacarcinoom"]]} />
      <p className="leading-relaxed"><Inline>{`Binnen de lymfatische oorzaken zijn er meerdere belangrijke subgroepen. Iatrogeen betekent dat het door medische behandeling komt, bijvoorbeeld na radiotherapie of lymfklierchirurgie. Infectieuze oorzaken zijn onder andere lymfadenitis en lymfadenopathie door bacteriën, virussen of andere verwekkers. Maligne oorzaken zijn bijvoorbeeld lymfangitis carcinomatosis, metastasen die de afvloed blokkeren, of een maligne lymfoom.`}</Inline></p>
      <PBody text={`**Aandacht-vraag:** waarom is de voorgeschiedenis zo belangrijk bij een dik been of een gezwollen arm?
**Kort antwoord:** omdat eerdere operatie, bestraling of lymfklierverwijdering de lymfeafvoer kan beschadigen en zo lymfoedeem kan veroorzaken.`} />
    </div>
  )
}
