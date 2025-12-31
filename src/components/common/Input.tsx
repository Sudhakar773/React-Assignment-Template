type InputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  type?: "text" | "password" | "email" | "number";
};

export const Input = ({ 
  value, 
  onChange, 
  placeholder, 
  className = "", 
  type = "text" 
}: InputProps) => {
  return (
    <input
      type={type}
      className={`form-control ${className}`.trim()}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
