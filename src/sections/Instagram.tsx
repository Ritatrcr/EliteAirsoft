import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import "../styles/Instagram.css";

import Button from "../components/UI/Button"; // ✅ ajusta la ruta si tu Button está en otra carpeta


// ✅ Reemplaza estos imports por tus videos reales
import Story01 from "../assets/videos/instagram/story01.mov";
import Story02 from "../assets/videos/instagram/story02.mp4";
import Story03 from "../assets/videos/instagram/story03.mov";
import { FiVolumeX, FiVolume2 } from "react-icons/fi";


// ✅ OPCIONAL: pon una foto de perfil local (recomendado)
// y descomenta el import.
import ProfileImg from "../assets/images/instagram/profile.png";

type Story = {
  id: string;
  user: string;
  label?: string;
  src: string;
  durationMs?: number;
  url: string; // ✅
};




const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/elite_airsoft_col/";

// Puedes editar esto libremente (lo tomé de tu screenshot)
const IG_INFO = {
  handle: "elite_airsoft_col",
  displayName: "ELITE AIRSOFT",
  posts: 95,
  followers: 2504,
  following: 303,
  bullets: [
    "🔱 El campo de airsoft más completo de Colombia🇨🇴",
    "🔱 Ubicado en la ciudad de FUNZA🔥",
    "🔱 ¿Estás listo para el desafío?",
  ],
  phone: "3057668729",
};

function clampIndex(i: number, len: number) {
  if (len <= 0) return 0;
  return ((i % len) + len) % len;
}

function formatNumber(n: number) {
  // simple: 2504 -> 2.5k (si quieres)
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return `${n}`;
}

export default function InstagramSection() {
  const stories: Story[] = useMemo(
    () => [
  { id: "s1", user: IG_INFO.handle, label: "CQB", src: Story01, durationMs: 6500, url: INSTAGRAM_PROFILE_URL },
  { id: "s2", user: IG_INFO.handle, label: "Dinámicas", src: Story02, durationMs: 6500, url: INSTAGRAM_PROFILE_URL },
  { id: "s3", user: IG_INFO.handle, label: "Gelsoft", src: Story03, durationMs: 6500, url: "https://www.instagram.com/p/DRnzc8kjW0P/" },
  ],
    []
  );

  const [active, setActive] = useState(0);
  const [muted, setMuted] = useState(true);

  const rootRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [inView, setInView] = useState(false);

useEffect(() => {
  if (!inView) return;

  const dur = Math.max(1500, stories[active]?.durationMs ?? 6500);
  const t = window.setTimeout(() => {
    setActive((a) => clampIndex(a + 1, stories.length));
  }, dur);

  return () => window.clearTimeout(t);
}, [active, inView, stories]);

  useEffect(() => {
    if (!stageRef.current) return;

    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 }
    );

    obs.observe(stageRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((v, idx) => {
      if (!v) return;
      if (idx === active && inView) {
        v.muted = muted;
        const p = v.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [active, inView, muted]);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setActive((a) => clampIndex(a - 1, stories.length));
      if (e.key === "ArrowRight") setActive((a) => clampIndex(a + 1, stories.length));
    };

    el.addEventListener("keydown", onKeyDown);
    return () => el.removeEventListener("keydown", onKeyDown);
  }, [stories.length]);

  const getPos = (i: number) => {
    const len = stories.length;
    const next = clampIndex(active + 1, len);
    const prev = clampIndex(active - 1, len);
    if (i === active) return "active";
    if (i === prev) return "left";
    if (i === next) return "right";
    return "hidden";
  };

  const go = (dir: -1 | 1) => setActive((a) => clampIndex(a + dir, stories.length));

  return (
    <section
      ref={(n) => {
        rootRef.current = n;
      }}
      className="ig-section"
      id="instagram"
      tabIndex={0}
      aria-label="Sección de Instagram"
    >
      <div className="container ig-container">
        <div className="ig-header">
          <div className="ig-titleWrap">
            
          </div>

          
        </div>

        {/* ✅ GRID: Izquierda deck / Derecha tarjeta */}
        <div className="ig-grid">
          {/* IZQUIERDA: deck */}
          <div className="ig-left">
            <div className="ig-stage" ref={stageRef}>
              <button className="ig-nav ig-nav--left" onClick={() => go(-1)} aria-label="Historia anterior">
                ‹
              </button>

              <div className="ig-deck" role="list" aria-label="Historias">
                {stories.map((s, i) => {
                  const pos = getPos(i);
                  const isActive = pos === "active";
                  const dur = Math.max(1500, s.durationMs ?? 6500);

                  return (
                    <button
                      key={s.id}
                      type="button"
                      className="ig-card"
                      data-pos={pos}
                    onClick={() => {
                      if (i === active) {
                        window.open(stories[i].url, "_blank", "noopener,noreferrer");
                      } else {
                        setActive(i);
                      }
                    }}
                      role="listitem"
                      aria-current={isActive ? "true" : "false"}
                    >
                      <div className="ig-cardInner">
                        <div className="ig-chrome">
                          <div className="ig-user">
                            <img className="ig-avatarImg" src={ProfileImg} alt="" />
                            <div className="ig-userText">
                              <span className="ig-handle">@{s.user}</span>
                              {s.label ? <span className="ig-label">{s.label}</span> : null}
                            </div>
                          </div>

                          <div className="ig-actions">
                            {isActive ? (
                              <button
                                type="button"
                                className="ig-miniBtn"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setMuted((m) => !m);
                                }}
                                aria-label={muted ? "Activar sonido" : "Silenciar"}
                                title={muted ? "Activar sonido" : "Silenciar"}
                              >
                                {muted ? <FiVolumeX /> : <FiVolume2 />}
                              </button>


                            ) : (
                              <span className="ig-miniGhost" aria-hidden="true" />
                            )}
                          </div>
                        </div>

                        <div className="ig-progressWrap" aria-hidden={!isActive}>
                          <div
                            className={`ig-progress ${isActive ? "is-running" : ""}`}
                            style={{ "--ig-dur": `${dur}ms` } as CSSProperties}
                          />
                        </div>

                        <div className="ig-media">
                          <video
                            ref={(n) => { videoRefs.current[i] = n; }}
                            className="ig-video"
                            src={s.src}
                            playsInline
                            muted={muted}
                            loop
                            preload="metadata"
                          />
                          <div className="ig-vignette" aria-hidden="true" />
                        </div>

                        <div className="ig-footer">
                          <span className="ig-hint">
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <button className="ig-nav ig-nav--right" onClick={() => go(1)} aria-label="Siguiente historia">
                ›
              </button>
            </div>

            <div className="ig-dots" aria-label="Selector de historias">
              {stories.map((s, i) => (
                <button
                  key={s.id}
                  className={`ig-dot ${i === active ? "is-active" : ""}`}
                  onClick={() => setActive(i)}
                  aria-label={`Ir a historia ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* DERECHA: info card */}
          <aside className="ig-right" aria-label="Tarjeta de Instagram">
            <div className="ig-infoCard">
              <div className="ig-infoTop">
                {/* Si usas imagen local, reemplaza el div por <img ... /> */}
                {/* <img className="ig-profileImg" src={ProfileImg} alt="Perfil Instagram" /> */}
                    <img className="ig-profileImg" src={ProfileImg} alt="Perfil Instagram" />

                <div className="ig-infoIdentity">
                  <div className="ig-infoName">{IG_INFO.displayName}</div>
                  <div className="ig-infoHandle">@{IG_INFO.handle}</div>
                </div>
              </div>

              <div className="ig-stats">
                <div className="ig-stat">
                  <span className="ig-statNum">{IG_INFO.posts}</span>
                  <span className="ig-statLbl">Publicaciones</span>
                </div>
                <div className="ig-stat">
                  <span className="ig-statNum">{formatNumber(IG_INFO.followers)}</span>
                  <span className="ig-statLbl">Seguidores</span>
                </div>
                <div className="ig-stat">
                  <span className="ig-statNum">{IG_INFO.following}</span>
                  <span className="ig-statLbl">Seguidos</span>
                </div>
              </div>

              <div className="ig-bio">
                <ul className="ig-bioList">
                  {IG_INFO.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>

              <div className="ig-infoActions">
                <Button
                  text="¡Síguenos en Instagram!"
                  onClick={() => {
                    window.open(INSTAGRAM_PROFILE_URL, "_blank", "noopener,noreferrer");
                  }}
                />
                
             
              </div>

              
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
