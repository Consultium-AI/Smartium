import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Doseren van stollingsfactoren`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij doseren van factor VIII of IX moet je weten hoeveel de spiegel moet stijgen. De formule is:`}</Inline></p>
      <PBody text={`**Gewenste stijging = streefplasmaspiegel - bestaande factorconcentratie**`} />
      <SubHeading><Inline>{`Halfwaardetijd en opbrengst`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Factor VIII heeft een halfwaardetijd van 8–15 uur. Per toegediende eenheid per kg stijgt de spiegel ongeveer 0,02 IE/ml.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Factor IX heeft een halfwaardetijd van 18–24 uur. Per toegediende eenheid per kg stijgt de spiegel ongeveer 0,01 IE/ml.`}</Inline></p>
      <SubHeading><Inline>{`Ernst van de bloeding en streefwaarden`}</Inline></SubHeading>
      <PBody text={`**Tabel 6. Dosering van factor VIII en IX**`} />
      <DataTable rows={[["Ernst bloeding", "Initiële dosis FVIII (IE/kg)", "Initiële dosis FIX (IE/kg)", "Initiële streefspiegel (IE/ml)", "Onderhoud IT FVIII (IE/kg, 2 dd)", "Onderhoud IT FIX (IE/kg, 1 dd)", "Streefspiegel IT", "Streefspiegel CI"], ["Licht", "15", "30", "0,3", "-", "-", "-", "-"], ["Ernstig", "25", "50", "0,5", "12,5", "25", "> 0,25", "> 0,40"], ["Levensbedreigend", "50", "100", "1,0", "25", "50", "> 0,50", "> 0,80"]]} />
      <p className="leading-relaxed"><Inline>{`Bij een operatie doseer je in het algemeen alsof er sprake is van een levensbedreigende bloeding, zeker bij grote thoracale of abdominale chirurgie. Bij kleine ingrepen, zoals tandextracties, volstaat vaak een lagere streefwaarde.`}</Inline></p>
      <SubHeading><Inline>{`Intermitterende toediening en continue infusie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Er zijn twee manieren van toedienen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`intermitterend: bolus gevolgd door herhaalde giften;`}</Inline></li>
        <li><Inline>{`continue infusie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij continue infusie geldt:`}</Inline></p>
      <PBody text={`**infusiesnelheid (IE/kg/uur) = klaring (ml/kg/uur) × streefwaarde spiegel (IE/ml)**`} />
      <p className="leading-relaxed"><Inline>{`De klaring is ongeveer 4 ml/kg/uur, bij kinderen 5 ml/kg/uur.`}</Inline></p>
      <SubHeading><Inline>{`Voorbeeld van doseren`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een man van 30 jaar met ernstige hemofilie A en een cholecystectomie wordt preoperatief gedoseerd als bij een levensbedreigende bloeding. Bij een gewicht van 80 kg en een streefwaarde van 1,0 IE/ml is de bolus:`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`50 IE/kg × 80 kg = 4000 IE.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij continue infusie met een gewenste spiegel van 0,8 IE/ml en een klaring van 4 ml/kg/uur is de infusiesnelheid 3,2 IE/kg/uur. Voor 80 kg is dat 3,2 × 80 × 24 = 6384 IE per 24 uur.`}</Inline></p>
    </div>
  )
}
