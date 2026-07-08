import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische relevantie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een normale baring kan ook verstoord raken. Een belangrijk voorbeeld is onvoldoende weeënkracht, waarbij oxytocine de ontsluiting of uitdrijving kan verbeteren. Daarnaast moet je altijd denken aan de foetale conditie: tijdens de baring kan foetale asfyxie optreden. Daarom bewaak je de foetale toestand met een CTG of een doptone-registratie.`}</Inline></p>
    </div>
  )
}
