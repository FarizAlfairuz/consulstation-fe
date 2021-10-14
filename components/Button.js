function Button(props) {
  const { onClick, children, size, color, textColor, border, padding } = props;
  return (
    <button
      type="button"
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
  padding: "py-1 px-5"
};

export default Button;
