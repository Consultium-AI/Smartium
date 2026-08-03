import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Richtingstermen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Naast de vlakken gebruik je richtingstermen om locaties nauwkeurig te beschrijven.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Anterior / ventraal**: naar de voorkant van het lichaam`}</Inline></li>
        <li><Inline>{`**Posterior / dorsaal**: naar de achterkant van het lichaam`}</Inline></li>
        <li><Inline>{`**Superior / craniaal**: naar het hoofd toe`}</Inline></li>
        <li><Inline>{`**Inferior / caudaal**: naar de voeten toe`}</Inline></li>
        <li><Inline>{`**Mediaal**: naar het midden van het lichaam toe`}</Inline></li>
        <li><Inline>{`**Lateraal**: van het midden af`}</Inline></li>
        <li><Inline>{`**Proximaal**: dichter bij het aanhechtingspunt van een ledemaat of het begin van een structuur`}</Inline></li>
        <li><Inline>{`**Distaal**: verder van het aanhechtingspunt of het einde van een structuur`}</Inline></li>
        <li><Inline>{`**Perifeer**: aan de buitenkant of rand van een orgaan of het lichaam`}</Inline></li>
        <li><Inline>{`**Contralateraal**: aan de andere zijde`}</Inline></li>
        <li><Inline>{`**Ipsilateraal**: aan dezelfde zijde`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij radiologische beelden kom je ook specifieke termen tegen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**PA**: posterior-anterior, de straling gaat van achter naar voor`}</Inline></li>
        <li><Inline>{`**AP**: anterior-posterior, de straling gaat van voor naar achter`}</Inline></li>
        <li><Inline>{`**Lateraal**: zijaanzicht`}</Inline></li>
        <li><Inline>{`**Oblique**: schuin vlak`}</Inline></li>
      </ul>
    </div>
  )
}
