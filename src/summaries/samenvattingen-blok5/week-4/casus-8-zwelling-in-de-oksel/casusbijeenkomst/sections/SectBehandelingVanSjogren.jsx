import { Inline, DataTable, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`De behandeling hangt af van het type klachten en de categorie van de patiënt.`}</Inline>
      </p>

      <SubHeading level={2}>Behandeling van gewrichtsklachten en milde systemische klachten</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Bij vooral **LSAHS** werden genoemd:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li>
          <Inline>{`**Hydroxychloroquine**`}</Inline>
        </li>
        <li>
          <Inline>{`**Paracetamol**`}</Inline>
        </li>
        <li>
          <Inline>{`**Kortdurend NSAID’s** bij pijnlijke gewrichten zonder duidelijke ontstekingsklachten`}</Inline>
        </li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`Hydroxychloroquine remt onder andere TLR7 en TLR9 en beïnvloedt zo immuunactivatie.`}</Inline>
      </p>

      <SubHeading level={2}>Behandeling van droge mond</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Bij orale sicca zijn de doelen: de mond vochtig houden, speeksel stimuleren en tandproblemen voorkomen.`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li>
          <Inline>{`goede mondhygiëne`}</Inline>
        </li>
        <li>
          <Inline>{`tandarts/mondhygiënist 4 keer per jaar`}</Inline>
        </li>
        <li>
          <Inline>{`tandpasta met hoge fluorideconcentratie`}</Inline>
        </li>
        <li>
          <Inline>{`suikervrije zuurtjes`}</Inline>
        </li>
        <li>
          <Inline>{`xylitolkauwgom`}</Inline>
        </li>
        <li>
          <Inline>{`mondgels en mondsprays`}</Inline>
        </li>
        <li>
          <Inline>{`**pilocarpine**`}</Inline>
        </li>
        <li>
          <Inline>{`**Xylimelts**`}</Inline>
        </li>
        <li>
          <Inline>{`kunstspeeksel`}</Inline>
        </li>
        <li>
          <Inline>{`droogte-inducerende medicatie vermijden`}</Inline>
        </li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`Pilocarpine stimuleert muscarinereceptoren in speeksel- en traanklieren, waardoor meer secretie ontstaat. Xylimelts geven xylitol af en bevorderen zo bevochtiging en, als er nog restfunctie is, speekselproductie.`}</Inline>
      </p>

      <SubHeading level={2}>Behandeling van droge ogen</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Bij oculaire sicca werden genoemd:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li>
          <Inline>{`oogdruppels`}</Inline>
        </li>
        <li>
          <Inline>{`ooggel`}</Inline>
        </li>
        <li>
          <Inline>{`oogzalf`}</Inline>
        </li>
        <li>
          <Inline>{`bij inflammatie: NSAID-, corticosteroïd- of ciclosporinedruppels onder supervisie van een oogarts`}</Inline>
        </li>
        <li>
          <Inline>{`**pilocarpine**`}</Inline>
        </li>
        <li>
          <Inline>{`**punctum plugs**`}</Inline>
        </li>
        <li>
          <Inline>{`oogdruppels van eigen serum`}</Inline>
        </li>
        <li>
          <Inline>{`droogte-inducerende medicatie vermijden`}</Inline>
        </li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`Punctum plugs sluiten de traanafvoer gedeeltelijk af, zodat tranen langer op het oog blijven. Oogdruppels van eigen serum worden gebruikt als commerciële druppels niet goed worden verdragen.`}</Inline>
      </p>

      <SubHeading level={2}>Behandeling van systemische of ernstige ziekte</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Bij **HSA** en ook bij overlap met andere systemische auto-immuunziekten werden genoemd:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li>
          <Inline>{`corticosteroïden zoals methylprednisolon en prednison`}</Inline>
        </li>
        <li>
          <Inline>{`conventionele DMARD’s zoals mycofenolaat mofetil, azathioprine en methotrexaat`}</Inline>
        </li>
        <li>
          <Inline>{`B-celtherapie zoals rituximab en belimumab`}</Inline>
        </li>
        <li>
          <Inline>{`cyclofosfamide bij ernstige orgaanbetrokkenheid`}</Inline>
        </li>
      </ul>
      <p className="font-semibold text-slate-900 dark:text-slate-100 m-0 pt-2">
        <Inline>{`Tabel 5. Belangrijke geneesmiddelen en hun werking`}</Inline>
      </p>
      <DataTable
        rows={[
          ['Middel', 'Werking'],
          ['---', '---'],
          ['Hydroxychloroquine', 'remt TLR7 en TLR9'],
          ['Pilocarpine', 'muscarinestimulatie van speeksel- en traanklieren'],
          ['Punctum plugs', 'verminderen traanafvoer'],
          ['Ciclosporine oogdruppels', 'calcineurineremming, minder IL-2 en T-celactivatie'],
          ['Mycofenolaat mofetil', 'remt purinesynthese'],
          ['Azathioprine', 'remt DNA-synthese in snel delende cellen'],
          ['Methotrexaat', 'remt foliumzuurmetabolisme'],
          ['Rituximab', 'anti-CD20, gericht tegen B-cellen'],
          ['Belimumab', 'BAFF-remmer, beïnvloedt overleving en activatie van B-cellen'],
          ['Cyclofosfamide', 'beschadigt DNA in snel delende cellen'],
        ]}
      />

      <SubHeading level={2}>Hashimoto als overlap</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Bij een patiënt met Sjögren en Hashimoto werd ook **levothyroxine** genoemd als behandeling van de hypothyreoïdie.`}</Inline>
      </p>
    </div>
  )
}
