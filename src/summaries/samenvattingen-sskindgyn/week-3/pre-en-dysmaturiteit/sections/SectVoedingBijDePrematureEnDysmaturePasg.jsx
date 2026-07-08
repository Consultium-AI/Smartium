import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Voeding bij de premature en dysmature pasgeborene`}</Inline></SubHeading>
      <PBody text={`Premature en dysmature kinderen hebben vaak een verhoogd risico op darmproblemen, vooral op **necrotiserende enterocolitis (NEC)**. Daarom wordt de voeding voorzichtig opgebouwd. Vaak wordt gestart met **Minimal Enteral Feeding (MEF)**: kleine hoeveelheden moedermelk om de darm te prikkelen. Als het kind nog niet zelf kan drinken, krijgt het voeding via een **maagsonde**. De rest van de voedingsstoffen wordt dan gegeven via **parenterale voeding**. Bij langdurige parenterale voeding is een **centrale lijn** nodig.`} />
      <p className="leading-relaxed"><Inline>{`Moedermelk heeft bij prematuriteit een gunstig effect en wordt daarom sterk gestimuleerd.`}</Inline></p>
    </div>
  )
}
