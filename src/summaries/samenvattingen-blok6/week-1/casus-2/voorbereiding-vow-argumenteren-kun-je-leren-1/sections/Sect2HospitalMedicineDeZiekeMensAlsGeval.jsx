import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`2. Hospital medicine: de zieke mens als geval`}</Inline></SubHeading>
      <PBody text={`Rond 1800 ontstond de **hospital medicine**, vooral in Frankrijk. Hier verschoof de aandacht van de hele persoon naar de **plaats van de ziekte in het lichaam**. Ziekte werd nu opgevat als iets dat een duidelijke zetel had: een **laesie** of anatomische afwijking in een orgaan.`} />
      <p className="leading-relaxed"><Inline>{`De arts ging zelf actief zoeken naar lichamelijke aanwijzingen. Het lichaam werd onderzocht, beluisterd en bekeken. De arts werd als het ware een detective die op zoek ging naar bewijs van een specifieke aandoening. Belangrijke technieken waren:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`lichamelijk onderzoek, vaak met instrumenten zoals de **stethoscoop**;`}</Inline></li>
        <li><Inline>{`**autopsie**, om ziekte en laesies na de dood te koppelen;`}</Inline></li>
        <li><Inline>{`**statistische analyse** van waarnemingen en postmortale bevindingen.`}</Inline></li>
      </ul>
      <PBody text={`In het ziekenhuis veranderde ook de machtsverhouding. Waar geneeskunde vroeger vooral thuis plaatsvond, werd het ziekenhuis nu het domein van de arts. Patiënten werden afhankelijker en kregen minder zeggenschap. Ze werden minder gezien als persoon met een eigen verhaal en meer als een **geval** of een verzameling organen.`} />
      <PBody text={`**Kern van hospital medicine**`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`ziekte als **anatomisch-lokalistisch** probleem;`}</Inline></li>
        <li><Inline>{`diagnose via **lichamelijk onderzoek**;`}</Inline></li>
        <li><Inline>{`patiënt als **object** of geval;`}</Inline></li>
        <li><Inline>{`herkenbaar in veel **medische specialismen**, vooral waar lokale organen en lokale ingrepen centraal staan.`}</Inline></li>
      </ul>
      <PBody text={`**Tabel 1. Bedside medicine en hospital medicine naast elkaar**`} />
      <DataTable rows={[["Kenmerk", "Bedside medicine", "Hospital medicine"], ["Beeld van de patiënt", "Persoon", "Geval"], ["Beeld van ziekte", "Holistische verstoring", "Anatomische laesie"], ["Diagnostiek", "Anamnese, verhaal", "Lichamelijk onderzoek"], ["Context", "Privé, thuis", "Ziekenhuis, publiek"], ["Rol van de arts", "Praktiserend arts", "Clinicus"]]} />
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
