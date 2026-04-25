import React from 'react';
import './Highlights.css';
import { HIGHLIGHTS } from '../data/highlightsData';

function HighlightIcon({ kind }) {
  if (kind === 'trophy') {
    return (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M14 8h12v6a6 6 0 01-12 0V8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10 10H7v3a4 4 0 004 4M30 10h3v3a4 4 0 01-4 4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 22h8l-1 6h-6l-1-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M13 32h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (kind === 'publication') {
    return (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M8 12l12-5 12 5-12 5-12-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 15v7c0 1.5 3.6 3 8 3s8-1.5 8-3v-7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M32 15v7M30 24h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (kind === 'news') {
    return (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M7 10h22a3 3 0 013 3v14a3 3 0 01-3 3H10a3 3 0 01-3-3V10z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M29 13v14a3 3 0 003-3V16a3 3 0 00-3-3z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 16h12M12 20h12M12 24h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (kind === 'cat') {
    return (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M12 15l3-6 4 4 2-5 2 5 4-4 3 6v8c0 2-1.5 4-4 4H16c-2.5 0-4-2-4-4v-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="17" cy="21" r="1.2" fill="currentColor" />
        <circle cx="23" cy="21" r="1.2" fill="currentColor" />
      </svg>
    );
  }

  if (kind === 'medal') {
    return (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="16" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 21l-3 11 9-5 9 5-3-11" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16 16l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M20 6l12 6v7c0 8-5 13-12 15-7-2-12-7-12-15v-7l12-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M15 20l4 4 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Highlights() {
  return (
    <section className="highlights" id="achievementsTag" data-layout="board-ribbon">
      <div className="hl-inner">
        <div className="hl-header">
          <h2 className="hl-title">Achievements</h2>
        </div>

        <div className="hl-grid">
          {HIGHLIGHTS.map((item, index) => (
            <div
              key={`${item.title}-${item.year}`}
              className="hl-pin-wrap"
              style={{ '--hl-color': item.color, '--hl-delay': `${index * 80}ms` }}
            >
              <div className="hl-pin" />
              <article className={`hl-pin-card${item.featured ? ' is-featured' : ''}`}>
                <div className="hl-pin-media">
                  {item.image ? (
                    <img src={item.image} alt={item.title} loading="lazy" />
                  ) : (
                    <div className="hl-placeholder">
                      <div className={`hl-ph-icon${item.logo ? ' hl-ph-icon--logo' : ''}`}>
                        {item.logo ? (
                          <img src={item.logo} alt={item.title} className="hl-ph-logo" loading="lazy" />
                        ) : (
                          <HighlightIcon kind={item.icon} />
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <div className="hl-pin-body">
                  <div className="hl-pin-meta">
                    <span className="hl-tag">{item.tag}</span>
                    <span className="hl-year">{item.year}</span>
                  </div>
                  <h3 className="hl-card-title">{item.title}</h3>
                  <div className="hl-card-sub">{item.subtitle}</div>
                  <p className="hl-card-desc">{item.description}</p>
                  {item.link ? (
                    <a className="hl-link" href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.linkLabel || 'View'}
                    </a>
                  ) : null}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Highlights;