import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De nieren en hun ligging`}</Inline></SubHeading>
      <PBody text={`De nieren liggen **retroperitoneaal**. Dat betekent dat ze achter het buikvlies liggen. Ze bevinden zich ter hoogte van de wervelkolom van **T12 tot L3**. Daarbij liggen de nieren niet helemaal gelijk: de **rechter nier ligt lager** dan de linker nier, doordat de **lever** aan de rechterkant veel ruimte inneemt.`} />
      <PBody text={`De nieren worden omgeven door verschillende organen en structuren. Dat is belangrijk om hun ligging goed te begrijpen. Rond de nieren liggen onder andere de **glandula suprarenalis**, **hepar**, **duodenum**, **colon ascendens**, **jejunum**, **gaster**, **splen/lien**, **pancreas** en **colon descendens**. De nieren bewegen wel mee met de ademhaling, maar worden tegelijk stevig op hun plek gehouden door **fascie** en **vetlagen**.`} />
      <SubHeading><Inline>{`Beschermende lagen rond de nier`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De nier heeft drie belangrijke beschermende structuren eromheen:`}</Inline></p>
      <DataTable rows={[["Tabel 1. Beschermende structuren rond de nier", "Functie"], ["Perirenaal vet", "Geeft steun en bescherming"], ["Fascia renalis", "Omhult en fixeert de nier"], ["Pararenaal vet", "Extra vetlaag rondom de nier"]]} />
      <p className="leading-relaxed"><Inline>{`Samen zorgen deze lagen ervoor dat de nier ondanks beweging in de buik toch goed ondersteund blijft.`}</Inline></p>
    </div>
  )
}
