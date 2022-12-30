const labelStyle = {
  transition: 'all .3s'
}

export const FormField = ({fieldName, displayedName, value, onChange, valid, autoComplete = "on"}) => {
  return (
    <div className="flex flex-col items-center">
     <label htmlFor={fieldName}
        className={`${value ? "" : "text-transparent"} block transition w-60`}
        style={labelStyle}
      >
        {displayedName}
      </label>
      <input
        type={fieldName}
        placeholder={displayedName}
        id="name" 
        name={fieldName}
        value={value}
        onChange={onChange}
        className="px-2 py-1 ring-1 ring-slate-300 rounded-sm dark:ring-teal-400 dark:bg-teal-800 dark:focus:ring-2 w-60"
        autoComplete={autoComplete}
        required={true}
      />
      <span className="block text-teal-500 text-sm pt-1">{valid ? valid : ''}</span>
    </div>
  )
}