import './Button.css';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

const Button = ({ text, onClick, type = 'button' }: ButtonProps) => {
  return (
    <button className="btn" type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
