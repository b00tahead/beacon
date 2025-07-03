import React from 'react';
import { type LucideIcon } from 'lucide-react';
import { Icon } from './Icon';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'destructive' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
  children: React.ReactNode;
  className?: string;
}

const variantStyles = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 border-transparent',
  secondary: 'bg-white text-neutral-900 border-neutral-300 hover:bg-neutral-50 focus:ring-primary-500',
  destructive: 'bg-error-600 text-white hover:bg-error-700 focus:ring-error-500 border-transparent',
  ghost: 'bg-transparent text-neutral-700 hover:bg-neutral-100 focus:ring-primary-500 border-transparent',
} as const;

const sizeStyles = {
  sm: 'px-3 py-2 text-sm gap-1.5',
  md: 'px-4 py-2.5 text-base gap-2',
  lg: 'px-6 py-3.5 text-lg gap-2.5',
} as const;

const iconSizes = {
  sm: 'sm' as const,
  md: 'sm' as const,
  lg: 'md' as const,
} as const;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  isLoading = false,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded border transition-all duration-fast focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none font-sans font-medium';
  
  const variantClasses = variantStyles[variant];
  const sizeClasses = sizeStyles[size];
  const iconSize = iconSizes[size];
  
  const isDisabled = disabled || isLoading;
  
  const iconElement = icon ? (
    <Icon 
      icon={icon} 
      size={iconSize} 
      aria-hidden={true} 
      role="presentation"
    />
  ) : null;
  
  const content = (
    <>
      {iconPosition === 'left' && iconElement}
      <span>{children}</span>
      {iconPosition === 'right' && iconElement}
    </>
  );
  
  return (
    <button
      className={`${baseStyles} ${variantClasses} ${sizeClasses} ${className}`}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      {...props}
    >
      {isLoading ? (
        <>
          <div className="animate-spin" aria-hidden={true} role="presentation">
            <LoadingIcon size={iconSize === 'sm' ? 16 : iconSize === 'md' ? 20 : 24} />
          </div>
          <span>Loading...</span>
        </>
      ) : (
        content
      )}
    </button>
  );
};

// Simple loading icon component
const LoadingIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M21 12a9 9 0 11-6.219-8.56" />
  </svg>
);

Button.displayName = 'Button';