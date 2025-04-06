import { forwardRef } from "react"
import "./styles/Input.css"

const Input = forwardRef(({ className = "", type = "text", disabled = false, ...props }, ref) => {
  return (
    <input
      type={type}
      className={`input ${disabled ? "input-disabled" : ""} ${className}`}
      disabled={disabled}
      ref={ref}
      {...props}
    />
  )
})

Input.displayName = "Input"

export default Input

