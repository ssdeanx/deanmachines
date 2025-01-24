import React from 'react';
import Button from '@mui/material/Button';
import { ButtonProps as MUIButtonProps } from '@mui/material/Button';
import { OverridableStringUnion } from '@mui/types';

interface MyButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

type ButtonProps = MUIButtonProps & MyButtonProps;

const MyButton: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'default',
  children,
  ...props
}) => {
  let muiVariant: MUIButtonProps['variant'] = 'contained';
  let muiSize: MUIButtonProps['size'] = 'medium';
  let color: MUIButtonProps['color'] = 'primary';

  if (variant === 'outline') {
    muiVariant = 'outlined';
  } else if (variant === 'ghost') {
    muiVariant = 'text';
  } else if (variant === 'link') {
    muiVariant = 'text';
    color = 'inherit';
  } else if (variant === 'secondary') {
    color = 'secondary';
  } else if (variant === 'destructive') {
      color = 'error'
  }

  if (size === 'sm') {
    muiSize = 'small';
  } else if (size === 'lg') {
    muiSize = 'large';
  }

  return (
    <Button
      variant={muiVariant}
      size={muiSize}
      color={color}
      {...props}
    >
      {children}
    </Button>
  );
};

export default MyButton;
