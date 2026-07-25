import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Acute nierinsufficiëntie`}</Inline></SubHeading>
      <SubHeading><Inline>{`Wat is acute nierinsufficiëntie?`}</Inline></SubHeading>
      <PBody text={`Acute nierinsufficiëntie, ook wel **acute kidney injury (AKI)**, is een plotselinge achteruitgang van de nierfunctie. In het ziekenhuis komt dit regelmatig voor, vooral bij ernstig zieke patiënten. Het is belangrijk om AKI snel te herkennen, omdat het kan leiden tot levensbedreigende verstoringen van waterbalans en elektrolyten.`} />
      <p className="leading-relaxed"><Inline>{`De incidentie is ongeveer:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`0,1–0,2% in de huisartsenpraktijk;`}</Inline></li>
        <li><Inline>{`ongeveer 5% in het ziekenhuis;`}</Inline></li>
        <li><Inline>{`meer dan 20–25% op de intensive care.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Classificatie`}</Inline></SubHeading>
      <PBody text={`Voor de klinische praktijk zijn classificaties vooral handig als kapstok. Veel gebruikt zijn RIFLE, AKIN en vooral **KDIGO**. De KDIGO-definitie is onder andere gebaseerd op een stijging van creatinine of op verminderde urineproductie.`} />
      <SubHeading><Inline>{`Oorzaken van AKI`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een praktische indeling is:`}</Inline></p>
      <DataTable rows={[["Tabel 2. Indeling van oorzaken van acute nierinsufficiëntie"], ["Prerenaal"], ["Renaal"], ["Postrenaal"]]} />
      <p className="leading-relaxed"><Inline>{`Deze indeling helpt om snel te denken aan de plaats waar het probleem zit.`}</Inline></p>
    </div>
  )
}
