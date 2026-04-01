export default function Sect08CardiogeneShock() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Cardiogene shock</h2>
      <p>
        Bij een <span className="font-semibold">cardiogene shock</span> is er sprake van een <span className="font-semibold">verminderde hartfunctie</span>. De pomp kracht van het hart neemt af. Daardoor daalt het slagvolume en dus de cardiac output. Ook hier kan het lichaam geen hoge bloeddruk meer handhaven, waardoor compensatiemechanismen geactiveerd worden.
      </p>
      <p>De compensatie gaat via:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>het <span className="font-semibold">sympathisch zenuwstelsel</span>: hogere hartfrequentie en vasoconstrictie;</li>
        <li>het <span className="font-semibold">RAAS</span>: vocht vasthouden, renine-aanmaak en uiteindelijk angiotensine II, wat extra vasoconstrictie geeft;</li>
        <li>dorstgevoel.</li>
      </ul>
      <p>
        Bij cardiogene shock is het probleem dus niet een gebrek aan volume, maar vooral dat het hart het beschikbare volume niet goed kan uitpompen.
      </p>
      <p>
        Een belangrijk punt is dat <span className="font-semibold">meer preload geven meestal niet helpt</span> als de contractiliteit slecht is. In zo’n situatie kan de preload zelfs al te hoog zijn. Dan kan het juist beter zijn om de patiënt te ontwateren, bijvoorbeeld met plasmamedicatie.
      </p>
      <p>
        De behandeling van cardiogene shock richt zich op het <span className="font-semibold">wegnemen van de oorzaak</span>, bijvoorbeeld:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>ritmestoornis behandelen;</li>
        <li>hartklepprobleem behandelen;</li>
        <li>myocardinfarct behandelen.</li>
      </ul>
      <p>Als dat onvoldoende is, kan ondersteuning nodig zijn met:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><span className="font-semibold">inotrope medicatie</span>;</li>
        <li><span className="font-semibold">mechanische ondersteuning</span> zoals IABP, Impella of LVAD;</li>
        <li>soms zelfs <span className="font-semibold">harttransplantatie</span>.</li>
      </ul>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 text-sm text-amber-900 dark:text-amber-100 space-y-2">
        <p className="m-0">
          <span className="font-semibold">Aandacht-vraag:</span>
          {' '}
          Helpt extra vocht altijd bij cardiogene shock?
        </p>
        <p className="m-0">
          <span className="font-semibold">Mini-antwoord:</span>
          {' '}
          Meestal niet. Als het probleem vooral de contractiliteit is, is het hart vaak al onvoldoende in staat om extra preload goed om te zetten in slagvolume.
        </p>
      </div>
    </div>
  )
}
