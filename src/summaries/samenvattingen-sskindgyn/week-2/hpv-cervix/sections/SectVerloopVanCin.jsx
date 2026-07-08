import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Verloop van CIN`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Niet elke CIN wordt kanker. Het beloop verschilt per graad.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 7. Beloop van CIN`}</Inline></SubHeading>
      <DataTable rows={[["Uitslag", "Regresie", "Persistentie", "Progressie", "Progressie naar invasie"], ["CIN 1", "57%", "32%", "11%", "1%"], ["CIN 2", "43%", "35%", "22%", "5%"], ["CIN 3", "32%", "56%", "-", "12%"]]} />
      <PBody text={`Hieruit blijkt dat **CIN 1** in de meeste gevallen in regressie gaat. Hoe hoger de graad, hoe groter de kans op persisteren en hoe belangrijker behandeling wordt.`} />
    </div>
  )
}
