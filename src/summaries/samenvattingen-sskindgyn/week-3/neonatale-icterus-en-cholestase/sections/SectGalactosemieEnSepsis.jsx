import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Galactosemie en sepsis`}</Inline></SubHeading>
      <PBody text={`Een belangrijk klinisch punt is dat galactosemie kan samengaan met **E. coli-sepsis**. Ongeveer 10% van de patiënten presenteert zich met sepsis, en daarvan wordt het grootste deel veroorzaakt door **E. coli**.`} />
      <PBody text={`Bij een kind dat acuut achteruitgaat met tachycardie, hypotensie, kreunen en een lage capillaire refill moet je daarom denken aan **septische shock**. In de casus bleek de bloedkweek positief voor E. coli.`} />
      <p className="leading-relaxed"><Inline>{`De relatie tussen galactosemie en infectie is ook biologisch verklaarbaar: in vitro is de chemotactische en bactericide activiteit van neutrofielen verminderd bij toevoeging van galactose.`}</Inline></p>
    </div>
  )
}
