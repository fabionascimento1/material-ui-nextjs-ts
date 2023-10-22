import {
  InputAdornmentProps,
  TextFieldProps as MUITextFieldProps,
} from "@mui/material";

export type CustomRef = {
  _ref?: any;
};

export type TextFieldProps = MUITextFieldProps &
  CustomRef & {
    maxChars?: number;
    ShowMaxChars?: boolean;
    screenId?: string;
    disabledLabel?: boolean;
    isAutoSelect?: boolean;
    optional?: boolean;
    tip?: string;
    loading?: boolean;
  };

export type InputAdornmentType = InputAdornmentProps &
  CustomRef & {
    label?: string;
    screenId?: string;
  };
