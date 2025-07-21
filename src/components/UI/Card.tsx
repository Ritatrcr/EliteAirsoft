interface CardProps {
  title: string;
  description: string;
  image?: string;
}

const Card = ({ title, image }: CardProps) => {
  return (
    <div className="card">
      <style>{`
        .card {
          background-color: transparent;
          text-align: left;
          color: var(--color-text-light);
          max-width: 280px;
          margin: 0 auto;
        }

        .card__img {
          width: 100%;
          height: 280px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .card:hover .card__img {
          transform: scale(1.05);
        }

        .card h3 {
          color: var(--color-accent);
          font-size: 1.1rem;
          font-weight: bold;
          margin-top: 0.75rem;
        }
      `}</style>

      {image && <img src={image} alt={title} className="card__img" />}
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
