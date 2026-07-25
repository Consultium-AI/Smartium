import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Zuurstofdissociatiecurve`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De zuurstofdissociatiecurve laat zien hoe sterk hemoglobine zuurstof bindt bij verschillende zuurstofdrukken. De curve kan naar rechts of naar links verschuiven.`}</Inline></p>
      <DataTable rows={[["Verschuiving", "Oorzaak", "Gevolg"], ["Naar rechts", "pH daalt, pCO2 stijgt, temperatuur stijgt", "Hb laat zuurstof makkelijker los"], ["Naar links", "pH stijgt, pCO2 daalt, temperatuur daalt", "Hb houdt zuurstof sterker vast"]]} />
      <p className="leading-relaxed"><Inline>{`Een rechtsverschuiving betekent dus dat zuurstof makkelijker aan de weefsels wordt afgegeven. Een linksverschuiving betekent juist dat hemoglobine zuurstof sterker vasthoudt.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** wat betekent een lagere pH voor zuurstofafgifte?
**Mini-antwoord:** bij een lagere pH verschuift de curve naar rechts, waardoor hemoglobine zuurstof makkelijker afgeeft.`} />
      <p className="leading-relaxed"><Inline>{`Bij een weefsel-PaO2 van 40 mmHg wordt bij pH 7,2 ongeveer 40% aan de weefsels afgegeven, bij pH 7,4 ongeveer 30%, en bij pH 7,6 ongeveer 20%. Een hogere saturatie dan 100% is niet mogelijk. Daarom heeft overmatige zuurstoftoediening geen zin als de hemoglobineverzadiging al maximaal is.`}</Inline></p>
    </div>
  )
}
