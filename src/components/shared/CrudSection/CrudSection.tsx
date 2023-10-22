import { Stack } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

export default function CrudSection({ children }: Props) {
  return (
    <Stack
      sx={{
        background: "#fafafa",
        padding: "40px 20px 20px 20px",
        border: "1px solid #f5f5f5",
      }}
    >
      {children}
    </Stack>
  );
}
