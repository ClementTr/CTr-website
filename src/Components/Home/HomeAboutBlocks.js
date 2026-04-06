import React from 'react';

export default function HomeAboutBlocks () {
  return (
    <section className="home-about" id="about">
      <div className="home-section">
        <h2 className="home-block-title">Background &amp; interests</h2>
        <p className="home-block-desc">
          A few words beyond the headline — what I care about at work and outside of it.
        </p>
        <div className="home-about__grid">
          <article className="home-about-card">
            <h3>Professional</h3>
            <p>
              Head of Data with experience across analytics, engineering, and team leadership. I enjoy
              turning ambiguous business questions into measurable outcomes: the right KPIs, sane
              data models, and platforms that teams actually adopt.
            </p>
            <p>
              Roughly ten years supporting French startups, plus a formative year in NYC — high
              intensity, strong product culture, and a habit of shipping.
            </p>
          </article>
          <article className="home-about-card">
            <h3>Personal</h3>
            <p>
              Running keeps me honest (including half marathons when travel and schedule allow).
              Football fan — Arsenal FC. I like digging into places through films and series;
              America&apos;s mid-sized cities are a favourite rabbit hole.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
