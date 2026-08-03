import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Vergelijking tussen atenolol en metoprolol`}</Inline></SubHeading>
      <PBody text={`In de verdere uitwerking wordt ook verwezen naar literatuur waarin de **β1-selectiviteitsratio** van atenolol en metoprolol wordt vergeleken. Daaruit blijkt dat de selectiviteit voor bèta1 ten opzichte van bèta2 ongeveer een **factor 30** is. Ook wordt genoemd dat dit niet enorm verschilt tussen rat en mens.`} />
      <SubHeading><Inline>{`Wat betekent zo’n selectiviteitsratio?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een selectiviteitsratio geeft aan hoe sterk een middel voorkeur heeft voor de ene receptor boven de andere. Hoe hoger die ratio, hoe sterker de voorkeur voor bèta1 ten opzichte van bèta2.`}</Inline></p>
      <DataTable rows={[["Tabel 4. Globale indruk van β1-selectiviteit"], ["**Atenolol**", "Sterke voorkeur voor bèta1"], ["**Metoprolol**", "Ook sterke voorkeur voor bèta1"], ["**Literatuurwaarde**", "Ongeveer factor 30 voor bèta1 versus bèta2"]]} />
      <p className="leading-relaxed"><Inline>{`Deze informatie ondersteunt opnieuw het beeld dat atenolol en metoprolol selectieve bètablokkers zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
