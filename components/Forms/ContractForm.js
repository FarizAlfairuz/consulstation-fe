function ContractForm(props) {
  const { id, name, type, label, error, register, required, disabled, width } = props;

  return (
    <div id={id} className={`space-y-2 ${width}`}>
      <p className="text-paragraph-1 text-black text-opacity-60 font-nunito font-bold">
        {label}
      </p>
      <input
        type={type}
        name={name}
        disabled={disabled}
        placeholder={label}
        className="font-nunito text-paragraph-1 w-full bg-white font-bold text-black py-2 px-3 rounded-lg focus:outline-none"
        { ...register(name, { ...required }) }
      />
      {/* <div className="h-1 px-1">
        {error[name] && (
          <p className="text-xs text-red-600 break-words">
            {error[name].message}
          </p>
        )}
      </div> */}
    </div>
  );
}

ContractForm.defaultProps = {
    width: "w-1/2"
}

export default ContractForm;
