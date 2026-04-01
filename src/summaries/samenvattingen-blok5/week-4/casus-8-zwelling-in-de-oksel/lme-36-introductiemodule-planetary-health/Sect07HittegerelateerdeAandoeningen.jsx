export default function Sect07HittegerelateerdeAandoeningen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hittegerelateerde aandoeningen</h2>
      <p>
        Hitte is een direct en belangrijk gezondheidseffect van klimaatverandering. Daarbij is niet alleen de temperatuur van
        belang, maar ook de luchtvochtigheid. De combinatie van beide wordt weergegeven met de heat index. Dit is de
        “gevoels-temperatuur”: het laat beter zien hoe gevaarlijk warmte is voor het lichaam dan temperatuur alleen.
      </p>
      <p>
        Waarom is vochtige warmte gevaarlijker? Omdat het lichaam warmte minder goed kwijt kan als de lucht al veel vocht
        bevat. Daardoor loopt de temperatuur sneller op.
      </p>
      <p>
        Heat exhaustion is een matig gevaarlijke toestand die snel aandacht vraagt. Heat stroke is de ernstigste vorm en is
        een levensbedreigende medische noodsituatie. Bij een hitteberoerte raakt het lichaam oververhit en kan er schade
        ontstaan aan hersenen, zenuwen en andere orgaansystemen, met zelfs de dood als gevolg.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Hittegerelateerde begrippen</h3>
      <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 dark:bg-slate-800/80">
            <tr>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Begrip</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Betekenis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            <tr>
              <td className="p-3 align-top">Heat index</td>
              <td className="p-3">Combinatie van temperatuur en luchtvochtigheid</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Heat exhaustion</td>
              <td className="p-3">Matig gevaarlijke hittegerelateerde toestand</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Heat stroke</td>
              <td className="p-3">Ernstigste vorm; levensbedreigende oververhitting</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Dehydratie</td>
              <td className="p-3">Uitdroging door verlies van vocht</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Elektrostatische stoornissen</td>
              <td className="p-3">Verstoringen in zouten en vochtbalans</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De gevolgen van extreme hitte zijn breed. Hitte kan uitdroging veroorzaken en bestaande aandoeningen verergeren,
        zoals astma, COPD, hartfalen en diabetes. Ook kan hitte zorgen voor minder cognitief functioneren en lagere
        productiviteit.
      </p>
      <p>
        Tijdens hittegolven is sterfte vooral toe te schrijven aan het falen van vitale organen, zoals hart, hersenen en
        longen. Daarnaast nemen bezoeken aan de spoedeisende hulp toe door heat exhaustion, heat stroke, hittekrampen,
        dehydratie, elektrolytstoornissen, vaatproblemen, ademhalingsproblemen, nierfalen, neurologische problemen en
        psychische aandoeningen.
      </p>
      <p>
        Voor sommige groepen is het risico groter. Oudere volwassenen, prepuberale kinderen en mensen die buiten werken
        kunnen warmte minder goed kwijt en zijn daardoor extra kwetsbaar. Ook foetussen van vrouwen die aan extreme hitte
        zijn blootgesteld, kunnen een hoger risico hebben op neuralebuisdefecten en andere aangeboren afwijkingen.
      </p>
      <p>
        Aandacht-vraag: Wat is het verschil tussen heat exhaustion en heat stroke?
        {'  '}
        Mini-antwoord: Heat exhaustion is ernstig maar minder gevaarlijk; heat stroke is de meest ernstige vorm en een
        medisch noodgeval.
      </p>
    </div>
  )
}
