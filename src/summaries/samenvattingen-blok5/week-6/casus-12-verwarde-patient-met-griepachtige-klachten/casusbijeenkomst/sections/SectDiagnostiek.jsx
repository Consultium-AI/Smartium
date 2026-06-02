import { Inline, DataTable, PBody, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}>Hoe kom je aan informatie?</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Bij de eerste vraag wordt genoemd dat je dit **via de telefoon en daarna met huisbezoek** doet. Dat past goed bij een GGD-benadering: eerst informatie verzamelen, daarna de situatie ter plaatse beoordelen.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`Je wilt dan onder andere weten:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`sinds wanneer bestaan de klachten?`}</Inline></li>
        <li><Inline>{`wie heeft klachten?`}</Inline></li>
        <li><Inline>{`zijn de klachten thuis erger?`}</Inline></li>
        <li><Inline>{`welke apparaten zijn er in huis?`}</Inline></li>
        <li><Inline>{`is er vocht, schimmel of lekkage?`}</Inline></li>
        <li><Inline>{`hoe is de ventilatie?`}</Inline></li>
        <li><Inline>{`zijn er tekenen van rook- of verbrandingsproblemen?`}</Inline></li>
      </ul>

      <SubHeading level={2}>Beoordeling van de ademhaling</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Bij verdenking op inhalatieschade of benauwdheid moet je de **B van Breathing** beoordelen met kijk, luister, voel, saturatie meten, en COHb-bepaling overwegen.`}</Inline>
      </p>

      <SubHeading level={2}>Herkennen van inhalatietrauma</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Bij inhalatietrauma let je op:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`gelaatsverbranding of verbrande neusharen`}</Inline></li>
        <li><Inline>{`roet in mond, keel, neus of sputum`}</Inline></li>
        <li><Inline>{`oedeem van gelaat, hals, uvula en pharynxbogen`}</Inline></li>
        <li><Inline>{`moeite met ademen`}</Inline></li>
        <li><Inline>{`tachypnoe, dus snelle ademhaling`}</Inline></li>
        <li><Inline>{`neusvleugelen`}</Inline></li>
        <li><Inline>{`intrekking van de borstkas`}</Inline></li>
        <li><Inline>{`gebruik van hulpademhalingsspieren`}</Inline></li>
        <li><Inline>{`heesheid`}</Inline></li>
        <li><Inline>{`stridor`}</Inline></li>
        <li><Inline>{`wheezing of rhonchi bij auscultatie`}</Inline></li>
        <li><Inline>{`verminderd bewustzijn`}</Inline></li>
      </ul>

      <SubHeading level={2}>Koolmonoxide: welke test is belangrijk?</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Bij acute koolmonoxidevergiftiging wordt de diagnose gesteld met de **COHb-waarde** in het bloed. COHb staat voor carboxyhemoglobine: hemoglobine waaraan koolmonoxide gebonden is.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`De tabel over zuurstof en hemoglobine maakt duidelijk:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`**pₐO2** = arteriële zuurstofspanning`}</Inline></li>
        <li><Inline>{`**pₐCO2** = arteriële koolzuurspanning`}</Inline></li>
        <li><Inline>{`**SₐO2** = zuurstofsaturatie van arterieel bloed`}</Inline></li>
        <li><Inline>{`**Hb** kan maximaal 4 zuurstofmoleculen binden`}</Inline></li>
        <li><Inline>{`**oxyhemoglobine** is hemoglobine met zuurstof gebonden`}</Inline></li>
        <li><Inline>{`**deoxyhemoglobine** is hemoglobine zonder zuurstof`}</Inline></li>
        <li><Inline>{`**carboxyhemoglobine** is hemoglobine met koolmonoxide gebonden`}</Inline></li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`Koolmonoxide bindt sterker aan hemoglobine dan zuurstof. Daardoor wordt het zuurstoftransport verstoord.`}</Inline>
      </p>

      <p className="font-semibold text-slate-900 dark:text-slate-100 m-0 pt-2">
        <Inline>{`Tabel 1. Belangrijke begrippen rond zuurstoftransport`}</Inline>
      </p>
      <DataTable
        rows={[
          ['Begrip', 'Betekenis'],
          ['---', '---'],
          ['pₐO2', 'arteriële zuurstofspanning; belangrijkste regulator van de ademhaling'],
          ['pₐCO2', 'arteriële koolzuurspanning; normaalwaarde 40 mmHg'],
          ['SₐO2', 'O2-saturatie van het arteriële bloed; normaal 95-99%'],
          ['Hemoglobine', 'eiwit met 4 heemgroepen; kan maximaal 4 O2-moleculen binden'],
          ['Oxyhemoglobine', 'Hb met O2 gebonden; vooral in arterieel bloed'],
          ['Deoxyhemoglobine', 'Hb zonder O2; vooral in veneus bloed'],
          ['Carboxyhemoglobine', 'Hb met CO gebonden; bindt sterker dan Hb met alleen O2'],
          ['Foetaal Hb', 'bindt O2 sterker dan volwassen Hb'],
          ['Linksverschuiving', 'meer O2-binding bij laag CO2 en hogere pH'],
          ['Rechtsverschuiving', 'meer O2-afgifte bij hoog CO2 en H+'],
          ['Anemie', 'verlaagd Hb; verminderde O2-transportcapaciteit'],
        ]}
      />
    </div>
  )
}
