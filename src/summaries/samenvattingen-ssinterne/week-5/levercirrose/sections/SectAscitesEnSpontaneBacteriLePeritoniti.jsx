import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Ascites en spontane bacteriële peritonitis`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Ascites is vocht in de buikholte en is een belangrijke complicatie van cirrose. Bij een patiënt met ascites moet je altijd denken aan spontane bacteriële peritonitis, oftewel SBP: een infectie van het ascitesvocht zonder duidelijke andere buikbron.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarom doe je een ascitespunctie. In het verkregen vocht bepaal je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het aantal neutrofielen;`}</Inline></li>
        <li><Inline>{`een bacteriologische kweek;`}</Inline></li>
        <li><Inline>{`de SAAG: serum albumine-ascitesgradiënt.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 5. Interpretatie van ascitesonderzoek`}</Inline></SubHeading>
      <DataTable rows={[["Bevinding", "Betekenis"], ["Neutrofielen < 250/mm³", "SBP in principe uitgesloten"], ["Neutrofielen > 250/mm³", "direct starten met antibiotica"], ["Kweek later positief ondanks lage neutrofielen", "bacterascites, alsnog behandelen"], ["SAAG > 1,1 g/dL", "past bij cirrose, alcoholische hepatitis, hartfalen of massale levermetastasen"], ["SAAG < 1,1 g/dL", "past bij peritoneale carcinomatose, tuberculose, pancreatitis, serositis of nefrotisch syndroom"]]} />
      <p className="leading-relaxed"><Inline>{`Bij deze patiënt is opname nodig, omdat het om een levensbedreigende aandoening gaat. Eerst moet SBP worden uitgesloten.`}</Inline></p>
      <SubHeading><Inline>{`Aandachtspunt`}</Inline></SubHeading>
      <PBody text={`**Waarom is een ascitespunctie zo belangrijk?**
Omdat een infectie in ascites snel ernstig kan verlopen en je die niet wilt missen.`} />
    </div>
  )
}
