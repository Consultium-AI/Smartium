export default function Sect11StSegmentEnTtop() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">ST-segment en T-top: ischemie en infarct</h2>
      <p>Hier ligt een belangrijk deel van de klinische ECG-analyse.</p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">De theorie van injury current</h3>
      <p>
        Normaal is het hart na de T-top elektrisch stil: de rustfase is iso-elektrisch.  Bij een acuut infarct ontstaat er stroomlek uit beschadigde cellen. Daardoor ontstaat een spanningsverschil: de injury current.
      </p>
      <p>De algemene vectorregel is:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>kijkt de elektrode naar het infarct toe, dan zie je ST-elevatie;</li>
        <li>kijkt de elektrode van de andere kant naar hetzelfde gebied, dan zie je reciproke ST-depressie.</li>
      </ul>
      <p>Dat reciproke patroon helpt om infarcten te herkennen.</p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">ST-depressie</h3>
      <p>ST-depressie kan passen bij:</p>
      <ol className="list-decimal pl-6 space-y-4">
        <li>
          <span>subendocardiale ischemie</span>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>het binnenste laagje van de hartspier krijgt te weinig zuurstof;</li>
            <li>vaak bij inspanning of instabiele angina;</li>
            <li>vaak horizontale of downsloping ST-depressie {'>'} 1 mm;</li>
            <li>dit hoort bij een NSTEMI of ernstige angina;</li>
          </ul>
        </li>
        <li>
          <span>reciproke verandering</span>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>je kijkt vanaf de tegenovergestelde kant tegen een infarct aan;</li>
            <li>zoek dan direct elders naar ST-elevatie.</li>
          </ul>
        </li>
      </ol>
      <p>Niet alles wat op ST-depressie lijkt is infarct. Bijvoorbeeld:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>digoxine geeft een komvormige ST-depressie;</li>
        <li>lichte vlakking van de T-top is vaak aspecifiek.</li>
      </ul>
      <p>ST-depressie is vooral relevant als die diep is of dynamisch verandert met klachten.</p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">ST-elevatie</h3>
      <p>ST-elevatie past bij een transmuraal infarct: een acute afsluiting, een STEMI.</p>
      <p>Belangrijk is dat je de ST-elevatie meet op een vast punt:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>gebruik de basislijn als referentie;</li>
        <li>zoek het J-punt: de overgang van de steile S-golf naar het ST-segment;</li>
        <li>meet daarna 60 ms later.</li>
      </ul>
      <p>
        <span className="font-semibold">Aandacht-vraagje:</span> waar meet je ST-elevatie?{' '}
        <br />
        <span className="font-semibold">Mini-antwoord:</span> vanaf het J-punt, 60 ms verderop, ten opzichte van de basislijn.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">T-top inversie</h3>
      <p>De normale T-top is positief, behalve in aVR en vaak V1.</p>
      <p>Een negatieve T-top kan wijzen op:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>ischemie: vaak symmetrisch, diep, “arrowhead”-achtig;</li>
        <li>post-infarct: T-top kan blijvend negatief worden na genezing;</li>
        <li>belasting/strain bij LVH: vaak asymmetrische inversie, vooral in V5/V6.</li>
      </ul>
      <p>Een nieuwe T-top inversie bij pijn op de borst is verdacht voor coronarialijden.</p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Hyperacute T-toppen</h3>
      <p>Vlak vóór een volledige ST-elevatie bij een STEMI zie je soms hyperacute T-golven:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>breder en hoger dan het QRS-complex zelf;</li>
        <li>kortdurend, vaak maar minuten;</li>
        <li>als je dit ziet, moet je direct de cardioloog bellen.</li>
      </ul>
    </div>
  )
}
