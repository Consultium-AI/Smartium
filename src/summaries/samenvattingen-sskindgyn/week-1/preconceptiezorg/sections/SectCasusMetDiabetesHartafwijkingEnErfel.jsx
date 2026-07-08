import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Casus met diabetes, hartafwijking en erfelijke belasting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een vrouw met een gecorrigeerde aangeboren hartafwijking, diabetes mellitus, anemie, een positieve familieanamnese voor sikkelcelanemie en roken, zijn de adviezen duidelijk en multidisciplinair.`}</Inline></p>
      <SubHeading><Inline>{`Diabetes: wat leg je uit?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij pre-existente diabetes is een HbA1c onder 53 mmol/mol het streefdoel. De kans op aangeboren afwijkingen hangt samen met de mate van periconceptionele regulatie. In de zwangerschap stijgt de insulinebehoefte. Orale antidiabetica mogen gebruikt worden in de zwangerschap. Retinopathie kan verergeren. Vrouwen met diabetes, vooral met nefropathie en hypertensie, hebben meer kans op pre-eclampsie. Ook de neonatale morbiditeit en mortaliteit zijn verhoogd. Daarom is er een indicatie voor geavanceerd ultrageluidsonderzoek in de zwangerschap, onder andere vanwege de verhoogde kans op aangeboren hartafwijkingen en neurale buisdefecten.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De behandeling moet plaatsvinden in een multidisciplinair team. Het belangrijkste doel is zo goed mogelijke normoglykemie bij de moeder. Een viermaal daags basaal-bolusregime met insuline geeft het beste resultaat, met glucosedoelen gebaseerd op capillaire metingen na de maaltijd.`}</Inline></p>
      <SubHeading><Inline>{`Beleid bij diabetes`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het beleid bestaat uit:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`nauwkeurige glucoseregulatie;`}</Inline></li>
        <li><Inline>{`follow-up van bloeddruk en proteïnurie vanwege kans op pre-eclampsie;`}</Inline></li>
        <li><Inline>{`profylaxe tegen pre-eclampsie met aspirine;`}</Inline></li>
        <li><Inline>{`indicatie voor prenatale diagnostiek;`}</Inline></li>
        <li><Inline>{`zwangerschap in de tweede lijn.`}</Inline></li>
      </ul>
    </div>
  )
}
