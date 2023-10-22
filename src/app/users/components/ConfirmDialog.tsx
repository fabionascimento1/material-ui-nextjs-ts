import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

type Props = {
  title: string;
  description?: string;
  open: boolean;
  submitFunction: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>;
  cancelFunction: (value: React.SetStateAction<boolean>) => void;
};

export default function ConfirmDialog({
  title,
  description,
  open,
  submitFunction,
  cancelFunction,
}: Props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    cancelFunction?.(false);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
          {description && (
            <DialogContent>
              <DialogContentText>{description}</DialogContentText>
            </DialogContent>
          )}
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Cancelar
            </Button>
            <Button
              variant="contained"
              onClick={(e) => {
                submitFunction?.(e);
                cancelFunction?.(false);
              }}
              autoFocus
            >
              Confirmar
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
}
