import "./Input.css";

const Input = ({ type, value, onChange }) => {
  return (
    <input
      className="searchInput"
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;