import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Wat levert bariatrie nog meer op?`}</Inline></h3>
      <p><Inline>{`Bariatrische chirurgie is niet alleen bedoeld om gewicht te verliezen. Er treden ook belangrijke gezondheidsverbeteringen op. De stof noemt onder andere:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`remissie van diabetes;`}</Inline></li>
        <li><Inline>{`verbetering van cardiometabole risicofactoren zoals cholesterol en hypertensie;`}</Inline></li>
        <li><Inline>{`toename van fertiliteit;`}</Inline></li>
        <li><Inline>{`verbetering van huidklachten;`}</Inline></li>
        <li><Inline>{`verbetering van de kwaliteit van leven;`}</Inline></li>
        <li><Inline>{`verbetering of remissie van slaapapneu (OSAS);`}</Inline></li>
        <li><Inline>{`verbetering van luchtwegaandoeningen;`}</Inline></li>
        <li><Inline>{`vermindering van migraine.`}</Inline></li>
      </ul>
      <p><Inline>{`In de figuren worden daarnaast ook verbeteringen genoemd van onder meer astma, hoge bloeddruk, niet-alcoholische leverziekte, stofwisselingsstoornissen, zuurbranden, type 2 diabetes, polycysteus-ovariumsyndroom, stressincontinentie, arthrose/gewichtsgerelateerde pijn, veneuze stase en jicht/hyperurikemie.`}</Inline></p>
    </div>
  )
}
