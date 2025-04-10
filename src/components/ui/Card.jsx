import "./styles/Card.css"

export const Card = ({ className = "", children, ...props }) => {
  return (
    <div className={`card ${className}`} {...props}>
      {children}
    </div>
  )
}

export const CardHeader = ({ className = "", children, ...props }) => {
  return (
    <div className={`card-header ${className}`} {...props}>
      {children}
    </div>
  )
}

export const CardTitle = ({ className = "", children, ...props }) => {
  return (
    <h3 className={`card-title ${className}`} {...props}>
      {children}
    </h3>
  )
}

export const CardDescription = ({ className = "", children, ...props }) => {
  return (
    <p className={`card-description ${className}`} {...props}>
      {children}
    </p>
  )
}

export const CardContent = ({ className = "", children, ...props }) => {
  return (
    <div className={`card-content ${className}`} {...props}>
      {children}
    </div>
  )
}

export const CardFooter = ({ className = "", children, ...props }) => {
  return (
    <div className={`card-footer ${className}`} {...props}>
      {children}
    </div>
  )
}

