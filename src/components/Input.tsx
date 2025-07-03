import React, { forwardRef } from 'react';
import { type LucideIcon } from 'lucide-react';
import { Icon } from './Icon';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'error' | 'warning' | 'success';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  className?: string;
  labelClassName?: string;
  helperClassName?: string;
}

const sizeStyles = {
  sm: {
    input: 'px-3 py-2 text-sm',
    icon: 'px-3',
    iconSize: 'sm' as const,
  },
  md: {
    input: 'px-4 py-2.5 text-base',
    icon: 'px-4',
    iconSize: 'sm' as const,
  },
  lg: {
    input: 'px-4 py-3 text-lg',
    icon: 'px-4',
    iconSize: 'md' as const,
  },
} as const;

const variantStyles = {
  default: 'border-neutral-300 focus:border-primary-500 focus:ring-primary-500',
  error: 'border-error-500 focus:border-error-500 focus:ring-error-500',
  warning: 'border-warning-500 focus:border-warning-500 focus:ring-warning-500',
  success: 'border-success-500 focus:border-success-500 focus:ring-success-500',
} as const;

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  helperText,
  errorMessage,
  size = 'md',
  variant = 'default',
  icon,
  iconPosition = 'left',
  className = '',
  labelClassName = '',
  helperClassName = '',
  id,
  disabled,
  required,
  'aria-describedby': ariaDescribedBy,
  ...props
}, ref) => {
  // Generate IDs for accessibility
  const generatedId = React.useId();
  const inputId = id || `input-${generatedId}`;
  const helperTextId = `${inputId}-helper`;
  const errorId = `${inputId}-error`;
  
  // Determine final variant based on error state
  const finalVariant = errorMessage ? 'error' : variant;
  
  // Build aria-describedby
  const describedByIds = [
    ariaDescribedBy,
    helperText && helperTextId,
    errorMessage && errorId,
  ].filter(Boolean).join(' ');
  
  const baseInputStyles = 'w-full font-sans rounded border transition-all duration-fast focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-neutral-50';
  const sizeClasses = sizeStyles[size];
  const variantClasses = variantStyles[finalVariant];
  
  // Handle icon spacing
  const hasLeftIcon = icon && iconPosition === 'left';
  const hasRightIcon = icon && iconPosition === 'right';
  
  const leftPadding = hasLeftIcon ? 'pl-10' : '';
  const rightPadding = hasRightIcon ? 'pr-10' : '';
  
  const inputElement = (
    <input
      ref={ref}
      id={inputId}
      className={`${baseInputStyles} ${sizeClasses.input} ${variantClasses} ${leftPadding} ${rightPadding} ${className}`}
      disabled={disabled}
      required={required}
      aria-describedby={describedByIds || undefined}
      aria-invalid={errorMessage ? 'true' : undefined}
      {...props}
    />
  );
  
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className={`block text-sm font-medium text-neutral-900 mb-1.5 ${required ? "after:content-['*'] after:text-error-500 after:ml-1" : ''} ${labelClassName}`}
        >
          {label}
        </label>
      )}
      
      <div className="relative">
        {/* Left icon */}
        {hasLeftIcon && (
          <div className={`absolute left-0 top-0 h-full flex items-center ${sizeClasses.icon} pointer-events-none`}>
            <Icon 
              icon={icon} 
              size={sizeClasses.iconSize} 
              className="text-neutral-500"
              aria-hidden={true}
              role="presentation"
            />
          </div>
        )}
        
        {inputElement}
        
        {/* Right icon */}
        {hasRightIcon && (
          <div className={`absolute right-0 top-0 h-full flex items-center ${sizeClasses.icon} pointer-events-none`}>
            <Icon 
              icon={icon} 
              size={sizeClasses.iconSize} 
              className="text-neutral-500"
              aria-hidden={true}
              role="presentation"
            />
          </div>
        )}
      </div>
      
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

Input.displayName = 'Input';