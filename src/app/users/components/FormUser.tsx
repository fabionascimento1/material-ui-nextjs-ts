"use client";
import { Stack } from "@mui/material";

import { useRouter, useParams } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { usersSchemaValidation } from "../validation/users-schema-validation";
import { CrudButtonBar } from "@/components/customized/ButtonBar/CrudButtonBar";
import CrudSection from "@/components/shared/CrudSection/CrudSection";
import { useEffect, useState } from "react";
import { TextField } from "@/components/customized/TextField";

type Inputs = {
  nome: string;
  avatar: string;
};

export default function FormUser() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const {
    clearErrors,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(usersSchemaValidation()),
  });
  const onSubmit: SubmitHandler<any> = async (data) => {
    try {
      if (id) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_URL_API}/users/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              ...data,
              nome: data.nome,
              avatar: data.avatar,
            }),
          }
        );
        if (res.ok) {
          router.refresh();
          router.push("/users");
        } else {
          throw new Error("Falhou ao criar um novo usuário ");
        }
      } else {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/users`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            nome: data.nome,
            avatar: data.avatar,
            dh_registro: new Date(),
          }),
        });
        if (res.ok) {
          router.refresh();
          router.push("/users");
        } else {
          throw new Error("Falhou ao criar um novo usuário ");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function getUser() {
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL_API}/users/${id}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const data = await res.json();
      Object.entries(data).forEach(([name, value]) => {
        setValue(name as keyof Inputs, value);
      });
      /* setValue("nome", data.nome);
      setValue("avatar", data.avatar); */
      console.log(data);
      setLoading(false);
    }
    getUser();
  }, [id]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CrudSection>
        <Stack gap={4}>
          <TextField
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              clearErrors("nome");
              setValue("nome", e.target.value);
            }}
            defaultValue={watch("nome")}
            error={!!errors.nome?.message}
            helperText={errors.nome?.message}
            label="Nome"
            placeholder="Digite seu nome"
            loading={loading}
          />
          <TextField
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              clearErrors("avatar");
              setValue("avatar", e.target.value);
            }}
            defaultValue={watch("avatar")}
            error={!!errors.avatar?.message}
            helperText={errors.avatar?.message}
            label="Avatar"
            placeholder="Digite a URL do seu avatar"
            loading={loading}
          />
          <CrudButtonBar type="submit" />
        </Stack>
      </CrudSection>
    </form>
  );
}
