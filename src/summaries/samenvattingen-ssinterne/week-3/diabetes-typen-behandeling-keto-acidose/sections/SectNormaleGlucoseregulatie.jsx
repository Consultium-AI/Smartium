import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Normale glucoseregulatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Insuline en glucagon zijn de belangrijkste hormonen die de bloedglucose binnen grenzen houden. Ze werken tegengesteld: insuline verlaagt de bloedglucose, glucagon verhoogt deze.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Insuline wordt gemaakt in de bètacellen van de eilandjes van Langerhans in de pancreas. Na afgifte zorgt insuline ervoor dat glucose de lichaamscellen in kan. Dit gebeurt via binding aan de insulinereceptor, waarna GLUT4-transporters naar het celmembraan verplaatsen. Daardoor kan glucose de cel in.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Insuline is een anabool hormoon. Dat betekent dat het opbouw bevordert en afbraak remt. Het stimuleert opslag van energie na een maaltijd en voorkomt juist afbraak bij voldoende aanbod.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Belangrijkste effecten van insuline`}</Inline></SubHeading>
      <DataTable rows={[["Stofwisseling", "Effect van insuline", "Belangrijkste weefsels"], ["Koolhydraten", "glucose-opname, glycolyse, glycogeensynthese", "spier, vet, lever"], ["Koolhydraten", "remming glycogenolyse en gluconeogenese", "lever"], ["Lipiden", "remming lipolyse", "vet"], ["Lipiden", "stimulatie triacylglycerolsynthese, VLDL-vorming, triglyceride-opname", "vet, lever, spier"], ["Lipiden", "remming vetzuuroxidatie", "spier, lever"], ["Eiwitten", "stimulatie eiwitsynthese", "spier, vet, lever en andere weefsels"], ["Eiwitten", "remming eiwitafbraak en ureumvorming", "vooral spier"]]} />
      <PBody text={`**Aandachtsvraag:** Wat gebeurt er als er te weinig insuline is?
**Kort antwoord:** Dan kan glucose minder goed de cellen in, en ontstaat een toestand met hyperglykemie en bij ernstige deficiëntie ook vetafbraak en ketonvorming.`} />
    </div>
  )
}
