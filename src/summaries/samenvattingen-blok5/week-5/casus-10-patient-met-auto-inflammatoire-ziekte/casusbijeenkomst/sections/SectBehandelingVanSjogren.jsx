import { Inline, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}>Droge mond</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Bij orale sicca zijn de doelen: de mond vochtig houden, speekselproductie stimuleren en tandproblemen voorkomen.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`Maatregelen:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`goede mondhygiëne`}</Inline></li>
        <li><Inline>{`tandarts of mondhygiënist 4 keer per jaar`}</Inline></li>
        <li><Inline>{`tandpasta met hoge fluorideconcentratie`}</Inline></li>
        <li><Inline>{`suikervrije zuurtjes`}</Inline></li>
        <li><Inline>{`xylitolkauwgom`}</Inline></li>
        <li><Inline>{`mondgels en mondsprays`}</Inline></li>
        <li><Inline>{`kunstspeeksel`}</Inline></li>
        <li><Inline>{`pilocarpine`}</Inline></li>
        <li><Inline>{`xylimelts`}</Inline></li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`Droogte-inducerende medicatie moet zoveel mogelijk worden vermeden, zoals antidepressiva, anxiolytica, antipsychotica, antihistaminica en opiaten.`}</Inline>
      </p>

      <SubHeading level={2}>Droge ogen</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Bij oculaire sicca zijn de opties:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`oogdruppels`}</Inline></li>
        <li><Inline>{`ooggel`}</Inline></li>
        <li><Inline>{`oogzalf`}</Inline></li>
        <li>
          <Inline>{`bij inflammatie: NSAID-, corticosteroïd- of ciclosporine-oogdruppels onder supervisie van de oogarts`}</Inline>
        </li>
        <li><Inline>{`pilocarpine`}</Inline></li>
        <li><Inline>{`punctum plugs`}</Inline></li>
        <li><Inline>{`oogdruppels van eigen serum`}</Inline></li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`Ook hier geldt: vermijd middelen die droogte verergeren.`}</Inline>
      </p>

      <SubHeading level={2}>Systemische ziekteactiviteit</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Bij meer actieve systemische ziekte of overlap met andere auto-immuunziekten worden gebruikt:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`corticosteroïden`}</Inline></li>
        <li><Inline>{`conventionele DMARDs zoals mycofenolaat mofetil, azathioprine en methotrexaat`}</Inline></li>
        <li><Inline>{`B-celtherapie zoals rituximab en belimumab`}</Inline></li>
        <li><Inline>{`cyclofosfamide bij ernstige orgaanbetrokkenheid`}</Inline></li>
      </ul>
    </div>
  )
}
