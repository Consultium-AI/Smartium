export default function Sect05ToxidromenPatroon() {
  return (
    <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Toxidroom: het patroon</h2>
      <p>
        Een <span className="font-semibold">toxidroom</span> is een herkenbaar <span className="font-semibold">symptomencluster</span> bij een bepaalde groep intoxicaties. Je let vooral op <span className="font-semibold">pupilgrootte</span>, <span className="font-semibold">temperatuur</span> en <span className="font-semibold">darmgeluiden</span>, naast hartslag, bloeddruk, huid, ademhaling en bewustzijn. In de drugscontext spreek je ook van <span className="font-semibold">uppers</span> (geagiteerd) en <span className="font-semibold">downers</span> (versuft).
      </p>
      <p>Globaal (zie uitgebreide tabel in de lange samenvatting):</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><span className="font-semibold">Cholinerg</span>: vaak pupilvernauwing, hyperactieve darmgeluiden</li>
        <li><span className="font-semibold">Opiaten</span>: vaak pupilvernauwing, hypoactieve darmgeluiden</li>
        <li><span className="font-semibold">Sympathicomimetica</span>: vaak verwijde pupillen, hoge temperatuur, hyperactieve darmgeluiden</li>
        <li><span className="font-semibold">Anticholinergica</span>: vaak verwijde pupillen, hoge temperatuur, hypoactieve darmgeluiden</li>
        <li><span className="font-semibold">Hallucinogenen</span>: vaak verwijde pupillen, normale/lage temperatuur, hyperactieve darmgeluiden</li>
        <li><span className="font-semibold">Sedatief-hypnotisch</span>: vaak normale/verwijde pupillen, normale/lage temperatuur, hypoactieve darmgeluiden</li>
      </ul>
    </div>
  )
}
