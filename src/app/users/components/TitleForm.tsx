"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { Button, Stack } from "@mui/material";
import Link from "next/link";
import { useParams } from "next/navigation";

export default async function TitleForm() {
  const params = useParams();
  const { id } = params;
  return (
    <>
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
          {id ? "Editar usuário" : "Novo usuário"}
        </Typography>
      </Stack>
    </>
  );
}
