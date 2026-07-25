import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling van astma`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De behandeling is gericht op twee dingen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het verminderen van klachten;`}</Inline></li>
        <li><Inline>{`het behandelen van de onderliggende ontsteking.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarom bestaat de medicamenteuze behandeling uit:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een inhalatiecorticosteroïd;`}</Inline></li>
        <li><Inline>{`een beta-2-sympathicomimeticum.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij ernstige kortademigheid kunnen ook orale steroïden nodig zijn, afhankelijk van de klinische ernst.`}</Inline></p>
      <SubHeading><Inline>{`Inhalatie-devices`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Er zijn verschillende toedieningsvormen voor inhalatiemedicatie:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`poederinhalator;`}</Inline></li>
        <li><Inline>{`autohaler;`}</Inline></li>
        <li><Inline>{`conventionele dosis aerosol;`}</Inline></li>
        <li><Inline>{`dosis aerosol met voorzetkamer.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Voor een poederinhalator moet de inspiratoire flow voldoende zijn. Na gebruik is het verstandig de mond- en keelholte te spoelen, om schimmelinfecties te voorkomen. Een autohaler of een dosis aerosol met voorzetkamer zijn ook geschikte opties.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een conventionele dosis aerosol zonder voorzetkamer wordt afgeraden, omdat slechts een klein deel van de medicatie de kleine luchtwegen bereikt.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Inhalatie-devices`}</Inline></SubHeading>
      <DataTable rows={[["Device", "Kenmerk", "Opmerking"], ["Poederinhalator", "Vereist voldoende inademingskracht", "Mond spoelen na gebruik"], ["Autohaler", "Ademgestuurde toediening", "Geschikt alternatief"], ["Dosis aerosol", "Conventionele aerosol", "Zonder voorzetkamer afgeraden"], ["Dosis aerosol met voorzetkamer", "Betere depositie in de luchtwegen", "Geschikt alternatief"]]} />
    </div>
  )
}
