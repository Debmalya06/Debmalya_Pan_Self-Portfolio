import React from "react";

export function RadioGroup({
    options = [], // default to empty array
    name,
    selectedValue,
    onChange,
    className = "",
}) {
    if (!Array.isArray(options) || options.length === 0) {
        return <p className="text-sm text-gray-500">No options available.</p>;
    }

    return (
        <div className={`flex flex-col space-y-2 ${className}`}>
            {options.map((option, index) => (
                <RadioGroupItem
                    key={index}
                    name={name}
                    value={option.value}
                    label={option.label}
                    checked={selectedValue === option.value}
                    onChange={onChange}
                />
            ))}
        </div>
    );
}

export function RadioGroupItem({
    name,
    value,
    label,
    checked,
    onChange,
}) {
    const id = `${name}-${value}`;

    return (
        <label htmlFor={id} className="flex items-center space-x-2 cursor-pointer">
            <input
                id={id}
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                className="form-radio text-blue-600 focus:ring-blue-500"
            />
            <span>{label}</span>
        </label>
    );
}

export default RadioGroup;
