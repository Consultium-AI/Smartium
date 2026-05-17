export default function Sect07DiliHili() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">DILI en HILI: medicatie- en kruidengeïnduceerde leverschade</h2>
      <p>
        <strong className="text-slate-900 dark:text-slate-100">DILI</strong> betekent <strong className="text-slate-900 dark:text-slate-100">drug-induced liver injury</strong>: leverbeschadiging door geneesmiddelen.
        <br />
        <strong className="text-slate-900 dark:text-slate-100">HILI</strong> betekent <strong className="text-slate-900 dark:text-slate-100">herb-induced liver injury</strong>: leverbeschadiging door kruiden.
      </p>
      <p>
        Dit is een zeldzaam maar klinisch belangrijk probleem. De incidentie wordt geschat op ongeveer{' '}
        <strong className="text-slate-900 dark:text-slate-100">14–19 gevallen per 100.000 mensen</strong>. In ongeveer{' '}
        <strong className="text-slate-900 dark:text-slate-100">30%</strong> van de gevallen treedt geelzucht op. DILI veroorzaakt{' '}
        <strong className="text-slate-900 dark:text-slate-100">3–5% van de ziekenhuisopnames wegens geelzucht</strong> en is in veel westerse landen een belangrijke oorzaak van{' '}
        <strong className="text-slate-900 dark:text-slate-100">acuut leverfalen</strong>.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Diagnose</h3>
      <p>Er bestaat geen specifieke test voor DILI/HILI. De diagnose steunt vooral op:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>de tijd tussen start van het middel en begin van de klachten;</li>
        <li>verbetering na stoppen van het middel;</li>
        <li>terugkeer van klachten na opnieuw starten;</li>
        <li>of het middel bekend staat als hepatotoxisch;</li>
        <li>het klinische beeld.</li>
      </ul>
      <p>
        Bloedonderzoek, leverbiopsie en beeldvorming worden vooral gebruikt om andere oorzaken uit te sluiten. Dat is nodig, omdat er heel veel middelen zijn die de lever kunnen beschadigen.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Belangrijke oorzaken</h3>
      <p>De meest genoemde groepen zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>antibiotica,</li>
        <li>anti-epileptica,</li>
        <li>middelen tegen tuberculose.</li>
      </ul>
      <p>
        Veel voorkomende middelen die in verband worden gebracht met DILI zijn onder andere{' '}
        <strong className="text-slate-900 dark:text-slate-100">
          amoxicilline/clavulaanzuur, isoniazide, nitrofurantoïne, TMP-SMZ, minocycline, cefazoline, azitromycine,
          ciprofloxacine, diclofenac, fenytoïne, methyldopa en azathioprine
        </strong>
        .
      </p>
      <p>Er zijn ook factoren die het risico op DILI/HILI kunnen beïnvloeden:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>een middel dat voor een groot deel door de lever wordt uitgescheiden;</li>
        <li>
          genetische factoren zoals <strong className="text-slate-900 dark:text-slate-100">HLA-allelen</strong>;
        </li>
        <li>hogere leeftijd;</li>
        <li>etniciteit;</li>
        <li>mogelijk ook het geslacht.</li>
      </ul>
      <p>Bij sommige middelen spelen ook combinatiebehandelingen of directe hepatotoxiciteit een rol in het verhoogde risico.</p>
    </div>
  )
}
