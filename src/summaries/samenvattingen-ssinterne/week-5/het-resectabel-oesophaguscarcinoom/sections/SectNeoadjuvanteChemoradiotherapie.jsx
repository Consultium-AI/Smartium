import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Neoadjuvante chemoradiotherapie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Neoadjuvante chemoradiotherapie is standaardzorg bij het resectabel oesophaguscarcinoom. Dat betekent dat vóór de operatie een combinatie van chemotherapie en radiotherapie wordt gegeven. De effectiviteit hiervan is groot: in de besproken onderzoeksresultaten leidde toevoeging van neoadjuvante chemoradiotherapie aan de operatie tot een duidelijke verbetering van de totale overleving, met een vrijwel verdubbeling van de mediane overleving van 24 naar 49 maanden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De conclusie van het latere onderzoek bevestigt deze bevindingen en ondersteunt dat neoadjuvante chemoradiotherapie de nieuwe standaardzorg is voor patiënten met een resectabel oesophaguscarcinoom.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 5. Behandelopties en hun plaats`}</Inline></SubHeading>
      <DataTable rows={[["Behandeling", "Plaats in beleid"], ["Oesophaguscardiaresectie", "Hoeksteen van de behandeling"], ["Neoadjuvante chemoradiotherapie", "Standaardzorg vóór operatie"], ["Definitieve chemoradiotherapie", "Curatieve optie bij geselecteerde patiënten"], ["Endoscopische resectie", "Bij zeer oppervlakkige tumoren"]]} />
      <PBody text={`**Aandachtsvraag:** waarom wordt chemoradiotherapie gecombineerd?
**Kort antwoord:** omdat chemotherapie en radiotherapie samen worden ingezet in het neoadjuvante traject.`} />
      <p className="leading-relaxed"><Inline>{`Naast chemoradiotherapie is ook neoadjuvante chemotherapie in het verleden onderzocht en had dit eveneens effect op de overleving. Neoadjuvante radiotherapie alleen is veel minder vaak toegepast.`}</Inline></p>
    </div>
  )
}
