import { PulseLoader } from "react-spinners"

function Button(props) {
  const { onClick, children, size, color, textColor, border, padding, type, disabled, loadingColor } = props;
  return (
    <button
      type={type}
      className={`font-nunito font-bold ${size} ${color} ${textColor} ${border} ${padding} rounded-md disabled:opacity-50`}
      onClick={onClick}
      disabled={disabled}
    >
      {disabled ? (
        <div className="flex justify-center">
          <PulseLoader size={5} color={loadingColor}/>
        </div>
      ) : children}
    </button>
  );
}

Button.defaultProps = {
  size: "text-sm",
  color: "bg-black",
  textColor: "text-white",
  border: "",
  padding: "py-1 px-5",
  type: "button",
  loadingColor: "white"
};

export default Button;
