import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export default function HomePage() {
  return (
    <Box sx={{ display: "flex" }}>
      <div>
        <Alert severity="info" sx={{ mt: 2, mb: 5 }}>
          <AlertTitle>Hello 👋</AlertTitle>
          Projeto desenvolvido vaga de front-end!
        </Alert>
      </div>
    </Box>
  );
}
