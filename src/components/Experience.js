import React, { useEffect, useMemo, useRef, useState } from 'react';
import './Experience.css';
import {
  ACHIEVEMENTS,
  EDUCATION,
  EXPERIENCE,
  LOGOS,
} from '../data/experienceData';

function Experience() {
  const featuredIndex = useMemo(
    () => Math.max(EXPERIENCE.findIndex((item) => item.featured), 0),
    []
  );
  const [activeIndex, setActiveIndex] = useState(featuredIndex);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const nodes = useMemo(() => [...EXPERIENCE].reverse(), []);

  const active = EXPERIENCE[activeIndex];
  const activeVisualIndex = nodes.findIndex((item) => item.id === active.id);

  const renderLogo = (item, altText) => {
    if (item.logoImage) {
      const imageClass = `timeline-logo-img${item.id === 'cambridge' ? ' cambridge-logo-bg' : ''}`;
      return <img src={item.logoImage} alt={altText} className={imageClass} loading="lazy" />;
    }

    return <span dangerouslySetInnerHTML={{ __html: LOGOS[item.logo] || '' }} />;
  };

  const progressRatio =
    nodes.length > 1 && activeVisualIndex >= 0
      ? activeVisualIndex / (nodes.length - 1)
      : 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="experience" id="experienceTag">
      <div className="exp-header">
        <h2>Experience</h2>
       
      </div>

      <div ref={sectionRef} className={`scrub-wrap reveal-up ${isVisible ? 'is-visible' : ''}`}>
        <div className="scrub-track" style={{ '--node-count': nodes.length }}>
          <div className="scrub-line" />
          <div className="scrub-progress" style={{ '--progress-scale': progressRatio }} />
          <div className="scrub-nodes">
            {nodes.map((exp, idx) => {
              const originalIndex = EXPERIENCE.findIndex((item) => item.id === exp.id);
              const isActive = originalIndex === activeIndex;
              const shortCompany = exp.company.split(' - ')[0].split(' | ')[0];
              return (
                <button
                  key={exp.id}
                  className={`scrub-node${isActive ? ' active' : ''}`}
                  style={{ '--node-color': exp.color }}
                  onClick={() => setActiveIndex(originalIndex)}
                  type="button"
                  aria-pressed={isActive}
                >
                  <div className="year">{exp.year}</div>
                  <div className="ndot" />
                  <div className="role">{shortCompany}</div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="scrub-card" style={{ '--primary-override': active.color }}>
          <div className="sc-header">
            <div
              className="sc-logo"
              aria-hidden="true"
            >
              {renderLogo(active, `${active.company} logo`)}
            </div>
            <div className="sc-left">
              <div className="sc-meta" style={{ color: active.color }}>
                {active.yearRange} - {active.location}
              </div>
              <div className="sc-title">
                {active.role}
                {active.featured ? <span className="featured-badge">Current</span> : null}
              </div>
              <div className="sc-company">{active.company}</div>
            </div>
          </div>
          <div className="sc-desc">{active.description}</div>
          <ul className="sc-highlights">
            {active.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <div className="sc-chips">
            {active.chips.map((chip) => (
              <span key={chip} className="chip">
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={`exp-extras reveal-up reveal-delay ${isVisible ? 'is-visible' : ''}`}>
        <div className="exp-card">
          <h3>Education</h3>
          {EDUCATION.map((edu) => (
            <div key={edu.school} className="edu-item">
              <div className="edu-head">
                <div
                  className="edu-logo"
                  aria-hidden="true"
                >
                  {renderLogo(edu, `${edu.school} logo`)}
                </div>
                <div>
                  <div className="school">{edu.school}</div>
                  <div className="degree">{edu.degree}</div>
                  <div className="years">{edu.years}</div>
                </div>
              </div>
              {edu.notes ? <div className="edu-notes">{edu.notes}</div> : null}
              {edu.clubs ? (
                <div className="edu-notes">
                  <span className="edu-muted">Clubs:</span> {edu.clubs}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="exp-card">
          <h3>Achievements</h3>
          {ACHIEVEMENTS.map((item, index) => (
            <div key={`${item.html}-${index}`} className="ach-item">
              <div className="ach-dot" />
              <div
                className="ach-text"
                dangerouslySetInnerHTML={{ __html: item.html }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
