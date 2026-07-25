import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Trombose is de vorming van een stolsel in een bloedvat en is een belangrijke en soms levensbedreigende aandoening. De pathogenese wordt verklaard met de trias van Virchow: vaatwandbeschadiging, stase en hypercoagulabiliteit. Erfelijke trombofilie, zoals factor V Leiden of antitrombine-deficiëntie, verhoogt vooral de kans op een eerste veneuze trombose.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij verdenking op een trombosebeen is alleen anamnese en lichamelijk onderzoek niet genoeg. Je gebruikt een klinische beslisregel, D-dimeer en compressie-ultrasonografie. Een lage klinische kans met normale D-dimeer sluit DVT uit; bij hogere kans volgt echo-onderzoek.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De behandeling bestaat uit antistolling om trombusgroei, longembolie en latere complicaties te voorkomen. De keuze is meestal tussen DOAC en VKA. DOAC’s werken voorspelbaar en geven minder bloedingen; VKA’s hebben meer interacties en worden gecontroleerd met de INR. De behandelduur hangt af van de oorzaak en het recidief- en bloedingsrisico.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Na een trombosebeen kan posttrombotisch syndroom ontstaan door veneuze hypertensie. Dit wordt gescoord met de Villalta-score. Preventie van trombose en het dragen van een steunkous zijn belangrijke maatregelen om PTS te voorkomen.`}</Inline></p>
    </div>
  )
}
