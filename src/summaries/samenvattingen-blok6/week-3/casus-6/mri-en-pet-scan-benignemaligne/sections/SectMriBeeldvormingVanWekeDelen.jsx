import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`MRI: beeldvorming van weke delen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`MRI staat voor Magnetic Resonance Imaging. Hierbij worden sterke magneetvelden en radiogolven gebruikt om gedetailleerde beelden te maken. MRI is vooral geschikt voor weke delen, zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`organen;`}</Inline></li>
        <li><Inline>{`spieren;`}</Inline></li>
        <li><Inline>{`pezen;`}</Inline></li>
        <li><Inline>{`hersenweefsel.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Een groot voordeel is dat MRI geen ioniserende straling gebruikt. Er is dus geen stralingsbelasting voor de patiënt. Wel is MRI gevoelig voor beweging en metalen voorwerpen.`}</Inline></p>
      <SubHeading><Inline>{`Hoe werkt MRI in grote lijnen?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`MRI maakt gebruik van de eigenschappen van waterstofatomen in het lichaam. Door een sterk magneetveld en radiogolven worden protonen aangeslagen. Het signaal dat daarna vrijkomt, wordt opgevangen en omgezet in een beeld.`}</Inline></p>
      <SubHeading><Inline>{`MRI-sequenties`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`MRI kent verschillende sequenties, die elk andere eigenschappen laten zien:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**T1**: vooral anatomische details;`}</Inline></li>
        <li><Inline>{`**T2**: goed voor vocht en ontsteking;`}</Inline></li>
        <li><Inline>{`**FLAIR**: vooral nuttig bij hersenonderzoek;`}</Inline></li>
        <li><Inline>{`**DWI**: belangrijk bij acuut herseninfarct;`}</Inline></li>
        <li><Inline>{`**T1 met gadolinium**: voor tumoren en ontstekingen/infecties.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 4. Belangrijkste MRI-sequenties`}</Inline></SubHeading>
      <DataTable rows={[["Sequentie", "Waarvoor nuttig?"], ["T1", "Anatomie"], ["T2", "Vocht, ontsteking, oedeem"], ["FLAIR", "Hersenen, oedeem zichtbaar maken"], ["DWI", "Acuut infarct"], ["T1 + gadolinium", "Tumoren, ontsteking, infectie"]]} />
    </div>
  )
}
