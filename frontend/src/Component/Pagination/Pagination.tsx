import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface Props {
  pages: number;
  setskip: any;
  skip: number;
  limit: number;
}

export default function PaginationComponent({
  pages,
  skip,
  limit,
  setskip,
}: Props) {
  return (
    <Stack spacing={2}>
      <Pagination
        count={pages}
        onChange={(event, value) => {
          console.log(value);
          setskip((value - 1) * limit);
        }}
      />
    </Stack>
  );
}
