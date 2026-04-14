export default function Sect02SelectieWaaromEnBLymfocyten() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Selectie van lymfocyten: waarom is dit nodig?
      </h2>
      <p>
        Tijdens hun ontwikkeling maken B- en T-lymfocyten receptoren aan waarmee zij antigenen kunnen herkennen. Dat
        gebeurt niet doelgericht, maar door herschikking van gensegmenten. Daardoor ontstaat een enorme variatie aan
        receptoren, wat gunstig is voor de afweer tegen veel verschillende ziekteverwekkers. Tegelijk ontstaat daardoor
        ook een risico: sommige lymfocyten krijgen een receptor die lichaamseigen structuren herkent.
      </p>
      <p>
        Daarom moeten B- en T-lymfocyten tijdens hun ontwikkeling worden geselecteerd. Het immuunsysteem moet namelijk
        twee dingen tegelijk bereiken. Enerzijds moeten er voldoende lymfocyten overblijven die vreemde antigenen
        kunnen herkennen. Anderzijds moeten sterk autoreactieve cellen worden verwijderd of onschadelijk gemaakt. Dit
        selectieproces vormt een belangrijk onderdeel van immunologische tolerantie.
      </p>
      <p>
        Bij B-lymfocyten gebeurt de centrale selectie in het beenmerg. Bij T-lymfocyten gebeurt die in de thymus,
        vooral in cortex en medulla.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Ontwikkeling van B-lymfocyten in het beenmerg
      </h3>
      <p>
        Bij de vorming van B-lymfocyten gaan veel cellen verloren. Een groot deel sterft al doordat de genherschikking
        fout verloopt. Alleen wanneer een functioneel membraanimmunoglobuline ontstaat, kan de cel verder ontwikkelen.
      </p>
      <p>
        Een probleem ontstaat wanneer een onrijpe B-lymfocyt een B-celreceptor draagt die sterk bindt aan een
        autoantigeen in het beenmerg. Zo’n cel kan later na activatie autoantistoffen produceren. Om dat te
        voorkomen zijn veiligheidsmechanismen ingebouwd.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Klonale deletie</h3>
      <p>
        Wanneer een onrijpe B-lymfocyt met hoge affiniteit bindt aan autoantigenen die in hoge concentratie in het
        beenmerg aanwezig zijn, kan die cel apoptose ondergaan. Dit heet klonale deletie. De autoreactieve kloon wordt
        dan verwijderd voordat zij verder kan uitrijpen.
      </p>
      <p>
        Dit is een vorm van centrale tolerantie: de cel wordt al tijdens de ontwikkeling in het primaire lymfoïde orgaan
        uitgeschakeld.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Receptoraanpassing of receptor editing
      </h3>
      <p>
        Een tweede mogelijkheid is dat de B-lymfocyt niet meteen sterft, maar haar receptorspecificiteit verandert.
        Door opnieuw lichte-ketenherschikkingen uit te voeren kan een andere B-celreceptor ontstaan. Als die nieuwe
        receptor het autoantigeen niet meer of minder sterk herkent, kan de cel alsnog verder ontwikkelen.
      </p>
      <p>
        Dit proces heet receptor editing of receptoraanpassing. Het gaat dus niet om het uitschakelen van de hele cel,
        maar om het veranderen van de receptor zodat de cel minder gevaarlijk wordt.
      </p>
      <p>
        Volgens de tekst komt receptor editing veel voor; er zijn zelfs aanwijzingen dat ongeveer de helft van de
        B-lymfocyten in de periferie ooit zo’n receptor editing heeft doorgemaakt.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Niet alle autoreactieve B-cellen worden centraal verwijderd
      </h3>
      <p>
        De tolerantiemechanismen in het beenmerg zijn niet volledig waterdicht. Sommige autoreactieve B-lymfocyten
        kunnen het beenmerg toch verlaten. Daarom bestaan er ook perifere tolerantiemechanismen.
      </p>
      <p>
        Bovendien is er tussen de onrijpe en de rijpe B-lymfocyt nog een overgangsstadium: de transitionele B-lymfocyt.
        Deze komt voor in beenmerg, perifeer bloed en perifere lymfoïde organen. De precieze functie van deze
        transitionele cel is niet volledig duidelijk, maar mogelijk speelt ook hier selectie van autoreactiviteit nog
        een rol.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Rijpe B-lymfocyten</h3>
      <p>
        De laatste stap in de differentiatie van B-lymfocyten is de overgang van onrijpe naar rijpe B-lymfocyten. Het
        belangrijkste verschil is dat rijpe B-lymfocyten naast IgM ook IgD aan het oppervlak tot expressie brengen.
      </p>
    </div>
  )
}
