function AuthForm(props) {
  const { id, name, type, placeholder, error, register, required, disabled, width } = props;
  return (
    <div id={id}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        className={`flex flex-grow py-3 px-6 bg-gray-200 rounded-lg ${width} focus:outline-none font-nunito text-sm font-bold disabled:opacity-60`}
        { ...register(name, { ...required }) }
      />
      <div className="h-1 px-1">
        {error[name] && (
          <p className="text-xs text-red-600 break-words">
            {error[name].message}
          </p>
        )}
      </div>
    </div>
  );
}

AuthForm.defaultProps = {
  width: "w-full"
}

export default AuthForm;
