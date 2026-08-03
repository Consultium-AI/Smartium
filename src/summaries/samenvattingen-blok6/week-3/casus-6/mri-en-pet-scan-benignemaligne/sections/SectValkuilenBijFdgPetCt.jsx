import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Valkuilen bij FDG PET/CT`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Niet alles wat FDG-positief is, is kanker. Dat is een belangrijke valkuil.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Na chemo- of radiotherapie kan lokale ontsteking ontstaan, met verhoogde glucoseopname. Dat kan lijken op resttumor of recidief. Daarom wacht men bij voorkeur:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`ongeveer 4 weken na chemotherapie;`}</Inline></li>
        <li><Inline>{`ongeveer 12 weken na radiotherapie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Ook infecties kunnen op follow-upscans zichtbaar worden, bijvoorbeeld pneumonie. Immunotherapie kan eveneens FDG-positieve bijwerkingen geven, zoals ontsteking in verschillende organen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een andere valkuil is dat kleine huidafwijkingen, wondjes of puistjes FDG-opname kunnen geven. Daarom is klinische correlatie belangrijk: inspectie van de huid of het gebied kan duidelijk maken dat het geen tumor is.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 5. Veelvoorkomende valkuilen bij FDG PET/CT`}</Inline></SubHeading>
      <DataTable rows={[["Oorzaak van FDG-opname", "Waarom verwarrend?"], ["Postoperatieve verandering", "Kan lijken op recidief"], ["Na chemo/radiotherapie", "Ontsteking geeft FDG-opname"], ["Infectie", "Kan op metastasen lijken"], ["Immunotherapie-bijwerking", "Kan meerdere organen aantasten"], ["Huidwondje of puistje", "Kleine FDG-positieve focus"]]} />
    </div>
  )
}
