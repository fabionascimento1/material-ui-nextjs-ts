"use client";
import { Button } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import dayjs from "dayjs";

const handlerDelete = (id: number) => {
  console.log(id);
};
export const columns: GridColDef[] = [
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
    field: "action",
    headerName: "Ações",
    renderCell(params) {
      return (
        <Button onClick={() => handlerDelete(params.row.id)}>Delete</Button>
      );
    },
    flex: 1,
    minWidth: 220,
  },
];
