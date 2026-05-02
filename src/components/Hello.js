import React, { useEffect, useRef } from 'react';
import './Hello.css';
import { HashLink } from 'react-router-hash-link';

function Hello() {
  const hero3dRef = useRef(null);

  useEffect(() => {
    const container = hero3dRef.current;
    if (!container) return undefined;

    const starsLayer = container.parentElement?.querySelector('.stars');
    const setStarsOpacity = (value) => {
      if (starsLayer) starsLayer.style.opacity = value;
    };

    const isMobile =
      window.matchMedia('(max-width: 768px)').matches ||
      /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent);

    const state = {
      cancelled: false,
      animId: null,
      renderer: null,
      disposers: [],
      removeListeners: null,
    };

    import('three').then((THREE) => {
      if (state.cancelled) return;

      try {
        const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
        const w = container.clientWidth;
        const h = container.clientHeight;

        state.renderer = new THREE.WebGLRenderer({ antialias: !isMobile, alpha: true, powerPreference: 'high-performance' });
        state.renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.3 : 2));
        state.renderer.setSize(w, h);
        state.renderer.setClearColor(0x000000, 0);
        container.appendChild(state.renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 2000);
        camera.position.z = 6;

        const onResize = () => {
          if (!state.renderer) return;
          const rw = container.clientWidth;
          const rh = container.clientHeight;
          camera.aspect = rw / rh;
          camera.updateProjectionMatrix();
          state.renderer.setSize(rw, rh);
        };

        const onMouseMove = (event) => {
          const rect = container.getBoundingClientRect();
          mouse.tx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
          mouse.ty = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
        };

        const onMouseMoveGlobal = (event) => {
          mouse.tx = (event.clientX / window.innerWidth - 0.5) * 2;
          mouse.ty = (event.clientY / window.innerHeight - 0.5) * 2;
        };

        const onTouchMove = (event) => {
          const touch = event.touches && event.touches[0];
          if (!touch) return;
          mouse.tx = (touch.clientX / window.innerWidth - 0.5) * 2;
          mouse.ty = (touch.clientY / window.innerHeight - 0.5) * 2;
        };

        const makeGlow = (color, x, y, z, size, nebulaSprites) => {
          const glowCanvas = document.createElement('canvas');
          glowCanvas.width = glowCanvas.height = 256;
          const glowCtx = glowCanvas.getContext('2d');
          if (!glowCtx) return;

          const gradient = glowCtx.createRadialGradient(128, 128, 0, 128, 128, 128);
          gradient.addColorStop(0, `${color}99`);
          gradient.addColorStop(0.4, `${color}33`);
          gradient.addColorStop(1, `${color}00`);
          glowCtx.fillStyle = gradient;
          glowCtx.fillRect(0, 0, 256, 256);

          const texture = new THREE.CanvasTexture(glowCanvas);
          const material = new THREE.SpriteMaterial({
            map: texture,
            blending: THREE.AdditiveBlending,
            transparent: true,
            opacity: 0.7,
          });
          const sprite = new THREE.Sprite(material);
          sprite.position.set(x, y, z);
          sprite.scale.set(size, size, 1);
          scene.add(sprite);
          nebulaSprites.push(sprite);

          state.disposers.push(() => {
            texture.dispose();
            material.dispose();
            scene.remove(sprite);
          });
        };

        const layers = [];
        const counts = isMobile ? [300, 210, 140] : [600, 400, 250];
        const sizes = isMobile ? [0.02, 0.032, 0.055] : [0.015, 0.03, 0.06];
        const depths = [-18, -10, -4];
        const colors = [0xffffff, 0xc0d8ff, 0xffc2e0];

        counts.forEach((count, i) => {
          const geometry = new THREE.BufferGeometry();
          const positions = new Float32Array(count * 3);
          for (let j = 0; j < count; j += 1) {
            positions[j * 3] = (Math.random() - 0.5) * 60;
            positions[j * 3 + 1] = (Math.random() - 0.5) * 40;
            positions[j * 3 + 2] = depths[i] + (Math.random() - 0.5) * 4;
          }
          geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
          const material = new THREE.PointsMaterial({
            size: sizes[i],
            color: colors[i],
            transparent: true,
            opacity: 0.85,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
          });
          const points = new THREE.Points(geometry, material);
          scene.add(points);
          layers.push(points);
          state.disposers.push(() => {
            geometry.dispose();
            material.dispose();
            scene.remove(points);
          });
        });

        const nebulaSprites = [];
        makeGlow('#c84a97', -6, 2, -8, 14, nebulaSprites);
        makeGlow('#00d1ff', 7, -2, -10, 16, nebulaSprites);
        makeGlow('#6b2d8f', 2, 4, -12, 10, nebulaSprites);

        let t = 0;
        const loop = () => {
          t += isMobile ? 0.0012 : 0.0015;
          mouse.x += (mouse.tx - mouse.x) * (isMobile ? 0.03 : 0.04);
          mouse.y += (mouse.ty - mouse.y) * (isMobile ? 0.03 : 0.04);

          layers.forEach((layer, i) => {
            layer.rotation.y = t * (0.1 + i * 0.05);
            layer.position.x = mouse.x * (isMobile ? 0.2 : 0.3) * (1 + i * 0.55);
            layer.position.y = -mouse.y * (isMobile ? 0.2 : 0.3) * (1 + i * 0.55);
          });

          nebulaSprites.forEach((sprite, i) => {
            sprite.material.opacity = 0.5 + Math.sin(t * 6 + i) * 0.15;
          });

          camera.position.x = mouse.x * (isMobile ? 0.2 : 0.3);
          camera.position.y = -mouse.y * (isMobile ? 0.2 : 0.3);
          camera.lookAt(0, 0, 0);
          state.renderer.render(scene, camera);
          state.animId = window.requestAnimationFrame(loop);
        };

        setStarsOpacity('0');
        loop();

        window.addEventListener('resize', onResize);
        container.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mousemove', onMouseMoveGlobal);
        window.addEventListener('touchmove', onTouchMove, { passive: true });

        state.removeListeners = () => {
          window.removeEventListener('resize', onResize);
          container.removeEventListener('mousemove', onMouseMove);
          window.removeEventListener('mousemove', onMouseMoveGlobal);
          window.removeEventListener('touchmove', onTouchMove);
        };
      } catch (err) {
        setStarsOpacity('1');
      }
    }).catch(() => {
      setStarsOpacity('1');
    });

    return () => {
      state.cancelled = true;
      if (state.animId) window.cancelAnimationFrame(state.animId);
      state.disposers.forEach((dispose) => {
        try { dispose(); } catch (e) {}
      });
      if (state.removeListeners) state.removeListeners();
      if (state.renderer) {
        state.renderer.dispose();
        if (state.renderer.domElement && state.renderer.domElement.parentNode) {
          state.renderer.domElement.parentNode.removeChild(state.renderer.domElement);
        }
      }
      setStarsOpacity('1');
    };
  }, []);

  const handleMailClick = (event) => {
    event.preventDefault();
    const email = 'bar2798@gmail.com';
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

    window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="mysite-pannel" id="helloWorldTag">
      <div className="hero-bg"></div>
      <div className="stars" aria-hidden="true" />
      <div ref={hero3dRef} id="hero-3d" className="hero-3d" aria-hidden="true" />
      <section className="HelloWorld">
        <div className="show">
          <p className="hello">Hello World.</p>
          <p className="name">I'm Bar Efrima.</p>
          <div className="hero-ctas">
            <HashLink smooth to="/#experienceTag" className="hero-btn primary">
              View My Work
              <span className="ic">
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </HashLink>
            <button
              type="button"
              className="hero-btn ghost"
              onClick={handleMailClick}
              aria-label="Send email to Bar Efrima"
            >
              Get in Touch
              <span className="ic">
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M2 4h12v8H2zM2 4l6 5 6-5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
      <HashLink smooth to="/#aboutTag" className="scroll-cue" aria-label="Scroll down">
        <span>Scroll</span>
        <span className="mouse"></span>
      </HashLink>
    </div>
  );
}

export default Hello;
