import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Stack } from "@mui/material";
import Link from "next/link";
import DataTable from "./Table";

async function getDataUsers() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/users`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function UserList() {
  const data = await getDataUsers();

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          marginBottom={2}
        >
          <Typography
            fontWeight="bold"
            fontSize={24}
            variant="body1"
            gutterBottom
          >
            Usuários
          </Typography>
          <Link href="/users/novo">
            <Button variant="contained">Novo usuário</Button>
          </Link>
        </Stack>
        <DataTable list={data} />
      </Box>
    </Container>
  );
}
