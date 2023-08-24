import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { random_ids } from "./constants";

const SkeltonTable = () => {
  return (
    <>
      {Array(6).map((_, i) => {
        <Skeleton
          key={random_ids[i]}
          variant="rounded"
          height={50}
          width={"100%"}
          style={{ marginTop: 15 }}
        />;
      })}
    </>
  );
};

export default SkeltonTable;
