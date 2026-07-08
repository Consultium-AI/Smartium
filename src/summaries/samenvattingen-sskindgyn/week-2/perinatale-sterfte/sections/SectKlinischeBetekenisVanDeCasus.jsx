import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische betekenis van de casus`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De casus laat zien hoe meerdere risicofactoren samen kunnen leiden tot perinatale sterfte: chronische hypertensie, roken, eerdere complicaties, mogelijk onvoldoende follow-up en alarmsymptomen zoals minder leven voelen en hoofdpijn. Na het vaststellen van intra-uteriene vruchtdood is het belangrijk om de oorzaak te zoeken, onder andere via onderzoek van kind en placenta.`}</Inline></p>
      <PBody text={`Bij de placenta kan bijvoorbeeld een **infarct** worden gevonden: een gebied van ischemische necrose door afsluiting van spiraalarteriën. Dat past bij placenta-insufficiëntie en foetale groeivertraging.`} />
      <p className="leading-relaxed"><Inline>{`De doodsoorzaak kun je benaderen met drie vragen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**When**: wanneer trad de sterfte op?`}</Inline></li>
        <li><Inline>{`**What**: onder welk klinisch beeld?`}</Inline></li>
        <li><Inline>{`**Why**: waardoor?`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`In deze casus is dat:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`antepartum sterfte bij 37 weken;`}</Inline></li>
        <li><Inline>{`foetale asfyxie bij foetale groeivertraging door placenta-insufficiëntie;`}</Inline></li>
        <li><Inline>{`placentaire infarcering als onderliggende oorzaak.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Het vaststellen van de doodsoorzaak is belangrijk voor de rouwverwerking en voor het inschatten van herhalingskans in een volgende zwangerschap.`}</Inline></p>
    </div>
  )
}
