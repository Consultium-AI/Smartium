import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Radiologie van het abdomen draait om het herkennen van normale anatomie en het leren zien van belangrijke afwijkingen. Op een CT-abdomen moet je de organen, vaten, darmen, spieren en het skelet systematisch bekijken. Op een buikoverzichtfoto let je vooral op darmgas, vrije lucht, stenen en grove afwijkingen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijke structuren zoals de lever, milt, nieren, pancreas, maag, duodenum, colon, aorta, vena cava inferior en vena porta moeten je vertrouwd worden. Klinisch zijn vooral levercirrose met varices, acute cholecystitis, appendicitis en perforatie belangrijke beelden om te herkennen.`}</Inline></p>
    </div>
  )
}
