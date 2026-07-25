import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Non-rebreathing masker`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het non-rebreathing masker werkt met een flow van 10–15 l/min. De zak vult zich met 100% zuurstof en er is minimale bijmenging van kamerlucht. De FiO2 ligt ongeveer tussen 60 en 90%, maar is niet precies instelbaar. De flow moet worden afgestemd op de ademhaling van de patiënt, met als doel een gevulde luchtzak.`}</Inline></p>
    </div>
  )
}
