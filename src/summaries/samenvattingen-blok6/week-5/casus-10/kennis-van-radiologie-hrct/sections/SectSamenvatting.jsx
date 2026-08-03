import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`CT-thorax wordt beoordeeld met behulp van verschillende windowsettings, omdat niet alle structuren tegelijk even goed zichtbaar zijn. Met een longwindow, botwindow of wekedelensetting kun je telkens een ander deel van de thorax optimaal bekijken. CT kan zonder contrast worden gemaakt, of met contrast in een arteriële of veneuze fase. Voor longembolie bestaat een speciaal protocol waarbij het contrast vooral in de pulmonale arteriën aanwezig is.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarnaast is kennis van de normale anatomie op CT belangrijk: grote vaten, luchtwegen, hartkamers en longkwabben moeten herkenbaar zijn. Met HRCT kun je subtiele afwijkingen in het longparenchym zien, vooral in de secundaire lobulus. Bij de beoordeling van longafwijkingen kijk je steeds naar twee dingen: het patroon en de verdeling. De belangrijkste patronen zijn verhoogde densiteit, verlaagde densiteit, nodulair en reticulair. De verdeling beschrijf je bijvoorbeeld als apicaal, basaal, diffuus, centraal of perifeer.`}</Inline></p>
    </div>
  )
}
