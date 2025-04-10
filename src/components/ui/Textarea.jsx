import '../../styles/components/textarea.css';

export default function Textarea({ 
  placeholder, 
  className = "", 
  error = false,
  disabled = false,
  ...props 
}) {
  const textareaClasses = [
    'textarea',
    error ? 'textarea-error' : '',
    disabled ? 'textarea-disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <textarea
      placeholder={placeholder}
      className={textareaClasses}
      disabled={disabled}
      {...props}
    />
  );
}
