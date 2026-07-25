import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Praktische keuze en streefwaarden`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De manier van zuurstofsuppletie moet worden afgestemd op de patiënt en de situatie. In het algemeen wordt gestreefd naar een saturatie boven 95%. Bij bekende hypoxemie of COPD kan een lagere streefwaarde passend zijn, namelijk boven 88–90%.`}</Inline></p>
    </div>
  )
}
