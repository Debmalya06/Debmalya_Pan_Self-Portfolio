export function RadioGroup({ options, name, onChange, className = "" }) {
    return (
        <div className={`flex flex-col space-y-2 ${className}`}>
            {options.map((option, index) => (
                <RadioGroupItem key={index} name={name} value={option.value} onChange={onChange}>
                    {option.label}
                </RadioGroupItem>
            ))}
        </div>
    );
}

export function RadioGroupItem({ name, value, onChange, children }) {
    return (
        <label className="flex items-center space-x-2">
            <input
                type="radio"
                name={name}
                value={value}
                onChange={onChange}
                className="form-radio"
            />
            <span>{children}</span>
        </label>
    );
}

export default RadioGroup;
