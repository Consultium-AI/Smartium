export default function Sect08ChatGPTWerkingEnBeperkingen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hoe werkt ChatGPT in grote lijnen?</h2>
      <p className="whitespace-pre-line">
        {`ChatGPT is een vorm van generatieve AI en werkt als 
taalmodel
. Het is getraind op heel veel teksten. Op basis daarvan leert het patronen in taal.`}
      </p>
      <p>De kern van de werking is verrassend simpel:</p>
      <p>het model berekent steeds welk woord waarschijnlijk het best volgt op de woorden die er al staan.</p>
      <p>Dus ChatGPT “weet” niet alles zoals een mens iets weet. Het voorspelt taal op een zeer geavanceerde manier.</p>
      <p>
        Dat verklaart ook waarom het soms heel overtuigend klinkt: het is goed in het produceren van plausibele tekst. Maar
        plausibel is niet hetzelfde als waar.
      </p>

      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 pt-2">De belangrijkste beperkingen van ChatGPT</h3>
      <p>De cursus is hier terecht nuchter over. ChatGPT is geen orakel.</p>
      <p>Belangrijke beperkingen zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li className="whitespace-pre-line">{`hallucinaties
: het model kan dingen verzinnen die geloofwaardig klinken`}</li>
        <li className="whitespace-pre-line">{`beperkte kennis
: het model is niet alwetend`}</li>
        <li className="whitespace-pre-line">{`ja-knikkergedrag
: het kan soms te meegaand antwoorden`}</li>
        <li className="whitespace-pre-line">{`te lange of onhandige antwoorden
: vaak door een te vage prompt`}</li>
        <li>geen gezond verstand zoals een mens dat heeft</li>
      </ul>
      <p>Daarom moet je antwoorden niet zomaar slikken. Je moet controleren, vergelijken en zelf blijven nadenken.</p>

      <div className="rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/40 p-4 space-y-3">
        <p className="font-semibold text-slate-900 dark:text-slate-100">Aandacht-vraag</p>
        <p>Waarom klinkt een fout antwoord van ChatGPT vaak toch overtuigend?</p>
        <p className="whitespace-pre-line">
          {`Mini-antwoord:
Omdat het model goed is in taalvorm en waarschijnlijk klinkende zinnen, niet omdat het altijd feitelijk gelijk heeft.`}
        </p>
      </div>
    </div>
  )
}
