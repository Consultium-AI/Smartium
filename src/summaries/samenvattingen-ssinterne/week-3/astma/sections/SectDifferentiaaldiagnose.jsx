import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Differentiaaldiagnose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Dyspnoe en hoesten kunnen veel oorzaken hebben. Denk daarom altijd aan een differentiaaldiagnose. Mogelijke oorzaken zijn bijvoorbeeld:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`astma;`}</Inline></li>
        <li><Inline>{`pneumonie;`}</Inline></li>
        <li><Inline>{`COPD-exacerbatie;`}</Inline></li>
        <li><Inline>{`longembolie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij een patiënt met bekende astma, eerdere atopie zoals eczeem, piepen, een verlengd expirium en klachten na een virale luchtweginfectie is een exacerbatie van astma het meest waarschijnlijk.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Denkrichtingen bij benauwdheid`}</Inline></SubHeading>
      <DataTable rows={[["Mogelijke oorzaak", "Passende aanwijzingen"], ["Astma-exacerbatie", "Piepen, verlengd expirium, voorgeschiedenis van astma, wisselende klachten"], ["Pneumonie", "Koorts, infectieverschijnselen"], ["COPD-exacerbatie", "Rookgeschiedenis, chronische longklachten"], ["Longembolie", "Thoracale pijn, plotselinge benauwdheid, DVT-tekens"]]} />
    </div>
  )
}
