"use client";
import React, { useState } from "react";
import { DataGrid, GridColDef, GridRowParams } from "@mui/x-data-grid";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import ConfirmDialog from "./ConfirmDialog";

type Props = {
  list: any;
};

export default function DataTable({ list }: Props) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(undefined);

  const handlerDelete = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event?.stopPropagation();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL_API}/users/${deleteId}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        router.refresh();
      } else {
        throw new Error("Falhou ao deletar o usuário ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "nome", headerName: "Nome", width: 200, flex: 1 },
    {
      field: "dh_registro",
      headerName: "Data de registro",
      renderCell(params) {
        return dayjs(params.row.dh_registro).format("DD/MM/YYYY");
      },
      flex: 1,
      minWidth: 220,
    },
    {
      field: "avatar",
      headerName: "Avatar",
      renderCell(params) {
        return <img src={`${params.row.avatar}`} style={{ width: 40 }} />;
      },

      minWidth: 100,
    },
    {
      field: "action",
      headerName: "Ações",
      renderCell(params) {
        return (
          <Button
            onClick={(e) => {
              e?.stopPropagation();
              setDeleteId(params.row.id);
              setOpen(true);
            }}
          >
            <Delete />
          </Button>
        );
      },
      minWidth: 100,
    },
  ];
  const rowClick = (params: GridRowParams) => {
    router.push(`users/${params.id}`);
  };
  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          onRowClick={rowClick}
          rows={list}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>
      {open && (
        <ConfirmDialog
          title="Tem certeza que deseja deletar esse usuário?"
          description="Essa ação é irreversível, você tem certeza?"
          open={open}
          submitFunction={handlerDelete}
          cancelFunction={() => setOpen(false)}
        />
      )}
    </>
  );
}
