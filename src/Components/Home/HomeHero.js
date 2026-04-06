import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeHero () {
  return (
    <header className="home-hero">
      <div className="home-hero__inner">
        <div>
          <span className="home-hero__eyebrow">Head of Data & AI</span>
          <h1 className="home-hero__title">Clément Tailleur</h1>
          <p className="home-hero__lead">
            With <strong>10 years of experience turning data</strong> into a strategic lever for growth. As a Head of
            Data in scale-up environments, I bridge engineering and{' '}
            <span className="home-hero__underline">business ROI</span>.
          </p>
          <p className="home-hero__lead home-hero__lead--personal">
            Outside work, I love football (supporting Arsenal FC is not always easy on the nerves,
            but I guess that&apos;s part of the deal 🙄) and running. I like discovering new ground and
            nudging myself out of my comfort zone.
          </p>
          <div className="home-hero__actions">
            <Link className="home-btn home-btn--primary" to="/ctr-map">
              Travel map
            </Link>
            <a
              href="https://www.linkedin.com/in/cl%C3%A9ment-tailleur/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <span className="fa fa-linkedin" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="home-hero__photo-wrap">
          <span className="home-hero__photo-accent" aria-hidden="true" />
          <img
            className="home-hero__photo"
            src="/img/main/01.jpg"
            alt="Clément Tailleur"
          />
        </div>
      </div>
    </header>
  );
}
