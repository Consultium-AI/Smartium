import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leven met een aangeboren hartafwijking: late complicaties`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Veel volwassenen met een gecorrigeerde aangeboren hartafwijking hebben een goede kwaliteit van leven. Ze kunnen werken, sporten en kinderen krijgen. Toch kunnen er op lange termijn complicaties optreden. De levensverwachting is in het algemeen verminderd ten opzichte van de algemene bevolking. Dat kan gevolgen hebben voor werk, verzekeringen en hypotheken. Ook zwangerschap kan bij vrouwen met een gecorrigeerde aangeboren hartafwijking een risico geven voor henzelf of voor het ongeboren kind.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De kans op complicaties hangt sterk af van de ernst van de oorspronkelijke afwijking en van eventuele restafwijkingen na correctie.`}</Inline></p>
    </div>
  )
}
