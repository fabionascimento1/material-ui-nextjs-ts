import { TextField as MUITextField, Skeleton } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const TextField = ({ loading = false, ...props }) => {
  const {
    palette: { grey, primary, error: errorColor },
  } = useTheme();

  return (
    <>
      {loading ? (
        <Skeleton variant="rounded" animation="wave" width="100%" height={30} />
      ) : (
        <MUITextField {...props} InputLabelProps={{ shrink: true }} />
      )}
    </>
  );
};
