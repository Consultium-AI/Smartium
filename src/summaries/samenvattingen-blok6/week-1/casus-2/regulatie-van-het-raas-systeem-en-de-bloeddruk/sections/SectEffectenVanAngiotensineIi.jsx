import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Effecten van angiotensine II`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Angiotensine II heeft meerdere effecten tegelijk. Het veroorzaakt vasoconstrictie, dus vernauwing van de bloedvaten. Daardoor stijgt de bloeddruk direct. Daarnaast stimuleert het de synthese van aldosteron, verhoogt het de afgifte van catecholaminen, bevordert het de sympathische activiteit, stimuleert het ADH-afgifte en dorst, en zorgt het voor natrium- en waterretentie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Dat maakt angiotensine II tot een krachtig hormoon dat het lichaam helpt om volume en bloeddruk te behouden.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Wat is het primaire effect van angiotensine II?
**Mini-antwoord:** Vasoconstrictie en verhoogde natriumretentie.`} />
      <SubHeading><Inline>{`Tabel 2. Effecten van angiotensine II via AT1-receptoren`}</Inline></SubHeading>
      <DataTable rows={[["Effect", "Gevolg"], ["Vasoconstrictie", "Bloeddruk stijgt"], ["Aldosteronsynthese", "Meer natriumretentie, meer kaliumverlies"], ["ADH-afgifte", "Meer waterretentie"], ["Dorst", "Meer vochtinname"], ["Verhoogde sympathische activiteit", "Extra bloeddrukverhoging"], ["Verhoogde catecholamine-afgifte", "Ondersteunt vasoconstrictie en circulatoire steun"], ["Natrium- en waterretentie", "Toename van volume"]]} />
    </div>
  )
}
