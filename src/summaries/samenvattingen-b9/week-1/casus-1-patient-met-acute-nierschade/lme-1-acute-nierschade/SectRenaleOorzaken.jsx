export default function SectRenaleOorzaken() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Renale oorzaken</h2>
      <p>
        Bij renale nierschade ligt de oorzaak in de nier zelf: in de glomerulus, de tubuli, het interstitium of de microvasculatuur.
      </p>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Glomerulair</h3>
        <p>
          Glomerulaire oorzaken zijn bijvoorbeeld glomerulonefritis en glomerulopathie. Hierbij is het filter van de nier zelf aangedaan.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Tubulair en interstitieel</h3>
        <p className="mb-3">
          De meest voorkomende renale oorzaak in de dagelijkse praktijk is acute tubulus necrose (ATN). Dat is schade aan de tubulaire cellen, vaak met afsterven ervan. ATN kan ontstaan door:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>ischemie;</li>
          <li>directe toxische stoffen of medicatie;</li>
          <li>pigmenten, zoals bilirubine of haem;</li>
          <li>kristallen, zoals amoxicilline of aciclovir;</li>
          <li>metabole oorzaken.</li>
        </ul>
        <p>
          Daarnaast bestaat tubulo-interstitiële nefritis, een ontsteking van de tubuli en het weefsel eromheen.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Microvasculatuur</h3>
        <p>
          Onder de microvasculaire oorzaken vallen endotheeldysfunctie en/of microtrombi, zoals bij trombotische micro-angiopathie (TMA). Daarbij zijn juist de kleine bloedvaten van de nier betrokken.
        </p>
      </div>
      <p>
        ATN kan in de praktijk lastig te onderscheiden zijn van een prerenale oorzaak. Het belangrijkste verschil is dat de nier bij prerenale nierschade structureel intact is, terwijl dat bij ATN niet meer zo is.
      </p>
      <p>
        Een belangrijk punt: anurie betekent dat er echt geen urine wordt geproduceerd. Dat is iets anders dan urine die wel wordt gemaakt maar niet kan uitstromen. Als iemand daadwerkelijk anuur is, past dat per definitie bij een renale oorzaak, en in de discussie tussen prerenaal en ATN wordt dat dus als ATN gezien.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Denkvraag: Wat maakt het onderscheid tussen prerenaal en ATN zo lastig?  Antwoord: Beide kunnen beginnen met verminderde perfusie, maar bij prerenaal is de nier structureel intact en bij ATN niet.
        </p>
      </div>
    </div>
  )
}
