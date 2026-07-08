import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat doe je als de risico-inventarisatie nog niet compleet is?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als er bij het eerste consult risicofactoren zijn waarvan de gevolgen voor de zwangerschap nog niet duidelijk zijn, adviseer je het paar om nog niet zwanger te worden. Dan kunnen zij namelijk nog geen goed geïnformeerde keuze maken als er toch een zwangerschap ontstaat. In zo’n situatie adviseer je anticonceptie.`}</Inline></p>
    </div>
  )
}
