import SummaryLayout from '../../components/SummaryLayout'
import { ClipboardList } from 'lucide-react'

const tableOfContents = [
  {
    id: 'sect-09',
    title: 'Voedings- en leefstijladviezen bij gastroparese',
    icon: <ClipboardList className='w-4 h-4' />,
  },
]

export default function Image09VoedingsEnLeefstijladviezenBijGastropareseSummary({ standalone = true }) {
  const content = (
    <>
      <div className='flex items-center gap-3 mb-5'>
        <div className='w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'>
          <ClipboardList className='w-5 h-5 text-primary-600' />
        </div>
        <h2 className='text-xl font-bold text-slate-900'>Voedings- en leefstijladviezen bij gastroparese</h2>
      </div>
      <div className='text-slate-700 space-y-4 leading-relaxed'>
        <div className='p-5 bg-primary-50 rounded-xl border border-primary-200'>
          <p className='text-primary-800'>Bij gastroparese is het uitgangspunt dat de patiënt zo goed mogelijk zélf blijft eten en drinken. Tegelijk helpt een aangepast eetpatroon om klachten te verminderen. In de casus wordt daarom samen met de patiënte gekeken naar wat zij thuis kan oppakken, eventueel met begeleiding van een diëtist.</p>
        </div>
        <div className='p-5 bg-slate-50 rounded-xl border border-slate-200'>
          <h3 className='text-sm font-semibold text-slate-900 mb-3'>Tabel 3. Adviezen bij gastroparese</h3>
          <div className='overflow-hidden rounded-xl border border-slate-200 bg-white'>
            <table className='w-full text-sm border-collapse'>
              <thead className='bg-slate-100'>
                <tr>
                  <th className='border-b border-slate-200 px-4 py-3 text-left font-semibold text-slate-900'>Te gebruiken / aan te raden</th>
                  <th className='border-b border-slate-200 px-4 py-3 text-left font-semibold text-slate-900'>Te vermijden / af te raden</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border-b border-slate-200 px-4 py-3'>Frequente, kleine maaltijden per dag</td>
                  <td className='border-b border-slate-200 px-4 py-3'>Koffie, alcohol, koolzuurhoudende dranken en pittige kruiden</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border-b border-slate-200 px-4 py-3'>Magere of halfvolle producten, zoals 20-30+ kaas en magere yoghurt</td>
                  <td className='border-b border-slate-200 px-4 py-3'>Even gaan liggen of uitrusten na het eten</td>
                </tr>
                <tr>
                  <td className='border-b border-slate-200 px-4 py-3'>Rustig wandelen na het eten</td>
                  <td className='border-b border-slate-200 px-4 py-3'>Grof volkorenbrood of volkorenmuesli</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='border-b border-slate-200 px-4 py-3'>Zachtgekookte groente en fruit</td>
                  <td className='border-b border-slate-200 px-4 py-3'>Veel water drinken tijdens het eten</td>
                </tr>
                <tr>
                  <td className='border-b border-slate-200 px-4 py-3'>Kip, tofu en vis</td>
                  <td className='border-b border-slate-200 px-4 py-3'>Skinny jeans dragen</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='px-4 py-3'></td>
                  <td className='px-4 py-3'>Patat en snacks eten</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='p-5 bg-slate-50 rounded-xl border border-slate-200'>
          <p>De kern is dat voedsel bij gastroparese zo licht mogelijk verteerbaar moet zijn. Kleine maaltijden zijn beter dan grote porties. Ook zachte, minder vetrijke producten passen beter. Na het eten direct gaan liggen is juist ongunstig, omdat dat de klachten kan verergeren. Rustig bewegen, zoals een wandeling, is wel passend.</p>
        </div>
      </div>
    </>
  )

  return (
    <SummaryLayout
      standalone={standalone}
      title='Voedings- en leefstijladviezen bij gastroparese'
      description='Voedings- en leefstijladviezen bij gastroparese in tabelvorm.'
      caseLabel='Week 1 Casus 1 - Maagklachten LME Leefstijl bij reflux'
      tableOfContents={tableOfContents}
      practiceLink='/oefenvragen?lme=blok10-week1-casus1-maagklachten-leefstijl-bij-reflux'
    >
      {standalone ? (
        <section id='sect-09' className='scroll-mt-24 mb-12'>
          {content}
        </section>
      ) : (
        content
      )}
    </SummaryLayout>
  )
}
