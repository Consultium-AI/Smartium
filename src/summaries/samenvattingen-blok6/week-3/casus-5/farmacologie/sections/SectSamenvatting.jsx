import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <PBody text={`Bètablokkers remmen adrenerge bèta-receptoren. In deze module staan **metoprolol, atenolol en propranolol** centraal. **Metoprolol en atenolol zijn selectieve bètablokkers**, terwijl **propranolol aselectief** is. De selectiviteit heeft vooral betrekking op de **bèta2-receptor**: selectieve middelen hebben meer affiniteit voor bèta1 dan voor bèta2. Bij hogere concentraties wordt die selectiviteit kleiner.`} />
      <PBody text={`Farmacokinetisch is vooral belangrijk dat **atenolol niet via CYP2D6 wordt gemetaboliseerd**. Daarom is atenolol de voorkeursbètablokker bij gelijktijdig gebruik van **fluoxetine**, omdat fluoxetine CYP2D6 remt en daardoor de spiegels van propranolol en metoprolol kan verhogen.`} />
      <PBody text={`Farmacodynamisch laat het model zien dat **atenolol zelfs bij hoge doseringen nog selectief blijft voor bèta1**, terwijl de **bèta2-gemedieerde bloeddrukdaling** behouden blijft. Klinisch betekent dit dat atenolol een hoge bèta1-selectiviteit heeft, wat een voordeel kan zijn.`} />
    </div>
  )
}
