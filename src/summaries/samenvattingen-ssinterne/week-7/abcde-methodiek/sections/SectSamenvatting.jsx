import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De ABCDE-methodiek is een vaste, systematische manier om een acuut zieke patiënt te beoordelen en direct te behandelen. Je begint altijd met de meest levensbedreigende problemen: luchtweg, ademhaling, circulatie, neurologie en daarna volledige inspectie van de patiënt en het voorkomen van hypothermie. Na elke stap beoordeel je opnieuw of de situatie verbetert. Pas als de vitale functies onder controle zijn, ga je verder met anamnese, volledig lichamelijk onderzoek en aanvullend onderzoek.`}</Inline></p>
    </div>
  )
}
