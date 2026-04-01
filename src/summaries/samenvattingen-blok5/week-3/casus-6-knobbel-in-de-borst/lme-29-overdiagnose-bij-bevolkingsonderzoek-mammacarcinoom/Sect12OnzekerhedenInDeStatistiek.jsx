export default function Sect12OnzekerhedenInDeStatistiek() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Onzekerheden in de statistiek</h2>
      <p>
        Een statistische maat, zoals een 95%-betrouwbaarheidsinterval, laat zien wat de onzekerheid is door
        steekproefgrootte. Maar dat is niet hetzelfde als alle onzekerheid. Er blijven ook onzekerheden door:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>bias;</li>
        <li>beperkte toepasbaarheid naar andere populaties;</li>
        <li>verschillen in de manier waarop overdiagnose wordt berekend.</li>
      </ul>
      <p>Daarom moet je cijfers over overdiagnose altijd lezen als schattingen met veel onzekerheid.</p>
    </div>
  )
}
