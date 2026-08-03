import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Verschillen tussen HFrEF, HFmrEF en HFpEF`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De ejectiefractie helpt om hartfalen in drie groepen te verdelen:`}</Inline></p>
      <SubHeading><Inline>{`Tabel 4. Indeling op basis van ejectiefractie`}</Inline></SubHeading>
      <DataTable rows={[["Type hartfalen", "EF", "Kernprobleem"], ["HFrEF", "< 40%", "Verminderde pompfunctie"], ["HFmrEF", "41–49%", "Grijs gebied"], ["HFpEF", "≥ 50%", "Gestoorde vulling"]]} />
      <p className="leading-relaxed"><Inline>{`Bij HFrEF zijn de vier medicatiegroepen overtuigend effectief. Bij HFmrEF lijkt de behandeling veel op die van HFrEF. Bij HFpEF ligt de nadruk vooral op het behandelen van comorbiditeiten, zoals hypertensie, obesitas, diabetes en ritmestoornissen. SGLT2-remmers hebben ook bij HFpEF effect op opname en symptomen.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 5. Behandeling per type hartfalen`}</Inline></SubHeading>
      <DataTable rows={[["Medicatiegroep", "HFrEF", "HFmrEF", "HFpEF"], ["ACE/ARB/ARNI", "Ja", "Overwegen", "Geen bewezen effect"], ["β-blokkers", "Ja, vooral bij sinusritme", "Overwegen", "Geen bewezen voordeel"], ["MRA", "Ja", "Overwegen", "Beperkt bewijs"], ["SGLT2-remmers", "Ja", "Ja", "Ja"], ["Lisdiuretica", "Symptoomcontrole", "Symptoomcontrole", "Symptoomcontrole"], ["Comorbiditeiten behandelen", "Altijd relevant", "Altijd relevant", "Centraal"]]} />
    </div>
  )
}
