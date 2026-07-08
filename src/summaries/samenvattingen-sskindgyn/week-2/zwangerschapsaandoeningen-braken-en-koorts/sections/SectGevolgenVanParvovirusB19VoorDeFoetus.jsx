import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Gevolgen van parvovirus B19 voor de foetus`}</Inline></SubHeading>
      <PBody text={`Een maternale infectie met parvovirus B19 is geassocieerd met **miskraam**, **foetale anemie**, **hydrops foetalis** en **intra-uteriene vruchtdood**. Er is geen associatie met structurele afwijkingen of pre-eclampsie.`} />
      <PBody text={`De oorzaak is dat het virus zich vermenigvuldigt in delende cellen, vooral voorlopers van rode bloedcellen en bloedplaatjes. Daardoor kan de foetus anemie en hydrops ontwikkelen. De meest kritieke periode ligt rond **13 tot 16 weken**, wanneer de lever nog een belangrijke rol speelt in de bloedaanmaak. Bij een infectie vóór 20 weken is er een duidelijk risico op miskraam of hydrops.`} />
      <PBody text={`Als een infectie is vastgesteld, wordt de foetus vervolgd met **Dopplerflowmeting** en **echoscopie**. Bij manifeste foetale anemie en hydrops kan intra-uteriene transfusie nodig zijn.`} />
    </div>
  )
}
