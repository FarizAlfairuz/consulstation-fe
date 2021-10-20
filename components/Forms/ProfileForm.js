function ProfileForm(props) {
  const { id, name, type, label, error, register, required, disabled } = props;

  return (
    <div id={id} className="space-y-2">
      <p className="font-nunito text-base">{label}</p>
      <div className=" w-3/4">
      <input
        type={type}
        name={name}
        disabled={disabled}
        placeholder="Placeholder"
        className="font-nunito text-paragraph-heading w-full bg-transparent truncate font-bold text-black focus:outline-none"
        { ...register(name, { ...required }) }
      />
      </div>
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

export default ProfileForm;
