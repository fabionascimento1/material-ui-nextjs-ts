import React from 'react';

import { InputAdornment as MuiInputAdornment } from '@mui/material';

import { InputAdornmentType } from '../types';

export const InputAdornment = ({ _ref, label = '', screenId = '', ...props }: InputAdornmentType) => {
  return <MuiInputAdornment id={`InputAdornment${label}${screenId}`} {...props} ref={_ref} />;
};
