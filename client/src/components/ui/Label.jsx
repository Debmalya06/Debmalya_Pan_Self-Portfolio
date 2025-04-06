import '../../styles/components/label.css';

export default function Label({ 
  children, 
  htmlFor, 
  className = "",
  required = false,
  disabled = false
}) {
  const labelClasses = [
    'label',
    required ? 'label-required' : '',
    disabled ? 'label-disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <label 
      htmlFor={htmlFor} 
      className={labelClasses}
    >
      {children}
    </label>
  );
}
