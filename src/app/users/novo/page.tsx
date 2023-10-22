import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { Button, Stack } from "@mui/material";
import Link from "next/link";
import FormUser from "../components/FormUser";

export default async function NewUser() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Stack direction="row" alignItems="" marginBottom={2}>
          <Link href="/users">
            <Button variant="outlined">
              <ArrowBack />
            </Button>
          </Link>
          <Typography
            marginLeft={2}
            fontWeight="bold"
            fontSize={24}
            variant="body1"
            gutterBottom
          >
            Novo usuário
          </Typography>
        </Stack>
        <FormUser />
      </Box>
    </Container>
  );
}
