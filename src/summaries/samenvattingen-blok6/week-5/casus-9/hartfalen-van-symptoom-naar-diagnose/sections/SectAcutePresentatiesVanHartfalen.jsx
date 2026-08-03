import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Acute presentaties van hartfalen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hartfalen kan ook acuut en ernstig presenteren.`}</Inline></p>
      <SubHeading><Inline>{`Astma cardiale / acuut longoedeem`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Dit is een spoedsituatie. Het beeld bestaat uit:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`acuut ontstane ernstige benauwdheid`}</Inline></li>
        <li><Inline>{`orthopneu, vaak zittend slapen`}</Inline></li>
        <li><Inline>{`piepende ademhaling`}</Inline></li>
        <li><Inline>{`soms roze, schuimend sputum`}</Inline></li>
        <li><Inline>{`tachycardie, tachypnoe en hypoxie`}</Inline></li>
        <li><Inline>{`vaak hoge bloeddruk`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Hierbij is sprake van acuut linkszijdig hartfalen met verhoogde druk in de longvaten. Daardoor treedt vocht uit in de alveoli: longoedeem. De piepende ademhaling ontstaat door reflexmatige bronchoconstrictie.`}</Inline></p>
      <SubHeading><Inline>{`Cardiogene shock`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij cardiogene shock is de pompfunctie ernstig verminderd. Het beeld bestaat uit:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hypotensie`}</Inline></li>
        <li><Inline>{`sufheid`}</Inline></li>
        <li><Inline>{`koude acra`}</Inline></li>
        <li><Inline>{`tachycardie`}</Inline></li>
        <li><Inline>{`lage polsdruk`}</Inline></li>
        <li><Inline>{`oligurie`}</Inline></li>
        <li><Inline>{`cyanose`}</Inline></li>
        <li><Inline>{`vaak gestuwde halsvenen`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Hier is de cardiac output zo laag dat weefselperfusie tekortschiet. Dat kan ontstaan bij bijvoorbeeld een infarct, myocarditis of eindstadium hartfalen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
