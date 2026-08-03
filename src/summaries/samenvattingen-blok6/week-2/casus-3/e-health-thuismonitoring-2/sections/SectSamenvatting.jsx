import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Thuismonitoring is digitale zorg op afstand, vooral bedoeld voor chronische aandoeningen. Bij hartfalen is er bewijs dat remote patient monitoring sterfte en eerste opnames kan verminderen, vooral als zelfmanagement, educatie en videobellen worden toegevoegd. Invasief monitoren is een intensievere vorm, bijvoorbeeld met een sensor in de pulmonale arterie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Hospital at Home en virtuele ziekenhuizen gaan verder dan gewone thuismonitoring. Hospital at Home biedt ziekenhuiszorg thuis voor patiënten die eigenlijk opname nodig hebben. Een virtueel ziekenhuis vult lokale zorg aan met specialistische zorg op afstand. Deze vormen kunnen klinisch nuttig zijn, maar zijn niet automatisch goedkoper. Patiënten zijn overwegend positief over thuismonitoring, vooral vanwege tijdwinst, meer regie en gemak. Tegelijk blijven minder persoonlijk contact, technische problemen en digitale vaardigheden belangrijke nadelen.`}</Inline></p>
    </div>
  )
}
