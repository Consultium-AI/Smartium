import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Associatie met syndromen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Aangeboren hartafwijkingen kunnen samen voorkomen met syndromen. Een bekend voorbeeld is het syndroom van Down, waarbij veel kinderen een hartafwijking hebben, zoals VSD, ASD of AVSD.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Tetralogie van Fallot is sterk geassocieerd met 22q11-deletie. Ongeveer 20% van de patiënten met Tetralogie van Fallot heeft deze deletie; de overige 80% heeft een niet-syndromale vorm. 22q11-deletie staat ook bekend als DiGeorge-syndroom, velocardiofaciaalsyndroom of CATCH 22.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`CATCH staat voor:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`cardiac disorders;`}</Inline></li>
        <li><Inline>{`abnormal facial features;`}</Inline></li>
        <li><Inline>{`thymic hypoplasia;`}</Inline></li>
        <li><Inline>{`cleft lip and palate.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij 22q11-deletie kunnen verschillende problemen voorkomen, zoals afwijkingen van het gehemelte, voedings- en slikproblemen, spraakvertraging, tandafwijkingen, leerproblemen, ontwikkelingsvertraging, gedrags- of psychiatrische problemen, hartafwijkingen, nierafwijkingen, skeletafwijkingen, immunodeficiëntie en neurologische problemen.`}</Inline></p>
    </div>
  )
}
