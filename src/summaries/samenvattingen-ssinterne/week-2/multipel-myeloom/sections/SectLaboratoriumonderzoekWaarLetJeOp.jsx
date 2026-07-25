import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Laboratoriumonderzoek: waar let je op?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij aanvullend bloedonderzoek vallen in deze casus meerdere afwijkingen op:`}</Inline></p>
      <DataTable rows={[["Onderzoek", "Uitslag"], ["BSE", "78 mm/uur"], ["Hb", "6,8 mmol/l"], ["Trombocyten", "120 x 10^9/l"], ["Leucocyten", "5 x 10^9/l"], ["Calcium", "2,25 mmol/l"], ["Albumine", "35 g/l"], ["Totaal eiwit", "90 g/l"], ["Kreatinine", "130 µmol/l"]]} />
      <PBody text={`De combinatie van een **hoge BSE**, **anemie**, **verhoogd totaal eiwit** en **verhoogd creatinine** past goed bij multipel myeloom. De BSE is vaak verhoogd doordat er veel afwijkende eiwitten in het bloed aanwezig zijn.`} />
      <SubHeading><Inline>{`Bloeduitstrijkje: geldrolvorming`}</Inline></SubHeading>
      <PBody text={`Bij multipel myeloom kun je in het bloeduitstrijkje **geldrolvorming** van erytrocyten zien. Dat betekent dat rode bloedcellen als het ware op elkaar gaan liggen in stapeltjes, zoals munten.`} />
      <p className="leading-relaxed"><Inline>{`Dit ontstaat doordat het gehalte aan immunoglobulinen verhoogd is. Daardoor daalt de oppervlaktelading van de erytrocyten, waardoor ze makkelijker samenklonteren.`}</Inline></p>
      <SubHeading><Inline>{`Aandachtsvraag`}</Inline></SubHeading>
      <PBody text={`**Wat is geldrolvorming ook alweer?**
Dat is het in stapeltjes liggen van erytrocyten, passend bij een verhoogde hoeveelheid immunoglobulinen in het bloed.`} />
    </div>
  )
}
