"use client"
import "./styles/Button.css"

const Button = ({
  children,
  variant = "default",
  size = "md",
  className = "",
  disabled = false,
  type = "button",
  onClick,
  ...props
}) => {
  const buttonClasses = `button button-${variant} button-${size} ${className}`

  return (
    <button type={type} className={buttonClasses} disabled={disabled} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button

