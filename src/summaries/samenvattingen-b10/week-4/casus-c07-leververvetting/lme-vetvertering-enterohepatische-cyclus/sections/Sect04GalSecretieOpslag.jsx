export default function Sect04GalSecretieOpslag() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De gal: secretie, opslag en functie</h2>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Productie in de lever</h3>
      <p>
        De lever maakt gal aan. De belangrijkste galcomponenten worden door de hepatocyt afgegeven aan de{' '}
        <strong className="text-slate-900 dark:text-slate-100">galcanaliculi</strong>. Hiervoor bestaan voor galzouten,
        fosfolipiden en cholesterol specifieke transporters in het canaliculaire membraan. Deze transporters zijn
        ATP-afhankelijk. Daarna voegen de <strong className="text-slate-900 dark:text-slate-100">cholangiocyten</strong> — de galgangcellen — een{' '}
        <strong className="text-slate-900 dark:text-slate-100">bicarbonaat-rijk vocht</strong> toe.
      </p>
      <p>De uiteindelijke hoeveelheid hepaticale gal wordt bepaald door drie processen:</p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>een constante osmotisch gedreven vloeistofstroom uit de hepatocyt;</li>
        <li>
          een <strong className="text-slate-900 dark:text-slate-100">galzout-afhankelijke</strong> vloeistofsecretie,
          ook wel het <strong className="text-slate-900 dark:text-slate-100">choleretisch effect</strong> van galzouten;
        </li>
        <li>de secretie van bicarbonaat-rijk vocht door cholangiocyten.</li>
      </ol>
      <p>Per micromol galzout wordt ongeveer 7–10 µl water aan de gal toegevoegd.</p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Samenstelling en functie van gal</h3>
      <p>
        De lever produceert per dag ongeveer 900 ml gal. Gal bevat veel verschillende componenten, maar kwantitatief
        zijn galzouten, fosfolipiden en cholesterol het belangrijkst. Daarnaast is gal een route voor de uitscheiding
        van afvalstoffen, waaronder:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>plantsterolen,</li>
        <li>lipofiele geneesmiddelen,</li>
        <li>cholesterol,</li>
        <li>geconjugeerde bilirubine.</li>
      </ul>
      <p>
        De belangrijkste component van gal zijn de galzouten. Die worden in de hepatocyt gesynthetiseerd uit
        cholesterol. Samen met fosfolipiden en cholesterol vormen zij{' '}
        <strong className="text-slate-900 dark:text-slate-100">galmicellen</strong>.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Belangrijke eigenschappen van gal</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Onderdeel</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Kenmerk</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Galzouten</td>
              <td className="p-3 align-top">Belangrijkste component; nodig voor vetvertering en micelvorming</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Fosfolipiden</td>
              <td className="p-3 align-top">Ondersteunen de samenstelling van galmicellen</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Cholesterol</td>
              <td className="p-3 align-top">Wordt via gal uitgescheiden</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Bicarbonaat</td>
              <td className="p-3 align-top">Maakt de gal alkalischer</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Afvalstoffen</td>
              <td className="p-3 align-top">Worden via gal uitgescheiden</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Opslag in de galblaas</h3>
      <p>
        Tussen de maaltijden wordt gal opgeslagen in de <strong className="text-slate-900 dark:text-slate-100">galblaas</strong>. Daar wordt de gal geconcentreerd: de concentratie kan 10 tot 20 keer toenemen. Ook daalt de pH, van ongeveer 7,5 in hepaticale gal naar ongeveer 6,0 in de galblaas.
      </p>
      <p>
        De afgifte van gal aan de darm wordt sterk geregeld door de{' '}
        <strong className="text-slate-900 dark:text-slate-100">sfincter van Oddi</strong>, die ligt bij de{' '}
        <strong className="text-slate-900 dark:text-slate-100">Papil van Vater</strong>. Deze sfincter staat onder:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          hormonale invloed, vooral door <strong className="text-slate-900 dark:text-slate-100">cholecystokinine (CCK)</strong>;
        </li>
        <li>
          neuronale invloed via de <strong className="text-slate-900 dark:text-slate-100">vago-vagale reflex</strong>.
        </li>
      </ul>
      <p>Als voedsel in de maag en daarna in het duodenum komt, worden deze systemen geactiveerd. Het gevolg is:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>relaxatie van de sfincter van Oddi;</li>
        <li>contractie van de galblaas;</li>
        <li>afgifte van gal in het duodenum.</li>
      </ul>
    </div>
  )
}
