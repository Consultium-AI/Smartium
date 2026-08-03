import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Mediastinum, zenuwen en grote vaten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het midden van de thorax wordt ingenomen door het mediastinum. Daarin liggen het hart, de trachea, de oesophagus en de grote vaten. Als de longen en pleura worden weggehaald, worden deze structuren goed zichtbaar, samen met enkele grote zenuwen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij het hilum zijn de bronchiën, de arteria pulmonales en de vena pulmonales te zien. Ventraal van het hilum ligt het pericard, met daaroverheen de rechter nervus phrenicus. Meer dorsaal loopt de rechter nervus vagus. Een deel van de nervus vagus loopt onder het hilum langs de oesophagus richting de buik.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Naast de wervellichamen loopt de sympathische grensstreng, ook wel truncus sympathicus genoemd. Daarin liggen de sympathische ganglia met perifere sympathische zenuwcellen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Ook de grote venen in de thorax zijn belangrijk. De vena brachiocephalica rechts en de vena azygos sluiten aan op de vena cava superior. De vena azygos verzorgt de veneuze afvoer van de thoraxwand.`}</Inline></p>
    </div>
  )
}
