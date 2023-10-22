import { ButtonProps } from "@mui/material";
import { ReactNode } from "react";

export type CrudButtonBarType = {
  cancelPath?: string;
  submitFunction?: () => void;
  onCancel?: () => void | Promise<void>;
  type?: "button" | "submit";
  primaryButtonLabel?: string;
  primaryButtonProps?: Omit<ButtonProps, "disabled" | "label" | "children">;
  primaryButtonDisabled?: boolean;
  secondaryButtonLabel?: string;
};
