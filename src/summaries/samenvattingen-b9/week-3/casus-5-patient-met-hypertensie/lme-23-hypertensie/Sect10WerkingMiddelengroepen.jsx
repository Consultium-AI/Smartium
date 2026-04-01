export default function Sect10WerkingMiddelengroepen() {
  return (
    <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">RAAS-remming: ACE-remmers, ARBs en aliskiren</h2>
        <p>
          ACE-remmers en angiotensine-II-receptorblokkers grijpen aan op het renine-angiotensine-aldosteronsysteem. Dat systeem is belangrijk voor vasoconstrictie en zoutretentie.
        </p>
        <p>ACE-remmers blokkeren de omzetting van angiotensine I naar angiotensine II.</p>
        <p>ARBs blokkeren de angiotensine-II-receptor.</p>
        <p>Aliskiren remt renine direct, maar wordt weinig voorgeschreven.</p>
        <p>Een belangrijk verschil:</p>
        <p>Bij ACE-remmers kunnen droge hoest en angio-oedeem voorkomen.</p>
        <p>Bij ARBs komen die bijwerkingen niet voor, omdat de afbraak van bradykinine niet wordt geremd.</p>
        <p>ACE-remmers kunnen bij sommige situaties gevaarlijk zijn, bijvoorbeeld bij:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>acute nierinsufficiëntie</li>
          <li>nierarteriestenose</li>
          <li>{'combinatie met NSAID\u2019s'}</li>
          <li>ondervulling, bijvoorbeeld bij sepsis</li>
        </ul>
        <p>
          Dat komt doordat deze middelen de efferente arteriole beïnvloeden en daarmee de nierdoorbloeding kunnen verstoren. Die nierfunctieverslechtering is vaak wel reversibel.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Calciumantagonisten</h2>
        <p>
          Calciumantagonisten remmen de instroom van calcium via L-type calciumkanalen in gladde spiercellen en hartspiercellen. Minder calcium betekent minder contractie.
        </p>
        <p>Daardoor:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>ontstaat vasodilatatie</li>
          <li>daalt de perifere weerstand</li>
          <li>daalt de bloeddruk</li>
        </ul>
        <p>Er zijn twee hoofdgroepen:</p>
        <p>Dihydropyridines: vooral vaatactief, zoals amlodipine en nifedipine</p>
        <p>Niet-dihydropyridines: werken sterker op het hart, zoals verapamil en diltiazem</p>
        <p>Bijwerkingen die je vaak ziet bij dihydropyridines zijn:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>enkeloedeem</li>
          <li>flushing</li>
          <li>hoofdpijn</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Diuretica</h2>
        <p>
          {'Diuretica worden ook wel \u201cplastabletten\u201d genoemd, maar een betere naam is natriuretica, omdat ze vooral de zoutuitscheiding stimuleren.'}
        </p>
        <p>Hun werking kun je eenvoudig zo onthouden:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>minder natrium in het lichaam</li>
          <li>minder extracellulair volume</li>
          <li>lager hartminuutvolume</li>
          <li>lagere bloeddruk</li>
          <li>later ook daling van de perifere weerstand</li>
        </ul>
        <p>Er treedt wel tegenregulatie op, met verhoging van renine en aldosteron.</p>
        <p>Waar werken de verschillende diuretica?</p>
        <p>Thiaziden werken vooral in de distale tubulus</p>
        <p>Lisdiuretica werken in de lis van Henle</p>
        <p>Kaliumsparende diuretica werken in de verzamelbuis</p>
        <p>Bekende voorbeelden:</p>
        <p>thiaziden: hydrochlorothiazide, indapamide, chlortalidon</p>
        <p>lisdiuretica: furosemide, bumetanide</p>
        <p>kaliumsparend: amiloride, triamtereen, spironolacton, eplerenon</p>
        <p>Bij lis- en thiazidediuretica kun je denken aan:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>jicht</li>
          <li>hyponatriëmie</li>
          <li>hypokaliëmie</li>
          <li>diabetes mellitus</li>
        </ul>
        <p>Kaliumsparende diuretica kunnen juist tot hyperkaliëmie leiden.</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Betablokkers</h2>
        <p>Betablokkers verlagen onder andere:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>de renineproductie</li>
          <li>het hartminuutvolume</li>
          <li>de sympathische activiteit</li>
        </ul>
        <p>Bijwerkingen zijn onder andere:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>koude acra</li>
          <li>bradycardie</li>
          <li>moeheid/drowsiness</li>
          <li>impotentie</li>
          <li>bronchoconstrictie, vooral bij niet-selectieve betablokkers</li>
        </ul>
        <p>
          Betablokkers worden vooral voorgeschreven bij patiënten met een hartgerelateerde indicatie, dus niet alleen puur voor hypertensie.
        </p>
      </div>
    </div>
  )
}
