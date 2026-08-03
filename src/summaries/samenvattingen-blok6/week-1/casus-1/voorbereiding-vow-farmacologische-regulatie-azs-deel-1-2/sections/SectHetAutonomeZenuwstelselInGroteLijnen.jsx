import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Het autonome zenuwstelsel in grote lijnen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het zenuwstelsel kun je eerst grofweg verdelen in een centraal en een perifeer deel. Het perifere deel bevat onder andere de afferente en efferente banen. Afferent betekent dat informatie naar het centrale zenuwstelsel toe wordt geleid. Efferent betekent juist dat signalen vanuit het centrale zenuwstelsel naar de periferie worden gestuurd.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Binnen het efferente deel maak je vervolgens onderscheid tussen het somatische en het autonome zenuwstelsel. Het somatische zenuwstelsel stuurt vooral de willekeurige skeletspieren aan. Het autonome zenuwstelsel regelt vooral onbewuste functies, zoals hartslag, vaattonus, klierafgifte en activiteit van gladde spieren.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Het autonome zenuwstelsel bestaat uit twee hoofdonderdelen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het sympathische zenuwstelsel, dat vooral actief is tijdens actie;`}</Inline></li>
        <li><Inline>{`het parasympathische zenuwstelsel, dat vooral actief is tijdens rust.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 1. Overzicht van de indeling van het zenuwstelsel`}</Inline></SubHeading>
      <DataTable rows={[["Niveau", "Onderdeel", "Kernfunctie"], ["Zenuwstelsel", "Centraal", "Verwerking en aansturing"], ["Zenuwstelsel", "Perifeer", "Verbinding met organen en weefsels"], ["Perifeer", "Afferent", "Signalen naar het CZS"], ["Perifeer", "Efferent", "Signalen vanuit het CZS"], ["Efferent", "Somatisch", "Aansturing van skeletspieren"], ["Efferent", "Autonoom", "Onbewuste regulatie van organen"], ["Autonoom", "Sympathisch", "Actief tijdens actie"], ["Autonoom", "Parasympathisch", "Actief tijdens rust"]]} />
    </div>
  )
}
