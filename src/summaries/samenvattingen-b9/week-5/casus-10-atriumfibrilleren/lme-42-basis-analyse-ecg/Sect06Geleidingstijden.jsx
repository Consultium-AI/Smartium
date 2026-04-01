export default function Sect06Geleidingstijden() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Geleidingstijden</h2>
      <p>
        De standaard geleidingstijden zijn belangrijk om te weten, omdat ze direct iets zeggen over de voortgeleiding van de prikkel.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">PQ-interval</h3>
      <p>
        Het PQ-interval loopt van het begin van de P-top tot het begin van het QRS-complex. Normaal is dit 120–200 ms. Het is de tijd die de prikkel nodig heeft om via de AV-knoop te reizen.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">QRS-duur</h3>
      <p>
        De QRS-duur loopt van het begin van de Q- of R-top tot het einde van de S-golf. Normaal is dit {'<'} 120 ms. Een smal complex betekent dat de snelle geleiding via het His-Purkinje-systeem gebruikt wordt.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">QT-tijd</h3>
      <p>
        De QT-tijd loopt van het begin van het QRS-complex tot het einde van de T-top. Dit weerspiegelt de totale elektrische activatieduur, inclusief de repolarisatie van de kamers.
      </p>
      <p>Omdat QT afhangt van de hartslag, gebruik je in de praktijk vaak een snelle inschatting:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>zoek twee R-toppen,</li>
        <li>denk een lijn precies halverwege,</li>
        <li>eindigt de T-top vóór die middellijn, dan is de QT waarschijnlijk normaal,</li>
        <li>eindigt de T-top na die middellijn, dan is de QT verlengd.</li>
      </ul>
    </div>
  )
}
