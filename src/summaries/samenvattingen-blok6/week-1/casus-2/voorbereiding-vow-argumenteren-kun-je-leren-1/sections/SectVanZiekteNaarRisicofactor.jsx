import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Van ziekte naar risicofactor`}</Inline></SubHeading>
      <PBody text={`De geschiedenis van hypertensie laat zien hoe geneeskunde verschoof van **laboratory medicine** naar **surveillance medicine**, en later ook naar **informational medicine**.`} />
      <PBody text={`Tot ver in de jaren 1950 betekende hypertensie iets anders dan nu. Alleen patiënten met duidelijke, ernstige vormen, vooral **maligne hypertensie**, kregen behandeling. Dat waren patiënten met sterke bloeddrukverhoging en duidelijke pathologische effecten.`} />
      <PBody text={`Daarna veranderde het denken. Hypertensie werd opnieuw gedefinieerd als een **kwantitatieve aandoening**: het uiterste punt van een normaal verdeelde curve. De grens tussen normaal en pathologisch werd steeds vager. Vooral vanaf het einde van de jaren 1950 en het begin van de jaren 1960 ontstond hierover een hevig debat.`} />
    </div>
  )
}
