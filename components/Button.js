function Button(props) {
  const { onClick, children, size, color, textColor, border, padding, type } = props;
  return (
    <button
      type={type}
      className={`font-nunito font-bold ${size} ${color} ${textColor} ${border} ${padding} rounded-md`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "text-sm",
  color: "bg-black",
  textColor: "text-white",
  border: "",
  padding: "py-1 px-5",
  type: "button"
};

export default Button;
