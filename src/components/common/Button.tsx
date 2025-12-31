type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
};

export const Button = ({ label, onClick, disabled, className = "" }: ButtonProps) => {
  return (
    <button 
      disabled={disabled} 
      onClick={onClick} 
      className={`btn ${className}`.trim()}
    >
      {label}
    </button>
  );
};
