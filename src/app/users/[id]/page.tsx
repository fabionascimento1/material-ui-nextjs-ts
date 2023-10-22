import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import FormUser from "../components/FormUser";
import TitleForm from "../components/TitleForm";

export default async function EditUser() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TitleForm />
        <FormUser />
      </Box>
    </Container>
  );
}
