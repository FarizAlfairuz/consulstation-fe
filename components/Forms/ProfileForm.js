function ProfileForm(props) {
  const { id, name, type, label, error, register, required, disabled } = props;

  return (
    <div id={id} className="space-y-3">
      <p className="font-nunito text-base">{label}</p>
      <div className=" w-3/4">
        <input
          type={type}
          name={name}
          disabled={name === "email" ? true : disabled}
          placeholder={label}
          className="font-nunito text-paragraph-heading w-full bg-transparent truncate border-b-2 border-black disabled:border-none font-bold text-black focus:outline-none"
          {...register(name, { ...required })}
        />
      </div>
      <div className="px-2">
        {error[name] && (
          <p className="text-xs text-red-600 break-words">
            {error[name].message}
          </p>
        )}
      </div>
    </div>
  );
}

export default ProfileForm;
