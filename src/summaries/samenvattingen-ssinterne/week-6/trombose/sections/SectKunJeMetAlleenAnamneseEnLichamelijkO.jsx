import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Kun je met alleen anamnese en lichamelijk onderzoek de diagnose stellen?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Nee. Dat kan niet. Bij een verdenking op een trombosebeen blijkt een groot deel van de patiënten uiteindelijk geen DVT te hebben. Daarom is aanvullend onderzoek nodig.`}</Inline></p>
    </div>
  )
}
