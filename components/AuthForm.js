function AuthForm(props) {
  const { id, name, type, placeholder, error, register, required, disabled } = props;
  return (
    <div id={id}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        className={`py-3 px-6 bg-gray-100 rounded-lg w-full focus:outline-none `}
        { ...register(name, { ...required }) }
      />
      <div>
        {error[name] && (
          <p className="text-xs text-red-600 break-words">
            {error[name].message}
          </p>
        )}
      </div>
    </div>
  );
}

export default AuthForm;
