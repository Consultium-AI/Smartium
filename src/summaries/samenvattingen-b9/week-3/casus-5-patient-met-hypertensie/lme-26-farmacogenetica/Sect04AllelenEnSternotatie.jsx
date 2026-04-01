export default function Sect04AllelenEnSternotatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Allelen en sternotatie</h2>
      <p>
        Elk gen bestaat in principe uit twee kopieën. Die kopieën noemen we allelen: één geërfd van de moeder en één van de vader. Als beide allelen exact dezelfde genetische informatie bevatten, is iemand homozygoot. Als de twee allelen verschillend zijn, is iemand heterozygoot.
      </p>
      <p>
        In de farmacogenetica gebruiken we vaak de sterrennotatie om allelen te benoemen, zoals <strong>*1, *2, *3</strong> enzovoorts. De nummers geven de volgorde aan waarin de varianten zijn ontdekt.
      </p>
      <p>
        <strong>Homozygoot:</strong> twee identieke allelen, bijvoorbeeld <strong>GENA*4/GENA*4</strong>
      </p>
      <p>
        <strong>Heterozygoot:</strong> twee verschillende allelen, bijvoorbeeld <strong>GENB*1/GENB*4</strong>
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandachtsvraag: wat is het verschil tussen homozygoot en heterozygoot?  Bij homozygotie zijn beide allelen hetzelfde; bij heterozygotie zijn ze verschillend.
        </p>
      </div>
      <p>Een SNP kan er bijvoorbeeld zo uitzien:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>A &gt; C</li>
        <li>T &gt; G</li>
      </ul>
    </div>
  )
}
