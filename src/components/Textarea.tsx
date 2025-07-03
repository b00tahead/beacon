import React, { forwardRef } from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  variant?: 'default' | 'error' | 'warning' | 'success';
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  className?: string;
  labelClassName?: string;
  helperClassName?: string;
}

const variantStyles = {
  default: 'border-neutral-300 focus:border-primary-500 focus:ring-primary-500',
  error: 'border-error-500 focus:border-error-500 focus:ring-error-500',
  warning: 'border-warning-500 focus:border-warning-500 focus:ring-warning-500',
  success: 'border-success-500 focus:border-success-500 focus:ring-success-500',
} as const;

const resizeStyles = {
  none: 'resize-none',
  vertical: 'resize-y',
  horizontal: 'resize-x',
  both: 'resize',
} as const;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
  label,
  helperText,
  errorMessage,
  variant = 'default',
  resize = 'vertical',
  className = '',
  labelClassName = '',
  helperClassName = '',
  id,
  disabled,
  required,
  rows = 4,
  'aria-describedby': ariaDescribedBy,
  ...props
}, ref) => {
  // Generate IDs for accessibility
  const generatedId = React.useId();
  const textareaId = id || `textarea-${generatedId}`;
  const helperTextId = `${textareaId}-helper`;
  const errorId = `${textareaId}-error`;
  
  // Determine final variant based on error state
  const finalVariant = errorMessage ? 'error' : variant;
  
  // Build aria-describedby
  const describedByIds = [
    ariaDescribedBy,
    helperText && helperTextId,
    errorMessage && errorId,
  ].filter(Boolean).join(' ');
  
  const baseTextareaStyles = 'w-full px-4 py-2.5 font-sans text-base rounded border transition-all duration-fast focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-neutral-50';
  const variantClasses = variantStyles[finalVariant];
  const resizeClasses = resizeStyles[resize];
  
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={textareaId}
          className={`block text-sm font-medium text-neutral-900 mb-1.5 ${required ? "after:content-['*'] after:text-error-500 after:ml-1" : ''} ${labelClassName}`}
        >
          {label}
        </label>
      )}
      
      <textarea
        ref={ref}
        id={textareaId}
        rows={rows}
        className={`${baseTextareaStyles} ${variantClasses} ${resizeClasses} ${className}`}
        disabled={disabled}
        required={required}
        aria-describedby={describedByIds || undefined}
        aria-invalid={errorMessage ? 'true' : undefined}
        {...props}
      />
      
      {/* Helper text */}
      {helperText && !errorMessage && (
        <p
          id={helperTextId}
          className={`mt-1.5 text-sm text-neutral-600 ${helperClassName}`}
        >
          {helperText}
        </p>
      )}
      
      {/* Error message */}
      {errorMessage && (
        <p
          id={errorId}
          className={`mt-1.5 text-sm text-error-600 ${helperClassName}`}
          role="alert"
          aria-live="polite"
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';