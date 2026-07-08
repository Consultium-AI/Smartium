import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Kwantiteit van bewegen: wanneer wordt een mijlpaal bereikt?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De kwantiteit van bewegen gaat over de leeftijd waarop een motorische mijlpaal wordt bereikt. Het gaat dus om de vraag: op welke leeftijd kan het kind iets voor het eerst?`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Elk normaal ontwikkelend kind doorloopt ongeveer dezelfde volgorde van houdings- en bewegingspatronen. De WHO heeft hiervoor internationale referentiewaarden opgesteld. Die helpen om te beoordelen of de ontwikkeling passend is of dat er zorgen zijn.`}</Inline></p>
      <SubHeading><Inline>{`Belangrijke grove motorische mijlpalen`}</Inline></SubHeading>
      <DataTable rows={[["Tabel 2. Internationale mijlpalen van de grove motoriek"], ["Mijlpaal", "Omschrijving", "Mediane leeftijd"], ["Los zitten", "Hoofd rechtop, zonder steun zitten, 10 seconden rechtop", "5,9 maanden"], ["Staan", "Rechtop staan op beide voeten, met steun maar zonder te leunen, 10 seconden volhouden", "7,4 maanden"], ["Kruipen op handen en knieën", "Alternerend hand en knie verplaatsen, buik raakt de ondergrond niet, minstens 3 keer achter elkaar", "8,3 maanden"], ["Langs lopen", "Zich vasthouden aan een tafel of stoel en langs de rand stappen, minstens 5 stapjes", "9,0 maanden"], ["Los staan", "Zonder contact met persoon of meubel 10 seconden staan", "10,8 maanden"], ["Los lopen", "Zonder steun minstens 5 stapjes zetten", "12,0 maanden"]]} />
      <p className="leading-relaxed"><Inline>{`De spreiding rond deze leeftijden is groot. Dat betekent dat kinderen deze mijlpalen niet allemaal precies op dezelfde leeftijd halen.`}</Inline></p>
      <SubHeading><Inline>{`Wanneer is iets vertraagd?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als een kind een mijlpaal duidelijk later bereikt dan verwacht, is dat een teken van vertraagde motorische ontwikkeling. Kennis van deze mijlpalen is daarom voor iedere arts belangrijk.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Is een kind van 7 maanden dat nog niet loszit meteen afwijkend?
**Antwoord:** Nee, dat past nog binnen de normale ontwikkeling.`} />
      <PBody text={`**Aandachtsvraag:** Is een kind van 13 maanden dat nog niet loszit normaal?
**Antwoord:** Nee, dat is vertraagd.`} />
    </div>
  )
}
