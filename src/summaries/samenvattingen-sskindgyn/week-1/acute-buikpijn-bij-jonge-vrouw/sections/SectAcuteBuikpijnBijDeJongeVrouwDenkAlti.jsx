import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Acute buikpijn bij de jonge vrouw: denk altijd aan EUG`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een jonge vrouw met buikpijn moet je altijd denken aan een zwangerschap, en dus ook aan een extra-uteriene graviditeit. Een EUG is een zwangerschap die zich buiten de baarmoeder innestelt. Meestal gebeurt dat in de eileider, de tuba uterina. Dat is belangrijk, omdat een EUG in het begin soms weinig klachten geeft, maar later kan leiden tot een tubaruptuur. Dan ontstaat bloedverlies in de buik, met hevige buikpijn en soms zelfs hypovolemische shock.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** waarom is een EUG zo urgent?
**Kort antwoord:** omdat een ruptuur veel bloedverlies kan geven en levensbedreigend kan zijn.`} />
    </div>
  )
}
