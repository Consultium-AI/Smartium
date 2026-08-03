import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De Functionele Mogelijkheden Lijst`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De FML geeft een overzicht van wat iemand gedurende een werkdag van ten minste 8 uur nog kan. Beperkingen worden vergeleken met referentiewaarden. Die referentiewaarden zijn niet wat iemand vroeger kon, maar wat gezonde mensen van 16 tot 65 jaar minimaal kunnen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De FML is verdeeld in zes rubrieken:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`persoonlijk functioneren`}</Inline></li>
        <li><Inline>{`sociaal functioneren`}</Inline></li>
        <li><Inline>{`aanpassen aan fysieke omgevingseisen`}</Inline></li>
        <li><Inline>{`dynamische handelingen`}</Inline></li>
        <li><Inline>{`statische houdingen`}</Inline></li>
        <li><Inline>{`werktijden`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 4. De zes rubrieken van de FML`}</Inline></SubHeading>
      <DataTable rows={[["Rubriek", "Voorbeelden"], ["Persoonlijk functioneren", "aandacht vasthouden, herinneren, doelmatig handelen"], ["Sociaal functioneren", "omgaan met conflicten, samenwerken, vervoer"], ["Fysieke omgevingseisen", "stof, rook, gassen, trillingsbelasting"], ["Dynamische handelingen", "tillen, dragen, duwen, trekken, lopen"], ["Statische houdingen", "zitten, staan, bukken, knielen"], ["Werktijden", "uren per dag, uren per week, perioden in een etmaal"]]} />
      <p className="leading-relaxed"><Inline>{`Bij elk onderdeel geeft de verzekeringsarts aan of iets normaal is of beperkt, en zo ja in welke mate.`}</Inline></p>
    </div>
  )
}
