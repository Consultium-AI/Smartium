import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`MRI bij melanoom en hersenmetastasen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij melanoom speelt MRI vooral een rol bij het opsporen van hersenmetastasen. MRI is hiervoor de gouden standaard, vooral omdat kleine metastasen beter zichtbaar zijn dan op CT.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Of je routinematig een MRI hersenen maakt, hangt af van het stadium:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**stadium I t/m IIIA**: geen routinematige MRI, alleen bij klachten;`}</Inline></li>
        <li><Inline>{`**stadium IV**: MRI op indicatie, bijvoorbeeld bij klachten, bij beoordeling vóór bepaalde systeemtherapieën of bij follow-up van bekende hersenmetastasen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij melanoommetastasen kunnen verschillende MRI-sequenties helpen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`op **T1** kunnen melanoommetastasen hyperintens zijn door melanine;`}</Inline></li>
        <li><Inline>{`op **T2** zie je vaak oedeem;`}</Inline></li>
        <li><Inline>{`op **FLAIR** is oedeem goed zichtbaar;`}</Inline></li>
        <li><Inline>{`op **T1 na contrast** kleuren metastasen sterk aan.`}</Inline></li>
      </ul>
      <PBody text={`**Aandachtsvraag:** welke sequenties zijn het beste voor het herkennen van hersenoedeem?
**Mini-antwoord:** T2 en FLAIR.`} />
    </div>
  )
}
