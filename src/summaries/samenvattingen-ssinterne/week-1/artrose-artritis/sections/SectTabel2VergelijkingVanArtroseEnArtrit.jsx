import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 2. Vergelijking van artrose en artritis`}</Inline></SubHeading>
      <DataTable rows={[["Kenmerk", "Artrose", "Artritis / RA"], ["Primair aangedaan", "Kraakbeen", "Synovium"], ["Gewrichtsspleet", "Asymmetrisch versmald", "Vaak symmetrisch versmald"], ["Botreactie", "Osteofyten, sclerose, cysten", "Osteopenie, erosies"], ["Zwelling", "Minder centraal", "Vaak vroeg aanwezig"], ["Typische gewrichten", "DIP, PIP, CMC-1, STT, MTP-1", "MCP, PIP, pols, MTP-5"], ["Belangrijke associatie", "Leeftijd, belasting, overgewicht", "Ontsteking, synovitis"]]} />
    </div>
  )
}
