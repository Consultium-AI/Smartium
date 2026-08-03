import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe werkt echografie?`}</Inline></SubHeading>
      <PBody text={`Een transducer of probe zendt geluidsgolven uit in het lichaam. Die golven bewegen door verschillende weefsels met verschillende snelheid. Door verschillen in **akoestische impedantie** wordt een deel van de geluidsgolven teruggekaatst. De transducer vangt die echo’s weer op. De computer zet die signalen razendsnel om in een beeld.`} />
      <PBody text={`Omdat dit direct gebeurt, zie je het beeld **real-time** op het scherm.`} />
    </div>
  )
}
