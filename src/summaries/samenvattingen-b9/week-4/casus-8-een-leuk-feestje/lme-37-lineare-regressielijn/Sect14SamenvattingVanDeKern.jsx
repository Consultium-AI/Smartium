export default function Sect14SamenvattingVanDeKern() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Samenvatting van de kern</h2>
      <p>
        Lineaire regressie gebruik je om een uitkomst Y te beschrijven of te voorspellen op basis van één of meerdere verklarende variabelen X. De regressielijn heeft een intercept en een helling. De helling laat zien hoeveel Y gemiddeld verandert als X met één eenheid verandert.
      </p>
      <p>
        Correlatie beschrijft alleen de sterkte en richting van een lineaire samenhang. Regressie gaat verder, omdat je er een verwachting van Y uit kunt afleiden. Geen van beide bewijst causaliteit. Daarvoor is de onderzoeksopzet en vooral het omgaan met confounding belangrijk.
      </p>
      <p>
        De kwaliteit van het model beoordeel je onder andere met residuen, SSE en R². De belangrijkste aannames zijn lineariteit, onafhankelijkheid, constante variantie en normaliteit van de fouten. Bij een dichotome X is eenvoudige lineaire regressie gelijkwaardig aan een t-toets voor onafhankelijke groepen.
      </p>
    </div>
  )
}
