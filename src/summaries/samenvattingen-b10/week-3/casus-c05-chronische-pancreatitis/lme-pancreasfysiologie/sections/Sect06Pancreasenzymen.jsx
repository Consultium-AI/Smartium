export default function Sect06Pancreasenzymen () {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Pancreasenzymen en hun functie
      </h2>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Koolhydraatvertering: α-amylase
      </h3>
      <p>
        <strong className="text-slate-900 dark:text-slate-100">α-Amylase</strong> breekt{' '}
        <strong className="text-slate-900 dark:text-slate-100">α-1,4-glycosidische bindingen</strong> af. Hierdoor wordt
        zetmeel omgezet in kleinere brokstukken van twee tot negen glucoseresiduen. Deze fragmenten worden later verder
        afgebroken aan de apicale membraan van darmepitheelcellen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Vetvertering: lipasen</h3>
      <p>
        Vetvertering wordt geholpen door <strong className="text-slate-900 dark:text-slate-100">galzouten</strong>,{' '}
        <strong className="text-slate-900 dark:text-slate-100">lipase</strong> en{' '}
        <strong className="text-slate-900 dark:text-slate-100">colipase</strong>. Galzouten zorgen ervoor dat vet in de
        voeding wordt verdeeld in kleine bolletjes, <strong className="text-slate-900 dark:text-slate-100">micellen</strong>,
        waardoor het beter toegankelijk wordt in de waterige omgeving van de darm. Colipase bindt aan de galzouten,
        waarna <strong className="text-slate-900 dark:text-slate-100">pancreaslipase</strong> aan colipase kan binden
        en dicht bij zijn substraat komt: triglyceriden.
      </p>
      <p>
        Pancreaslipase breekt <strong className="text-slate-900 dark:text-slate-100">tri- en diglyceriden</strong> af
        tot <strong className="text-slate-900 dark:text-slate-100">monoglyceriden en vrije vetzuren</strong>.
        <br />
        Daarnaast is er <strong className="text-slate-900 dark:text-slate-100">carboxylesterlipase</strong>, dat
        verschillende soorten esters kan afbreken, waaronder:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>tri-, di- en monoglyceriden,</li>
        <li>cholesterylesters,</li>
        <li>fosfolipiden,</li>
        <li>vetoplosbare vitaminen.</li>
      </ul>
      <p>
        Carboxylesterlipase heeft <strong className="text-slate-900 dark:text-slate-100">galzouten</strong> nodig voor
        een optimale reactiesnelheid.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Eiwitvertering: proteasen</h3>
      <p>
        Bij de eiwitvertering wordt onderscheid gemaakt tussen{' '}
        <strong className="text-slate-900 dark:text-slate-100">endopeptidasen</strong> en{' '}
        <strong className="text-slate-900 dark:text-slate-100">exopeptidasen</strong>.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Endopeptidasen</strong> knippen in het midden van een
          eiwit, altijd na specifieke aminozuren. Daardoor ontstaan twee grotere peptidefragmenten.
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Exopeptidasen</strong> knippen aminozuren af vanaf het
          uiteinde van (poly)peptiden.
        </li>
      </ul>
      <p>De pancreas maakt onder andere:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">trypsine</strong>,
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">chymotrypsine</strong>,
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">elastase</strong>,
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">protease E</strong>,
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">carboxypeptidasen</strong>.
        </li>
      </ul>
      <p>
        <strong className="text-slate-900 dark:text-slate-100">Carboxypeptidasen</strong> knippen aminozuren af vanaf
        de <strong className="text-slate-900 dark:text-slate-100">C-terminus</strong> van het eiwit.
      </p>
    </div>
  )
}
