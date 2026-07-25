import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <PBody text={`De X-thorax is een basisonderzoek van de thorax dat je bij voorkeur maakt in **PA- en laterale richting**. De opname moet technisch goed zijn en volgens een vaste systematiek worden beoordeeld. Je let daarbij op lijnen en tubes, diafragma, hart en mediastinum, longen en pleura, en tenslotte op skelet en weke delen.`} />
      <PBody text={`Op de X-thorax is kennis van de **normale anatomie** essentieel, inclusief de longkwabben en fissuren. De linkerlong heeft twee kwabben, de rechterlong drie. Op CT gebruik je **windowsettings** om specifieke structuren beter zichtbaar te maken: long, bot of weke delen. Daarnaast zijn er verschillende **CT-protocollen**, zoals blanco CT, arteriële fase, veneuze fase en het speciale **longembolieprotocol**.`} />
      <p className="leading-relaxed"><Inline>{`Kort gezegd: eerst de techniek, dan de anatomie, daarna pas de afwijking.`}</Inline></p>
    </div>
  )
}
