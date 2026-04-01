export default function Sect06BehandelingBradycardie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Behandeling van bradycardie</h2>
      <p>De behandeling hangt af van de situatie: acuut instabiel of chronisch stabiel.</p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Acuut / instabiel</h3>
      <p>Bij hemodynamische instabiliteit, zoals shock, syncope of hartfalen, zijn de eerste stappen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">Atropine 0,5-1,0 mg i.v.</span>: een parasympathicolyticum dat de automatiteit en geleiding verhoogt.
        </li>
        <li>
          <span className="font-semibold">Isoprenaline</span>: een bèta-agonistinfusie.
        </li>
        <li>
          <span className="font-semibold">Transcutaan pacen</span>: externe pads op de borstkas bij asystolie of extreme bradycardie.
        </li>
      </ul>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Chronisch / stabiel</h3>
      <p>
        Dan probeer je eerst de oorzaak weg te nemen, bijvoorbeeld door remmende medicatie zoals <span className="font-semibold">bètablokkers</span> of{' '}
        <span className="font-semibold">digoxine</span> te stoppen.
      </p>
      <p>
        Als dat niet genoeg is, komt een <span className="font-semibold">permanente pacemaker (PPM)</span> in beeld. Indicaties zijn onder andere:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>symptomatische bradycardie;</li>
        <li>Mobitz II-blok;</li>
        <li>totaalblok;</li>
        <li>Sick Sinus Syndroom.</li>
      </ul>
      <p>
        Bij voorkeur kies je voor een <span className="font-semibold">DDD-pacemaker</span>. Deze stimuleert zowel boezem als kamer en bewaart zo de{' '}
        <span className="font-semibold">AV-synchronie</span>. Dat is meestal de voorkeursoptie.
      </p>
    </div>
  )
}
