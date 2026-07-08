import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`AB0-antagonisme`}</Inline></SubHeading>
      <PBody text={`Bij AB0-antagonisme heeft de moeder antistoffen tegen een bloedgroepantigeen van het kind. In de casus had de moeder bloedgroep **0** en het kind bloedgroep **A**. Dat past bij **0A-antagonisme**.`} />
      <SubHeading><Inline>{`Tabel 1. AB0-bloedgroepen en antistoffen`}</Inline></SubHeading>
      <DataTable rows={[["genotype", "fenotype", "antistoffen", "frequentie"], ["AA, A0", "A", "anti-B", "42,5%"], ["BB, B0", "B", "anti-A", "8,5%"], ["AB", "AB", "geen", "3%"], ["00", "0", "anti-A en anti-B", "47%"]]} />
      <PBody text={`Bij bloedgroep **0** zijn anti-A en anti-B van de **IgG-klasse** aanwezig. IgG kan de placenta passeren. Daardoor kan de moederlijke antistof het kind bereiken en hemolyse veroorzaken.`} />
      <PBody text={`Bij volwassenen kan AB0-incompatibiliteit een ernstige intravasculaire hemolyse geven na transfusie. Bij pasgeborenen heet dit **AB0-hemolytic disease of the neonate** en het beloop is meestal milder.`} />
      <SubHeading><Inline>{`Aandachtsvraag`}</Inline></SubHeading>
      <PBody text={`**Waarom geeft een moeder met bloedgroep 0 vaker problemen dan een moeder met bloedgroep A of B?**
Omdat anti-A en anti-B bij bloedgroep 0 ook van de IgG-klasse zijn en dus de placenta kunnen passeren.`} />
    </div>
  )
}
