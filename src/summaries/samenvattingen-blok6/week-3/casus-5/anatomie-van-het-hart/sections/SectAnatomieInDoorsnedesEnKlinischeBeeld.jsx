import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Anatomie in doorsnedes en klinische beelden`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De anatomische relaties van het hart zijn goed te bestuderen in doorsnedes. Dat is belangrijk, omdat je dezelfde oriëntatie nodig hebt bij het lezen van CT- en MRI-beelden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In een axiale CT-scan ter hoogte van T8 zijn alle atria en ventrikels zichtbaar. Ook de atrioventriculaire kleppen zijn te herkennen. De oesofagus ligt direct tegen het linker atrium aan. Die nauwe ligging wordt benut bij transeosofageale echocardiografie, waarbij een echosonde via de slokdarm wordt ingebracht om betere beelden van het hart te krijgen dan bij een gewone transthoracale echo.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In doorsneden op deze hoogte zijn ook grote vaten zichtbaar, zoals de vena pulmonalis dextra, de aorta descendens en de vena azygos. Verder kunnen lymfeknopen zichtbaar zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Nog iets hoger, ter hoogte van T6, zijn opnieuw belangrijke structuren te herkennen, waaronder de vena azygos, de rechter en linker bronchus principalis, de rechter en linker a. pulmonalis, de vena cava superior, de truncus pulmonalis, de aorta en de aorta descendens. Ook hier kunnen lymfeknopen worden gezien.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 4. Structuren die je in thoracale doorsnedes kunt herkennen`}</Inline></SubHeading>
      <DataTable rows={[["Hoogte", "Belangrijke structuren"], ["T8", "atria, ventrikels, mitralisklep, tricuspidalisklep, oesofagus, vena pulmonalis dextra, aorta descendens, vena azygos"], ["T6", "vena azygos, bronchi principales, aa. pulmonales, vena cava superior, truncus pulmonalis, aorta, aorta descendens"]]} />
    </div>
  )
}
