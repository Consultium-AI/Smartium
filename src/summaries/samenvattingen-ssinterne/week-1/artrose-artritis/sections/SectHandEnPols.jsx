import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hand en pols`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In de hand en pols zijn vooral de volgende gewrichten belangrijk:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**DIP** = distale interfalangeale gewrichten`}</Inline></li>
        <li><Inline>{`**PIP** = proximale interfalangeale gewrichten`}</Inline></li>
        <li><Inline>{`**MCP** = metacarpofalangeale gewrichten`}</Inline></li>
        <li><Inline>{`**CMC** = carpometacarpale gewrichten`}</Inline></li>
        <li><Inline>{`**STT** = scaphotrapeziotrapezoïdaal gewricht`}</Inline></li>
        <li><Inline>{`**SL** = scapholunair gewricht`}</Inline></li>
        <li><Inline>{`**TFCC** = triangular fibrocartilagineus complex`}</Inline></li>
        <li><Inline>{`**Radiocarpale gewricht**`}</Inline></li>
      </ul>
      <PBody text={`Het **TFCC** is een complex van structuren aan de ulnaire zijde van de pols, met onder andere ligamenten tussen de processus styloideus ulnae, de radius, het lunatum en het triquetrum. Dit complex is vaak aangedaan bij **RA** en **CPPD**. RA en CPPD kunnen ook **carpale instabiliteit** geven, onder andere in het **SL-gewricht**.`} />
      <PBody text={`Een belangrijk onderscheid is dat **RA in principe geen afwijkingen geeft in de DIP-gewrichten**. DIP-afwijkingen passen juist vaker bij **artrose** en **artritis psoriatica**. Het **STT-gewricht** is een voorkeurslokalisatie van **artrose**.`} />
    </div>
  )
}
