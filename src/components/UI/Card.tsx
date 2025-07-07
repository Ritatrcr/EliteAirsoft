import './Card.css';

interface CardProps {
  title: string;
  description: string;
  image?: string;
}

const Card = ({ title, description, image }: CardProps) => {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card__img" />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
