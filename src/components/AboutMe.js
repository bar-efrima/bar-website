import React, { useEffect, useMemo, useRef } from 'react';
import './AboutMe.css';
import myPhoto from '../assets/images/my_photo.png';

function AboutMe() {
  const sectionRef = useRef(null);
  const out1Ref = useRef(null);
  const out2Ref = useRef(null);

  const terminalLines = useMemo(
    () => ({
      L1_HTML:
        '<span class="tok-k">bar_efrima</span> <span class="tok-g">// full stack developer</span>\n'
        + '<span class="tok-b">~</span> builds systems that turn ideas into products\n'
        + '<span class="tok-b">~</span> ships AI agents, full-stack apps, and IoT systems',
      L2_HTML:
        '<span class="tok-k">languages</span>  → TypeScript · JavaScript · Python · Solidity\n'
        + '<span class="tok-k">frameworks</span> → React · Vite · Nest · Node · FastAPI\n'
        + '<span class="tok-k">ai</span>         → LLM agents · RAG · vector search · fine-tuning\n'
        + '<span class="tok-k">iot</span>        → embedded systems · sensors · CHI 2024',
    }),
    []
  );

  useEffect(() => {
    const section = sectionRef.current;
    const out1 = out1Ref.current;
    const out2 = out2Ref.current;
    if (!section || !out1 || !out2) return;

    const timeoutIds = new Set();
    const safeSetTimeout = (fn, ms) => {
      const id = setTimeout(fn, ms);
      timeoutIds.add(id);
      return id;
    };
    const delay = (ms) => new Promise((resolve) => safeSetTimeout(resolve, ms));

    function typeHTML(el, html, speed = 14) {
      return new Promise((resolve) => {
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        el.textContent = '';
        const nodes = Array.from(tmp.childNodes);
        let idx = 0;

        function typeText(text, target, done) {
          let i = 0;
          function step() {
            if (i >= text.length) {
              done();
              return;
            }
            target.appendChild(document.createTextNode(text[i]));
            i += 1;
            safeSetTimeout(step, speed);
          }
          step();
        }

        function processNext() {
          if (idx >= nodes.length) {
            resolve();
            return;
          }
          const node = nodes[idx++];
          if (node.nodeType === Node.TEXT_NODE) {
            typeText(node.nodeValue || '', el, processNext);
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            const clone = node.cloneNode(false);
            el.appendChild(clone);
            typeText(node.textContent || '', clone, processNext);
          } else {
            processNext();
          }
        }

        processNext();
      });
    }

    let started = false;
    const io = new IntersectionObserver(
      async (entries) => {
        if (started) return;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            started = true;
            io.disconnect();
            await delay(400);
            await typeHTML(out1, terminalLines.L1_HTML, 12);
            await delay(300);
            await typeHTML(out2, terminalLines.L2_HTML, 10);
            return;
          }
        }
      },
      { threshold: 0.25 }
    );

    io.observe(section);
    return () => {
      io.disconnect();
      for (const id of timeoutIds) clearTimeout(id);
      timeoutIds.clear();
    };
  }, [terminalLines]);

  return (
    <section className="about-me" id="aboutTag" data-about-layout="default" ref={sectionRef}>
      <div className="about-grid about-variant about-variant-default">
        <aside className="about-left">
          <div className="about-portrait-wrap">
            <div className="about-portrait-ring" />
            <div className="about-portrait-frame">
              <img src={myPhoto} alt="Bar Efrima" loading="lazy" />
              <div className="about-portrait-overlay" />
            </div>
            <div className="about-status-dot">
              <span className="status-pulse" />
              <span>Available for interesting problems</span>
            </div>
          </div>

          <div className="about-facts">
            <div className="fact-row">
              <div className="fact-icon" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none">
                  <path d="M10 11a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" stroke="currentColor" strokeWidth="1.3" />
                  <path d="M10 18s-6-5.5-6-10a6 6 0 0112 0c0 4.5-6 10-6 10z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="fact-body">
                <div className="fact-label">Based in</div>
                <div className="fact-value">Tel Aviv · Israel</div>
              </div>
            </div>

            <div className="fact-row">
              <div className="fact-icon" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none">
                  <rect x="3" y="6" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.3" />
                  <path d="M7 6V4h6v2" stroke="currentColor" strokeWidth="1.3" />
                  <path d="M3 10h14" stroke="currentColor" strokeWidth="1.3" />
                </svg>
              </div>
              <div className="fact-body">
                <div className="fact-label">Currently</div>
                <div className="fact-value">Full Stack Developer · Jeen.ai</div>
              </div>
            </div>

            <div className="fact-row">
              <div className="fact-icon" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none">
                  <path d="M3 17L10 3l7 14H3z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                  <path d="M10 9v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </div>
              <div className="fact-body">
                <div className="fact-label">Education</div>
                <div className="fact-value">
                  International School
                  <br />
                  B.Sc. Computer Science
                  <br />
                  Reichman
                </div>
              </div>
            </div>

            <div className="fact-row">
              <div className="fact-icon" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.3" />
                  <path d="M3 10h14M10 3a10 10 0 010 14M10 3a10 10 0 000 14" stroke="currentColor" strokeWidth="1.3" />
                </svg>
              </div>
              <div className="fact-body">
                <div className="fact-label">Languages</div>
                <div className="fact-value">Hebrew · English</div>
              </div>
            </div>

            <div className="fact-row">
              <div className="fact-icon" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="2" fill="currentColor" />
                  <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.3" />
                  <path d="M4 5l2 2M14 13l2 2M4 15l2-2M14 7l2-2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </div>
              <div className="fact-body">
                <div className="fact-label">Focus</div>
                <div className="fact-value">AI · Blockchain · IoT</div>
              </div>
            </div>
          </div>
        </aside>

        <div className="about-right">
          <div className="about-eyebrow">— About Me</div>
          <h2 className="about-title">
            Hi, I&apos;m Bar. <span className="about-title-accent">Nice to meet you.</span>
          </h2>

          <p className="about-lead">
            I’m a full-stack developer working across AI, enterprise platforms, blockchain, and IoT.
          </p>

          <p className="about-body">
            My experience includes building AI agents and enterprise platforms at Jeen.ai, contributing to
            blockchain research with Cambridge, publishing IoT research at CHI 2024 as a lab researcher,
            and shipping an NFT project featured on a Times Square billboard.
          </p>

          <p className="about-body">
            I bring a strong product-oriented mindset to engineering, turning ambiguous ideas into clear
            technical requirements and building solutions that balance usability, scalability, and business value.
          </p>

          <p className="about-body">
            Outside of work I like exploring new tech, building side projects, and having thoughtful
            conversations about where AI and software are heading.
          </p>

          <div className="about-terminal" aria-label="whoami">
            <div className="term-head">
              <div className="term-dots">
                <span />
                <span />
                <span />
              </div>
              <div className="term-title">~ / bar — zsh</div>
            </div>
            <div className="term-body">
              <div className="term-line">
                <span className="term-prompt">bar@earth</span>
                <span className="term-arrow">›</span>
                <span className="term-cmd">whoami</span>
              </div>
              <div className="term-out" ref={out1Ref} />

              <div className="term-line">
                <span className="term-prompt">bar@earth</span>
                <span className="term-arrow">›</span>
                <span className="term-cmd">cat skills.txt</span>
              </div>
              <div className="term-out" ref={out2Ref} />

              <div className="term-line">
                <span className="term-prompt">bar@earth</span>
                <span className="term-arrow">›</span>
                <span className="term-cursor" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;