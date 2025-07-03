import React from 'react';
import { type LucideIcon } from 'lucide-react';

export interface IconProps {
  icon: LucideIcon;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  className?: string;
  title?: string;
  'aria-label'?: string;
  'aria-hidden'?: boolean;
  role?: 'img' | 'presentation';
}

const sizeMap = {
  xs: 12,  // Pairs with caption text
  sm: 16,  // Pairs with body text  
  md: 20,  // Pairs with heading-6
  lg: 24,  // Pairs with heading-5
  xl: 32,  // Pairs with heading-3
} as const;

export const Icon: React.FC<IconProps> = ({
  icon: LucideIconComponent,
  size = 'md',
  className = '',
  title,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
  role,
  ...props
}) => {
  const iconSize = typeof size === 'number' ? size : sizeMap[size];
  
  const isDecorative = ariaHidden === true || role === 'presentation';
  const hasAccessibleText = Boolean(title || ariaLabel);
  
  const effectiveAriaHidden = isDecorative ? true : (hasAccessibleText ? undefined : true);
  const effectiveRole = role || (isDecorative ? 'presentation' : 'img');
  const effectiveAriaLabel = isDecorative ? undefined : (ariaLabel || title);

  return (
    <LucideIconComponent
      size={iconSize}
      className={`inline-flex items-center ${className}`}
      aria-hidden={effectiveAriaHidden}
      aria-label={effectiveAriaLabel}
      role={effectiveRole}
      {...props}
    />
  );
};

Icon.displayName = 'Icon';