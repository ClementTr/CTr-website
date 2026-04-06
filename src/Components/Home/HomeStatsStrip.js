import React from 'react';

/**
 * @param {{ age: number, halfMarathons: number, companies: number, countriesVisited: number }} props
 */
export default function HomeStatsStrip ({ age, halfMarathons, companies, countriesVisited }) {
  return (
    <section className="home-stats" aria-label="Key figures">
      <div className="home-section">
        <h2 className="home-block-title home-stats__heading">At a glance</h2>
        <p className="home-block-desc home-stats__intro">
          A few numbers of course 🔢
        </p>
        <div className="home-stats__grid">
          <div className="home-stat-card">
            <span className="home-stat-card__value">{age}</span>
            <span className="home-stat-card__label">🎂 Age</span>
          </div>
          <div className="home-stat-card">
            <span className="home-stat-card__value">{halfMarathons}</span>
            <span className="home-stat-card__label">🏃🏻 Half marathons</span>
          </div>
          <div className="home-stat-card">
            <span className="home-stat-card__value">1:34:34</span>
            <span className="home-stat-card__label">🇨🇦 Personal best half marathon</span>
          </div>
          <div className="home-stat-card">
            <span className="home-stat-card__value">{companies}</span>
            <span className="home-stat-card__label">🏢 Companies I&apos;ve worked with</span>
          </div>
          <div className="home-stat-card">
            <span className="home-stat-card__value">{countriesVisited}</span>
            <span className="home-stat-card__label">🌍 Countries visited (map)</span>
          </div>
          <div className="home-stat-card">
            <span className="home-stat-card__value">0</span>
            <span className="home-stat-card__label">⚽️ Trophies won by my favorite club</span>
          </div>
        </div>
      </div>
    </section>
  );
}
