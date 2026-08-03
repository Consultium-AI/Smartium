import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling`}</Inline></SubHeading>
      <PBody text={`De behandeling hangt af van de ernst en het risico. Daarvoor wordt risicostratificatie gebruikt, onder andere met de **PESI-score** en de **Hestia-score**.`} />
      <SubHeading><Inline>{`PESI-score`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De Pulmonary Embolism Severity Index, kortweg PESI, schat het 30-dagensterfterisico in. Er bestaat een originele en een vereenvoudigde versie.`}</Inline></p>
      <DataTable rows={[["Tabel 4. Indeling op basis van PESI"], ["Klasse I", "Zeer laag risico"], ["Klasse II", "Laag risico"], ["Klasse III", "Matig risico"], ["Klasse IV", "Hoog risico"], ["Klasse V", "Zeer hoog risico"]]} />
      <p className="leading-relaxed"><Inline>{`De vereenvoudigde versie gebruikt een puntensysteem met onder andere leeftijd >80 jaar, kanker, chronische cardiopulmonale ziekte, tachycardie, hypotensie en lage saturatie.`}</Inline></p>
      <SubHeading><Inline>{`Indeling naar ernst`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De behandeling wordt vooral bepaald door de hemodynamische toestand van de patiënt.`}</Inline></p>
      <SubHeading><Inline>{`High-risk longembolie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij high-risk longembolie zijn er tekenen van shock, hypotensie of hartstilstand. Dit komt voor bij ongeveer 5% van de patiënten.`}</Inline></p>
      <PBody text={`De behandeling is dan **directe reperfusietherapie**, meestal met **intraveneuze systemische trombolyse**. Dat mag alleen als er geen contra-indicaties zijn, zoals recente chirurgie, stollingsstoornissen of hersenmetastasen.`} />
      <p className="leading-relaxed"><Inline>{`Soms wordt trombolyse via een katheter gegeven, of wordt de embolus verwijderd met trombosuctie of chirurgische trombectomie. Dat gebeurt alleen in gespecialiseerde centra.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Na trombolyse volgt behandeling met anticoagulantia.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een patiënt met hemodynamische instabiliteit en sterke verdenking op longembolie wordt direct een CT-angio verricht; de D-dimeer wordt dan niet afgewacht.`}</Inline></p>
      <SubHeading><Inline>{`Intermediate-risk longembolie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Deze groep wordt verder verdeeld in intermediate-high en intermediate-low risk.`}</Inline></p>
      <PBody text={`Bij intermediate-high risk zijn er naast een hoge PESI-score ook aanwijzingen voor **right heart strain** op echo of CT, en/of verhoogde cardiale markers zoals troponine of BNP. Deze patiënten worden meestal eerst behandeld met **laagmoleculair heparine**, gevolgd door een DOAC of vitamine K-antagonist. Ze worden opgenomen voor monitoring, op de afdeling of op de IC afhankelijk van de ernst.`} />
      <p className="leading-relaxed"><Inline>{`Bij intermediate-low risk wordt ook behandeld met anticoagulantia, vaak met een DOAC.`}</Inline></p>
      <SubHeading><Inline>{`Low-risk longembolie`}</Inline></SubHeading>
      <PBody text={`Patiënten die hemodynamisch stabiel zijn, vallen in de low-risk groep. Hier zijn **DOAC’s** de eerste keus. Uit grote vergelijkingsstudies blijkt dat DOAC’s even effectief zijn als vitamine K-antagonisten, maar minder bloedingscomplicaties geven.`} />
      <p className="leading-relaxed"><Inline>{`Vitamine K-antagonisten zijn vooral geïndiceerd bij ernstige lever- of nierziekte en bij antifosfolipidensyndroom. Bij zwangerschap worden vitamine K-antagonisten niet gebruikt, omdat ze de placenta passeren. DOAC’s worden tijdens de zwangerschap ontraden, omdat daar onvoldoende over bekend is. Zwangere vrouwen worden behandeld met heparine.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 5. Behandeling naar risicocategorie`}</Inline></SubHeading>
      <DataTable rows={[["Risicocategorie", "Kenmerken", "Behandeling"], ["High-risk", "Shock, hypotensie, cardiale arrest", "Directe reperfusietherapie, meestal trombolyse"], ["Intermediate-risk", "Right heart strain en/of verhoogde troponine/BNP", "Opname, monitoring, LMWH"], ["Low-risk", "Hemodynamisch stabiel", "DOAC, vaak poliklinische behandeling mogelijk"]]} />
    </div>
  )
}
