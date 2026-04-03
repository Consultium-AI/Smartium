export default function Sect06BehandelingEnComplicatiesLeukemie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Behandeling en complicaties</h2>
      <p>
        Bij ALL duurt de behandeling ruim twee jaar. Een stamceltransplantatie is zelden nodig. Bij AML is de behandeling
        korter, ongeveer een half jaar, maar een stamceltransplantatie is vaker nodig dan bij ALL.
      </p>
      <p>Belangrijke complicaties van de behandeling zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          infecties: snel delende cellen beschadigen gezonde witte bloedcellen en barrières, zoals slijmvliezen in het
          maag-darmkanaal;
        </li>
        <li>alopecia: haren zijn snel delende cellen;</li>
        <li>diabetes: onder andere door prednison of asparaginase;</li>
        <li>trombose: bijvoorbeeld door een lijn of door asparaginase;</li>
        <li>convulsies: bijvoorbeeld door bloedingen, trombose of als bijwerking van chemotherapie;</li>
        <li>pijn: vaak door neuropathie.</li>
      </ul>
      <p>Late effecten kunnen zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>vermoeidheid;</li>
        <li>concentratiestoornissen;</li>
        <li>botproblemen;</li>
        <li>zelden een verminderde hartpompfunctie;</li>
        <li>bij AML ook infertiliteit en cardiotoxiciteit.</li>
      </ul>
      <div className="rounded-xl border border-amber-200 dark:border-amber-600/40 bg-amber-50 dark:bg-amber-950/65 p-4">
        <p className="text-amber-950 dark:text-amber-100">
          <strong className="text-amber-950 dark:text-amber-50">Aandachtsvraag:</strong> waarom is de lumbaalpunctie zo
          belangrijk?</p>
        <p className="mt-2">
          <strong className="text-amber-950 dark:text-amber-50">Mini-antwoord:</strong>{' '}om na te gaan of er
          leukemiecellen in het hersenvocht zitten en om tijdens de behandeling chemotherapie toe te kunnen dienen.
        </p>
      </div>
    </div>
  )
}
