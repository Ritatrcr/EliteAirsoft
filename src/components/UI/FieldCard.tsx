import { useMemo, useRef, useState } from 'react';
import './FieldCard.css';

type CampoCardProps = {
  title: string;
  images: string[];
  description: string;
};

const SWIPE_THRESHOLD = 40; // px

const CampoCard = ({ title, images, description }: CampoCardProps) => {
  const slides = useMemo(() => images.filter(Boolean), [images]);
  const [index, setIndex] = useState(0);

  // Soporte de swipe (touch/mouse/pointer)
  const startXRef = useRef<number | null>(null);
  const deltaXRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);

  const hasMany = slides.length > 1;

  const prev = () => {
    if (!hasMany) return;
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  };

  const next = () => {
    if (!hasMany) return;
    setIndex((i) => (i + 1) % slides.length);
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!hasMany) return;
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    deltaXRef.current = 0;
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!hasMany) return;
    if (!isDraggingRef.current || startXRef.current === null) return;
    deltaXRef.current = e.clientX - startXRef.current;
  };

  const onPointerUp = () => {
    if (!hasMany) return;
    if (!isDraggingRef.current) return;

    const dx = deltaXRef.current;
    isDraggingRef.current = false;
    startXRef.current = null;

    if (Math.abs(dx) < SWIPE_THRESHOLD) return;

    if (dx > 0) prev();
    else next();
  };

  return (
    <article className="campo-card">
      <h3 className="campo-card__title">{title}</h3>

      <div
        className="campo-card__media"
        aria-label={`Galería de ${title}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div
          className="campo-card__track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((src, i) => (
            <div className="campo-card__slide" key={`${title}-${i}`}>
              <img
                src={src}
                alt={`${title} - foto ${i + 1} de ${slides.length}`}
                className="campo-card__image"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {hasMany && (
          <>
            <button
              type="button"
              className="campo-card__nav campo-card__nav--left"
              onClick={prev}
              aria-label={`Foto anterior de ${title}`}
            >
              ‹
            </button>
            <button
              type="button"
              className="campo-card__nav campo-card__nav--right"
              onClick={next}
              aria-label={`Siguiente foto de ${title}`}
            >
              ›
            </button>

            <div className="campo-card__dots" aria-hidden="true">
              {slides.map((_, i) => (
                <span
                  key={i}
                  className={`campo-card__dot ${i === index ? 'is-active' : ''}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <p className="campo-card__desc">{description}</p>
    </article>
  );
};

export default CampoCard;
