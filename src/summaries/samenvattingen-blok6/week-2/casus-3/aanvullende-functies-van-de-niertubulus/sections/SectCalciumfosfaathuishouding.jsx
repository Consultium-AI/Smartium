import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Calciumfosfaathuishouding`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De nier speelt ook een belangrijke rol in de calciumfosfaathuishouding. Daarbij werkt de nier samen met de bijschildklieren, de botten, de darmen en de huid. De regeling is complex, maar de kern is goed te begrijpen als je de belangrijkste hormonen en organen uit elkaar houdt.`}</Inline></p>
      <SubHeading><Inline>{`PTH als centrale regelaar`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`PTH, het bijschildklierhormoon, wordt gemaakt door de bijschildklieren. Dit hormoon heeft een belangrijke invloed op calcium en fosfaat.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`PTH heeft geen invloed op de calciumopname in de darm, maar wel op de calciumexcretie in de nier en op de calcium mobilisatie uit de botten. Daardoor stijgt het calciumgehalte in het serum. Met andere woorden: als PTH omhoog gaat, wordt calcium in het bloed verhoogd.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarnaast speelt de nier een rol in de activatie van vitamine D. Geactiveerd vitamine D zorgt ervoor dat er meer calcium uit de darm wordt opgenomen. Als de nierfunctie vermindert, wordt vitamine D minder goed geactiveerd en daalt de calciumopname uit de darm.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Wat gebeurt er met calcium als de nier vitamine D minder goed activeert?
**Mini-antwoord:** Dan wordt er minder calcium uit de darm opgenomen en kan hypocalciëmie ontstaan.`} />
      <SubHeading><Inline>{`Fosfaat en FGF-23`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Naast PTH speelt ook FGF-23 een belangrijke rol in de fosfaathuishouding. PTH stimuleert de productie van FGF-23. FGF-23 zorgt vervolgens voor verhoogde fosfaatexcretie via de nier. Dat doet het onder andere door de terugresorptie via NaPi-kanalen te remmen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Het serumcalcium kan direct terugkoppelen op PTH, maar het serumfosfaat doet dat niet rechtstreeks. Die terugkoppeling verloopt via FGF-23. Dat maakt het systeem ingewikkeld, maar ook logisch: calcium en fosfaat worden samen gereguleerd, en de nier is daarin een centrale speler.`}</Inline></p>
      <SubHeading><Inline>{`Wat gebeurt er bij nierinsufficiëntie?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij nierinsufficiëntie ontstaan problemen met de calcium- en fosfaathuishouding. Een belangrijk klinisch probleem is dat fosfaat zich kan ophopen in het bloed, vooral als de nierfunctie verder daalt. Dat heet hyperfosfatemie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een verhoogd fosfaatgehalte kan op twee manieren bijdragen aan een laag calciumgehalte:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Het verstoort het vitamine D-metabolisme verder.`}</Inline></li>
        <li><Inline>{`Fosfaat kan samen met calcium neerslaan, waardoor het calcium in het bloed nog verder daalt.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Door de daling van calcium gaan de bijschildklieren meer PTH maken. Dat leidt weer tot effecten op botten en vaten.`}</Inline></p>
      <SubHeading><Inline>{`Renale osteodystrofie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het geheel van botafwijkingen bij nierinsufficiëntie heet renale osteodystrofie. Daarbij spelen twee dingen een rol. Ten eerste zorgt een laag calcium voor minder mineralisatie van het bot, waardoor het bot brozer wordt. Ten tweede zorgt verhoogd PTH voor meer botombouw. Samen leidt dat tot botten die minder stevig zijn en makkelijker breken.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarnaast heeft PTH ook invloed op hart en bloedvaten en kan het daar fibrose veroorzaken. Daarom wordt de calciumfosfaatbalans bij nierinsufficiëntie niet alleen bekeken vanuit de botten, maar ook vanuit de bloedvaten.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Belangrijke veranderingen bij nierinsufficiëntie`}</Inline></SubHeading>
      <DataTable rows={[["Verandering", "Gevolg"], ["Minder activatie van vitamine D", "Minder calciumopname uit de darm"], ["Minder filtratie van fosfaat", "Fosfaatstapeling in het bloed"], ["Fosfaat + calcium", "Neerslag en verdere daling van calcium"], ["Lager calcium", "Meer PTH-afgifte"], ["Meer PTH", "Meer botombouw en effecten op vaten"], ["Geheel van botafwijkingen", "Renale osteodystrofie"]]} />
      <p className="leading-relaxed"><Inline>{`De behandeling richt zich op het voorkomen van deze problemen. Daarbij zijn actief vitamine D en het beperken van fosfaat belangrijk.`}</Inline></p>
    </div>
  )
}
