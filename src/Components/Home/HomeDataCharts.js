import React from 'react';
import HomeCvMetricsTable from './HomeCvMetricsTable';
import HomePieChart from './HomePieChart';
import HomeSectorTreemap from './HomeSectorTreemap';
import {
  workBiSegments,
  workCvImpactTableRows,
  workManagementOverview,
  workPlatformSegments,
  workSectorTreemapItems,
} from './workExperienceAggregates';

export default function HomeDataCharts () {
  const businessLogos = [
    { src: '/img/logo/qare.png', alt: 'Qare' },
    { src: '/img/logo/tudigo.png', alt: 'Tudigo' },
    { src: '/img/logo/content-square.png', alt: 'Contentsquare' },
    { src: '/img/logo/mooncard.png', alt: 'Mooncard' },
    
    { src: '/img/logo/octo.png', alt: 'Octo' },
    { src: '/img/logo/synchrone.png', alt: 'Synchrone' },

    { src: '/img/logo/jolimoi.png', alt: 'Jolimoi' },
    { src: '/img/logo/lunii.png', alt: 'Lunii' },
    { src: '/img/logo/united-heroes.png', alt: 'United Heroes' },
    { src: '/img/logo/rivaj.png', alt: 'Rivaj' },
    { src: '/img/logo/horse-republic.webp', alt: 'Horse Republic' },
    
    { src: '/img/logo/nelson.png', alt: 'Nelson' },
    { src: '/img/logo/stats.png', alt: 'Stats' },
  ];

  const roiAvg = workCvImpactTableRows.length
    ? workCvImpactTableRows.reduce((sum, row) => sum + row.roiPercent, 0) /
      workCvImpactTableRows.length
    : null;
  const timeRows = workCvImpactTableRows.filter((row) => row.timeSavedHoursPerWeek != null);
  const timeSavedAvg = timeRows.length
    ? timeRows.reduce((sum, row) => sum + row.timeSavedHoursPerWeek, 0) / timeRows.length
    : null;

  return (
    <section
      className="home-viz home-viz--data"
      aria-label="Head of Data — stack mix from experience"
    >
      <div className="home-section">
        <h2 className="home-block-title">Head of Data in scale-up environments</h2>
        <p className="home-block-desc">
          I&apos;ve had the opportunity to work across the{' '}
          <strong>entire data lifecycle</strong>, from <strong>deep technical infrastructure</strong>{' '}
          to <strong>core business challenges</strong>. As an engineer, I thrive on solving complex
          problems, but what truly drives me is being able to{' '}
          <strong>measure their actual impact</strong>.
        </p>
        <div className="home-pie-charts">
          {workPlatformSegments.length > 0 ? (
            <HomePieChart
              title="Data platform engineering | back-end"
              segments={workPlatformSegments}
            />
          ) : (
            <p className="home-pie-block home-pie-block--empty">
              No cloud / platform components in the dataset yet.
            </p>
          )}
          {workBiSegments.length > 0 ? (
            <HomePieChart
              title="BI & Analytics | front-ends"
              segments={workBiSegments}
            />
          ) : (
            <p className="home-pie-block home-pie-block--empty">
              No BI tools in the dataset yet.
            </p>
          )}
        </div>
        {workCvImpactTableRows.length > 0 ? (
          <div className="home-treemap-slot home-business-experience">
            <h3 className="home-pie-block__title home-business-experience__title">
              Business Impact
            </h3>
            <div
              className={
                'home-business-experience__grid home-business-experience__grid--summary-table'
              }
            >
              <div className="home-business-experience__summary">
                <div className="home-macro-card">
                  <div className="home-macro-card__label">Average time saved / week</div>
                  <div className="home-macro-card__value home-macro-card__value--time">
                    {timeSavedAvg != null ? `${Math.round(timeSavedAvg)}h/week` : '—'}
                  </div>
                </div>
                <div className="home-macro-card">
                  <div className="home-macro-card__label">Average ROI</div>
                  <div className="home-macro-card__value home-macro-card__value--roi">
                    {roiAvg != null ? `+${Math.round(roiAvg)}%` : '—'}
                  </div>
                </div>
                <div className="home-macro-card home-macro-card--management">
                  <div className="home-macro-card__label">Managed people</div>
                  <div className="home-macro-card__value home-macro-card__value--management">
                    {workManagementOverview.managedTotal || '—'}
                  </div>
                  <div className="home-macro-card__meta">
                    {workManagementOverview.departureRatePct != null
                      ? `${workManagementOverview.departureRatePct}% departures`
                      : 'No departures data'}
                  </div>
                  {workManagementOverview.departureRatePct != null ? (
                    <div className="home-macro-card__bar" aria-hidden="true">
                      <span
                        className="home-macro-card__bar-loss"
                        style={{ width: `${workManagementOverview.departureRatePct}%` }}
                      />
                    </div>
                  ) : null}
                </div>
              </div>
              <HomeCvMetricsTable rows={workCvImpactTableRows} />
            </div>
          </div>
        ) : null}
        {workSectorTreemapItems.length > 0 ? (
          <div className="home-treemap-slot home-business-experience home-business-experience--treemap">
            <h3 className="home-pie-block__title home-business-experience__title">
              Business experiences
            </h3>
            <div className="home-business-experience__treemap-stack">
              <div className="home-business-experience__logos" aria-label="Business logos">
                <div className="home-business-experience__logos-mask">
                  <div className="home-business-experience__logos-track">
                    {businessLogos.concat(businessLogos).map((logo, idx) => (
                      <div className="home-business-experience__logo-card" key={`${logo.src}-${idx}`}>
                        <img src={logo.src} alt={logo.alt} className="home-business-experience__logo" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="home-business-experience__treemap-row">
                <div className="home-business-experience__treemap-col">
                  <HomeSectorTreemap items={workSectorTreemapItems} hideTitle />
                </div>
                <aside className="home-business-experience__narrative">
                  <p className="home-business-experience__narrative-intro">
                    I&apos;ve been lucky to work across very different industries. That variety is a big
                    part of why I love this job.
                  </p>
                  <ul>
                    <li>
                      🎨 At Contentsquare, I learned from <strong>Product</strong> and
                      <strong> Design</strong> experts.
                    </li>
                    <li>
                      📈 At Qare, I deepened my <strong>Sales</strong> and <strong>Operations</strong> understanding.
                    </li>
                    <li>
                      📣 At Tudigo, I sharpened <strong>Marketing</strong> and learned to{' '}
                      <strong>make tough, pivotal decisions for the company</strong>, including advocating for those decisions in committees when the stakes are high.
                    </li>
                  </ul>
                  <p className="home-business-experience__narrative-outro">
                    Above all, the people around me, experts, peers, and leaders have been what made
                    the difference. Working with humans, not just data, has been the real unlock.
                  </p>
                </aside>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
