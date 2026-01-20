import React from "react";

type ModeCardProps = {
  img: string;
  title: string;
  desc: string;
};

const ModeCard: React.FC<ModeCardProps> = React.memo(({ img, title, desc }) => {
  return (
    <article className="modeCard">
      <div className="modeCard__media">
        <img className="modeCard__img" src={img} alt={title} loading="lazy" decoding="async" />
        <div className="modeCard__scrim" aria-hidden="true" />
      </div>

      <div className="modeCard__body">
        <h3 className="modeCard__title">{title}</h3>
        <p className="modeCard__desc">{desc}</p>
      </div>
    </article>
  );
});

ModeCard.displayName = "ModeCard";

export default ModeCard;
