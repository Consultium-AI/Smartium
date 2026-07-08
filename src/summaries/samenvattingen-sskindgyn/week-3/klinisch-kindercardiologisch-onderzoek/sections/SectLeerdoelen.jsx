import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de algemene beoordeling van een kind met een mogelijke hartafwijking uitvoeren, met aandacht voor groei, kleur, oedemen en ademhaling`}</Inline></li>
        <li><Inline>{`de ligging van het hart in de thorax beoordelen met palpatie en percussie`}</Inline></li>
        <li><Inline>{`normale en pathologische harttonen herkennen`}</Inline></li>
        <li><Inline>{`systolische en diastolische hartgeruisen onderscheiden en globaal lokaliseren`}</Inline></li>
      </ul>
    </div>
  )
}
