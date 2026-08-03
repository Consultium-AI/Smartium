import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe werkt de H+-ATPase samen met andere transporters?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In de verzamelbuis helpt natriumreabsorptie indirect bij de zuur-excretie. In cellen waar ENaC openstaat, gaat Na+ de cel in. Daardoor ontstaat in het lumen een relatief negatieve lading. Die negatieve lading helpt om positieve deeltjes, zoals H+, het lumen in te krijgen. Zo wordt de uitscheiding van zuur ondersteund.`}</Inline></p>
    </div>
  )
}
