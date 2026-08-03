import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Selectiviteit van atenolol: wat laat het model zien?`}</Inline></SubHeading>
      <PBody text={`In de simulatie met het rat cardiovascular system wordt gekeken naar het effect van **atenolol** op de respons op **isoprenaline**. Isoprenaline is een agonist die effecten via bèta-receptoren laat zien. In het model wordt gekeken naar twee doseringen atenolol.`} />
      <SubHeading><Inline>{`Wat gebeurt er bij lage en hoge dosering?`}</Inline></SubHeading>
      <PBody text={`Bij **50 mg/kg** zie je al blokkade van de **bèta1-receptor**. Bij **1000 mg/kg** is die bèta1-blokkade nog duidelijker. Toch blijft de **bloeddrukdaling** in respons op isoprenaline aanwezig. Die bloeddrukdaling wordt gemedieerd door de **bèta2-receptor** en wordt dus niet geblokkeerd.`} />
      <PBody text={`Dat betekent dat atenolol in dit model zelfs bij een veel hogere dosis nog steeds vooral **selectief voor bèta1** blijft.`} />
      <DataTable rows={[["Tabel 3. Effect van atenolol op isoprenaline-respons"], ["**50 mg/kg atenolol**", "Bèta1-blokkade zichtbaar; bèta2-effect op bloeddruk blijft aanwezig"], ["**1000 mg/kg atenolol**", "Bèta1-blokkade nog sterker; bèta2-effect op bloeddruk blijft aanwezig"]]} />
      <SubHeading><Inline>{`Klinische implicatie`}</Inline></SubHeading>
      <PBody text={`De klinische betekenis hiervan is dat atenolol een **hoge selectiviteit voor bèta1 ten opzichte van bèta2** heeft. Dat is een voordeel, omdat het middel dan vooral het gewenste effect op de bèta1-receptor geeft, terwijl bèta2-gemedieerde effecten grotendeels behouden blijven.`} />
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
