import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Cardiale voorbereiding`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het hart kan zowel glucose als vrije vetzuren gebruiken. Als je een infectie of tumor in of nabij het hart wilt beoordelen, wil je juist dat de hartspier zelf zo weinig mogelijk glucose opneemt. Dan blijft de eventuele pathologische FDG-opname beter zichtbaar.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarom krijgt de patiënt in die situatie:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`12 uur nuchter;`}</Inline></li>
        <li><Inline>{`24 uur een koolhydraatarm dieet.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dan schakelt het myocard over op het verbranden van vrije vetzuren.`}</Inline></p>
    </div>
  )
}
