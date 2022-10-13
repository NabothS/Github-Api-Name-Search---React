import "./Button.css";
import PropTypes from 'prop-types';

const Button = ({className, onClick, children, color="primary"}) => {
  return (
    <button
      className={`btn btn--${color} ${className}`}
      onClick={onClick}
      innerHTML ='hallo'
    >
        {children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary","close"]),
  onClick: PropTypes.func.isRequired,
}


export default Button;