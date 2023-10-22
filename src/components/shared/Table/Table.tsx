"use client";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

type Props = {
  list: any;
  columns: any;
};

export default function DataTable({ list, columns }: Props) {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
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
  );
}
