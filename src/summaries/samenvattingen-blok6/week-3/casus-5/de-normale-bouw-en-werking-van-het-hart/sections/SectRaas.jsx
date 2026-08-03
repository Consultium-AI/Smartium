import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`RAAS`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het renine-angiotensine-aldosteronsysteem is langzamer en hormonaal. Het wordt geactiveerd bij een daling van de bloeddruk in de nieren of bij een lage natriumconcentratie in de niertubuli.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De volgorde is:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de nieren geven **renine** af`}</Inline></li>
        <li><Inline>{`renine zet angiotensinogeen om in **angiotensine I**`}</Inline></li>
        <li><Inline>{`ACE zet angiotensine I om in **angiotensine II**`}</Inline></li>
        <li><Inline>{`angiotensine II veroorzaakt vasoconstrictie en stimuleert aldosteron`}</Inline></li>
        <li><Inline>{`aldosteron zorgt voor natrium- en waterretentie`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daardoor stijgen bloedvolume, cardiac output en bloeddruk.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Snelle en langzame bloeddrukregulatie`}</Inline></SubHeading>
      <DataTable rows={[["Systeem", "Snelheid", "Belangrijk effect"], ["Baroreceptorreflex", "Snel", "Directe aanpassing van hart en vaten"], ["RAAS", "Langzaam", "Verhoging van bloedvolume en bloeddruk"]]} />
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
