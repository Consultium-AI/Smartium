export default function Sect15VaststellingDiagnose() {
  return (
    <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hoe wordt Lynchsyndroom vastgesteld?</h2>
      <p>
        De diagnose Lynchsyndroom kan worden gesteld als er een heterozygote (waarschijnlijk) pathogene kiembaanvariant
        wordt aangetoond in een van de MMR-genen:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>MLH1</li>
        <li>MSH2</li>
        <li>EPCAM</li>
        <li>MSH6</li>
        <li>PMS2</li>
      </ul>
      <p>
        Meestal gebeurt dit met DNA-onderzoek in bloed, waarbij in één keer alle MMR-genen worden onderzocht met een
        genpanel.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 pt-2">Tumoronderzoek als aanwijzing</h3>
      <p>Bij een verdachte tumor wordt vaak eerst onderzocht of er sprake is van:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>verlies van MMR-eiwitten met immunohistochemie, en/of</li>
        <li>MSI.</li>
      </ul>
      <p>
        In het voorbeeld van de module waren MSH2 en MSH6 afwezig, terwijl MLH1 en PMS2 normaal aanwezig waren. Daarnaast
        was er MSI. Dat past bij een probleem in het MMR-systeem en is verdacht voor Lynchsyndroom.
      </p>
      <p>Als er daarna in bloed een heterozygote pathogene variant wordt gevonden, is de diagnose bevestigd.</p>
    </div>
  )
}
