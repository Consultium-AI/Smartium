import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Aanvullend onderzoek bij hematurie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Om de oorzaak van hematurie te achterhalen, zijn verschillende onderzoeken nodig. Elk onderzoek geeft andere informatie.`}</Inline></p>
      <PBody text={`**Tabel 2. Wat kun je aantonen met aanvullend onderzoek?**`} />
      <DataTable rows={[["Onderzoek", "Wat kan het laten zien?"], ["Urinesediment", "Nitriet bij infectie, verhoogde leukocyten bij infectie, dysmorfe erytrocyten bij nefrogene oorzaak"], ["Laboratoriumonderzoek", "Nierfunctiestoornis, anemie, ontstekingswaarden, stollingsafwijkingen"], ["Cystoscopie + vaginaal toucher", "Blaastumor, blaassteen, bloed uit ostium, afwijkingen in klein bekken, bloed aan de handschoen"], ["CT-scan met contrast en uitscheidingsfase", "Hydronefrose, metastasen, urolithiasis, lymfadenopathie, ruimte-innemend proces in blaas, hoge urinewegen of nieren"]]} />
      <p className="leading-relaxed"><Inline>{`Bij urinesediment kijk je onder andere naar nitriet, leukocyten en erytrocyten. Nitriet en leukocyten passen bij een infectie. Dysmorfe erytrocyten wijzen juist op een nefrologische oorzaak van de hematurie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij laboratoriumonderzoek let je op Hb, leukocyten, CRP, creatinine, eGFR en eventueel INR als iemand vitamine K-antagonisten gebruikt. Een verlaagde Hb-waarde kan wijzen op bloedverlies. Een verminderde nierfunctie kan zichtbaar worden door een verhoogd creatinine en een verlaagde eGFR. Belangrijk is dat gebruik van antistolling géén reden is om verder onderzoek achterwege te laten.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Cystoscopie is essentieel bij macroscopische hematurie. Daarbij kan een blaastumor zichtbaar worden. Een blaastumor ziet er vaak papillair uit, dus als een koraalachtige druiventros. Met vaginaal toucher kun je daarnaast afwijkingen in het kleine bekken opsporen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`CT-onderzoek met contrast en uitscheidingsfase helpt om uitbreiding, lymfeklieren, metastasen en afwijkingen van de bovenste urinewegen in beeld te brengen.`}</Inline></p>
    </div>
  )
}
