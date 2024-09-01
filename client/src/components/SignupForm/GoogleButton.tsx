import React from 'react';
import { Button, ButtonProps } from '@mantine/core';
import { GoogleIcon } from './GoogleIcon';

export const GoogleButton: React.FC<ButtonProps> = (props) => (
  <Button
    // leftIcon={<GoogleIcon />}
   {... <GoogleIcon/>}
    variant="default"
    color="gray"
    fullWidth
    {...props}
  >
  </Button>
);
