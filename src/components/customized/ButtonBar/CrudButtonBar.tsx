import { Button, Stack, Theme } from "@mui/material";
import { CrudButtonBarType } from "./types";
import { useRouter } from "next/navigation";

export const CrudButtonBar = ({
  cancelPath,
  onCancel,
  primaryButtonDisabled,
  primaryButtonProps,
  submitFunction,
  type = "submit",
  ...props
}: CrudButtonBarType) => {
  const router = useRouter();
  return (
    <Stack
      boxSizing={"border-box"}
      width={{ xs: "100%", sm: "calc(100% - 64px)" }}
      sx={({ palette }: Theme) => ({
        position: "fixed",
        maxHeight: 56,
        left: { xs: 0, sm: "65px" },
        bottom: 0,
        alignItems: "center",
        paddingTop: 2,
        paddingRight: 8,
        paddingBottom: 6,
        paddingLeft: 8,
        backgroundColor: "#fcfcfc",
        borderTop: `1px solid ${palette.grey[50]}`,
        zIndex: 1,
      })}
    >
      <Stack
        gap={8}
        direction="row-reverse"
        justifyContent={{ xs: "space-between", sm: "unset" }}
        sx={{
          width: "100%",
          maxWidth: "1030px",
          maxHeight: 40,
        }}
      >
        <Button
          type={type}
          variant="contained"
          onClick={submitFunction}
          disabled={primaryButtonDisabled}
          {...primaryButtonProps}
        >
          {props.primaryButtonLabel ?? "Salvar"}
        </Button>

        <Button variant="text" onClick={() => onCancel?.() ?? router.back()}>
          {props.secondaryButtonLabel ?? "Cancelar"}
        </Button>
      </Stack>
    </Stack>
  );
};
