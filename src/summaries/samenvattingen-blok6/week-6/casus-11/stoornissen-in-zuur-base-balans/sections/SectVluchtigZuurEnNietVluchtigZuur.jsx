import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Vluchtig zuur en niet-vluchtig zuur`}</Inline></SubHeading>
      <PBody text={`Het lichaam produceert dagelijks grote hoeveelheden zuur. De grootste bijdrage komt van de verbranding van koolhydraten en vetten, waarbij CO₂ ontstaat. Dat CO₂ heet **vluchtig zuur**, omdat het via de longen kan worden uitgeademd.`} />
      <PBody text={`Daarnaast ontstaan ook **niet-vluchtige zuren**, zoals H⁺ uit onder andere anaerobe glycolyse, de verbranding van aminozuren, de verwerking van gefosforyleerde voedingscomponenten en voedingszuren. Ook verlies van bicarbonaat via de faeces draagt bij aan de zuurbelasting.`} />
      <SubHeading><Inline>{`Tabel 2. Vluchtig en niet-vluchtig zuur`}</Inline></SubHeading>
      <DataTable rows={[["Soort zuur", "Bron", "Product", "Dagelijkse productie"], ["Vluchtig zuur", "Verbranding van glucose en vetten", "CO₂", "15–20 mol"], ["Niet-vluchtig zuur", "Anaerobe glycolyse", "H⁺", "ongeveer 40 mmol"], ["Niet-vluchtig zuur", "Verbranding van Met en Cys", "H⁺", "ongeveer 40 mmol"], ["Niet-vluchtig zuur", "Verwerking van gefosforyleerde voedingscomponenten", "H⁺", "ongeveer 40 mmol"], ["Niet-vluchtig zuur", "Voedingszuren", "H⁺", "ongeveer 40 mmol"], ["Niet-vluchtig zuur", "Verlies van bicarbonaat via faeces", "H⁺", "ongeveer 10 mmol"]]} />
      <SubHeading><Inline>{`Aandacht-vraag`}</Inline></SubHeading>
      <PBody text={`**Waarom is CO₂ “vluchtig” en H⁺ niet?**
Omdat CO₂ via de longen kan worden uitgeademd, terwijl H⁺ eerst gebufferd en via de nieren uitgescheiden moet worden.`} />
    </div>
  )
}
