import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`4. Surveillance medicine: de zieke mens als risicoprofiel`}</Inline></SubHeading>
      <PBody text={`Na 1900 beschreef David Armstrong een nieuwe medische kosmologie: **surveillance medicine**. Deze vorm van geneeskunde hoort vooral bij de preventieve gezondheidszorg van de 20e eeuw.`} />
      <PBody text={`Het uitgangspunt is hier niet langer de individuele zieke patiënt, maar de **gezonde of nog niet zieke populatie**. De aandacht verschuift naar het vroeg opsporen van afwijkingen, risicofactoren en pre-ziekten. Iemand kan dus ook ziek of ongezond zijn zonder klachten te hebben.`} />
      <PBody text={`Ziekte wordt in dit denkkader gezien als een **afwijking van het statistisch normale**. De grens tussen gezond en ziek vervaagt. Er ontstaat een continuüm: normaal, hoog-normaal, risicovol, pre-ziek. Bloeddruk, cholesterol en BMI worden vergeleken met populatiegemiddelden. Op basis van statistische afwijkingen kan iemand als patiënt worden beschouwd, ook als hij zich nog gezond voelt.`} />
      <PBody text={`De diagnostiek krijgt hier een duidelijk **derdepersoonsperspectief**: niet het verhaal van de patiënt staat centraal, maar cijfers en statistische verdelingen.`} />
      <PBody text={`**Kern van surveillance medicine**`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`ziekte als **statistische afwijking**;`}</Inline></li>
        <li><Inline>{`aandacht voor **pre-ziekten** en risicofactoren;`}</Inline></li>
        <li><Inline>{`diagnostiek op basis van populatiegegevens;`}</Inline></li>
        <li><Inline>{`patiënt als **risicoprofiel**;`}</Inline></li>
        <li><Inline>{`herkenbaar in epidemiologie, preventieve geneeskunde en sociale geneeskunde.`}</Inline></li>
      </ul>
      <PBody text={`**Tabel 2. Ziektebegrip en diagnostiek per denkkader**`} />
      <DataTable rows={[["Denkkader", "Ziektebegrip", "Diagnostiek"], ["Bedside", "Holistische wisselwerking tussen individu en omgeving", "Anamnese, verhaal van de patiënt"], ["Hospital", "Anatomische laesie op een bepaalde plaats", "Lichamelijk onderzoek"], ["Laboratory", "Verstoorde functie en proces in de tijd", "Aanvullende diagnostiek"], ["Surveillance", "Continuüm tussen normaal en afwijkend", "Statistische vergelijking met populatie"], ["E-scaped / informational", "Geïndividualiseerd dataprofil en risicopredictie", "Monitoring van biomarkers en big data"]]} />
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
