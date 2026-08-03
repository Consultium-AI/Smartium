import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof kun je uitleggen hoe de nier meer doet dan alleen filtreren en uitscheiden. Je kunt beschrijven hoe erytropoëtine (EPO) in de nier wordt gemaakt en hoe dat de aanmaak van rode bloedcellen stimuleert. Ook kun je verklaren hoe verstoringen in de calciumfosfaathuishouding en magnesiumhuishouding ontstaan, en welke rol de nier daarbij speelt. Tot slot kun je op basis van anamnese en laboratoriumonderzoek een behandelplan denken bij hypo- en hypercalciëmie en bij hypomagnesiëmie.`}</Inline></p>
    </div>
  )
}
