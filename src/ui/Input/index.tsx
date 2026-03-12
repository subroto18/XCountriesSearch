import Styles from "./Styles.module.css";
type Props = {
  type?: string;
  label?: string;
  id?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  required?: boolean;
  value?: string;
  placeholder?: string;
};

const Input = ({
  type,
  id,
  name,
  onChange,
  readOnly,
  required,
  value,
  label,
  placeholder,
  ...rest
}: Props) => {
  return (
    <>
      <div className={Styles.label}>
        <label htmlFor={id}>{label}</label>
      </div>

      <input
        className={Styles.input}
        onChange={onChange}
        type={type || "text"}
        id={id}
        value={value}
        name={name}
        readOnly={readOnly}
        required={required}
        placeholder={placeholder}
        {...rest}
      />
    </>
  );
};

export default Input;
