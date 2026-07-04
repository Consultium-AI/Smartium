import { CourseBlockHeader } from './CourseOverviewLayout'
import SummaryCourseWeekTree from '../SummaryCourseWeekTree'

export default function CourseForcedBlokView({
  backTo,
  backLabel = 'Alle blokken',
  title,
  subtitle,
  statsLine,
  blokKey,
  pageScope,
  weeks,
  beforeTree,
  heroAction,
  afterTree,
  renderCaseSections,
  renderSearchModule,
  renderWeekFooter,
}) {
  return (
    <div className="max-w-3xl mx-auto text-left">
      <CourseBlockHeader
        backTo={backTo}
        backLabel={backLabel}
        title={title}
        subtitle={subtitle}
        statsLine={statsLine}
      />
      {beforeTree}
      {heroAction}
      <SummaryCourseWeekTree
        blokKey={blokKey}
        pageScope={pageScope}
        weeks={weeks}
        renderCaseSections={renderCaseSections}
        renderSearchModule={renderSearchModule}
        renderWeekFooter={renderWeekFooter}
      />
      {afterTree}
    </div>
  )
}
