import React from "react";
import "./PlanCard.css";

type PlanCardProps = {
  title: string;
  subtitle?: string;
  durationBadge?: string;
  priceText?: string;

  includesTitle?: string; // Default: "Incluye"
  includes: string[];

  extrasTitle?: string; // Default: "Extras"
  extras?: string[];

  ctaLabel: string;
  ctaHref: string;

  highlight?: string; // Chip superior opcional
};

const PlanCard: React.FC<PlanCardProps> = React.memo(
  ({
    title,
    subtitle,
    durationBadge,
    priceText,
    includesTitle = "Incluye",
    includes,
    extrasTitle = "Extras",
    extras,
    ctaLabel,
    ctaHref,
    highlight,
  }) => {
    return (
      <article className="planCard" aria-label={title}>
        <div className="planCard__content">
          <header className="planCard__header">
            <div className="planCard__titles">
              {highlight ? <span className="planCard__chip">{highlight}</span> : null}
              <h3 className="planCard__title">{title}</h3>
              {subtitle ? <p className="planCard__subtitle">{subtitle}</p> : null}
            </div>

            <div className="planCard__badges">
              {durationBadge ? <span className="planCard__badge">{durationBadge}</span> : null}
              {priceText ? <span className="planCard__price">{priceText}</span> : null}
            </div>
          </header>

          <div className="planCard__grid">
            <section className="planCard__section">
              <div className="planCard__sectionTitle">{includesTitle}</div>
              <ul className="planCard__list">
                {includes.map((it, i) => (
                  <li key={i} className="planCard__li">
                    <span className="planCard__dot" aria-hidden="true" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </section>

            {extras?.length ? (
              <section className="planCard__section">
                <div className="planCard__sectionTitle">{extrasTitle}</div>
                <ul className="planCard__list planCard__list--soft">
                  {extras.map((it, i) => (
                    <li key={i} className="planCard__li">
                      <span className="planCard__dot planCard__dot--soft" aria-hidden="true" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>

          <div className="planCard__footer">
            <a className="planCard__cta" href={ctaHref} target="_blank" rel="noreferrer">
              {ctaLabel}
            </a>
            <div className="planCard__fine">Personalizable (puedes editar textos, precios y condiciones).</div>
          </div>
        </div>
      </article>
    );
  }
);

PlanCard.displayName = "PlanCard";
export default PlanCard;
