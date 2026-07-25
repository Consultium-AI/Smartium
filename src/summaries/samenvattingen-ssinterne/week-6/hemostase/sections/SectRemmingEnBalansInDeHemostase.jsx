import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Remming en balans in de hemostase`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De hemostase moet goed in balans blijven. Als de stolling te sterk is, ontstaat trombose. Als de stolling te zwak is, ontstaat bloeding.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Er zijn daarom ook remmende systemen aanwezig. De belangrijkste zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Antitrombine**: remt trombine.`}</Inline></li>
        <li><Inline>{`**APC-systeem**: geactiveerd proteïne C remt factor Va en VIIIa; proteïne S werkt als cofactor.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarnaast spelen ook thrombomoduline, TFPI en TAFI een rol in de remming en regeling van de stolling.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 4. Belangrijke remmende systemen`}</Inline></SubHeading>
      <DataTable rows={[["Remmend systeem", "Werking"], ["Antitrombine", "Remt trombine"], ["APC + proteïne S", "Remt factor Va en VIIIa"], ["TFPI", "Remt de tissue factor-route"], ["Thrombomoduline", "Betrokken bij activatie van APC"], ["TAFI", "Remt fibrinolyse"]]} />
    </div>
  )
}
