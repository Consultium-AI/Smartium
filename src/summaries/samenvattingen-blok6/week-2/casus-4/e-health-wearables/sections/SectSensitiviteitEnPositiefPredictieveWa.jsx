import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Sensitiviteit en positief predictieve waarde`}</Inline></SubHeading>
      <PBody text={`Bij de uitkomsten valt op dat het algoritme niet heel sensitief is afgesteld. Dat betekent dat niet alle irregulaire ritmes worden gevonden. Als je het algoritme gevoeliger zou maken, zouden er meer fout-positieven ontstaan. Door de gekozen afstelling is de **positief predictieve waarde (PPV)** hoog: als het algoritme iets aanwijst, is dat vaak ook echt terecht.`} />
      <p className="leading-relaxed"><Inline>{`De belangrijkste conclusie is dus dat het algoritme een hoge PPV heeft voor het detecteren van AF.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Begrippen rond de prestatie van het algoritme`}</Inline></SubHeading>
      <DataTable rows={[["Begrip", "Betekenis in deze context"], ["Sensitiviteit", "Hoeveel echte afwijkingen worden gevonden"], ["Fout-positief", "Het algoritme geeft een afwijking aan, terwijl die er niet is"], ["Positief predictieve waarde (PPV)", "Hoe vaak een positieve uitslag ook echt klopt"]]} />
      <PBody text={`**Aandacht-vraag:** Waarom is een hoge PPV hier belangrijk?
**Mini-antwoord:** Omdat je dan erop kunt vertrouwen dat een positieve melding van de wearable vaak echt een afwijking betekent.`} />
    </div>
  )
}
