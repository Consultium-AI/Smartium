import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Diffuus of lokaal?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij het denken over beenzwelling helpt het om eerst de zwelling te categoriseren. Dat maakt de differentiaaldiagnose veel overzichtelijker.`}</Inline></p>
      <p className="font-semibold text-slate-900 dark:text-slate-100 m-0">
        <Inline>{`Tabel 1. Indeling van beenzwelling naar patroon`}</Inline>
      </p>
      <DataTable rows={[["Patroon", "Voorbeelden"], ["---", "---"], ["Diffuus bilateraal", "hartfalen, nierinsufficiëntie, leverfalen, veneuze hypertensie, lymfoedeem, medicamenteus oedeem"], ["Diffuus unilateraal", "lymfoedeem, posttrombotisch syndroom, diepe veneuze trombose, cellulitis/erysipelas, maligniteit met afvloedbelemmering"], ["Lokaal", "hematoom, insectenbeet, erysipelas, tromboflebitis, tumor, verwonding, compartimentsyndroom"]]} />
    </div>
  )
}
