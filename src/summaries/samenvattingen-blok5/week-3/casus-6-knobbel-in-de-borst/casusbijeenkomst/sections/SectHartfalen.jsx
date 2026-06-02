import { Inline, PBody, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`2. Hartfalen`}</Inline></SubHeading>
      <p className="leading-relaxed">
        <Inline>{`Bij een oudere vrouw met dikke enkels, **dyspneu d’effort** en **orthopneu** past **decompensatio cordis** het best. Orthopneu betekent dat iemand slechter ademt in liggende houding en liever zittend slaapt.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`Hartfalen is extra waarschijnlijk bij:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een voorgeschiedenis van **myocardinfarct**;`}</Inline></li>
        <li><Inline>{`bilaterale beenzwelling;`}</Inline></li>
        <li><Inline>{`kortademigheid bij inspanning;`}</Inline></li>
        <li><Inline>{`’s nachts rechtop moeten slapen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed font-semibold text-slate-900 dark:text-slate-100 m-0">
        <Inline>{`Aanvullend onderzoek:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`lichamelijk onderzoek van **hart en longen**;`}</Inline></li>
        <li><Inline>{`**ECG**;`}</Inline></li>
        <li><Inline>{`**NT-proBNP**;`}</Inline></li>
        <li><Inline>{`uiteindelijk vaak een **echocardiografie**.`}</Inline></li>
      </ul>
      <p className="leading-relaxed font-semibold text-slate-900 dark:text-slate-100 m-0">
        <Inline>{`Behandeling:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`starten van een **lisdiureticum** zoals **furosemide** of **bumetanide**;`}</Inline></li>
        <li><Inline>{`overleg of verwijzing naar **cardioloog**;`}</Inline></li>
        <li><Inline>{`diuretica zijn vooral passend als de zwelling echt door hartfalen komt.`}</Inline></li>
      </ul>
      <PBody
        text={`**Vraagje:** waarom is amlodipine hier niet de eerste verklaring?
**Antwoord:** omdat de klachten al jaren bestaan en de cardiale voorgeschiedenis en dyspneu veel beter passen bij hartfalen.`}
      />
    </div>
  )
}
