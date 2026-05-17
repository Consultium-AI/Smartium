export default function SectBehandeling5Lage() {
  return (
    <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
      <div className="text-center lg:text-left">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">BEHANDELING (5)</h2>
      </div>
      <div className="grid gap-10 lg:grid-cols-2">
        <section className="space-y-8">
          <div className="space-y-4">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-1">
              Behandeling van lage tractus bloedingen – medicatie en endoscopie
            </h3>
            <p>
              Bij lage tractus digestivusbloedingen speelt coloscopie een centrale rol in zowel de diagnostiek als de behandeling. In tegenstelling tot gastroscopie kan een coloscopie meestal pas worden uitgevoerd nadat de darm adequaat is voorbereid met een darmreiniging.
            </p>
            <p>Tijdens de coloscopie kan de bron van de bloeding worden gelokaliseerd en zo nodig endoscopisch worden behandeld.</p>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100">Endoscopische technieken bij lage bloedingen</h4>
            <p>Afhankelijk van de oorzaak van de bloeding kunnen verschillende technieken worden toegepast:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Hemoclips om een bloedend vat mechanisch af te sluiten;</li>
              <li>Thermische coagulatie bij vasculaire afwijkingen zoals angiodysplasie;</li>
              <li>Injectietherapie bij actieve bloedingen.</li>
            </ul>
            <p>
              Deze technieken worden bijvoorbeeld toegepast bij bloedingen door divertikels, angiodysplasieën of postpoliectomie-bloedingen.
            </p>
          </div>
        </section>
        <section className="space-y-8">
          <div className="space-y-4">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-1">
              Behandeling van lage tractus bloedingen – alternatieven
            </h3>
            <p>
              Wanneer endoscopie de bloeding niet kan lokaliseren of behandelen, kan radiologische interventie worden overwogen. In dergelijke gevallen wordt vaak eerst een CT-angiografie uitgevoerd om de exacte locatie van de bloeding te identificeren. Indien een actieve bloeding wordt aangetoond, kan vervolgens een selectieve angiografie met embolisatie worden uitgevoerd. Hierbij wordt via een katheter een embolisatiemateriaal in het bloedvat gebracht om de bloeding te stoppen.
            </p>
            <p>
              Chirurgische interventie wordt tegenwoordig vooral beschouwd als laatste behandeloptie, wanneer zowel endoscopische als radiologische behandelingen onvoldoende effectief zijn gebleken.
            </p>
          </div>
          <div className="space-y-3">
            <p className="font-semibold text-slate-900 dark:text-slate-100">Chirurgie kan bijvoorbeeld noodzakelijk zijn bij:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>aanhoudende bloeding ondanks meerdere endoscopische interventies;</li>
              <li>hemodynamische instabiliteit met blijvende transfusiebehoefte;</li>
              <li>duidelijk gelokaliseerde bloeding die niet anders behandeld kan worden</li>
            </ul>
            <p>
              Door de ontwikkeling van effectieve endoscopische en radiologische technieken is de noodzaak voor chirurgische behandeling in de afgelopen decennia aanzienlijk afgenomen.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
