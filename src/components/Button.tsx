
interface Props {
  children: string;
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  onClick: () => void;
}

const Button = ({ children, onClick, color="success" }: Props) => {
  return (
      <button onClick={onClick} className={"btn btn-" + color}>
        {children}
      </button>
  );
}

export default Button