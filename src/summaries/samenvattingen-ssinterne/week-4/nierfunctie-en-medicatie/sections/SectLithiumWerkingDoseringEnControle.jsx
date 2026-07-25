import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Lithium: werking, dosering en controle`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Lithium wordt gebruikt bij manische depressie en is beschikbaar in verschillende formuleringen. De dosering wordt niet in één keer vastgezet, maar geleidelijk opgebouwd op geleide van de lithiumspiegel in het bloed. Dat betekent dat je de bloedspiegel gebruikt om te bepalen of de dosering goed is.`}</Inline></p>
      <SubHeading><Inline>{`Formuleringen van lithium`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Lithiumcarbonaat is verkrijgbaar als tabletten en capsules in verschillende sterktes. Daarnaast zijn er merkpreparaten zoals Camcolit en Priadel, beide met tabletten van 400 mg en gereguleerde afgifte. Gereguleerde afgifte betekent dat het middel geleidelijk vrijkomt.`}</Inline></p>
      <PBody text={`**Tabel 1. Belangrijke lithiumpreparaten**`} />
      <DataTable rows={[["Preparaat", "Vorm", "Kenmerk"], ["Lithiumcarbonaat", "tabletten/capsules", "verschillende sterktes beschikbaar"], ["Camcolit", "tablet 400 mg", "gereguleerde afgifte"], ["Priadel", "tablet 400 mg", "gereguleerde afgifte"]]} />
      <SubHeading><Inline>{`Welke organen moet je controleren?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij chronisch lithiumgebruik moeten meerdere orgaansystemen regelmatig worden gecontroleerd:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de **schildklierfunctie**, omdat hypothyreoïdie kan ontstaan, eventueel met struma;`}</Inline></li>
        <li><Inline>{`de **nierfunctie**, omdat nierfunctiestoornissen kunnen optreden;`}</Inline></li>
        <li><Inline>{`de **hartfunctie**, omdat lithium ook nadelige effecten op het hart kan hebben.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij risicofactoren voor ECG-afwijkingen of klachten die passen bij hartritmestoornissen is extra ECG-controle aangewezen.`}</Inline></p>
      <PBody text={`**Aandacht-vraagje:** waarom is controle van de nierfunctie zo belangrijk bij lithium?
**Mini-antwoord:** omdat lithium zelf nierfunctiestoornissen kan veroorzaken en omdat een slechtere nierfunctie de lithiumspiegel kan beïnvloeden.`} />
    </div>
  )
}
