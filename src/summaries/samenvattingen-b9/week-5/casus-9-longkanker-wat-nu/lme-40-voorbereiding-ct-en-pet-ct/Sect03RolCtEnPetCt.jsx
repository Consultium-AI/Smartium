export default function Sect03RolCtEnPetCt() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De rol van CT en PET/CT</h2>
      <p>
        Voor de beoordeling van longkanker zijn <span className="font-semibold">CT</span> en <span className="font-semibold">PET/CT</span> beide belangrijk, maar ze laten iets anders zien.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">CT: anatomische beoordeling</h3>
      <p>
        Een <span className="font-semibold">CT-thorax/abdomen</span> geeft vooral <span className="font-semibold">anatomische informatie</span>. CT is dus vooral geschikt om te kijken naar:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          de <span className="font-semibold">grootte</span> van de tumor;
        </li>
        <li>
          de <span className="font-semibold">lokale invasie</span> van omliggende structuren;
        </li>
        <li>vergrote lymfeklieren;</li>
        <li>
          mogelijke uitzaaiingen in organen zoals <span className="font-semibold">lever</span>, <span className="font-semibold">bijnieren</span> of <span className="font-semibold">bot</span>.
        </li>
      </ul>
      <p>
        Bij het meten van de tumor wordt de <span className="font-semibold">langste diameter van de solide component</span> gemeten. Dat mag in de <span className="font-semibold">axiale</span>, <span className="font-semibold">coronale</span> of <span className="font-semibold">sagittale</span> richting. Voor de classificatie gebruik je hiervoor het <span className="font-semibold">longvenster</span> en niet het mediastinale of weke-delenvenster.
      </p>
      <p>
        CT is goed in het tonen van details van de anatomie, maar zegt weinig over <span className="font-semibold">metabole activiteit</span>. Een vergrote lymfeklier kan daarom verdacht zijn, maar ook gewoon <span className="font-semibold">reactief</span> zijn, bijvoorbeeld bij infectie.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">PET/CT: anatomie plus metabole activiteit</h3>
      <p>
        PET/CT met <span className="font-semibold">18F-FDG</span> voegt een <span className="font-semibold">metabole</span> component toe aan de anatomische beelden van CT. Dat betekent dat je niet alleen ziet <span className="font-semibold">waar</span> iets zit, maar ook <span className="font-semibold">hoe actief</span> het is.
      </p>
      <p>PET/CT is vooral nuttig voor:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          hogere gevoeligheid voor <span className="font-semibold">hilaire</span> en <span className="font-semibold">mediastinale</span> lymfekliermetastasen;
        </li>
        <li>
          detectie van <span className="font-semibold">occulte metastasen op afstand</span> die op CT niet duidelijk zichtbaar zijn;
        </li>
        <li>
          onderscheid tussen <span className="font-semibold">benigne</span> en <span className="font-semibold">maligne</span> afwijkingen.
        </li>
      </ul>
      <p>
        Whole-body PET/CT is standaard bij een <span className="font-semibold">curatieve behandelingsintentie</span>.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Beperkingen van PET/CT</h3>
      <p>
        PET is <span className="font-semibold">niet 100% specifiek</span>. Dat betekent dat een verhoogde FDG-opname niet altijd maligniteit betekent.
      </p>
      <p>
        <span className="font-semibold">Vals-positieven</span> komen bijvoorbeeld voor bij:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>post-obstructieve pneumonie;</li>
        <li>tuberculose;</li>
        <li>recente infectie.</li>
      </ul>
      <p>
        <span className="font-semibold">Vals-negatieven</span> komen bijvoorbeeld voor bij:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          kleine metastasen van <span className="font-semibold">&lt;1 cm</span>;
        </li>
        <li>
          <span className="font-semibold">hersenmetastasen</span>, doordat de hersenen fysiologisch al een hoge FDG-opname hebben.
        </li>
      </ul>
      <p>
        Bij twijfel kan er een <span className="font-semibold">biopt</span> nodig zijn via <span className="font-semibold">EBUS</span> (EndoBronchial UltraSound) of via een <span className="font-semibold">mediastinoscopie</span>. Voor verdenking op hersenmetastasen is <span className="font-semibold">MRI</span> betrouwbaarder dan PET.
      </p>
      <p>
        <span className="font-semibold">Aandachtsvraag:</span> Wat voegt PET toe aan CT?{' '}
        <br />
        <span className="font-semibold">Mini-antwoord:</span> PET laat metabole activiteit zien en helpt zo bij het vinden van verdachte klieren en verborgen metastasen.
      </p>
    </div>
  )
}
