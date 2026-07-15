import "./Button.css";

function Button({ children, variant = "primary", onClick, type = "button", disabled = false, fullWidth = false }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`custom-btn btn-${variant} ${fullWidth ? "btn-full" : ""}`}
    >
      {children}
    </button>
  );
}

export default Button;