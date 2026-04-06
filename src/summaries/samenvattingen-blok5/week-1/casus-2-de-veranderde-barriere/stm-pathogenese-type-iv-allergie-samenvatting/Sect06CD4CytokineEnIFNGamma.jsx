export default function Sect06CD4CytokineEnIFNGamma() {
  return (
    <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          CD4+ T-cellen en cytokine-gemedieerde ontsteking
        </h2>
        <p>
          De meest klassieke vorm van type IV hypersensitiviteit is de reactie die ontstaat door CD4+ T-helpercellen.
          Deze T-cellen herkennen antigeen dat wordt aangeboden door een antigeenpresenterende cel (APC), bijvoorbeeld een
          dendritische cel.
        </p>
        <p>Na activatie differentiëren deze T-cellen tot effectorcellen, vooral:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Th1-cellen</li>
          <li>soms ook Th17-cellen</li>
        </ul>
        <p>Daarna produceren zij cytokinen die andere ontstekingscellen aantrekken en activeren.</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">De centrale rol van IFN-γ</h3>
        <p>
          Het centrale cytokine in de klassieke delayed-type hypersensitivity is interferon-gamma (IFN-γ). Dit wordt vooral
          geproduceerd door Th1-cellen.
        </p>
        <p>
          IFN-γ activeert macrofagen, vooral de zogenoemde klassiek geactiveerde macrofagen (M1). Deze macrofagen maken
          stoffen vrij die:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>microben kunnen doden</li>
          <li>maar ook eigen weefsel beschadigen</li>
          <li>en de ontsteking verder versterken</li>
        </ul>
        <p>Hierdoor ontstaat uiteindelijk het beeld van inflammatie en weefselschade.</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">De bijdrage van Th17-cellen</h3>
        <p>
          Naast Th1-cellen kunnen ook Th17-cellen een rol spelen. Zij produceren IL-17, wat vooral leidt tot recrutering van
          neutrofielen. Daardoor kan de ontstekingsreactie nog heviger worden, vooral in situaties waarin neutrofielen
          duidelijk aanwezig zijn.
        </p>
      </div>
    </div>
  )
}
