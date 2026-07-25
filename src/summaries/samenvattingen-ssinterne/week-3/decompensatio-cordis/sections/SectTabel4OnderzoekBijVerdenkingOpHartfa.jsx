import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 4. Onderzoek bij verdenking op hartfalen`}</Inline></SubHeading>
      <DataTable rows={[["Onderzoek", "Doel"], ["Anamnese", "klachten en symptomen in kaart brengen"], ["Lichamelijk onderzoek", "tekenen van hartfalen opsporen"], ["Echocardiografie", "objectief aantonen en typeren van hartfalen"], ["NT-proBNP", "ondersteuning van de diagnose"]]} />
      <p className="leading-relaxed"><Inline>{`Echocardiografie is het werkpaard van de cardioloog. Daarmee kun je onder andere beoordelen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`vullingsdrukken;`}</Inline></li>
        <li><Inline>{`verminderde contracties;`}</Inline></li>
        <li><Inline>{`gestoorde vulling;`}</Inline></li>
        <li><Inline>{`klepafwijkingen;`}</Inline></li>
        <li><Inline>{`abnormale dimensies;`}</Inline></li>
        <li><Inline>{`abnormale wanddikten;`}</Inline></li>
        <li><Inline>{`geleidingsstoornissen;`}</Inline></li>
        <li><Inline>{`ritmestoornissen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Op basis van de ejectiefractie wordt hartfalen ingedeeld in drie categorieën:`}</Inline></p>
    </div>
  )
}
