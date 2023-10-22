import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

export default function Loading() {
  return (
    <Stack
      sx={{ display: "flex", alignItems: "center", alignContent: "center" }}
    >
      <CircularProgress />
    </Stack>
  );
}
