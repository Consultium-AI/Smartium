import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <PBody text={`Renogram en FDG PET/CT zijn twee belangrijke nucleaire onderzoeken waarmee je vooral **functie** en **metabolisme** beoordeelt. Een renogram gebruikt **Tc-99m-MAG-3** om nierfunctie, excretie, afvloed en functieverdeling te bekijken, onder andere bij obstructie en niertransplantatie. FDG PET/CT gebruikt **radioactief glucose** om verhoogd metabolisme zichtbaar te maken, vooral bij **tumor**, **infectie** en **inflammatie**. Bij beide onderzoeken is de **klinische vraagstelling** essentieel voor een goede beoordeling.`} />
    </div>
  )
}
