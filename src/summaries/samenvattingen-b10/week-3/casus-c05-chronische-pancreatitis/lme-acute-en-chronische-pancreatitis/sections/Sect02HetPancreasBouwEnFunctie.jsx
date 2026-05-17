export default function Sect02HetPancreasBouwEnFunctie () {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Het pancreas: bouw en functie
      </h2>
      <p>
        Het <strong className="text-slate-900 dark:text-slate-100">pancreas</strong> is een langwerpig orgaan dat retroperitoneaal ligt, dus achter het buikvlies. Het ligt achter de maag en loopt van het duodenum naar de milt. De kop van de pancreas ligt in de bocht van het duodenum. Ook lopen er belangrijke bloedvaten in de buurt, zoals de aorta, mesenteriale vaten en de miltvaten.
      </p>
      <p>Het pancreas heeft twee grote functies:</p>
      <ol className="list-decimal pl-6 space-y-4">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Exocriene functie</strong>
          <br />
          Hierbij maakt het pancreas <strong className="text-slate-900 dark:text-slate-100">verteringsenzymen</strong> en{' '}
          <strong className="text-slate-900 dark:text-slate-100">bicarbonaat</strong> aan. De enzymen komen vanuit de acinaire cellen en het bicarbonaat vanuit de ductale cellen. Dit is essentieel voor de vertering van vooral vetten, maar ook eiwitten en koolhydraten.
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Endocriene functie</strong>
          <br />
          Hierbij maakt het pancreas hormonen zoals <strong className="text-slate-900 dark:text-slate-100">insuline</strong> en{' '}
          <strong className="text-slate-900 dark:text-slate-100">glucagon</strong>. Deze worden geproduceerd in de{' '}
          <strong className="text-slate-900 dark:text-slate-100">eilandjes van Langerhans</strong>. Insuline komt van de beta-cellen en glucagon van de alpha-cellen. Ze regelen samen de bloedsuikerspiegel.
        </li>
      </ol>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-2">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          <strong className="font-semibold">Even checken:</strong> wat betekent{' '}
          <em>exocrien</em> ook alweer?
        </p>
        <p className="m-0 mt-2">
          <strong className="font-semibold">Kort antwoord:</strong> dat het pancreas stoffen afgeeft via afvoerbuizen,
          dus richting de darm.
        </p>
      </div>
      <p>Ziekte van het pancreas kan dus zowel <strong className="text-slate-900 dark:text-slate-100">spijsverteringsproblemen</strong> als <strong className="text-slate-900 dark:text-slate-100">diabetes</strong> geven.</p>
    </div>
  )
}
