import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Addisoncrisis: waarom is dit zo gevaarlijk?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Cortisol is essentieel voor de stressreactie. Bij stress moet het lichaam de bloeddruk, glucosehuishouding en immuunreactie kunnen handhaven. Als iemand met bijnierschorsinsufficiëntie ziek wordt, een operatie ondergaat of ernstig trauma heeft, kan er acuut een tekort ontstaan.`}</Inline></p>
      <SubHeading><Inline>{`Wat doe je op de SEH?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een patiënt met bekende bijnierschorsinsufficiëntie en acute stress is de eerste stap:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**direct hydrocortison geven**;`}</Inline></li>
        <li><Inline>{`daarna kweken afnemen;`}</Inline></li>
        <li><Inline>{`vervolgens breed-spectrum antibiotica starten als infectie mogelijk is;`}</Inline></li>
        <li><Inline>{`aanvullende diagnostiek volgen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij ernstig trauma of sepsis wordt meteen hoge dosis hydrocortison intraveneus gegeven, gevolgd door een continue infusie. Ook extra zoutinfusie kan nodig zijn.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** wat is de belangrijkste eerste stap bij een mogelijke Addisoncrisis?
**Mini-antwoord:** direct hydrocortison toedienen.`} />
    </div>
  )
}
