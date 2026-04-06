import React from 'react';

/** Tableau des cvMetrics (ROI, temps gagné) aligné sur le treemap Business experiences. */
export default function HomeCvMetricsTable ({ rows }) {
  if (!rows.length) return null;

  return (
    <div className="home-cv-metrics">
      <h4 className="home-cv-metrics__title">Measured impact</h4>
      <div className="home-cv-metrics__scroll" role="region" aria-label="Measured impact per role">
        <table className="home-cv-metrics__table">
          <thead>
            <tr>
              <th scope="col">Company</th>
              <th scope="col">ROI Data</th>
              <th scope="col">Time saved</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>
                  <div className="home-cv-metrics__company">
                    <span className="home-cv-metrics__company-name">{row.companyName}</span>
                    {row.companySubtitle ? (
                      <span className="home-cv-metrics__company-sub">{row.companySubtitle}</span>
                    ) : null}
                  </div>
                </td>
                <td className="home-cv-metrics__cell--roi">
                  {row.roiPrimary ? (
                    <span className="home-cv-metrics__roi-main">{row.roiPrimary}</span>
                  ) : (
                    <span className="home-cv-metrics__empty">—</span>
                  )}
                </td>
                <td className="home-cv-metrics__cell--time">
                  {row.timeSaved ? (
                    <span className="home-cv-metrics__time">{row.timeSaved}</span>
                  ) : (
                    <span className="home-cv-metrics__empty">—</span>
                  )}
                </td>
                <td className="home-cv-metrics__cell--description">
                  {row.description ? (
                    <span className="home-cv-metrics__description">{row.description}</span>
                  ) : (
                    <span className="home-cv-metrics__empty">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="home-cv-metrics__legend">
        Impact measured only on experiences where I stayed long enough to observe outcomes, including
        follow-up freelance missions when relevant.
      </p>
    </div>
  );
}
