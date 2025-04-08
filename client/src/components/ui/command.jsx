"use client"
import "./styles/command.css"

export const Command = ({ children, className = "", ...props }) => {
  return (
    <div className={`command ${className}`} {...props}>
      {children}
    </div>
  )
}

export const CommandInput = ({ placeholder, value, onChange, className = "", ...props }) => {
  return (
    <div className="command-input-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="command-input-icon"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input
        type="text"
        className={`command-input ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  )
}

export const CommandList = ({ children, className = "", ...props }) => {
  return (
    <div className={`command-list ${className}`} {...props}>
      {children}
    </div>
  )
}

export const CommandEmpty = ({ children, className = "", ...props }) => {
  return (
    <div className={`command-empty ${className}`} {...props}>
      {children}
    </div>
  )
}

export const CommandGroup = ({ children, heading, className = "", ...props }) => {
  return (
    <div className={`command-group ${className}`} {...props}>
      {heading && <div className="command-group-heading">{heading}</div>}
      {children}
    </div>
  )
}

export const CommandItem = ({ children, onSelect, className = "", ...props }) => {
  return (
    <div
      className={`command-item ${className}`}
      onClick={(e) => {
        if (typeof onSelect === "function") {
          onSelect(e);
        } else {
          console.warn("onSelect is not a function", onSelect);
        }
      }}
      role="button"
      tabIndex={0}
      {...props}
    >
      {children}
    </div>
  )
}
