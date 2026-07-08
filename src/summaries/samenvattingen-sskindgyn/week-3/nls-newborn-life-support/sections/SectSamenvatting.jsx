import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De opvang van de pasgeborene draait om snelle voorbereiding, goede temperatuurbeheersing en een vaste volgorde van handelen. Eerst zorg je voor een warme, goed voorbereide opvangplek en denk je aan delayed cord clamping. Daarna volg je het NLS-algoritme: initiële acties, airway, breathing, circulation en eventueel drugs.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De eerste beoordeling gebeurt steeds opnieuw en kijkt naar hartfrequentie, ademhaling, kleur en tonus. Bij problemen open je eerst de luchtweg, geef je vervolgens inflatiebeademingen en daarna zo nodig ventilatiebeademingen. Als de hartfrequentie onder de 60 blijft ondanks goede ventilatie, start je thoraxcompressies met de twee-duimen-omcirkel-techniek in een verhouding van 3:1. Medicatie wordt bij voorkeur centraal gegeven. Na de reanimatie volgt verdere evaluatie en zorg, inclusief overleg, verslaglegging en oudergesprek.`}</Inline></p>
    </div>
  )
}
