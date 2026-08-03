import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Beoordeling van longen op CT`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij het beoordelen van de longen op CT stel je jezelf steeds twee kernvragen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Wat is het patroon?**`}</Inline></li>
        <li><Inline>{`**Waar zitten de afwijkingen?**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dat is een handige manier om systematisch te kijken. Eerst bepaal je dus hoe de afwijking eruitziet, en daarna waar die afwijking zit.`}</Inline></p>
      <SubHeading><Inline>{`Patroon van de afwijking`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Er worden vier hoofdpatronen onderscheiden:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Verhoogde densiteit**: matglas en/of consolidatie`}</Inline></li>
        <li><Inline>{`**Verlaagde densiteit**`}</Inline></li>
        <li><Inline>{`**Nodulair**`}</Inline></li>
        <li><Inline>{`**Reticulair**`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Verhoogde densiteit: matglas en consolidatie`}</Inline></SubHeading>
      <PBody text={`Bij **matglas** is er een toename van densiteit: het gebied wordt witter, maar de bloedvaten blijven nog zichtbaar. Het longweefsel is dus niet volledig “dichtgelopen”.`} />
      <PBody text={`Een **consolidatie** is nog witter. Daarbij zijn de vaten binnen het gebied niet meer goed te onderscheiden. Dat betekent dat de densiteit zo sterk verhoogd is dat de normale structuur verdwijnt.`} />
      <SubHeading><Inline>{`Verlaagde densiteit`}</Inline></SubHeading>
      <PBody text={`Bij **verlaagde densiteit** is het longparenchym zwarter dan normaal. Dat zie je bijvoorbeeld bij **emfyseem**. Het longweefsel bevat dan relatief meer lucht en minder normale structuur, waardoor het donkerder oogt.`} />
      <SubHeading><Inline>{`Nodulair patroon`}</Inline></SubHeading>
      <PBody text={`Bij een **nodulair** patroon zie je kleine noduli. Die kunnen op verschillende manieren verdeeld zijn:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Random**: willekeurig verspreid`}</Inline></li>
        <li><Inline>{`**Centrilobulair**: centraal in de lobulus`}</Inline></li>
        <li><Inline>{`**Perilymfatish**: langs de lymfebanen`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Reticulair patroon`}</Inline></SubHeading>
      <PBody text={`Bij een **reticulair** patroon zie je te veel lijnen of een netwerkachtig beeld. Dat kan bijvoorbeeld komen door **verdikking van de interlobulaire septa** of door **fibrose**. Een bekend beeld hierbij is **honeycombing**, wat past bij fibrose.`} />
      <SubHeading><Inline>{`Tabel 3. Overzicht van de belangrijkste longpatronen op CT`}</Inline></SubHeading>
      <DataTable rows={[["Patroon", "Kenmerk", "Voorbeeld"], ["Verhoogde densiteit", "Witter longgebied", "Matglas, consolidatie"], ["Verlaagde densiteit", "Zwart(er) longgebied", "Emfyseem"], ["Nodulair", "Kleine noduli", "Random, centrilobulair, perilymfatish"], ["Reticulair", "Te veel lijnen/netwerk", "Septaverdikking, fibrose, honeycombing"]]} />
    </div>
  )
}
