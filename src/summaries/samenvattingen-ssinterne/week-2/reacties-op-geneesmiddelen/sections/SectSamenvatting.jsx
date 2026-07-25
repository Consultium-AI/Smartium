import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <PBody text={`Geneesmiddelen kunnen naast hun gewenste werking ook ongewenste reacties geven. Een belangrijk onderscheid is dat tussen **voorspelbare** reacties, die vaak samenhangen met de bekende werking van het middel, en **onvoorspelbare** reacties, die alleen bij bepaalde patiënten optreden.`} />
      <PBody text={`Binnen de onvoorspelbare reacties zijn **overgevoeligheidsreacties** belangrijk. Die kunnen **allergisch** zijn, waarbij het afweersysteem een centrale rol speelt, of **pseudo-allergisch**, waarbij de klachten op een allergie lijken maar het mechanisme anders is.`} />
      <PBody text={`Bij **NSAID’s**, inclusief **aspirine**, komen overgevoeligheidsreacties klinisch relevant voor. De klachten kunnen bestaan uit huidreacties, zwelling, benauwdheid of een systemische reactie. Het is daarom belangrijk om zulke reacties goed te herkennen, te begrijpen en vast te leggen.`} />
    </div>
  )
}
