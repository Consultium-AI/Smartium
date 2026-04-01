export default function Sect11KlinischeBeslisregel() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Klinische beslisregel</h2>
      <p>
        De klinische beslisregel kent punten toe aan kenmerken uit anamnese en lichamelijk onderzoek, zoals:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>maligniteit;</li>
        <li>immobilisatie van de onderste extremiteiten;</li>
        <li>recente bedrust of grote operatie;</li>
        <li>gelokaliseerde zwelling in het diepe veneuze systeem;</li>
        <li>gezwollen been;</li>
        <li>kuitzwelling met links-rechtsverschil &gt; 3 cm;</li>
        <li>pitting oedeem;</li>
        <li>collaterale oppervlakkige venen zonder varicosis.</li>
      </ul>
      <p>Tegenover deze positieve criteria staat ook:</p>
      <p>grotere kans op een alternatieve diagnose: dat levert negatieve punten op.</p>
      <p>Een totaalscore van 3 betekent hier dat verdere diagnostiek met CUS nodig is.</p>
    </div>
  )
}
