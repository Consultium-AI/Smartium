export default function Sect04PrincipesDialyse() {
  return (
    <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De principes van dialyse</h2>
      <p>
        De basis van elke vorm van dialyse is het uitwisselen van water en daarin opgeloste stoffen. Dat gebeurt via een semipermeabel membraan. Daarbij spelen meerdere processen een rol:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>osmose: water verplaatst zich;</li>
        <li>diffusie: opgeloste stoffen verplaatsen zich van een hoge naar een lage concentratie;</li>
        <li>convectie: water en opgeloste stoffen worden door een drukverschil door een membraan geduwd.</li>
      </ul>
      <p>
        Hoe groter het concentratieverschil, hoe meer diffusie er optreedt. Kleine stoffen, zoals elektrolyten en ureum, laten zich daardoor relatief makkelijk verwijderen. Grote moleculen zijn moeilijker te klaren. Ook zijn stoffen die eiwitgebonden zijn moeilijker te dialyseren, omdat alleen de vrije fractie in het plasma goed beschikbaar is. Stoffen met een groot verdelingsvolume zijn ook lastiger te verwijderen, omdat een groot deel van die stof zich buiten het bloed bevindt en eerst terug moet diffunderen naar het plasma.
      </p>
      <p>
        Daarnaast maakt de hydrofiele of lipofiele eigenschap uit: hoe hydrofieler een stof, hoe makkelijker die zich laat dialyseren.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandachtsvraag: Waarom zijn grote moleculen moeilijker te dialyseren?  Kort antwoord: Omdat dialyse vooral goed werkt voor kleine, vrij in plasma voorkomende stoffen; grote of eiwitgebonden stoffen laten zich moeilijker verwijderen.
        </p>
      </div>
    </div>
  )
}
