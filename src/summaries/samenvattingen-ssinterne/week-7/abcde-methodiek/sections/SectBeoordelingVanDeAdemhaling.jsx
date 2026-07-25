import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Beoordeling van de ademhaling`}</Inline></SubHeading>
      <SubHeading><Inline>{`Kijken`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Ontbloot de thorax en let op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`cyanose`}</Inline></li>
        <li><Inline>{`ademfrequentie en regelmaat`}</Inline></li>
        <li><Inline>{`ademarbeid`}</Inline></li>
        <li><Inline>{`gebruik van hulpademhalingsspieren`}</Inline></li>
        <li><Inline>{`intrekkingen`}</Inline></li>
        <li><Inline>{`verlengd expirium`}</Inline></li>
        <li><Inline>{`zichtbare afwijkingen van de thorax`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Cyanose is een laat teken van hypoxie.`}</Inline></p>
      <SubHeading><Inline>{`Luisteren`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Auscultatie geeft informatie over:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`symmetrie van de ademgeluiden`}</Inline></li>
        <li><Inline>{`rhonchi`}</Inline></li>
        <li><Inline>{`piepende ademhaling`}</Inline></li>
        <li><Inline>{`afwezig ademgeruis, wat kan passen bij bijvoorbeeld pneumothorax, pleuravocht of een silent chest`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Voelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voel op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`symmetrie van thoraxexcursies`}</Inline></li>
        <li><Inline>{`tracheastand`}</Inline></li>
        <li><Inline>{`subcutaan emfyseem`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Monitoring`}</Inline></SubHeading>
      <PBody text={`De belangrijkste monitoring is **pulsoximetrie**. Die is betrouwbaarder dan het klinisch beoordelen van cyanose.`} />
      <p className="leading-relaxed"><Inline>{`Let op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`koude vingers of shock kunnen de meting onbetrouwbaar maken;`}</Inline></li>
        <li><Inline>{`nagellak kan de meting verstoren;`}</Inline></li>
        <li><Inline>{`bij CO-vergiftiging is de saturatie via de pulsoximeter vals verhoogd.`}</Inline></li>
      </ul>
    </div>
  )
}
