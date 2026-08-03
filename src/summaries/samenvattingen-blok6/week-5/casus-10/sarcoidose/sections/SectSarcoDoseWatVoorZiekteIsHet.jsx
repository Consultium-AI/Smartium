import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Sarcoïdose: wat voor ziekte is het?`}</Inline></SubHeading>
      <PBody text={`Sarcoïdose is een **multisysteem granulomateuze aandoening**. Dat betekent dat meerdere orgaansystemen betrokken kunnen zijn en dat er **granulomen** ontstaan: kleine ontstekingshaarden die bestaan uit samengeklonterde afweercellen. Bij sarcoïdose gaat het om **niet-necrotiserende granulomen**. Necrose betekent weefselafsterving; bij deze ziekte is dat dus niet het kenmerkende beeld.`} />
      <PBody text={`De granulomen en de daaropvolgende **fibrose** kunnen klachten veroorzaken in de longen en andere organen. Soms geven ze direct klachten, maar soms worden ze ook toevallig ontdekt bij een thoraxfoto of CT-scan die om een andere reden is gemaakt.`} />
      <PBody text={`**Vraagje:** waarom is sarcoïdose zo lastig te herkennen?
**Kort antwoord:** omdat het ziektebeeld sterk kan verschillen per patiënt en per orgaan dat betrokken is.`} />
    </div>
  )
}
