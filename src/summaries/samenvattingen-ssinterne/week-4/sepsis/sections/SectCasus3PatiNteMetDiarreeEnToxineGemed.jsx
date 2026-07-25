import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Casus 3: patiënte met diarree en toxine-gemedieerde sepsis`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De derde casus gaat over een jonge vrouw met diarree, buikpijn, braken en later verminderd bewustzijn. Bij opname is zij ernstig ziek: tachypneu, hypotensie, tachycardie, verwardheid, nierfunctiestoornis, hoge CRP-waarde, trombopenie en een gestoorde stolling met laag fibrinogeen. Dit past bij severe sepsis met diffuse intravasale stolling.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De differentiaaldiagnose omvatte:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`sepsis door gastro-enteritis, meningitis of cholangitis`}</Inline></li>
        <li><Inline>{`toxic shock syndrome, veroorzaakt door stafylokokken of streptokokken`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Toxic shock syndrome is een toxine-gemedieerde, acute multiorgaanziekte. De bacteriële toxinen werken als superantigenen. Daardoor ontstaat een sterke cytokine-afgifte, met weefselschade, DIC en orgaandysfunctie. Naast antibiotica wordt daarom ook clindamycine gegeven, omdat dit aan toxineproductie en toxine-effecten bijdraagt. IVIG kan ook worden gegeven, maar de waarde daarvan is controversieel.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 6. Kenmerken van TSS`}</Inline></SubHeading>
      <DataTable rows={[["Kenmerk", "Uitleg"], ["Oorzaak", "Toxinen van bacteriën, vooral stafylokokken of streptokokken"], ["Mechanisme", "Superantigeenwerking met cytokine-avalanche"], ["Kliniek", "Shock, multiorgaanfalen, DIC"], ["Aanvullende therapie", "Clindamycine, soms IVIG"]]} />
      <p className="leading-relaxed"><Inline>{`Bij streptokokken geeft groep A, oftewel *Streptococcus pyogenes*, het vaakst TSS. Groep A-streptokokken zijn bètahemolytisch op bloedagar en kunnen uiteenlopende infecties geven, van erysipelas tot necrotiserende fasciitis.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij stafylokokken is tampongebruik een bekende risicofactor voor TSS.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Uiteindelijk bleek deze patiënte een meningokokkensepsis te hebben, mogelijk met meningitis erbij. De bloedkweek liet Gramnegatieve kokken zien. Een lumbaalpunctie kon niet worden gedaan vanwege de diepe trombopenie en gestoorde stolling. Later ontwikkelde zij huidafwijkingen, blauwe tenen en voeten, en uiteindelijk bilaterale onderbeenamputaties. Zij overleefde de sepsis, herstelde neurologisch en haar nierfunctie normaliseerde.`}</Inline></p>
    </div>
  )
}
