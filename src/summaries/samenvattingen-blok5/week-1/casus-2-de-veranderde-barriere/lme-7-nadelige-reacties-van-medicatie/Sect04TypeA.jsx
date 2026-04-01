export default function Sect04TypeA() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Type A: farmacologische bijwerkingen</h2>
      <p>
        Type A-reacties zijn het gevolg van de normale farmacologische werking van een geneesmiddel, maar dan als
        ongewenst effect of als te sterk effect. De kans op een type A-reactie is vaak dosisafhankelijk: hoe hoger de
        dosis, hoe groter de kans.
      </p>
      <p>
        De kans op een type A-reactie hangt af van zowel mensgebonden als medicatiegebonden factoren. Mensgebonden
        factoren zijn bijvoorbeeld genetische aanleg, comorbiditeit, nier- en leverfunctie, leeftijd, geslacht,
        zwangerschap en lichaamsgewicht. Medicatiegebonden factoren zijn bijvoorbeeld dosis, toedieningsroute en
        gebruiksduur.
      </p>
      <p>Voorbeelden zijn onder andere:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>ademhalingsdepressie door opioïden</li>
        <li>bloedingen door acenocoumarol</li>
        <li>droge mond door tricyclische antidepressiva</li>
        <li>spierpijn door statinen</li>
      </ul>
      <p>
        Een belangrijk mechanisme is dat een middel ook op een off-target kan werken: het grijpt dan aan op een andere
        receptor of proces dan waarvoor het bedoeld is. Ook interacties spelen een rol, bijvoorbeeld als een medicijn de
        afbraak van een ander middel remt.
      </p>
      <p>
        Aandachtspunt: waarom ontstaan type A-bijwerkingen vaak na start of dosisverhoging?{'  '}
        Kort antwoord: omdat ze dosisafhankelijk zijn en samenhangen met de farmacologische werking van het
        geneesmiddel.
      </p>
    </div>
  )
}
