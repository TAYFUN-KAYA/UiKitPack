interface ButtonNameProps {
  name: string;
  label: string;
  disabled: boolean;
}

const Button = (props: ButtonNameProps) => {
  const { name, label, disabled } = props;
  return (
    <button name={name} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
