export default function Sect05SystemischeBehandeling() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Systemische behandeling van mammacarcinoom</h2>
      <p>
        Systemische behandeling bestaat uit behandeling die het hele lichaam beïnvloedt. In deze stof gaat het om drie
        hoofdvormen: chemotherapie, antihormonale therapie en doelgerichte therapie tegen HER2.
      </p>
      <p>
        Bij de beschreven patiënt is sprake van een graad 2 invasief ductaal mammacarcinoom, ER-negatief, PR-negatief en
        HER2 sterk positief (3+). Op basis hiervan wordt neoadjuvante systemische behandeling geadviseerd. Dat betekent
        dat de behandeling voorafgaat aan de operatie.
      </p>
      <p>
        Chemotherapie hoort hierbij, net als doelgerichte behandeling tegen HER2. Antihormonale therapie heeft hier geen
        plaats, omdat de hormoonreceptor negatief is.
      </p>
      <p>
        Waarom is HER2 belangrijk?{'  '}
        HER2 is een prognostisch ongunstige factor. Dat betekent dat de tumor daardoor een slechter karakter heeft en
        onbehandeld een agressief beloop kan hebben. Tegelijk is HER2 een predictieve gunstige factor, omdat de tumor
        waarschijnlijk goed reageert op doelgerichte behandeling gericht tegen HER2.
      </p>
      <p>Dus:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>prognostisch ongunstig: slechtere natuurlijke afloop;</li>
        <li>predictief gunstig: betere kans op effect van een bepaalde behandeling.</li>
      </ul>
      <p>Bij deze patiënt is daarom combinatiebehandeling met chemotherapie en HER2-gerichte therapie logisch.</p>
    </div>
  )
}
