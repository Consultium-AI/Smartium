import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Vruchtbaarheid: basisbegrippen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Vruchtbaarheid betekent het vermogen om in een bepaalde cyclus zwanger te worden. Bij kinderwens is het belangrijk om de begrippen goed uit elkaar te houden, omdat ze in de praktijk vaak door elkaar gebruikt worden.`}</Inline></p>
      <PBody text={`**Tabel 1. Belangrijke definities**`} />
      <DataTable rows={[["Begrip", "Betekenis"], ["Vruchtbaarheid", "Het vermogen om in een bepaalde cyclus zwanger te worden"], ["Subfertiliteit", "Verminderd vermogen om tot een zwangerschap te komen"], ["Infertiliteit", "Het onvermogen om een zwangerschap te bewerkstelligen"], ["Steriliteit", "Absoluut onvermogen om zwanger te worden"], ["Primaire subfertiliteit", "Verminderde vruchtbaarheid waarbij nog nooit een zwangerschap is opgetreden"], ["Secundaire subfertiliteit", "Verminderde vruchtbaarheid waarbij ooit een zwangerschap is opgetreden"], ["OFO", "Oriënterend fertiliteitsonderzoek"]]} />
      <p className="leading-relaxed"><Inline>{`Subfertiliteit betekent dus dat een paar na 12 maanden regelmatige onbeschermde geslachtsgemeenschap nog niet zwanger is geworden. Dat is iets anders dan infertiliteit of steriliteit. Bij subfertiliteit is spontane zwangerschap nog wel mogelijk, eventueel ook na behandeling. Bij infertiliteit is er geen spontane zwangerschap mogelijk, maar behandeling kan soms nog wel helpen. Bij steriliteit is zwangerschap helemaal niet mogelijk.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Wanneer spreek je van subfertiliteit?
**Mini-antwoord:** Als er na 1 jaar regelmatige onbeschermde coïtus nog geen zwangerschap is ontstaan.`} />
    </div>
  )
}
