import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Arteriolen, capillairen en venulen: de microcirculatie`}</Inline></SubHeading>
      <PBody text={`De kleinere arteriën, arteriolen, capillairen en venulen vormen samen een belangrijk deel van de **microcirculatie**. Hier worden bloeddruk, weefselvocht en uitwisseling van stoffen nauwkeurig geregeld.`} />
      <SubHeading><Inline>{`Arteriolen`}</Inline></SubHeading>
      <PBody text={`Arteriolen zijn de belangrijkste **weerstandsvaten**. Ze hebben slechts een dunne wand met 1-3 lagen gladde spiercellen in de media. Juist deze vaten bepalen in sterke mate de perifere weerstand en dus de systemische bloeddruk. Door vasoconstrictie of vasodilatatie kunnen ze de hoeveelheid bloed die de capillairen bereikt sterk beïnvloeden.`} />
      <SubHeading><Inline>{`Capillairen`}</Inline></SubHeading>
      <PBody text={`Capillairen zijn de kleinste bloedvaten. Hun wand bestaat alleen uit **endotheel**. Dat maakt uitwisseling mogelijk van gassen, voedingsstoffen en afvalstoffen tussen bloed en weefsel. De wand is dus extreem dun, precies zodat diffusie goed kan verlopen.`} />
      <PBody text={`**Aandachtspunt:**
Hoeveel endotheelcellen zie je in een dwarse doorsnede van een capillair?
**Antwoord:** meestal maar een heel klein aantal, vaak slechts één of enkele cellen, omdat capillairen zo smal zijn.`} />
      <SubHeading><Inline>{`Venulen`}</Inline></SubHeading>
      <PBody text={`Na de capillairen komt het bloed in de venulen. Deze vaten verzamelen het bloed uit de capillaire bedden. Vooral de **postcapillaire venulen** zijn belangrijk als plaats waar leukocyten uit het bloed kunnen treden. De wand is dun en bevat weinig gladde spiercellen.`} />
      <SubHeading><Inline>{`Tabel 2. Kenmerken van microcirculatievaten`}</Inline></SubHeading>
      <DataTable rows={[["Vat", "Wandopbouw", "Belangrijke functie"], ["Arteriool", "Endotheel met 1-3 lagen gladde spiercellen", "Weerstand en bloeddrukregeling"], ["Capillair", "Alleen endotheel", "Uitwisseling van stoffen"], ["Venule", "Endotheel met enkele gladde spiercellen", "Afvoer van bloed, leukocytenuittrede"]]} />
    </div>
  )
}
