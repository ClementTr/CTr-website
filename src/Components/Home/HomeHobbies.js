import React from 'react';

export default function HomeHobbies () {
  return (
    <section className="home-hobbies" aria-label="Hobbies">
      <div className="home-section">
        <h2 className="home-block-title">Hobbies</h2>
        <p className="home-block-desc">
          What keeps me balanced outside data: movement, curiosity, and a healthy dose of sports
          emotions.
        </p>
        <div className="home-hobbies__grid">
          <article className="home-hobbies-card">
            <h3>Running</h3>
            <p>
              I run regularly and enjoy race goals, especially half marathons. It is my favorite way
              to reset, stay disciplined, and clear my head.
            </p>
          </article>
          <article className="home-hobbies-card">
            <h3>Football</h3>
            <p>
              Big football fan, with all the joy and occasional suffering that comes with it. Great
              entertainment, even when the scoreline disagrees.
            </p>
          </article>
          <article className="home-hobbies-card">
            <h3>Exploration</h3>
            <p>
              I like discovering new places, new formats, and new challenges that push me out of my
              comfort zone, both in work and in life.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
