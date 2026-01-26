import React, { useMemo, useState } from "react";
import "../styles/Opiniones.css";

import ManuelAvatar from "../assets/images/avatars/manuel.png";
import SebastianAvatar from "../assets/images/avatars/sebastian.png";
import ManuelPhoto1 from "../assets/images/reviews/manuel_1.png";
import ManuelPhoto2 from "../assets/images/reviews/manuel_2.png";

type Rating = 1 | 2 | 3 | 4 | 5;


type ReviewsSummary = {
  average: number;
  total: number;
  distribution: Record<Rating, number>;
};

type Review = {
  id: string;
  author: string;
  authorMeta?: string;
  rating: Rating;
  dateLabel: string;
  text: string;
  photos?: string[];
  avatarUrl?: string;
  googleMapsReviewUrl?: string; // ✅ NUEVO
};


type OpinionesProps = {
  title?: string;
  summary?: ReviewsSummary;
  reviews?: Review[];
};

/** Link a Google Maps (el tuyo) */
const MAPS_URL =
  "https://www.google.com/maps/place/%C3%89LITE+AIRSOFT/@4.7327642,-74.2281319,17z/data=!4m16!1m9!3m8!1s0x8e3f790009bce90b:0x13247dcb1f154b2d!2s%C3%89LITE+AIRSOFT!8m2!3d4.7327642!4d-74.225557!9m1!1b1!16s%2Fg%2F11wmn05b07!3m5!1s0x8e3f790009bce90b:0x13247dcb1f154b2d!8m2!3d4.7327642!4d-74.225557!16s%2Fg%2F11wmn05b07?entry=ttu&g_ep=EgoyMDI2MDExOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D";

/** Embed sin API key (coordenadas) */
const MAP_EMBED_URL = "https://www.google.com/maps?q=4.7327642,-74.225557&z=17&output=embed";

const DEFAULT_REVIEWS: Review[] = [
  {
    id: "r1",
    author: "D'aniel Molano",
    authorMeta: "1 opinión",
    rating: 5,
    dateLabel: "Hace 3 meses",
    text:
      "¡Una experiencia adrenalínica al máximo! Réplicas de alta calidad y un equipo élite que te pone a prueba. La emoción en el campo es increíble. ¡Totalmente recomendado!",
    googleMapsReviewUrl: "https://maps.app.goo.gl/KnsztJ8Vs7xpnJ1Y9",
  },
  {
    id: "r2",
    author: "Sebastián Gama",
    authorMeta: "5 opiniones · 1 foto",
    rating: 5,
    dateLabel: "Hace 11 meses",
    text:
      "La verdad me encantó el lugar, es una experiencia única y quedé con ganas de volver. Lo único es que me gustaría que vendieran un paquete de fotos durante el juego para el recuerdo.",
    avatarUrl: SebastianAvatar,
    googleMapsReviewUrl: "https://maps.app.goo.gl/EQKfxuTWdihkXZCS8",
  },
  {
    id: "r3",
    author: "Manuel Rojas Ibañez",
    authorMeta: "Local Guide · 110 opiniones · 124 fotos",
    rating: 5,
    dateLabel: "Hace 11 meses",
    text:
      "Excelente servicio y distribución del campo. Espacios de CQB muy rápido, túneles tipo trinchera y puentes. Creo que es el mejor campo de airsoft por mucho en el momento.",
    avatarUrl: ManuelAvatar,
    photos: [ManuelPhoto1, ManuelPhoto2],
    googleMapsReviewUrl: "https://maps.app.goo.gl/EQKfxuTWdihkXZCS8",
  },
];

const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

function Stars({ value, size = 18 }: { value: number; size?: number }) {
  const rounded = clamp(Math.round(value), 0, 5);

  return (
    <div className="stars" aria-label={`${rounded} de 5`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < rounded;
        return (
          <svg
            key={i}
            className={`star ${filled ? "is-filled" : ""}`}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            role="img"
            aria-hidden="true"
          >
            <path d="M12 17.3l-6.18 3.7 1.64-7.03L2 9.24l7.19-.61L12 2l2.81 6.63 7.19.61-5.46 4.73 1.64 7.03z" />
          </svg>
        );
      })}
    </div>
  );
}

function GoogleReviewButton({ href }: { href?: string }) {
  if (!href) return null;

  return (
    <a
      className="google-btn"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Ver comentario en Google Maps"
      title="Ver comentario en Google Maps"
    >
      {/* Icono estilo Google */}
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="#EA4335"
          d="M12 10.2v3.9h5.5c-.2 1.2-1.4 3.6-5.5 3.6-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.2.8 3.9 1.5l2.7-2.6C17.9 3.1 15.8 2 12 2 6.5 2 2 6.5 2 12s4.5 10 10 10c5.8 0 9.6-4.1 9.6-9.9 0-.7-.1-1.2-.2-1.9H12z"
        />
        <path
          fill="#34A853"
          d="M3.6 7.3l3.2 2.3C7.6 7.7 9.6 6 12 6c1.9 0 3.2.8 3.9 1.5l2.7-2.6C17.9 3.1 15.8 2 12 2 8.1 2 4.8 4.2 3.6 7.3z"
          opacity="0"
        />
        <path
          fill="#FBBC05"
          d="M12 22c3.7 0 6.8-1.2 9.1-3.3l-3-2.5c-.8.6-2 1.3-6.1 1.3-2.9 0-5.3-1.9-6.1-4.5l-3.2 2.4C4.8 19.7 8.1 22 12 22z"
        />
        <path
          fill="#4285F4"
          d="M21.6 12.1c0-.7-.1-1.2-.2-1.9H12v3.9h5.5c-.3 1.5-1.7 3.6-5.5 3.6v4.3c3.3 0 6.1-1.1 8.1-3 1.9-1.8 2.9-4.4 2.9-7.9z"
        />
      </svg>
    </a>
  );
}



function Avatar({ author, avatarUrl }: { author: string; avatarUrl?: string }) {
  const initial = (author?.trim()?.[0] || "U").toUpperCase();
  if (avatarUrl) return <img className="avatar avatar-img" src={avatarUrl} alt={author} />;
  return <div className="avatar avatar-fallback">{initial}</div>;
}

function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);

  // ✅ Muestra "Ver más" si el texto es largo o si hay fotos
  const showToggle = review.text.length > 190 || (review.photos?.length ?? 0) > 0;

  const previewLen = 180;
  const needsTrim = review.text.length > previewLen;
  const text = expanded ? review.text : review.text.slice(0, previewLen) + (needsTrim ? "…" : "");

  const photos = review.photos ?? [];
  const photoClass =
    photos.length >= 2 ? "review-photos grid-2" : photos.length === 1 ? "review-photos grid-1" : "review-photos";

  // ✅ Fotos solo cuando está expandido
  const shouldShowPhotos = photos.length > 0 && expanded;

  return (
     <article
    className="review-card"
    onClick={() => {
      if (!review.googleMapsReviewUrl) return;
      window.open(review.googleMapsReviewUrl, "_blank", "noopener,noreferrer");
    }}
    role="link"
    tabIndex={0}
    onKeyDown={(e) => {
      if (!review.googleMapsReviewUrl) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        window.open(review.googleMapsReviewUrl, "_blank", "noopener,noreferrer");
      }
    }}
  >
    <header className="review-head">
      <div className="review-head-left">
        <Avatar author={review.author} avatarUrl={review.avatarUrl} />
        <div className="review-author">
          <div className="review-author__name">{review.author}</div>
          {review.authorMeta ? (
            <div className="review-author__meta">{review.authorMeta}</div>
          ) : null}
        </div>
      </div>

      <GoogleReviewButton href={review.googleMapsReviewUrl} />
    </header>

    <div className="review-subhead">
      <Stars value={review.rating} />
      <span className="review-date">{review.dateLabel}</span>
    </div>

    <p className="review-text">{text}</p>

    {shouldShowPhotos ? (
      <div className={photoClass}>
        {photos.slice(0, 2).map((src, idx) => (
          <img
            key={idx}
            className="review-photo"
            src={src}
            alt={`Foto ${idx + 1} de la reseña`}
            loading="lazy"
          />
        ))}
      </div>
    ) : null}
  </article>
  );
}

function computeFromReviews(reviews: Review[]): ReviewsSummary {
  const dist: Record<Rating, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  if (!reviews.length) return { average: 0, total: 0, distribution: dist };

  let sum = 0;
  for (const r of reviews) {
    dist[r.rating] += 1;
    sum += r.rating;
  }

  return {
    average: Number((sum / reviews.length).toFixed(1)),
    total: reviews.length,
    distribution: dist,
  };
}

const DEFAULT_SUMMARY: ReviewsSummary = {
  average: 5.0,
  total: 529,
  distribution: {
    5: 520,
    4: 6,
    3: 2,
    2: 1,
    1: 0,
  },
};

function MapCard() {
  const isOpenNow = () => {
    const now = new Date();
    const h = now.getHours();
    // Abierto: 08:00 (incl) hasta 20:00 (excl)
    return h >= 8 && h < 20;
  };

  const [isOpen, setIsOpen] = useState<boolean>(() => isOpenNow());

  React.useEffect(() => {
    // Recalcula cada minuto para que cambie de estado sin recargar
    const id = window.setInterval(() => setIsOpen(isOpenNow()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="map-card">
      <div className="map-card__header">
        <div className="map-card__title">Ubicación</div>
        <div className="map-card__sub">
          Carrera 12, Funza, Ceuta, Funza, Cundinamarca
        </div>
      </div>

      <div className="map-frame">
        <iframe
          title="Mapa — ÉLITE AIRSOFT"
          src={MAP_EMBED_URL}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className="map-tint" aria-hidden="true" />
        <a
          className="map-click"
          href={MAPS_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir en Google Maps"
        />
        <a className="map-cta" href={MAPS_URL} target="_blank" rel="noreferrer">
          Abrir en Google Maps
        </a>
      </div>

      <div className="map-card__footer">
        <span className={isOpen ? "map-open" : "map-closed"}>
          {isOpen ? "Abierto" : "Cerrado"}
        </span>
        <span className="map-dot">•</span>
        <span className="map-hours">Abre a las 8 a.m / Cierra a las 8 p.m.</span>
      </div>
    </div>
  );
}


const Opiniones: React.FC<OpinionesProps> = ({
  title = "Titulo",
  summary = DEFAULT_SUMMARY,
  reviews = DEFAULT_REVIEWS,
}) => {
  const computed = useMemo(() => computeFromReviews(reviews), [reviews]);
  const activeSummary = summary ?? computed;

  const total = Math.max(activeSummary.total, 1);
  const percent = (count: number) => `${clamp((count / total) * 100, 0, 100)}%`;

  return (
      <div className="opiniones-container">
        <div className="opiniones-layout">
          {/* IZQUIERDA: MAPA */}
          <aside className="opiniones-left">
            <MapCard />
          </aside>

          {/* DERECHA: TODO lo tuyo */}
          <div className="opiniones-right">
            

            <div className="opiniones-summary">
              <div className="opiniones-bars" aria-label="Distribución de calificaciones">
                {[5, 4, 3, 2, 1].map((s) => {
                  const star = s as Rating;
                  const count = activeSummary.distribution[star] ?? 0;
                  return (
                    <div className="bar-row" key={s}>
                      <div className="bar-label">{s}</div>
                      <div
                        className="bar-track"
                        role="progressbar"
                        aria-valuenow={count}
                        aria-valuemin={0}
                        aria-valuemax={activeSummary.total}
                      >
                        <div className="bar-fill" style={{ width: percent(count) }} />
                      </div>
                      <div className="bar-count">{count}</div>
                    </div>
                  );
                })}
              </div>

              <div className="opiniones-score">
                <div className="score-number">{activeSummary.average.toFixed(1)}</div>
                <Stars value={activeSummary.average} size={20} />
                <div className="score-total">{activeSummary.total} opiniones</div>
              </div>
            </div>

            <div className="reviews-grid">
              {reviews.map((r) => (
                <ReviewCard key={r.id} review={r} />
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Opiniones;
