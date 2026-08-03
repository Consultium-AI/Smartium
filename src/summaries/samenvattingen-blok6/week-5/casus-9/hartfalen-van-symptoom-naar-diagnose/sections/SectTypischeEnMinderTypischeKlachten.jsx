import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Typische en minder typische klachten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Tabel 1 geeft een handig overzicht.`}</Inline></p>
      <PBody text={`**Tabel 1. Klachten die passen bij hartfalen**`} />
      <DataTable rows={[["Typisch bij hartfalen", "Minder typisch, maar mogelijk bij hartfalen"], ["Dyspnoe bij inspanning", "Verwardheid"], ["Orthopneu", "Depressieve stemming"], ["Paroxismale nachtelijke dyspnoe", "Nycturie"], ["Enkeloedeem", "Gewichtstoename"], ["Verminderde inspanningstolerantie", "Verminderde eetlust"], ["Vermoeidheid", ""]]} />
      <p className="leading-relaxed"><Inline>{`Typische klachten hangen vaak direct samen met verhoogde vullingsdrukken of verminderde pompfunctie. Minder typische klachten kunnen ook voorkomen, maar zijn minder specifiek.`}</Inline></p>
      <SubHeading><Inline>{`Enkele begrippen kort uitgelegd`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Orthopneu**: kortademigheid bij platliggen`}</Inline></li>
        <li><Inline>{`**Paroxismale nachtelijke dyspnoe**: plotselinge benauwdheid ’s nachts`}</Inline></li>
        <li><Inline>{`**Nycturie**: vaker moeten plassen in de nacht`}</Inline></li>
        <li><Inline>{`**Enkeloedeem**: vochtophoping rond de enkels`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
