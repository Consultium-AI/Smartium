import { BookOpen } from 'lucide-react';
import SummaryLayout from '../../components/SummaryLayout.jsx';
import Section01LeefstijlBijRefluxMiniSummary from './Section01LeefstijlBijRefluxMiniSummary.jsx';

const tableOfContents = [
  {
    id: 'sect-01',
    title: 'LME 3 – Leefstijl bij reflux',
    icon: <BookOpen className='w-4 h-4' />
  }
];

export default function MiniSummary({ standalone = false }) {
  return (
    <SummaryLayout
      title='LME 3 – Leefstijl bij reflux'
      caseLabel='Week 1 Casus 1 - Maagklachten LME Leefstijl bij reflux'
      tableOfContents={tableOfContents}
      practiceLink='/oefenvragen?lme=blok10-week1-casus1-maagklachten-leefstijl-bij-reflux'
      standalone={standalone}
    >
      <Section01LeefstijlBijRefluxMiniSummary standalone={standalone} />
    </SummaryLayout>
  );
}
