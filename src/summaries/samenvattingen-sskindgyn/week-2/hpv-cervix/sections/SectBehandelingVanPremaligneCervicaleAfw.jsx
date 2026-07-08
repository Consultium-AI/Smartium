import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling van premaligne cervicale afwijkingen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De behandeling hangt af van de histologische uitslag.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**CIN 1**: expectatief beleid. Na 12 maanden volgt opnieuw cytologisch onderzoek, inclusief HPV-bepaling.`}</Inline></li>
        <li><Inline>{`**CIN 2 of CIN 3**: in principe een **lisexcisie**.`}</Inline></li>
        <li><Inline>{`**Jonge vrouw met kinderwens en CIN 2**: soms kan expectatief beleid verantwoord zijn, met herhaling van het uitstrijkje.`}</Inline></li>
        <li><Inline>{`In studieverband kan behandeling met **imiquimod** worden gegeven in plaats van lisexcisie, met nauwkeurige follow-up.`}</Inline></li>
      </ul>
      <PBody text={`Bij **micro-invasieve** afwijkingen wordt een **exconisatie** verricht. Bij **cervixcarcinoom** hangt het beleid af van het stadium. Als er een discrepantie is tussen cytologie, colposcopische indruk en/of histologie, kan laagdrempelig een diagnostische lisexcisie of conisatie worden gedaan.`} />
      <SubHeading><Inline>{`Tabel 6. Beleid bij histologische uitslagen`}</Inline></SubHeading>
      <DataTable rows={[["Uitslag", "Beleid"], ["CIN 1", "afwachten, controle na 12 maanden"], ["CIN 2", "meestal lisexcisie"], ["CIN 3", "meestal lisexcisie"], ["Micro-invasief", "exconisatie"], ["Cervixcarcinoom", "beleid afhankelijk van stadium"]]} />
    </div>
  )
}
