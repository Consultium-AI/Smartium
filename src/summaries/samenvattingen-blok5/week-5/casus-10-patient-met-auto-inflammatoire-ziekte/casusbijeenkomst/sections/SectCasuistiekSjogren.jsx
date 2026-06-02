import { Inline, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}>Casus 1: LSAHS</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Deze patiënt heeft vooral:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`moeheid`}</Inline></li>
        <li><Inline>{`pijn en ochtendstijfheid van de kleine handgewrichten`}</Inline></li>
        <li><Inline>{`droge mond`}</Inline></li>
        <li><Inline>{`afwijkende speekselfunctie`}</Inline></li>
        <li><Inline>{`positieve ANA en anti-SSA60`}</Inline></li>
        <li><Inline>{`afwijkend parotisbiopt`}</Inline></li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`De Schirmer-test is normaal, dus er is geen duidelijke oogbetrokkenheid. De systemische activiteit is laag, maar de klachtenlast is hoog. Daarom past dit bij **LSAHS**.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`De conclusie is Sjögren met vooral **inflammatoire artralgie** en **vermoeidheid**.`}</Inline>
      </p>
      <p className="font-semibold text-slate-900 dark:text-slate-100 m-0">
        <Inline>{`Behandeling:`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`vooral symptomatisch en gericht op droogte en klachten:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`hydroxychloroquine`}</Inline></li>
        <li><Inline>{`paracetamol en kortdurend NSAID bij pijnlijke gewrichten zonder duidelijke ontstekingsklachten`}</Inline></li>
        <li><Inline>{`mondzorg en speekselstimulerende maatregelen`}</Inline></li>
      </ul>

      <SubHeading level={2}>Casus 2: Sjögren met overlap</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Deze patiënt heeft:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`droge ogen`}</Inline></li>
        <li><Inline>{`droge huid`}</Inline></li>
        <li><Inline>{`vermoeidheid`}</Inline></li>
        <li><Inline>{`gewichtstoename`}</Inline></li>
        <li><Inline>{`kouwelijkheid`}</Inline></li>
        <li><Inline>{`obstipatie`}</Inline></li>
        <li><Inline>{`verhoogde TSH en verlaagd vrij T4`}</Inline></li>
        <li><Inline>{`anti-TPO positief`}</Inline></li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`Hier is sprake van Sjögren met daarnaast **Hashimoto-thyreoïditis**. De droge ogen passen bij Sjögren, en de schildklierafwijkingen passen bij Hashimoto.`}</Inline>
      </p>
      <p className="font-semibold text-slate-900 dark:text-slate-100 m-0">
        <Inline>{`Behandeling:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`oogbehandeling voor sicca`}</Inline></li>
        <li><Inline>{`behandeling van de overlapziekte met **levothyroxine**`}</Inline></li>
      </ul>

      <SubHeading level={2}>Casus 3: BALS</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Deze patiënt heeft:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`droge ogen`}</Inline></li>
        <li><Inline>{`droge mond`}</Inline></li>
        <li><Inline>{`hoge ANA-titer`}</Inline></li>
        <li><Inline>{`anti-SSA52, anti-SSA60 en anti-SSB positief`}</Inline></li>
        <li><Inline>{`verhoogd IgG`}</Inline></li>
        <li><Inline>{`verlaagd complement`}</Inline></li>
        <li><Inline>{`afwijkende Schirmer-test`}</Inline></li>
        <li><Inline>{`afwijkend speekselklierbiopt`}</Inline></li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`Er is dus duidelijke **B-celactivatie**. Tegelijk is de ziektelast qua klachten relatief laag. Dit past bij **BALS**.`}</Inline>
      </p>
      <p className="font-semibold text-slate-900 dark:text-slate-100 m-0">
        <Inline>{`Behandeling:`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`vooral droogtebehandeling:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`mondzorg`}</Inline></li>
        <li><Inline>{`kunstspeeksel`}</Inline></li>
        <li><Inline>{`pilocarpine`}</Inline></li>
        <li><Inline>{`oogdruppels, ooggel of oogzalf`}</Inline></li>
        <li><Inline>{`punctum plugs indien nodig`}</Inline></li>
      </ul>

      <SubHeading level={2}>Casus 4: HSA</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Deze patiënt heeft Sjögren met:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`droge ogen en droge mond`}</Inline></li>
        <li><Inline>{`Raynaud`}</Inline></li>
        <li><Inline>{`ernstige dunne vezelneuropathie`}</Inline></li>
        <li><Inline>{`later interstitiële longziekte`}</Inline></li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`Dit is een patiënt met **hoge systemische ziekteactiviteit**. Daarom hoort hij bij **HSA**.`}</Inline>
      </p>
      <p className="font-semibold text-slate-900 dark:text-slate-100 m-0">
        <Inline>{`Behandeling:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`punctum plugs`}</Inline></li>
        <li><Inline>{`nifedipine voor Raynaud`}</Inline></li>
        <li><Inline>{`behandeling van neuropathie via neuroloog`}</Inline></li>
        <li><Inline>{`bij longbetrokkenheid: systemische immunosuppressieve behandeling`}</Inline></li>
      </ul>
    </div>
  )
}
