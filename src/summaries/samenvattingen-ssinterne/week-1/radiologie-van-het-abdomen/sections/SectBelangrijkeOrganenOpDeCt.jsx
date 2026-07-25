import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Belangrijke organen op de CT`}</Inline></SubHeading>
      <SubHeading><Inline>{`Lever, galblaas en milt`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De lever ligt in de rechterbovenbuik en is een groot orgaan met meerdere vaten erin. De galblaas ligt tegen de lever aan en kan op CT soms wat ingedeukt of juist duidelijk zichtbaar zijn. De milt ligt linksboven in de buik.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De levervenen draineren naar de vena cava inferior. De vena porta komt de lever binnen en splitst zich in een rechter en linker tak. De milt is op CT goed te volgen in de linker bovenbuik.`}</Inline></p>
      <SubHeading><Inline>{`Nieren en bijnieren`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De nieren liggen retroperitoneaal, dus meer naar achteren in de buik. De bijnieren liggen boven op de nieren en hebben vaak een driehoekige vorm. De rechter en linker nier zijn op CT goed te herkennen, net als de nierarteriën en niervenen.`}</Inline></p>
      <SubHeading><Inline>{`Pancreas`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De pancreas ligt dwars in de bovenbuik. Je kunt er verschillende delen in onderscheiden: de staart, het lichaam, de hals, de kop en het uncinate process. De pancreas ligt dicht bij de milt en de twaalfvingerige darm.`}</Inline></p>
      <SubHeading><Inline>{`Maag en duodenum`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De maag ligt linksboven in de buik. Je kunt delen onderscheiden zoals de fundus, het corpus, het antrum en de pylorus. De pylorus gaat over in het duodenum. Het duodenum loopt van rechts naar links en kruist daarbij de middellijn.`}</Inline></p>
      <SubHeading><Inline>{`Dikke darm en dunne darm`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De colononderdelen zijn op CT goed te volgen als je weet waar je moet kijken. Je ziet onder andere het caecum, de colon ascendens, de colon transversum, de colon descendens en de flexuren. De dunne darm ligt meer centraal en heeft andere lissen dan de dikke darm.`}</Inline></p>
      <SubHeading><Inline>{`Spieren en skelet`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Ook spieren zijn op CT goed zichtbaar. Belangrijke oriëntatiepunten zijn de psoas-spieren en de quadratus lumborum. In de voorste buikwand zie je de externe oblique, interne oblique en transversus abdominis. In de middellijn liggen de rectus abdominis-spieren, die samenkomen in de linea alba.`}</Inline></p>
    </div>
  )
}
