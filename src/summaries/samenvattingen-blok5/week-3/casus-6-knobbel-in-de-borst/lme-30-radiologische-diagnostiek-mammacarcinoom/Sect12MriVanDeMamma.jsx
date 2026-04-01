export default function Sect12MriVanDeMamma() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">MRI van de mamma</h2>
      <p>
        MRI gebruikt sterke magnetische velden en radiogolven. Voor de borst gebeurt dit meestal met de patiënt in
        buikligging, de mammae in speciale spoelen, en vaak met contrast via infuus.
      </p>
      <p>De belangrijkste beelden zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>T1: vooral voor anatomie;</li>
        <li>T2: vooral voor vocht;</li>
        <li>dynamische contrastopnames: om doorbloeding en aankleuring van een tumor zichtbaar te maken.</li>
      </ul>
      <p>
        Op T1 is vet helder en water donker. Op T2 is vocht helder. Vetonderdrukking helpt om waterhoudende afwijkingen
        beter zichtbaar te maken.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Wanneer gebruik je MRI?</h3>
      <p>MRI van de mamma wordt gebruikt bij:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>screening van hoogrisicopatiënten, bijvoorbeeld draagsters van BRCA1/2 of bij sterke familiebelasting;</li>
        <li>het oplossen van discrepanties tussen onderzoeken;</li>
        <li>beoordeling van multifocaliteit of uitgebreidheid;</li>
        <li>met name bij invasief lobulair carcinoom en hooggradig DCIS.</li>
      </ul>
      <p>
        MRI is dus vooral nuttig als mammografie en echografie niet genoeg informatie geven of als de ziekte uitgebreid
        kan zijn.
      </p>
    </div>
  )
}
